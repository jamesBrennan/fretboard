import {CHORD_TYPE_SELECTED, ROOT_NOTE_SELECTED} from "../actions/chordActions";
import {merge} from "../util";

export const initialState = {
  root: undefined,
  type: undefined
};

function value(payload) {
  return payload ? payload : undefined;
}

export function chordSelectorReducer(state = initialState, {type, payload} = {}) {
  switch(type) {
    case CHORD_TYPE_SELECTED:
      return merge(state, {type: value(payload)});
    case ROOT_NOTE_SELECTED:
      return merge(state, {root: value(payload)});
    default:
      return state;
  }
}
