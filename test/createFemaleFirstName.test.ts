import { describe, test, expect } from 'vitest';
import { createFemaleFirstName } from '../src/random/firstname';
import { Locale } from '../src/enums/locale';
import { femaleFirstNames } from '../src/data/locale/tr/femaleFirstName';
import { femaleFirstNames_EN } from '../src/data/locale/en/femaleFirstName';

describe('createFemaleFirstName()', () => {
  test('should return a female first name in Turkish', () => {
    expect(femaleFirstNames).toContain(createFemaleFirstName(Locale.tr));
  });
  test('should return default', () => {
    expect(femaleFirstNames).toContain(
      createFemaleFirstName('default' as Locale)
    );
  });
  test('should return a female first name in English', () => {
    expect(femaleFirstNames_EN).toContain(createFemaleFirstName(Locale.en));
  });
});
