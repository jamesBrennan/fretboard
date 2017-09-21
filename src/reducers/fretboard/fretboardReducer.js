import {merge} from "../../util";

import { HITBOX_CLICKED } from "../../actions/hitboxActions";
import { CLEAR_ALL } from "../../actions/actionBarActions";

import { hitboxClickedTransform } from "./HITBOX_CLICKED";

function fretboardReducer(state, {type, payload} = {}) {
  switch(type) {
    case HITBOX_CLICKED:
      return merge(state, {
        fretboard: hitboxClickedTransform(state, {payload})
      });
    case CLEAR_ALL:
      let next = merge(state, {});
      next.fretboard = {};
      return next;
    default:
      return state;
  }
}

export default fretboardReducer;
