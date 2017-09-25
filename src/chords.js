import { intervalSequence, degreeName, degreeSequence } from "./notes";
import { merge } from "./util";
import * as interval from './intervals';
import {THEORETICAL} from "./keys";

const FLAT_FIVE   = {5: interval.FLAT_FIVE};
const SHARP_FIVE  = {6: interval.SHARP_FIVE};
const SIXTH       = {6: interval.SIXTH};
const FLAT_SIX    = {6: interval.FLAT_SIX};
const SEVENTH     = {7: interval.SEVENTH};
const FLAT_SEVEN  = {7: interval.FLAT_SEVEN};

const MAJOR = {
  1: interval.UNISON,
  3: interval.THIRD,
  5: interval.FIFTH
};

const MAJOR_SIXTH   = merge(MAJOR, SIXTH);
const MAJOR_SEVENTH = merge(MAJOR, SEVENTH);

const MINOR = {
  1: interval.UNISON,
  3: interval.FLAT_THREE,
  5: interval.FIFTH
};

const DIMINISHED    = merge(MINOR, FLAT_FIVE);
const MINOR_SIXTH   = merge(MINOR, FLAT_SIX);
const MINOR_SEVENTH = merge(MINOR, FLAT_SEVEN);
const MINOR_MAJOR   = merge(MINOR, SEVENTH);

const SUS_SEVEN     = {
  1: interval.UNISON,
  4: interval.FOURTH,
  5: interval.FIFTH,
  7: interval.FLAT_SEVEN
};

const AUG_SEVEN     = {
  1: interval.UNISON,
  3: interval.THIRD,
  6: interval.SHARP_FIVE,
  7: interval.FLAT_SEVEN
};

const CHORD_FORMULA = {
  'Major':                  MAJOR,
  'Minor':                  MINOR,
  'Major Sixth':            MAJOR_SIXTH,
  'Major Seventh':          MAJOR_SEVENTH,
  'Major Seventh Flat 5':   merge(MAJOR_SEVENTH, FLAT_FIVE),
  'Major Seventh Sharp 5':  merge(MAJOR_SEVENTH, SHARP_FIVE),
  'Minor Sixth':            MINOR_SIXTH,
  'Minor Seventh':          MINOR_SEVENTH,
  'Minor Major':            MINOR_MAJOR,
  'Dominant Seventh':       merge(MAJOR, FLAT_SEVEN),
  'Diminished':             DIMINISHED,
  'Diminished Seventh':     merge(MINOR_SIXTH, FLAT_FIVE),
  'Half-Diminished':        merge(DIMINISHED, FLAT_SEVEN),
  'Suspended Seventh':      SUS_SEVEN,
  'Augmented Seventh':      AUG_SEVEN
};

export const TYPES = Object.keys(CHORD_FORMULA);

function intervals(type) {
  return Object.values(CHORD_FORMULA[type]);
}

function degrees(type) {
  return Object.keys(CHORD_FORMULA[type]);
}

export function isMemberOfTheoreticalKey({root, type}) {
  return THEORETICAL.some(key => key.root === root && type.includes(key.type));
}

export function getNotes({root, type}) {
  let degreeNotes, intervalNotes;

  degreeNotes = degreeSequence(root, degrees(type));
  console.log({degreeNotes});
  intervalNotes = intervalSequence(root, intervals(type));
  return intervalNotes.map((note, i) => {
    return degreeName(note, degreeNotes[i])
  })
}
