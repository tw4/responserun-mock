import { describe, test, expect } from 'vitest';
import { createAddress } from '../src/random/address';
import { Locale } from '../src/enums/locale';
import { addresses } from '../src/data/locale/tr/address';

describe('createAddress()', () => {
  test('should return a address in Turkish', () => {
    expect(addresses).toContain(createAddress(Locale.tr));
  });
  test('should return default', () => {
    expect(addresses).toContain(createAddress('default' as Locale));
  });
});
