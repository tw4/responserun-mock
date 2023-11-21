import { surnames_EN } from '../data/locale/en/surName';
import { surnames } from '../data/locale/tr/surName';
import { Locale } from '../enums/locale';
import { singleRandomizer } from './randomizer';

export function createSurname(locale: Locale) {
  switch (locale) {
    case Locale.tr:
      return singleRandomizer(surnames);
    case Locale.en:
      return singleRandomizer(surnames_EN);
    default:
      return singleRandomizer(surnames);
  }
}
