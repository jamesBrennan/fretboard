import React from 'react';
import PropTypes from 'prop-types';

function ActionControl({children}) {
  return(
    <div className="ActionBar__control">
      {children}
    </div>
  );
}

ActionControl.propTypes = {
  children: PropTypes.any,
};

export default ActionControl;
