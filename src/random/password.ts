import { Locale } from '../enums/locale';
import { singleRandomizer } from './randomizer';
import { passwords } from '../data/locale/tr/password';
import { passwords_EN } from '../data/locale/en/password';

export function createPassword(locale: Locale) {
  switch (locale) {
    case Locale.tr:
      return singleRandomizer(passwords);
    case Locale.en:
      return singleRandomizer(passwords_EN);
    default:
      return singleRandomizer(passwords);
  }
}
