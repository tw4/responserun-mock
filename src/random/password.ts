import { Locale } from '../enums/locale';
import { singleRandomizer } from './randomizer';
import { passwords } from '../data/locale/tr/password';
import { passwords_EN } from '../data/locale/en/password';
import { passwords_DE } from '../data/locale/de/password';

export function createPassword(locale: Locale) {
  switch (locale) {
    case Locale.tr:
      return singleRandomizer(passwords);
    case Locale.en:
      return singleRandomizer(passwords_EN);
    case Locale.de:
      return singleRandomizer(passwords_DE);
    default:
      return singleRandomizer(passwords);
  }
}
