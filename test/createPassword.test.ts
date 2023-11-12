import { describe, expect, test } from 'vitest';
import { passwords } from '../src/data/locale/tr/password';
import { createPassword } from '../src/random/password';
import { Locale } from '../src/enums/locale';

describe('createPassword()', () => {
  test('should return a random password in Turkey', () => {
    const password = createPassword(Locale.tr);
    expect(passwords).toContain(password);
  });
});
