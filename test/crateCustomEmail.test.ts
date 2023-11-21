import { describe, expect, test } from 'vitest';
import { createCustomEmail } from '../src/random/email';

describe('crateCustomEmail()', () => {
  test('should return a custom email', () => {
    const firstName = 'John';
    const surname = 'Doe';
    const email = createCustomEmail(firstName, surname);
    expect(email).toBe(
      `${firstName.toLowerCase()}.${surname.toLowerCase()}@example.com`
    );
  });
  test;
});
