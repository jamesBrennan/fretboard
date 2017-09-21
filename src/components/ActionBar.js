import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearAll } from "../actions/actionBarActions";

export function ActionBar({clearAll}) {
  return(
    <div className="ActionBar">
      <button onClick={clearAll}>Clear All</button>
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
