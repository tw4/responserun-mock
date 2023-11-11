import { createMaleFirstName } from '../src/random/firstname';
import { Locale } from '../src/enums/locale';
import { expect, test, describe } from 'vitest';

describe('createMaleFirstName', () => {
  test('should return a male first name in Turkish', () => {
    const firstName = createMaleFirstName(Locale.tr);
    expect(firstName).toMatch(/^[A-Z][a-z]+$/);
  });
});
