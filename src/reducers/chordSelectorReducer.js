import {CHORD_TYPE_SELECTED, ROOT_NOTE_SELECTED} from "../actions/chordActions";
import {merge} from "../util";
import {CLEAR_ALL} from "../actions/actionBarActions";

export const initialState = {
  root: '',
  type: ''
};

export function chordSelectorReducer(state = initialState, {type, payload} = {}) {
  switch(type) {
    case CHORD_TYPE_SELECTED:
      return merge(state, {type: payload});

    case ROOT_NOTE_SELECTED:
      return merge(state, {root: payload});

    case CLEAR_ALL:
      return initialState;

    default:
      return state;
  }
}
