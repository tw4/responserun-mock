import { maleFirstNames } from '../data/locale/tr/maleFirstName';
import { Locale } from '../enums/locale';
import { singleRandomizer } from './randomizer';

export function createMaleFirstName(locale: Locale) {
  switch (locale) {
    case Locale.tr:
      return singleRandomizer(maleFirstNames);
    default:
      return singleRandomizer(maleFirstNames);
  }
}
