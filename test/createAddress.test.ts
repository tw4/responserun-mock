import { describe, test, expect } from 'vitest';
import { createAddress } from '../src/random/address';
import { Locale } from '../src/enums/locale';
import { addresses } from '../src/data/locale/tr/address';
import { addresses_EN } from '../src/data/locale/en/address';

describe('createAddress()', () => {
  test('should return a address in Turkish', () => {
    expect(addresses).toContain(createAddress(Locale.tr));
  });
  test('should return default', () => {
    expect(addresses).toContain(createAddress('default' as Locale));
  });
  test('should return a address in English', () => {
    expect(addresses_EN).toContain(createAddress(Locale.en));
  });
});
