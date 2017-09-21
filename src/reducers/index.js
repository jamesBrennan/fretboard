import IntervalMatrix from '../IntervalMatrix';
import NoteMatrix from '../NoteMatrix';
import fretboardReducer from "./fretboard/fretboardReducer";
import { merge } from "../util";
import { chordSelectorReducer } from "./chordSelectorReducer";

const initialState = {
  noteMatrix: NoteMatrix(),
  intervalMatrix: IntervalMatrix(),
  fretboard: {},
  fretboardInfo: {},
};

export default function reducers(state = initialState, action = {}) {
  return merge(fretboardReducer(state, action), {
    chordSelector: chordSelectorReducer(state.chordSelector, action)
  });
}
