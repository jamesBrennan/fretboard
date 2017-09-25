import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';

import {
  chordSelected,
  chordTypeaheadChanged
} from '../../actions/chordActions';

function ChordSelector({options, value, onChange, onSelect}) {
  return(
    <div>
      <Autocomplete
        getItemValue={(item) => item.label}
        items={options}
        renderItem={(item, isHighlighted) =>
          <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.label}
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
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.array
};

export default connect(
  state => state.chordSelector,
  dispatch => {
    return {
      onChange: (val) => dispatch(chordTypeaheadChanged(val)),
      onSelect: (val) => dispatch(chordSelected(val))
    };
  }
)(ChordSelector);
