import { describe, expect, test } from 'vitest';
import { multipleRandomizer } from '../src/random/randomizer';
import { createMaleFirstName } from '../src/random/firstname';
import { Locale } from '../src/enums/locale';

describe('multipleRandomizer()', () => {
  test('multipleRandomizer length control', () => {
    const random = multipleRandomizer(
      () => ({
        name: createMaleFirstName(Locale.tr),
      }),
      5
    );
    expect(random.length).toEqual(5);
  });
});
