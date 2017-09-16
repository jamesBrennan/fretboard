import { range } from "./util";

export const NOTES = [
  ['A'],
  ['A♯','B♭','A♯/B♭'],
  ['B'],
  ['C'],
  ['C♯','D♭','C♯/D♭'],
  ['D'],
  ['D♯','E♭','D♯/E♭'],
  ['E'],
  ['F'],
  ['F♯','G♭','F♯/G♭'],
  ['G'],
  ['G♯','A♭','G♯/A♭'],
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

function noteOffset(note) {
  return NOTES.indexOf(noteGroup(note));
}

function noteGroup(note) {
  return NOTES.find(noteGroup => noteGroup.includes(note));
}

function formatNoteName(notes) {
  return notes.length === 1 ? notes[0] : `${notes[0]}/${notes[1]}`
}

function collectNotes(intervals, offset) {
  return intervals.map(i => formatNoteName(NOTES[(i+offset)%12]))
}

export function noteSequence(start, length) {
  return collectNotes(range(length), noteOffset(start));
}

export function intervalSequence(start, intervals = []) {
  return collectNotes(intervals, noteOffset(start));
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

export function equals(a, b) {
  return noteOffset(a) === noteOffset(b);
}
