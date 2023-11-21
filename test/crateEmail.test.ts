import { describe, expect, test } from 'vitest';
import { createEmail } from '../src/random/email';
import { Locale } from '../src/enums/locale';
import { emails } from '../src/data/locale/tr/email';
import { emails_EN } from '../src/data/locale/en/email';

describe('crateEmail', () => {
  test('should return a random email', () => {
    expect(emails).toContain(createEmail(Locale.tr));
  });
  test('should return default', () => {
    expect(emails).toContain(createEmail('default' as Locale));
  });
  test('should return a random email in English', () => {
    expect(emails_EN).toContain(createEmail(Locale.en));
  });
});
