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

export const CHORD_SELECTED = 'CHORD_SELECTED';
export const chordSelected = (value) => {
  return {
    type: CHORD_SELECTED,
    payload: value
  }
};

export const CHORD_TYPEAHEAD_CHANGED = 'CHORD_TYPEAHEAD_CHANGED';
export const chordTypeaheadChanged = (value) => {
  return {
    type: CHORD_TYPEAHEAD_CHANGED,
    payload: value
  }
};

