import { describe, test, expect } from 'vitest';
import { singleRandomizer, multipleRandomizer } from '../src/random/randomizer';
import { maleFirstNames } from '../src/data/locale/tr/maleFirstName';
import { createMaleFirstName } from '../src/random/firstname';
import { Locale } from '../src/enums/locale';

describe('randomizer()', () => {
  test('singleRandomizer', () => {
    expect(maleFirstNames).contains(singleRandomizer(maleFirstNames));
  });
});
