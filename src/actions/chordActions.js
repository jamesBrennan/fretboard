export const ROOT_NOTE_SELECTED = 'ROOT_NOTE_SELECTED';
export const rootNoteSelected = (note) => {
  return {
    type: ROOT_NOTE_SELECTED,
    payload: note
  }
};

export const CHORD_TYPE_SELECTED = 'CHORD_TYPE_SELECTED';
export const chordTypeSelected = (type) => {
  return {
    type: CHORD_TYPE_SELECTED,
    payload: type
  }
};
