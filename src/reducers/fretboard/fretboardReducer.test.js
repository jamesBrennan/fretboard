import fretboardReducer from './fretboardReducer';
import {HITBOX_CLICKED, hitboxClicked} from "../../actions/hitboxActions";
import NoteMatrix from '../../NoteMatrix';
import {
  CHORD_SELECTED, chordSelected
} from "../../actions/chordActions";
import {initialState} from "../chordSelectorReducer";

describe('fretboardReducer', () => {
  let action, appState, next;

  beforeEach(() => {
    appState = {
      fretboard: {},
      noteMatrix: NoteMatrix(),
      chordSelector: initialState
    };
  });

  describe(HITBOX_CLICKED, () => {
    beforeEach(() => {
      action = hitboxClicked({
        fret: 3,
        note: "G",
        string: 6,
        visible: false
      });

      next = fretboardReducer(appState, action);
    });

    it('assigns the note to the fretboard', () => {
      expect(next.fretboard['3']).toEqual({
        '1': 'G',
        '6': 'G',
      });
    });
  });

  describe(CHORD_SELECTED, () => {
    describe('Major', () => {

      it('displays the other notes ', () => {
        action = chordSelected('A Major');
        next = fretboardReducer(appState, action);

        expect(next.fretboard['2']).toEqual({
          '2': 'C♯',
          '3': 'A',
          '4': 'E'
        });
      });
    });

    describe('Minor', () => {
      it('displays the other notes ', () => {
        action = chordSelected('A Minor');
        next = fretboardReducer(appState, action);

        expect(next.fretboard['2']).toEqual({
          '3': 'A',
          '4': 'E'
        });
      });

      it('displays only the chord notes', () => {
        appState.chordSelector = {
          value: 'A Major',
        };

        appState.fretboard = {
          '2': {
            '2': 'C♯',
            '3': 'A',
            '4': 'E'
          }
        };

        action = chordSelected('A Minor');
        next = fretboardReducer(appState, action);

        expect(next.fretboard['2']).toEqual({
          '3': 'A',
          '4': 'E'
        });
      });
    });
  });
});
