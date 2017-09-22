import {chordSelectorReducer, initialState} from "./chordSelectorReducer";
import {
  CHORD_TYPE_SELECTED, chordTypeSelected, ROOT_NOTE_SELECTED,
  rootNoteSelected
} from "../actions/chordActions";
import {CLEAR_ALL, clearAll} from "../actions/actionBarActions";

describe('chordSelectorReducer', () => {
  let action, next, state;

  describe(ROOT_NOTE_SELECTED, () => {
    it('sets the root note', () => {
      action = rootNoteSelected('A');
      next = chordSelectorReducer(initialState, action);
      expect(next.root).toEqual('A');
    });

    it('sets the root note to null when payload is empty', () => {
      action = rootNoteSelected('');
      next = chordSelectorReducer(initialState, action);
      expect(next.root).toEqual(undefined);
    });
  });

  describe(CHORD_TYPE_SELECTED, () => {
    it('sets the type', () => {
      action = chordTypeSelected('Major');
      next = chordSelectorReducer(initialState, action);
      expect(next.type).toEqual('Major');
    });

    it('sets the type to null when payload is empty', () => {
      action = chordTypeSelected('');
      next = chordSelectorReducer(initialState, action);
      expect(next.type).toEqual(undefined);
    });
  });

  describe(CLEAR_ALL, () => {
    it('resets to the initial state', () => {
      state = {
        root: 'A',
        type: 'Major'
      };

      action = clearAll();
      next = chordSelectorReducer(state, action);
      expect(next).toEqual(initialState);
    });
  })
});
