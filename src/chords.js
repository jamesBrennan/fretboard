import {intervalSequence, degreeName, degreeSequence} from "./notes";

const CHORD_FORMULA = {
  'Major': {1: 0, 3: 4, 5: 7},
  'Minor': {1: 0, 3: 3, 5: 7}
};

function intervals(type) {
  return Object.values(CHORD_FORMULA[type]);
}

function degrees(type) {
  return Object.keys(CHORD_FORMULA[type]);
}

export function getNotes({root, type}) {
  let degreeNotes, intervalNotes;

  degreeNotes = degreeSequence(root, degrees(type));
  intervalNotes = intervalSequence(root, intervals(type));
  return intervalNotes.map((note, i) => {
    return degreeName(note, degreeNotes[i])
  })
}
