import IntervalMatrix from './IntervalMatrix';
import NoteMatrix from './NoteMatrix';

const initialState = {
  noteMatrix: NoteMatrix(),
  intervalMatrix: IntervalMatrix(),
  fretboard: [[],[],[],[],[],[]]
};

export default function reducers(state = initialState, action = {}) {
  return state;
}
