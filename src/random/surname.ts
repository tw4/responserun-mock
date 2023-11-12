import { surnames } from '../data/locale/tr/surName';
import { Locale } from '../enums/locale';
import { singleRandomizer } from './randomizer';

export function createSurname(locale: Locale) {
  switch (locale) {
    case Locale.tr:
      return singleRandomizer(surnames);
    default:
      break;
  }
}
