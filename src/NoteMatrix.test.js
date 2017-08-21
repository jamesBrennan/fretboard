import NoteMatrix from './NoteMatrix';

describe('NoteMatrix', () => {
  describe('defaults', () => {
    let matrix = NoteMatrix();
    test('root position of E', () => {
      expect(matrix[0][0]).toBe('E');
    });

    test('standard tuning', () => {
      expect(matrix[1][0]).toBe('A');
      expect(matrix[2][0]).toBe('D');
      expect(matrix[3][0]).toBe('G');
      expect(matrix[4][0]).toBe('B');
      expect(matrix[5][0]).toBe('E');
    });

    test('24 frets', () => {
      expect(matrix[0][24]).toBe('E');
      expect(matrix[1][24]).toBe('A');
      expect(matrix[2][24]).toBe('D');
      expect(matrix[3][24]).toBe('G');
      expect(matrix[4][24]).toBe('B');
      expect(matrix[5][24]).toBe('E');
    })
  });
});
