import toggleNotes from './toggleNotes';
import { collectNotePositions } from "../../NoteMatrix";

export function hitboxClickedTransform(state, {payload} = {}) {
  let notes, current;

  current = state.fretboard;
  notes = collectNotePositions(payload.note, state.noteMatrix);
  return toggleNotes({current, notes});
}
