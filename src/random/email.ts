import { Locale } from '../enums/locale';
import { emails } from '../data/locale/tr/email';
import { singleRandomizer } from './randomizer';
import { emails_EN } from '../data/locale/en/email';

export function createEmail(locale: Locale) {
  switch (locale) {
    case Locale.tr:
      return singleRandomizer(emails);
    case Locale.en:
      return singleRandomizer(emails_EN);
    default:
      return singleRandomizer(emails);
  }
}

export function createCustomEmail(firstName: string, surname: string) {
  return `${firstName.toLowerCase()}.${surname.toLowerCase()}@example.com`;
}
