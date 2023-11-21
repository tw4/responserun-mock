import { describe, expect, test } from 'vitest';
import { passwords } from '../src/data/locale/tr/password';
import { createPassword } from '../src/random/password';
import { Locale } from '../src/enums/locale';
import { passwords_EN } from '../src/data/locale/en/password';

describe('createPassword()', () => {
  test('should return a random password in Turkey', () => {
    const password = createPassword(Locale.tr);
    expect(passwords).toContain(password);
  });
  test('should return default', () => {
    const password = createPassword('default' as Locale);
    expect(passwords).toContain(password);
  });
  test('should return a random password in English', () => {
    const password = createPassword(Locale.en);
    expect(passwords_EN).toContain(password);
  });
});
