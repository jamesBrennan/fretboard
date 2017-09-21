import fretboardReducer from './fretboardReducer';
import {HITBOX_CLICKED, hitboxClicked} from "../../actions/hitboxActions";
import NoteMatrix from '../../NoteMatrix';

describe(HITBOX_CLICKED, () => {
  let action, appState, output;

  beforeEach(() => {
    appState = {
      fretboard: {},
      noteMatrix: NoteMatrix()
    };

    action = hitboxClicked({
      fret: 3,
      note: "G",
      string: 6,
      visible: false
    });

    output = fretboardReducer(appState, action);
  });

  it('assigns the note to the fretboard', () => {
    expect(output.fretboard['3']).toEqual({
      '1': 'G',
      '6': 'G',
    });
  });
});
