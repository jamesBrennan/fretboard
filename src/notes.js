import { range } from "./util";

export const SHARP = '♯';
export const FLAT = '♭';

export const A_FLAT = `A${FLAT}`;
export const A = 'A';
export const A_SHARP = `A${SHARP}`;

export const B_FLAT = `B${FLAT}`;
export const B = 'B';

export const C_FLAT = `C${FLAT}`;
export const C = 'C';
export const C_SHARP = `C${SHARP}`;

export const D_FLAT = `D${FLAT}`;
export const D = 'D';
export const D_SHARP = `D${SHARP}`;

export const E_FLAT = `E${FLAT}`;
export const E = 'E';

export const F = 'F';
export const F_SHARP = `F${SHARP}`;

export const G_FLAT = `G${FLAT}`;
export const G = 'G';
export const G_SHARP = `G${SHARP}`;

export const NOTES = [
  [A],
  [A_SHARP, B_FLAT, `${A_SHARP}/${B_FLAT}`],
  [B],
  [C],
  [C_SHARP, D_FLAT, `${C_SHARP}/${D_FLAT}`],
  [D],
  [D_SHARP, E_FLAT, `${D_SHARP}/${E_FLAT}`],
  [E],
  [F],
  [F_SHARP, G_FLAT, `${F_SHARP}/${G_FLAT}`],
  [G],
  [G_SHARP, A_FLAT, `${G_SHARP}/${A_FLAT}`],
];

const DEGREES = [
  A,
  B,
  C,
  D,
  E,
  F,
  G
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

export function degreeSequence(start, degrees = []) {
  let re, match, noteName;
  re = /(\w)([♯|♭])?/;
  match = re.exec(start);
  if(!match) { throw `Unknown note "${start}"` }
  noteName = match[1];

  let offset = DEGREES.indexOf(noteName) - 1;
  return degrees.map(i => DEGREES[(Number.parseInt(i)+offset)%7])
}

export function isCompoundName(noteName) {
  return !!/^[A-G]♯\/[A-G]♭$/i.exec(noteName);
}

export function degreeName(noteName, degree) {
  let pattern = `(${degree})([♯|♭])?`;
  let re = new RegExp(pattern);
  let match = re.exec(noteName);
  if(match) {
    return match.slice(1).join('');
  }
  throw new Error(`The given degree "${degree}" does not match the given note name "${noteName}"`);
}

export function equals(a, b) {
  return noteOffset(a) === noteOffset(b);
}
