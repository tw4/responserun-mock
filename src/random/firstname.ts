import { femaleFirstNames_EN } from '../data/locale/en/femaleFirstName';
import { maleFirstNames_EN } from '../data/locale/en/maleFirstName';
import { femaleFirstNames } from '../data/locale/tr/femaleFirstName';
import { maleFirstNames } from '../data/locale/tr/maleFirstName';
import { Locale } from '../enums/locale';
import { singleRandomizer } from './randomizer';

export function createMaleFirstName(locale: Locale) {
  switch (locale) {
    case Locale.tr:
      return singleRandomizer(maleFirstNames);
    case Locale.en:
      return singleRandomizer(maleFirstNames_EN);
    default:
      return singleRandomizer(maleFirstNames);
  }
}

export function createFemaleFirstName(locale: Locale) {
  switch (locale) {
    case Locale.tr:
      return singleRandomizer(femaleFirstNames);
    case Locale.en:
      return singleRandomizer(femaleFirstNames_EN);
    default:
      return singleRandomizer(femaleFirstNames);
  }
}
