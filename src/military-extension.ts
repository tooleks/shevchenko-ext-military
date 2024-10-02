import {
  AfterInflectHook,
  DeclensionInput,
  DeclensionOutput,
  ExtensionFactory,
  GrammaticalCase,
} from 'shevchenko';
import { MilitaryInflector, WordClassifierRule, WordHyphenationRule } from './military-inflector';
import wordClassifierRules from './word-classifier-rules.json';
import wordHyphenationRules from './word-hyphenation-rules.json';

declare module 'shevchenko' {
  interface DeclensionInput {
    militaryRank?: string;
    militaryAppointment?: string;
  }
}

export const militaryExtension: ExtensionFactory = ({ wordInflector }) => {
  const militaryInflector = new MilitaryInflector(
    wordInflector,
    wordHyphenationRules as WordHyphenationRule[],
    wordClassifierRules as WordClassifierRule[],
  );

  return {
    fieldNames: ['militaryRank', 'militaryAppointment'],
    afterInflect: afterInflect(militaryInflector),
  };
};

function afterInflect(militaryInflector: MilitaryInflector): AfterInflectHook {
  return async <T extends DeclensionInput>(
    grammaticalCase: GrammaticalCase,
    input: T,
  ): Promise<DeclensionOutput<T>> => {
    const output = {} as DeclensionOutput<T>;

    if (input.militaryRank != null) {
      output.militaryRank = await militaryInflector.inflect(input.militaryRank, grammaticalCase);
    }

    if (input.militaryAppointment != null) {
      output.militaryAppointment = await militaryInflector.inflect(
        input.militaryAppointment,
        grammaticalCase,
      );
    }

    return output;
  };
}
