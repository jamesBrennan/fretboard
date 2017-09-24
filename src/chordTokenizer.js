import {SHARP as SHARP_SYMBOL, FLAT as FLAT_SYMBOL} from "./notes";

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
const SHARP       = wordPattern('sharp', {minSize: 1, aliases: ['♯']});
const FLAT        = wordPattern('flat', {minSize: 1, aliases: ['♯']});
const ROOT_NOTE   = new RegExp(`^(${NOTE.source})(${SHARP.source})?(${FLAT.source})?`);

const MAJOR       = wordPattern('major');
const MINOR       = wordPattern('minor');
const MAJOR_MINOR = new RegExp(`(${MAJOR.source})?(${MINOR.source})?`);

const SIXTH       = wordPattern('sixth', {aliases: ['6']});
const SEVENTH     = wordPattern('seventh', {aliases: ['7']});
const MODIFIER    = new RegExp(`(${SIXTH.source})?(${SEVENTH.source})?`);

const CHORD = new RegExp(
  `${ROOT_NOTE.source}${MAJOR_MINOR.source}${MODIFIER.source}`,
  'i'
);

function matchChord(input) {
  let str = input.replace(/\s/g, '');
  return CHORD.exec(str);
}

function matchRoot(match) {
  if(!match) { return; }

  let [_, noteLetter, sharp, flat] = match;
  noteLetter = noteLetter.toUpperCase();

  if(sharp) { return `${noteLetter}${SHARP_SYMBOL}`; }
  if(flat) { return `${noteLetter}${FLAT_SYMBOL}`; }
  return noteLetter;
}

function matchChordName(match) {
  if(!match) { return; }
  let parts = match.splice(4,7);
  let [major, minor, sixth, seventh] = parts;

  if(major) { parts[0] = 'Major' }
  if(minor) { parts[1] = 'Minor' }
  if(sixth) { parts[2] = 'Sixth' }
  if(seventh) { parts[3] = 'Seventh' }

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
