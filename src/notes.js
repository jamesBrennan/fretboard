import { range } from "./util";

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

const DEGREES = [
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
  return range(length).map(i => NOTES[(i+offset)%12]);
}

export function intervalSequence(start, intervals = []) {
  let offset = NOTES.indexOf(start);
  return intervals.map(semitones => NOTES[(semitones+offset)%12]);
}

export function degreeSequence(start, length) {
  let offset = DEGREES.indexOf(start);
  return range(length).map(i => DEGREES[(i+offset)%7])
}

export function degreeName(noteName, degree) {
  let pattern = `(${degree})([♯|♭])?`;
  let re = new RegExp(pattern);
  let match = re.exec(noteName);
  if(match) {
    return match.slice(1).join('');
  }
  throw `The given degree "${degree}" does not match the given note name "${noteName}"`;
}
