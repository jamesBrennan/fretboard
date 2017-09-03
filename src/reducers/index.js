import IntervalMatrix from '../IntervalMatrix';
import NoteMatrix from '../NoteMatrix';
import fretboardReducer from "./fretboardReducer";

const initialState = {
  noteMatrix: NoteMatrix(),
  intervalMatrix: IntervalMatrix(),
  fretboard: {},
  fretboardInfo: {},
};

export default function reducers(state = initialState, action = {}) {
  return fretboardReducer(state, action);
}
