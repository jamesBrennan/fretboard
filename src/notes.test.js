import {
  noteSequence,
  intervalSequence,
  degreeSequence
} from "./notes";

describe('noteSequence()', () => {
  test('returns an array of notes that increment by semitones', () => {
    expect(noteSequence('B', 12)).toEqual([
      'B',
      'C',
      'C♯/D♭',
      'D',
      'D♯/E♭',
      'E',
      'F',
      'F♯/G♭',
      'G',
      'G♯/A♭',
      'A',
      'A♯/B♭'
    ]);
  });
});

describe('intervalSequence()', () => {
  test('returns an array of notes that match the semitones specified', () => {
    let semitones = [0,2,4,5,7];
    expect(intervalSequence('C', semitones)).toEqual([
      'C',
      'D',
      'E',
      'F',
      'G'
    ]);
  });
});

describe('degreeSequence()', () => {
  test('returns an array of note letters of the requested length', () => {
    expect(degreeSequence('C', 10)).toEqual([
      'C',
      'D',
      'E',
      'F',
      'G',
      'A',
      'B',
      'C',
      'D',
      'E'
    ])
  });
});