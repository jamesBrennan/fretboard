import * as chords from './chords';

describe('chords', () => {
  describe('getNotes', () => {
    it('returns the expected notes', () => {
      expect(chords.getNotes({root: 'A', type: 'Major'}))
        .toEqual(['A','C♯','E']);

      expect(chords.getNotes({root: 'A', type: 'Minor'}))
        .toEqual(['A','C','E']);
    });
  });
});
