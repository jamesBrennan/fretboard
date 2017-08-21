import IntervalMatrix from './IntervalMatrix';

describe('IntervalMatrix', () => {
  describe('defaults', () => {
    let matrix = IntervalMatrix();
    test('root position of 0', () => {
      expect(matrix[0][0]).toBe(0);
    });

    test('standard tuning', () => {
      expect(matrix[1][0]).toBe(5);
      expect(matrix[2][0]).toBe(10);
      expect(matrix[3][0]).toBe(15);
      expect(matrix[4][0]).toBe(19);
      expect(matrix[5][0]).toBe(24);
    });

    test('24 frets', () => {
      expect(matrix[0][24]).toBe(24);
      expect(matrix[1][24]).toBe(29);
      expect(matrix[2][24]).toBe(34);
      expect(matrix[3][24]).toBe(39);
      expect(matrix[4][24]).toBe(43);
      expect(matrix[5][24]).toBe(48);
    })
  });
});