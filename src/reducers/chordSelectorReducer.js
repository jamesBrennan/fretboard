import {
  CHORD_SELECTED,
  CHORD_TYPE_SELECTED, CHORD_TYPEAHEAD_CHANGED,
  ROOT_NOTE_SELECTED
} from "../actions/chordActions";
import {merge} from "../util";
import {CLEAR_ALL} from "../actions/actionBarActions";

import {descriptionMatches, isCompoundName, NOTES} from "../notes";
import {TYPES} from "../chords";

function chordNames(noteNames, types) {
  return noteNames
    .filter(note => !isCompoundName(note))
    .map(note => types.map(type => `${note} ${type}`))
    .reduce((a, b) => a.concat(b), [])
}

function items(notes, types) {
  return notes
    .map(note => chordNames(note, types))
    .reduce((a, b) => a.concat(b));
}

function filterOptions(options, filter) {
  let rootNotes = descriptionMatches(filter);
  return options.filter(option =>
    rootNotes.some(note => new RegExp(`^${note}`).exec(option))
  )
}

const OPTIONS = items(NOTES, TYPES);

export const initialState = {
  root: '',
  type: '',
  value: '',
  options: OPTIONS
};

export function chordSelectorReducer(state = initialState, {type, payload} = {}) {
  switch (type) {
    case CHORD_TYPE_SELECTED:
      return merge(state, {type: payload});

    case ROOT_NOTE_SELECTED:
      return merge(state, {root: payload});

    case CLEAR_ALL:
      return initialState;

    case CHORD_TYPEAHEAD_CHANGED:
    case CHORD_SELECTED:
      return merge(state, {
        value: payload,
        options: filterOptions(OPTIONS, payload)
      });

    default:
      return state;
  }
}
