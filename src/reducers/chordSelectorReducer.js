import {
  CHORD_SELECTED,
  CHORD_TYPE_SELECTED, CHORD_TYPEAHEAD_CHANGED,
  ROOT_NOTE_SELECTED
} from "../actions/chordActions";
import {merge} from "../util";
import {CLEAR_ALL} from "../actions/actionBarActions";
import {isCompoundName, NOTES} from "../notes";
import {TYPES} from "../chords";
import {tokenize} from "../chordTokenizer";

function chordDescription(root, type) {
  return {
    root,
    type,
    label: `${root} ${type}`
  }
}

function chordNames(noteNames, types) {
  return noteNames
    .filter(note => !isCompoundName(note))
    .map(root => types.map(type => chordDescription(root, type)))
    .reduce((a, b) => a.concat(b), [])
}

function items(notes, types) {
  return notes
    .map(note => chordNames(note, types))
    .reduce((a, b) => a.concat(b));
}

function filterOptions(options, filter) {
  let tokens = tokenize(filter);
  return options.filter(option =>
    option.label.includes(`${tokens.root} ${tokens.type}`)
  )
}

export const OPTIONS = items(NOTES, TYPES);

export const initialState = {
  value: '',
  options: OPTIONS.slice(0,10).concat(['...'])
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
