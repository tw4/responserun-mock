import { describe, expect, test } from 'vitest';
import { Locale } from '../src/enums/locale';
import { createSurname } from '../src/random/surname';
import { surnames } from '../src/data/locale/tr/surName';
import { surnames_EN } from '../src/data/locale/en/surName';

describe('createSurname()', () => {
  test('should return a surname in Turkish', () => {
    expect(surnames).toContain(createSurname(Locale.tr));
  });
  test('should return default', () => {
    expect(surnames).toContain(createSurname('default' as Locale));
  });
  test('should return a surname in English', () => {
    expect(surnames_EN).toContain(createSurname(Locale.en));
  });
});
