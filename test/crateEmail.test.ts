import { describe, expect, test } from 'vitest';
import { createEmail } from '../src/random/email';
import { Locale } from '../src/enums/locale';
import { emails } from '../src/data/locale/tr/email';

describe('crateEmail', () => {
  test('should return a random email', () => {
    expect(emails).toContain(createEmail(Locale.tr));
  });
  test('should return default', () => {
    expect(emails).toContain(createEmail('default' as Locale));
  });
});
