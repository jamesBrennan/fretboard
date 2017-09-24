import {tokenize} from "./chordTokenizer";
import {SHARP, FLAT} from "./notes";

describe('tokenize', () => {
  let expected;

  describe('Minor', () => {

    beforeEach(() => {
      expected = {
        root: `A${SHARP}`,
        chordName: 'Minor'
      }
    });

    it('has the correct root and chord name', () => {
      expect(tokenize('a sharp minor')).toEqual(expected);
      expect(tokenize('a sha min')).toEqual(expected);
      expect(tokenize('ashmin')).toEqual(expected);
    });
  });

  describe('Major', () => {

    beforeEach(() => {
      expected = {
        root: `A${SHARP}`,
        chordName: 'Major'
      }
    });

    it('has the correct root and chord name', () => {
      expect(tokenize('a sharp major')).toEqual(expected);
      expect(tokenize('a sh maj')).toEqual(expected);
      expect(tokenize('ashmaj')).toEqual(expected);
    });
  });

  describe('Major Seventh', () => {

    beforeEach(() => {
      expected = {
        root: `C`,
        chordName: 'Major Seventh'
      }
    });

    it('has the correct root and chord name', () => {
      expect(tokenize('c major seventh')).toEqual(expected);
      expect(tokenize('c maj sev')).toEqual(expected);
      expect(tokenize('cmajsev')).toEqual(expected);
      expect(tokenize('c maj 7')).toEqual(expected);
    });
  });

  describe('Minor Seventh', () => {

    beforeEach(() => {
      expected = {
        root: `B${FLAT}`,
        chordName: 'Minor Seventh'
      }
    });

    it('has the correct root and chord name', () => {
      expect(tokenize('b flat minor seventh')).toEqual(expected);
      expect(tokenize('b fl min sev')).toEqual(expected);
      expect(tokenize('bflminsev')).toEqual(expected);
      expect(tokenize('b flat min 7')).toEqual(expected);
    });
  });
});
