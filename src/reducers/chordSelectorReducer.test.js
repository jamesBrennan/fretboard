import {
  chordSelectorReducer, initialState,
  OPTIONS
} from "./chordSelectorReducer";
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
import {A, A_SHARP, C_FLAT, D_FLAT, D_SHARP, G_FLAT, G_SHARP} from "../notes";

describe('chordSelectorReducer', () => {
  let action, next, state;

  describe('OPTIONS', () => {
    describe('for theoretical keys', () => {
      describe('G♯ Major', () => {
        it('omits chords', () => {
          expect(
            OPTIONS.some(option =>
              option.root === G_SHARP && option.type.includes('Major')
            )
          ).not.toBeTruthy();
        });
      });

      describe('D♯ Major', () => {
        it('omits chords', () => {
          expect(
            OPTIONS.some(option =>
              option.root === D_SHARP && option.type.includes('Major')
            )
          ).not.toBeTruthy();
        });
      });

      describe('A♯ Major', () => {
        expect(
          OPTIONS.some(option =>
            option.root === A_SHARP && option.type.includes('Major')
          )
        ).not.toBeTruthy();
      });

      describe('D♭ Minor', () => {
        expect(
          OPTIONS.some(option =>
            option.root === D_FLAT && option.type.includes('Minor')
          )
        ).not.toBeTruthy();
      });

      describe('G♭ Minor', () => {
        expect(
          OPTIONS.some(option =>
            option.root === G_FLAT && option.type.includes('Minor')
          )
        ).not.toBeTruthy();
      });

      describe('C♭ Minor', () => {
        expect(
          OPTIONS.some(option =>
            option.root === C_FLAT && option.type.includes('Minor')
          )
        ).not.toBeTruthy();
      });
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
