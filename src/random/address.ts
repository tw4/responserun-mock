import { addresses_EN } from '../data/locale/en/address';
import { addresses } from '../data/locale/tr/address';
import { Locale } from '../enums/locale';
import { singleRandomizer } from './randomizer';

export function createAddress(locale: Locale) {
  switch (locale) {
    case Locale.tr:
      return singleRandomizer(addresses);
    case Locale.en:
      return singleRandomizer(addresses_EN);
    default:
      return singleRandomizer(addresses);
  }
}
