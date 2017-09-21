import fretboardReducer from './fretboardReducer';
import {HITBOX_CLICKED, hitboxClicked} from "../../actions/hitboxActions";
import NoteMatrix from '../../NoteMatrix';
import {ROOT_NOTE_SELECTED, rootNoteSelected} from "../../actions/chordActions";

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
});

