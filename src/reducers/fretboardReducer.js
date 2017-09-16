import {HITBOX_CLICKED} from "../actions/hitboxActions";
import {merge} from "../util";
import { equals } from "../notes";

function collectNotePositions(note, noteMatrix) {
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

function fretboardReducer(state, {type, payload} = {}) {
  switch(type) {
    case HITBOX_CLICKED:
      let notes, current, next;

      current = state.fretboard;
      notes = collectNotePositions(payload.note, state.noteMatrix);

      next = notes.reduce((memo, notePosition) => {
        let {note, fret, string} = notePosition;
        return toggleNote({current, next: memo, note, fret, string});
      }, merge(state.fretboard, {}));

      return merge(state, {
        fretboard: next
      });
    default:
      return state;
  }
}

export default fretboardReducer;
