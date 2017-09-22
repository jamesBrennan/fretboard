import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NOTES } from "../../notes";

import {
  rootNoteSelected,
  chordTypeSelected
} from '../../actions/chordActions';

import {TYPES} from "../../chords";

function ChordSelector({root, type, onRootChange, onTypeChange}) {
  return(
    <div>
      <select onChange={e => onRootChange(e.target.value)} value={root}>
        <option/>
        {NOTES.map((note, i) =>
          <option key={i} value={note[0]}>{note[0]}</option>
        )}
      </select>
      <select onChange={e => onTypeChange(e.target.value)} value={type}>
        <option/>
        {TYPES.map((opt, i) =>
          <option key={i} value={opt}>{opt}</option>
        )}
      </select>
    </div>
  );
}

ChordSelector.propTypes = {
  onRootChange: PropTypes.func,
  onTypeChange: PropTypes.func,
};

export default connect(
  state => state.chordSelector,
  dispatch => {
    return {
      onRootChange: (val) => dispatch(rootNoteSelected(val)),
      onTypeChange: (val) => dispatch(chordTypeSelected(val))
    };
  }
)(ChordSelector);
