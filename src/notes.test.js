import {
  noteSequence,
  intervalSequence,
  degreeSequence
} from "./notes";

describe('noteSequence', () => {
  test('returns an array of notes that increment by semitones', () => {
    expect(noteSequence('B', 11)).toEqual([
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