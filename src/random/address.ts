import { addresses } from '../data/locale/tr/address';
import { Locale } from '../enums/locale';
import { singleRandomizer } from './randomizer';

export function createAddress(locale: Locale) {
  switch (locale) {
    case Locale.tr:
      return singleRandomizer(addresses);
    default:
      break;
  }
}
