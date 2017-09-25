import {chordSelectorReducer, initialState} from "./chordSelectorReducer";
import {
  CHORD_SELECTED,
  CHORD_TYPE_SELECTED, CHORD_TYPEAHEAD_CHANGED, chordSelected,
  chordTypeaheadChanged,
  chordTypeSelected,
  ROOT_NOTE_SELECTED,
  rootNoteSelected
} from "../actions/chordActions";
import {CLEAR_ALL, clearAll} from "../actions/actionBarActions";
import {merge} from "../util";

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
      expect(next.root).toEqual('');
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
      expect(next.type).toEqual('');
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
  });

  describe(CHORD_TYPEAHEAD_CHANGED, () => {
    it('sets the value', () => {
      action = chordTypeaheadChanged('some value');
      next = chordSelectorReducer(initialState, action);
      expect(next.value).toEqual('some value');
    });

    it('reduces the number of options', () => {
      action = chordTypeaheadChanged('a sh');
      next = chordSelectorReducer(initialState, action);
      next.options.forEach(option => {
        expect(option.label).toMatch(/^A♯/);
      });
    });

    it('expands the number of options', () => {
      let state = merge(initialState, {
        options: []
      });

      action = chordTypeaheadChanged('a');
      next = chordSelectorReducer(state, action);
      expect(next.options.length).toBeGreaterThan(0);
    });
  });

  describe(CHORD_SELECTED, () => {
    it('sets the value', () => {
      action = chordSelected('A Major');
      next = chordSelectorReducer(initialState, action);
      expect(next.value).toEqual('A Major');
    });
  });
});
