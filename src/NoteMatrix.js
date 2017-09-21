import { noteSequence, equals } from "./notes";

export function collectNotePositions(note, noteMatrix) {
  let matches = [];

  noteMatrix.forEach((string, strIdx) => {
    string.forEach((fretNote, fretNumber) => {
      if(equals(note, fretNote)) {
        matches.push({note, fret: fretNumber, string: strIdx + 1});
      }
    })
  });
  return matches;
}

export default function NoteMatrix(rootNote = 'E', tuning = ['E','A','D','G','B','E']) {
  let fretCount = 24;

  return tuning.reduce((matrix, openNote) => {
    matrix.push(noteSequence(openNote, fretCount + 1));
    return matrix;
  },[]).reverse();
};
