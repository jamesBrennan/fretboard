import React from 'react';
import { connect } from 'react-redux';
import { chordSelected } from '../actions';

function ChordSelector({onChange}) {
  return (
    <select onChange={onChange}>
      <option />
      <option value="E maj">E maj</option>
    </select>
  )
}

export default connect(
  state => { return {} },
  dispatch => {
    return {
      onChange: e => dispatch(chordSelected("E maj"))
    }
  }
)(ChordSelector)
