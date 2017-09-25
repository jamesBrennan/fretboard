import * as chords from './chords';
import {OPTIONS} from "./reducers/chordSelectorReducer";
import {G_SHARP} from "./notes";
import {isMemberOfTheoreticalKey} from "./chords";

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
          chords.getNotes(opt);
        }).not.toThrow();
      });
    });
  });

  describe('isMemberOfTheoreticalKey', () => {
    test(`${G_SHARP} Major chords`, () => {
      expect(isMemberOfTheoreticalKey({root: G_SHARP, type: 'Major'})).toBeTruthy();
      expect(isMemberOfTheoreticalKey({root: G_SHARP, type: 'Major Sixth'})).toBeTruthy();
      expect(isMemberOfTheoreticalKey({root: G_SHARP, type: 'Major Seventh'})).toBeTruthy();
      expect(isMemberOfTheoreticalKey({root: G_SHARP, type: 'Minor'})).not.toBeTruthy();
    });
  });
});
