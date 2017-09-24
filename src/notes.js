import { range } from "./util";
import {extractRoot} from "./chordTokenizer";

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

export const SHARP = '♯';
export const FLAT = '♭';

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

export function degreeSequence(start, degrees = []) {
  let offset = DEGREES.indexOf(start) - 1;
  return degrees.map(i => DEGREES[(Number.parseInt(i)+offset)%7])
}

export function isCompoundName(noteName) {
  return !!/^[A-G]♯\/[A-G]♭$/i.exec(noteName);
}

function isPartialMatch(description, noteName) {
  let note = extractRoot(description);

  return !isCompoundName(noteName) &&
    !!new RegExp(`${note}[♯|♭]?`, 'i').exec(noteName);
}

export function descriptionMatches(description) {
  return NOTES
    .reduce((a,b) => a.concat(b))
    .filter(note => isPartialMatch(description, note))
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
