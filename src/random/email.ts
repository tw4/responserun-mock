import { Locale } from '../enums/locale';
import { emails } from '../data/locale/tr/email';
import { singleRandomizer } from './randomizer';
import { emails_EN } from '../data/locale/en/email';
import { emails_DE } from '../data/locale/de/email';

export function createEmail(locale: Locale) {
  switch (locale) {
    case Locale.tr:
      return singleRandomizer(emails);
    case Locale.en:
      return singleRandomizer(emails_EN);
    case Locale.de:
      return singleRandomizer(emails_DE);
    default:
      return singleRandomizer(emails);
  }
}

export function createCustomEmail(firstName: string, surname: string) {
  return `${firstName.toLowerCase()}.${surname.toLowerCase()}@example.com`;
}
