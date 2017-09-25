import {getNotes} from "../../chords";
import {collectNotePositions} from "../../NoteMatrix";
import toggleNotes from "./toggleNotes";
import {tokenize} from "../../chordTokenizer";

export function chordSelectedTransform(state = {}, {payload}) {
  let notes, notePositions;
  let {root, type} = tokenize(payload);

  notes = getNotes({root, type});

  notePositions = notes
    .map(note => collectNotePositions(note, state.noteMatrix))
    .reduce((a, b) => a.concat(b));

  return toggleNotes({current: {}, notes: notePositions});
}
