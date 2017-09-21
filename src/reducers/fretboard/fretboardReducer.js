import { merge } from "../../util";

import { HITBOX_CLICKED } from "../../actions/hitboxActions";
import { CLEAR_ALL } from "../../actions/actionBarActions";

import { hitboxClickedTransform } from "./HITBOX_CLICKED";
import {ROOT_NOTE_SELECTED} from "../../actions/chordActions";
import {rootNoteSelectedTransform} from "./ROOT_NOTE_SELECTED";

function set(state = {}, value) {
  let next = merge(state, {});
  next.fretboard = value;
  return next;
}

function reset(state = {}) {
  return set(state, {});
}

function fretboardReducer(state = {}, {type, payload} = {}) {
  switch(type) {
    case HITBOX_CLICKED:
      return merge(state, {
        fretboard: hitboxClickedTransform(state, {payload})
      });
    case ROOT_NOTE_SELECTED:
      let next = reset(state);
      if(!payload) { return next; }

      return merge(next, {
        fretboard: rootNoteSelectedTransform(next, {payload})
      });
    case CLEAR_ALL:
      return reset(state);
    default:
      return state;
  }
}

export default fretboardReducer;
