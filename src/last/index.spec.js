import assert from 'assert';

import last from './';

describe('last', () => {
  it('returns empty array when no array is provided as parameter', () => {
    const tested = last(null, 3);
    const expected = [];
    assert.deepStrictEqual(tested, expected, 'Should return an empty array');
  });
  it('pass 1 as default n parameter', () => {
    const tested = last([1, 2, 3]);
    const expected = [3];
    assert.deepStrictEqual(tested, expected, 'should return [3]');
  });
  it('works with array of 3 strings', () => {
    const tested = last(['a', 'b', 'c'], 2);
    const expected = ['b', 'c'];
    assert.deepStrictEqual(tested, expected, 'Should return [b, c]');
  });
  it('works with big array', () => {
    const arr = Array.from({ length: 9999 }).map((v, k) => k + 1);
    const tested = last(arr, 2);
    const expected = [9998, 9999];
    assert.deepStrictEqual(tested, expected, 'Should return [9998, 9999]');
  });
});
