import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';

import {
  rootNoteSelected,
  chordTypeSelected,
  chordSelected,
  chordTypeaheadChanged
} from '../../actions/chordActions';

function ChordSelector({root, type, onRootChange, onTypeChange, options, value, onChange, onSelect}) {
  return(
    <div>
      <Autocomplete
        getItemValue={(item) => item}
        items={options}
        renderItem={(item, isHighlighted) =>
          <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item}
          </div>
        }
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onSelect={onSelect}
      />
    </div>
  );
}

ChordSelector.propTypes = {
  onRootChange: PropTypes.func,
  onTypeChange: PropTypes.func,
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.array
};

export default connect(
  state => state.chordSelector,
  dispatch => {
    return {
      onRootChange: (val) => dispatch(rootNoteSelected(val)),
      onTypeChange: (val) => dispatch(chordTypeSelected(val)),
      onChange: (val) => dispatch(chordTypeaheadChanged(val)),
      onSelect: (val) => dispatch(chordSelected(val))
    };
  }
)(ChordSelector);
