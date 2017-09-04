import {HITBOX_CLICKED} from "../actions/hitboxActions";
import {merge} from "../util";

function fretboardReducer(state, action = {}) {
  switch(action.type) {
    case HITBOX_CLICKED:
      let {string, fret, note} = action.payload;
      let next = merge(state.fretboard, {});
      if(!next[fret]) {
        next[fret] = {};
        next[fret][string] = note;
      }
      else {
        next[fret][string] = state.fretboard[fret][string] ? false : note;
      }
      return merge(state, {
        fretboard: next
      });
    default:
      return state;
  }
}

export default fretboardReducer;
