import { describe, test, expect } from 'vitest';
import { createFemaleFirstName } from '../src/random/firstname';
import { Locale } from '../src/enums/locale';
import { femaleFirstNames } from '../src/data/locale/tr/femaleFirstName';

describe('createFemaleFirstName()', () => {
  test('should return a female first name in Turkish', () => {
    expect(femaleFirstNames).toContain(createFemaleFirstName(Locale.tr));
  });
  test('should return default', () => {
    expect(femaleFirstNames).toContain(
      createFemaleFirstName('default' as Locale)
    );
  });
});
