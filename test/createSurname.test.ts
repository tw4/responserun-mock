import { describe, expect, test } from 'vitest';
import { Locale } from '../src/enums/locale';
import { createSurname } from '../src/random/surname';
import { surnames } from '../src/data/locale/tr/surName';

describe('createSurname()', () => {
  test('should return a surname in Turkish', () => {
    expect(surnames).toContain(createSurname(Locale.tr));
  });
  test('should return default', () => {
    expect(surnames).toContain(createSurname('default' as Locale));
  });
});
