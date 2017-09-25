import * as chords from './chords';
import {OPTIONS} from "./reducers/chordSelectorReducer";

describe('chords', () => {
  describe('getNotes', () => {
    it('returns the expected notes', () => {
      expect(chords.getNotes({root: 'A', type: 'Major'}))
        .toEqual(['A','C♯','E']);

      expect(chords.getNotes({root: 'A', type: 'Minor'}))
        .toEqual(['A','C','E']);
    });
  });

  describe('All defined chords', () => {
    test('do not throw errors', () => {
      OPTIONS.forEach(opt => {
        expect(() => {
          console.log(opt);
          chords.getNotes({root: opt.note, type: opt.type});
        }).not.toThrow();
      });
    });
  });
});
