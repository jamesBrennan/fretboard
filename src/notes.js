export const NOTES = [
  'A',
  'A♯/B♭',
  'B',
  'C',
  'C♯/D♭',
  'D',
  'D♯/E♭',
  'E',
  'F',
  'F♯/G♭',
  'G',
  'G♯/A♭'
];

const degrees = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G'
];

export function noteSequence(start, length) {
  let offset = NOTES.indexOf(start);
  let seq = [];
  for(let i=0; i <= length; i++) {
    seq.push(NOTES[(i+offset)%12])
  }
  return seq;
}

export function intervalSequence(start, intervals = []) {
  let offset = NOTES.indexOf(start);
  return intervals.map(semitones => NOTES[(semitones+offset)%12]);
}

export function degreeSequence(start, length) {

}
