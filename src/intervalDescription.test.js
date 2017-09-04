import { getIntervalDescription } from "./intervalDescription";

describe('getIntervalDescription', () => {
  test('4th', () => {
    expect(getIntervalDescription(5)).toEqual({
      name: 'Perfect fourth', med: '4th', short: 'P4'
    });
  })
});
