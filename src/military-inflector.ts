import { GrammaticalCase, GrammaticalGender, WordClass, WordInflector } from 'shevchenko';

export type WordHyphenationRule = {
  include: string[];
};

export type WordClassifierRule = {
  gender: GrammaticalGender;
  wordClass: WordClass;
  include: string[];
};

type ExtractedWordResult = {
  extractedWord: string;
  startDelimiter: string;
  endDelimiter: string;
};

export class MilitaryInflector {
  private readonly wordInflector: WordInflector;
  private readonly wordHyphenationRules: WordHyphenationRule[];
  private readonly wordClassifierRules: WordClassifierRule[];

  constructor(
    wordInflector: WordInflector,
    wordHyphenationRules: WordHyphenationRule[],
    wordClassifierRules: WordClassifierRule[],
  ) {
    this.wordInflector = wordInflector;
    this.wordHyphenationRules = wordHyphenationRules;
    this.wordClassifierRules = wordClassifierRules;
  }

  async inflect(words: string, grammaticalCase: GrammaticalCase): Promise<string> {
    const wordParts = [];

    for (const word of words.split(' ')) {
      const hyphenated = this.wordHyphenationRules.find((rule) =>
        rule.include.every((pattern) => new RegExp(pattern, 'i').test(word)),
      );

      if (hyphenated) {
        wordParts.push(await this.inflectHyphenatedWord(word, grammaticalCase));
      } else {
        wordParts.push(await this.inflectWord(word, grammaticalCase));
      }
    }

    return wordParts.join(' ');
  }

  private async inflectHyphenatedWord(
    words: string,
    grammaticalCase: GrammaticalCase,
  ): Promise<string> {
    const wordParts = [];
    for (const word of words.split('-')) {
      wordParts.push(await this.inflectWord(word, grammaticalCase));
    }
    return wordParts.join('-');
  }

  private async inflectWord(word: string, grammaticalCase: GrammaticalCase): Promise<string> {
    const { extractedWord, startDelimiter, endDelimiter } = this.extractWordDelimiters(word);

    const rule = this.wordClassifierRules.find((wordClassifierRule) =>
      wordClassifierRule.include.every((pattern) => new RegExp(pattern, 'i').test(extractedWord)),
    );

    if (rule == null) {
      return word;
    }

    const inflectedWord = await this.wordInflector.inflect(extractedWord, {
      gender: rule.gender,
      wordClass: rule.wordClass,
      grammaticalCase,
    });

    return startDelimiter + inflectedWord + endDelimiter;
  }

  extractWordDelimiters(word: string): ExtractedWordResult {
    let extractedWord = word;
    let startDelimiter = '';
    let endDelimiter = '';

    const startDelimiterMatch = extractedWord.match(/^(["'()])+/);
    if (startDelimiterMatch != null && startDelimiterMatch.index != null) {
      extractedWord = extractedWord.slice(startDelimiterMatch.index + 1);
      startDelimiter = startDelimiterMatch[0];
    }

    const endDelimiterMatch = extractedWord.match(/(["'()])+$/);
    if (endDelimiterMatch != null && endDelimiterMatch.index != null) {
      extractedWord = extractedWord.slice(0, endDelimiterMatch.index);
      endDelimiter = endDelimiterMatch[0];
    }

    return { extractedWord, startDelimiter, endDelimiter };
  }
}
