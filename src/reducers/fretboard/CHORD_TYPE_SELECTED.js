import {getNotes} from "../../chords";
import {collectNotePositions} from "../../NoteMatrix";
import toggleNotes from "./toggleNotes";

export function chordTypeSelectedTransform(state = {}, {payload}) {
  let {root} = state.chordSelector;
  if(!root) { return state.fretboard; }

  let type, notes, notePositions;

  type = payload;
  if(!type) {
    notes = [root]
  }
  else {
    notes = getNotes({root, type});
  }

  notePositions = notes
    .map(note => collectNotePositions(note, state.noteMatrix))
    .reduce((a, b) => a.concat(b));

  return toggleNotes({current: {}, notes: notePositions});
}
