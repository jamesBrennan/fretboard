import {
  noteSequence,
  intervalSequence,
  degreeSequence,
  degreeName,
  equals
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

describe('degreeName()', () => {
  test('returns note name matching degree', () => {
    expect(degreeName('C♯/D♭', 'C')).toEqual('C♯');
    expect(degreeName('C♯/D♭', 'D')).toEqual('D♭');
    expect(degreeName('C', 'C')).toEqual('C')
  });

  test('raises an error when degree does not match note nome', () => {
    expect(() => {
      degreeName('C♯/D♭', 'E')
    }).toThrow();
  });
});

describe('equals', () => {
  test('exact match', () => {
    expect(equals('A','A')).toBeTruthy();
    expect(equals('A♯/B♭','A♯/B♭')).toBeTruthy();
  });

  test('partial match', () => {
    expect(equals('A♯', 'A♯/B♭')).toBeTruthy();
    expect(equals('A♯/B♭', 'A♯')).toBeTruthy();
    expect(equals('B♭', 'A♯/B♭')).toBeTruthy();
    expect(equals('A♯/B♭', 'B♭')).toBeTruthy();
    expect(equals('A♯', 'B♭')).toBeTruthy();

    expect(equals('A', 'A♯/B♭')).not.toBeTruthy();
    expect(equals('B', 'A♯/B♭')).not.toBeTruthy();
    expect(equals('A♯/B♭', 'A')).not.toBeTruthy();
    expect(equals('A♯/B♭', 'B')).not.toBeTruthy();
  });
});
