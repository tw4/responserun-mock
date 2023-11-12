import { describe, expect, test } from 'vitest';
import { generateUuid4 } from '../src/random/uuid';

describe('generateUuid()', () => {
  test('should return a UUID4 length 36 char', () => {
    const uuid = generateUuid4();
    expect(uuid).length(36);
  });
  test('should return a UUID4 with 8-4-4-4-12 format', () => {
    const uuid = generateUuid4();
    const uuidParts = uuid.split('-');
    expect(uuidParts).length(5);
    expect(uuidParts[0]).length(8);
    expect(uuidParts[1]).length(4);
    expect(uuidParts[2]).length(4);
    expect(uuidParts[3]).length(4);
    expect(uuidParts[4]).length(12);
  });
});
