import { describe, test, expect } from 'vitest';
import { singleRandomizer } from '../src/random/randomizer';
import { maleFirstNames } from '../src/data/locale/tr/maleFirstName';

describe('randomizer()', () => {
  test('singleRandomizer', () => {
    expect(maleFirstNames).contains(singleRandomizer(maleFirstNames));
  });
});
