import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearAll } from "../../actions/actionBarActions";

import ActionControl from './ActionControl';
import ChordSelector from './ChordSelector';

import './ActionBar.css';

export function ActionBar({clearAll}) {
  return(
    <div className="ActionBar">
      <ActionControl>
        <button onClick={clearAll}>Clear All</button>
      </ActionControl>
      <ActionControl>
        <ChordSelector />
      </ActionControl>
    </div>
  )
}

ActionBar.propTypes = {
  clearAll: PropTypes.func,
};

export default connect(
  state => { return {}; },
  dispatch => {
    return {
      clearAll: () => dispatch(clearAll())
    };
  }
)(ActionBar);
