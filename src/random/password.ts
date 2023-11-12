import { Locale } from '../enums/locale';
import { singleRandomizer } from './randomizer';
import { passwords } from '../data/locale/tr/password';

export function createPassword(locale: Locale) {
  switch (locale) {
    case Locale.tr:
      return singleRandomizer(passwords);
    default:
      return singleRandomizer(passwords);
  }
}
