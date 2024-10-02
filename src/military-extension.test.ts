import * as shevchenko from 'shevchenko';
import { militaryExtension } from './military-extension';
import testData from './military-extension.test-data.json';

shevchenko.registerExtension(militaryExtension);

describe('MilitaryInflector', () => {
  for (const dataItem of testData.ranks) {
    it(`should inflect in nominative grammatical case`, async () => {
      const result = await shevchenko.inNominative({
        gender: shevchenko.GrammaticalGender.MASCULINE,
        militaryRank: dataItem.nominative,
        familyName: 'Шевченко',
        givenName: 'Тарас',
        patronymicName: 'Григорович',
      });

      expect(result.militaryRank).toStrictEqual(dataItem.nominative);
    });

    it(`should inflect in genitive grammatical case`, async () => {
      const result = await shevchenko.inGenitive({
        gender: shevchenko.GrammaticalGender.MASCULINE,
        militaryRank: dataItem.nominative,
        familyName: 'Шевченко',
        givenName: 'Тарас',
        patronymicName: 'Григорович',
      });

      expect(result.militaryRank).toStrictEqual(dataItem.genitive);
    });

    it(`should inflect in dative grammatical case`, async () => {
      const result = await shevchenko.inDative({
        gender: shevchenko.GrammaticalGender.MASCULINE,
        militaryRank: dataItem.nominative,
        familyName: 'Шевченко',
        givenName: 'Тарас',
        patronymicName: 'Григорович',
      });

      expect(result.militaryRank).toStrictEqual(dataItem.dative);
    });

    it(`should inflect in accusative grammatical case`, async () => {
      const result = await shevchenko.inAccusative({
        gender: shevchenko.GrammaticalGender.MASCULINE,
        militaryRank: dataItem.nominative,
        familyName: 'Шевченко',
        givenName: 'Тарас',
        patronymicName: 'Григорович',
      });

      expect(result.militaryRank).toStrictEqual(dataItem.accusative);
    });

    it(`should inflect in ablative grammatical case`, async () => {
      const result = await shevchenko.inAblative({
        gender: shevchenko.GrammaticalGender.MASCULINE,
        militaryRank: dataItem.nominative,
        familyName: 'Шевченко',
        givenName: 'Тарас',
        patronymicName: 'Григорович',
      });

      expect(result.militaryRank).toStrictEqual(dataItem.ablative);
    });

    it(`should inflect in locative grammatical case`, async () => {
      const result = await shevchenko.inLocative({
        gender: shevchenko.GrammaticalGender.MASCULINE,
        militaryRank: dataItem.nominative,
        familyName: 'Шевченко',
        givenName: 'Тарас',
        patronymicName: 'Григорович',
      });

      expect(result.militaryRank).toStrictEqual(dataItem.locative);
    });

    it(`should inflect in voative grammatical case`, async () => {
      const result = await shevchenko.inVocative({
        gender: shevchenko.GrammaticalGender.MASCULINE,
        militaryRank: dataItem.nominative,
        familyName: 'Шевченко',
        givenName: 'Тарас',
        patronymicName: 'Григорович',
      });

      expect(result.militaryRank).toStrictEqual(dataItem.vocative);
    });
  }

  for (const dataItem of testData.appointments) {
    it(`should inflect in nominative grammatical case`, async () => {
      const result = await shevchenko.inNominative({
        gender: shevchenko.GrammaticalGender.MASCULINE,
        militaryAppointment: dataItem.nominative,
        familyName: 'Шевченко',
        givenName: 'Тарас',
        patronymicName: 'Григорович',
      });

      expect(result.militaryAppointment).toStrictEqual(dataItem.nominative);
    });

    it(`should inflect in genitive grammatical case`, async () => {
      const result = await shevchenko.inGenitive({
        gender: shevchenko.GrammaticalGender.MASCULINE,
        militaryAppointment: dataItem.nominative,
        familyName: 'Шевченко',
        givenName: 'Тарас',
        patronymicName: 'Григорович',
      });

      expect(result.militaryAppointment).toStrictEqual(dataItem.genitive);
    });

    it(`should inflect in dative grammatical case`, async () => {
      const result = await shevchenko.inDative({
        gender: shevchenko.GrammaticalGender.MASCULINE,
        militaryAppointment: dataItem.nominative,
        familyName: 'Шевченко',
        givenName: 'Тарас',
        patronymicName: 'Григорович',
      });

      expect(result.militaryAppointment).toStrictEqual(dataItem.dative);
    });

    it(`should inflect in accusative grammatical case`, async () => {
      const result = await shevchenko.inAccusative({
        gender: shevchenko.GrammaticalGender.MASCULINE,
        militaryAppointment: dataItem.nominative,
        familyName: 'Шевченко',
        givenName: 'Тарас',
        patronymicName: 'Григорович',
      });

      expect(result.militaryAppointment).toStrictEqual(dataItem.accusative);
    });

    it(`should inflect in ablative grammatical case`, async () => {
      const result = await shevchenko.inAblative({
        gender: shevchenko.GrammaticalGender.MASCULINE,
        militaryAppointment: dataItem.nominative,
        familyName: 'Шевченко',
        givenName: 'Тарас',
        patronymicName: 'Григорович',
      });

      expect(result.militaryAppointment).toStrictEqual(dataItem.ablative);
    });

    it(`should inflect in locative grammatical case`, async () => {
      const result = await shevchenko.inLocative({
        gender: shevchenko.GrammaticalGender.MASCULINE,
        militaryAppointment: dataItem.nominative,
        familyName: 'Шевченко',
        givenName: 'Тарас',
        patronymicName: 'Григорович',
      });

      expect(result.militaryAppointment).toStrictEqual(dataItem.locative);
    });

    it(`should inflect in voative grammatical case`, async () => {
      const result = await shevchenko.inVocative({
        gender: shevchenko.GrammaticalGender.MASCULINE,
        militaryAppointment: dataItem.nominative,
        familyName: 'Шевченко',
        givenName: 'Тарас',
        patronymicName: 'Григорович',
      });

      expect(result.militaryAppointment).toStrictEqual(dataItem.vocative);
    });
  }
});
