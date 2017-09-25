import {tokenize} from "./chordTokenizer";
import {SHARP, FLAT} from "./notes";

describe('tokenize', () => {
  let expected;

  describe('Minor', () => {

    beforeEach(() => {
      expected = {
        root: `A${SHARP}`,
        type: 'Minor'
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
        type: 'Major'
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
        type: 'Major Seventh'
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
        type: 'Minor Seventh'
      }
    });

    it('has the correct root and chord name', () => {
      expect(tokenize('b flat minor seventh')).toEqual(expected);
      expect(tokenize('b fl min sev')).toEqual(expected);
      expect(tokenize('bflminsev')).toEqual(expected);
      expect(tokenize('b flat min 7')).toEqual(expected);
    });
  });

  describe('Major Seventh Flat 5', () => {

    beforeEach(() => {
      expected = {
        root: `B${FLAT}`,
        type: 'Major Seventh Flat 5'
      }
    });

    it('has the correct root and chord name', () => {
      expect(tokenize('b flat maj seventh flat 5')).toEqual(expected);
      expect(tokenize('b fl maj sev fl 5')).toEqual(expected);
      expect(tokenize('b fl maj 7 fl 5')).toEqual(expected);
      expect(tokenize('bflmajsevfl5')).toEqual(expected);
      expect(tokenize('bflmaj7fl5')).toEqual(expected);
    });
  });

  describe('Major Seventh Sharp 5', () => {

    beforeEach(() => {
      expected = {
        root: `C`,
        type: 'Major Seventh Sharp 5'
      }
    });

    it('has the correct root and chord name', () => {
      expect(tokenize('c major seventh sharp 5')).toEqual(expected);
      expect(tokenize('c maj sev sh 5')).toEqual(expected);
      expect(tokenize('c maj 7 sh 5')).toEqual(expected);
      expect(tokenize('cmaj7sh5')).toEqual(expected);
    });
  });

  describe('Minor Major', () => {
    beforeEach(() => {
      expected = {
        root: `C`,
        type: 'Minor Major'
      }
    });

    it('has the correct root and chord name', () => {
      expect(tokenize('c minor major')).toEqual(expected);
      expect(tokenize('c min maj')).toEqual(expected);
      expect(tokenize('cmima')).toEqual(expected);
    });
  });

  describe('Dominant Seventh', () => {
    beforeEach(() => {
      expected = {
        root: `C`,
        type: 'Dominant Seventh'
      }
    });

    it('has the correct root and chord name', () => {
      expect(tokenize('c dominant seventh')).toEqual(expected);
      expect(tokenize('c dom sev')).toEqual(expected);
      expect(tokenize('cdomsev')).toEqual(expected);
      expect(tokenize('c dom 7')).toEqual(expected);
    });
  });

  describe('Diminished', () => {
    beforeEach(() => {
      expected = {
        root: `C`,
        type: 'Diminished'
      }
    });

    it('has the correct root and chord name', () => {
      expect(tokenize('c diminished')).toEqual(expected);
      expect(tokenize('c dim')).toEqual(expected);
      expect(tokenize('cdim')).toEqual(expected);
    });
  });

  describe('Diminished Seventh', () => {
    beforeEach(() => {
      expected = {
        root: `C`,
        type: 'Diminished Seventh',
      }
    });

    it('has the correct root and chord name', () => {
      expect(tokenize('c diminished seventh')).toEqual(expected);
      expect(tokenize('c dim sev')).toEqual(expected);
      expect(tokenize('cdimsev')).toEqual(expected);
      expect(tokenize('c dim 7')).toEqual(expected);
    });
  });

  describe('Half-Diminished', () => {
    beforeEach(() => {
      expected = {
        root: `C`,
        type: 'Half-Diminished',
      }
    });

    it('has the correct root and chord name', () => {
      expect(tokenize('c half-diminished')).toEqual(expected);
      expect(tokenize('c half diminished')).toEqual(expected);
      expect(tokenize('c half-dim')).toEqual(expected);
      expect(tokenize('c half dim')).toEqual(expected);
      expect(tokenize('chalfdim')).toEqual(expected);
      expect(tokenize('c hal')).toEqual(expected);
    });
  });

  describe('Suspended Seventh', () => {
    beforeEach(() => {
      expected = {
        root: `C`,
        type: 'Suspended Seventh',
      }
    });

    it('has the correct root and chord name', () => {
      expect(tokenize('c suspended seventh')).toEqual(expected);
      expect(tokenize('c sus seven')).toEqual(expected);
      expect(tokenize('c sus 7')).toEqual(expected);
      expect(tokenize('csus7')).toEqual(expected);
    });
  });

  describe('Augmented Seventh', () => {
    beforeEach(() => {
      expected = {
        root: `C`,
        type: 'Augmented Seventh',
      }
    });

    it('has the correct root and chord name', () => {
      expect(tokenize('c augmented seventh')).toEqual(expected);
      expect(tokenize('c aug seven')).toEqual(expected);
      expect(tokenize('c aug 7')).toEqual(expected);
      expect(tokenize('caug7')).toEqual(expected);
    });
  });
});
