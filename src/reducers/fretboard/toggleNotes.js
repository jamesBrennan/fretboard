import { merge } from "../../util";

function toggleNote({current, next, note, fret, string}) {
  if(!next[fret]) {
    next[fret] = {};
    next[fret][string] = note;
  }
  else {
    next[fret][string] = (current[fret] && current[fret][string]) ? false : note;
  }
  return next;
}

export default function toggleNotes({current, notes}) {
  return notes.reduce((memo, notePosition) => {
    let {note, fret, string} = notePosition;
    return toggleNote({current, next: memo, note, fret, string});
  }, merge(current, {}));
}
