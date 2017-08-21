import { range } from './util';

describe('range', () => {
  describe('given a single integer', () => {
    it('returns a sequential array of integers of the given length, starting at 0', () => {
      expect(range(5)).toEqual([0,1,2,3,4]);
    })
  });

  describe('given two integers', () => {
    it('returns a sequential array of integers between the arguments, inclusive', () => {
      expect(range(5,10)).toEqual([5,6,7,8,9,10]);
    })
  });
});
