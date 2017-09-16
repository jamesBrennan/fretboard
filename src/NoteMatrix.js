import { noteSequence } from "./notes";

export default function NoteMatrix(rootNote = 'E', tuning = ['E','A','D','G','B','E']) {
  let fretCount = 24;

  return tuning.reduce((matrix, openNote) => {
    matrix.push(noteSequence(openNote, fretCount + 1));
    return matrix;
  },[]).reverse();
};
