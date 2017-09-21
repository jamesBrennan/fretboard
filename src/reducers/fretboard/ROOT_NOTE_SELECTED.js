import toggleNotes from './toggleNotes';
import { collectNotePositions } from "../../NoteMatrix";

export function rootNoteSelectedTransform(state, {payload} = {}) {
  let notes, current;

  current = state.fretboard;
  notes = collectNotePositions(payload, state.noteMatrix);
  return toggleNotes({current, notes});
}
