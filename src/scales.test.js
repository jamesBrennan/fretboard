import * as scales from './scales';

describe('getNotes', () => {
  test('C MAJOR', () => {
    let notes = scales.getNotes('C', scales.MAJOR);

    expect(notes).toEqual(
      ['C','D','E','F','G','A','B']
    );
  });

  test('F MAJOR', () => {
    let notes = scales.getNotes('F', scales.MAJOR);

    expect(notes).toEqual(
      ['F','G','A','B♭','C','D','E']
    )
  });
});
