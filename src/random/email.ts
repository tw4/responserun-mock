import { Locale } from '../enums/locale';
import { emails } from '../data/locale/tr/email';
import { singleRandomizer } from './randomizer';

export function createEmail(locale: Locale) {
  switch (locale) {
    case Locale.tr:
      return singleRandomizer(emails);
    default:
      return singleRandomizer(emails);
  }
}

export function createCustomEmail(firstName: string, surname: string) {
  return `${firstName.toLowerCase()}.${surname.toLowerCase()}@example.com`;
}
