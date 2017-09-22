import fretboardReducer from './fretboardReducer';
import {HITBOX_CLICKED, hitboxClicked} from "../../actions/hitboxActions";
import NoteMatrix from '../../NoteMatrix';
import {
  CHORD_TYPE_SELECTED, chordTypeSelected, ROOT_NOTE_SELECTED,
  rootNoteSelected
} from "../../actions/chordActions";

describe('fretboardReducer', () => {
  let action, appState, next;

  beforeEach(() => {
    appState = {
      fretboard: {},
      noteMatrix: NoteMatrix()
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

  describe(ROOT_NOTE_SELECTED, () => {
    it('includes the root note', () => {
      action = rootNoteSelected('G');
      next = fretboardReducer(appState, action);

      expect(next.fretboard['3']).toEqual({
        '1': 'G',
        '6': 'G',
      });
    });

    it('removes non-root notes', () => {
      action = rootNoteSelected('G');
      appState.fretboard = {
        '4': {'1':'G♯/A♭', '6':'G♯/A♭'}
      };
      next = fretboardReducer(appState, action);

      expect(next.fretboard['4']).toEqual(undefined);
    });

    it('resets the fretboard when payload is empty', () => {
      action = rootNoteSelected('');
      appState.fretboard = {
        '3': { '1': 'G', '6': 'G' }
      };

      next = fretboardReducer(appState, action);
      expect(next.fretboard).toEqual({});
    });
  });

  describe(CHORD_TYPE_SELECTED, () => {
    describe('Major', () => {

      it('displays the other notes ', () => {
        appState.chordSelector = {
          root: 'A',
          type: undefined
        };

        action = chordTypeSelected('Major');
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
        appState.chordSelector = {
          root: 'A',
          type: undefined
        };

        action = chordTypeSelected('Minor');
        next = fretboardReducer(appState, action);

        expect(next.fretboard['2']).toEqual({
          '3': 'A',
          '4': 'E'
        });
      });

      it('displays only the chord notes', () => {
        appState.chordSelector = {
          root: 'A',
          type: 'Major',
          fretboard: {
            '2': {
              '2': 'C♯',
              '3': 'A',
              '4': 'E'
            }
          }
        };

        action = chordTypeSelected('Minor');
        next = fretboardReducer(appState, action);

        expect(next.fretboard['2']).toEqual({
          '3': 'A',
          '4': 'E'
        });
      });
    });

    describe('When root is undefined', () => {
      it('does not modify the state', () => {
        appState.chordSelector = {
          root: undefined,
          type: undefined
        };

        action = chordTypeSelected('Minor');
        next = fretboardReducer(appState, action);

        expect(next.fretboard).toEqual(appState.fretboard);
      });
    });

    describe('An empty string', () => {
      it('displays only the root', () => {
        appState.chordSelector = {
          root: 'A',
          type: 'Major'
        };

        action = chordTypeSelected('');
        next = fretboardReducer(appState, action);

        expect(next.fretboard['2']).toEqual({
          '3': 'A'
        })
      });
    });
  });
});
