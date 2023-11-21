import { createMaleFirstName } from '../src/random/firstname';
import { Locale } from '../src/enums/locale';
import { expect, test, describe } from 'vitest';
import { maleFirstNames } from '../src/data/locale/tr/maleFirstName';
import { maleFirstNames_EN } from '../src/data/locale/en/maleFirstName';

describe('createMaleFirstName()', () => {
  test('should return a male first name in Turkish', () => {
    expect(maleFirstNames).toContain(createMaleFirstName(Locale.tr));
  });
  test('should return default', () => {
    expect(maleFirstNames).toContain(createMaleFirstName('default' as Locale));
  });
  test('should return a male first name in English', () => {
    expect(maleFirstNames_EN).toContain(createMaleFirstName(Locale.en));
  });
});
