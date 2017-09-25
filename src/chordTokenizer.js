import {
  SHARP as SHARP_SYMBOL,
  FLAT as FLAT_SYMBOL
} from "./notes";

function wordChunks(word, minSize = 2) {
  let chars, chunks;
  chars = word.split('');
  chunks = [];

  for(let i = chars.length; i >= minSize; i--) {
    chunks.push([...chars].splice(0, i).join(''));
  }

  return chunks;
}

function wordPattern(word, {minSize, aliases} = {aliases: []}) {
  let string = wordChunks(word, minSize).concat(aliases).join('|');
  return new RegExp(string);
}

const NOTE        = /[A-G]/;
const SHARP       = wordPattern('sharp', {aliases: [SHARP_SYMBOL]});
const FLAT        = wordPattern('flat', {aliases: [FLAT_SYMBOL]});
const ROOT_NOTE   = new RegExp(`^(${NOTE.source})(${SHARP.source})?(${FLAT.source})?`);

const MAJOR       = wordPattern('major');
const MINOR       = wordPattern('minor');
const MINOR_MAJOR = new RegExp(`(${MINOR.source})?(${MAJOR.source})?`);

const DOMINANT        = wordPattern('dominant');
const DIMINISHED      = wordPattern('diminished');
const HALF_DIMINISHED = wordPattern('half-diminished', {aliases: wordPattern('half diminished')});
const SUSPENDED       = wordPattern('suspended');
const AUGMENTED       = wordPattern('augmented');
const VARIANT         = new RegExp(`(${DOMINANT.source})?(${DIMINISHED.source})?(${HALF_DIMINISHED.source})?(${SUSPENDED.source})?(${AUGMENTED.source})?`);

const SIXTH       = wordPattern('sixth', {aliases: ['6']});
const SEVENTH     = wordPattern('seventh', {aliases: ['7']});
const FIVE        = wordPattern('five', {aliases: ['5']});
const FLAT_FIVE   = new RegExp(`(?:${FLAT.source})(?:${FIVE.source})`);
const SHARP_FIVE  = new RegExp(`(?:${SHARP.source})(?:${FIVE.source})`);
const MODIFIER    = new RegExp(`(${SIXTH.source})?(${SEVENTH.source})?(${FLAT_FIVE.source})?(${SHARP_FIVE.source})?`);

const CHORD = new RegExp(
  `${ROOT_NOTE.source}${MINOR_MAJOR.source}${VARIANT.source}${MODIFIER.source}`,
  'i'
);

function matchChord(input) {
  let str = input.replace(/\s/g, '');
  return CHORD.exec(str);
}

function matchRoot(match) {
  if(!match) { return; }

  let [noteLetter, sharp, flat] = [...match].splice(1);
  noteLetter = noteLetter.toUpperCase();

  if(sharp) { return `${noteLetter}${SHARP_SYMBOL}`; }
  if(flat) { return `${noteLetter}${FLAT_SYMBOL}`; }
  return noteLetter;
}

function matchChordName(match) {
  if(!match) { return; }
  let parts = [...match].splice(4);
  let [minor, major, dominant, diminished, halfDiminished, suspended, augmented, sixth, seventh, flatFive, sharpFive] = parts;

  if(minor)           { parts[0] = 'Minor' }
  if(major)           { parts[1] = 'Major' }
  if(dominant)        { parts[2] = 'Dominant' }
  if(diminished)      { parts[3] = 'Diminished' }
  if(halfDiminished)  { parts[4] = 'Half-Diminished' }
  if(suspended)       { parts[5] = 'Suspended' }
  if(augmented)       { parts[6] = 'Augmented' }
  if(sixth)           { parts[7] = 'Sixth' }
  if(seventh)         { parts[8] = 'Seventh' }
  if(flatFive)        { parts[9] = 'Flat 5' }
  if(sharpFive)       { parts[10] = 'Sharp 5' }

  return parts
    .filter(part => !!part)
    .join(' ');
}

export function extractRoot(input) {
  let match = matchChord(input);
  return matchRoot(match);
}

export function tokenize(input) {
  let match = matchChord(input);

  return {
    root: matchRoot(match),
    chordName: matchChordName(match)
  }
}
