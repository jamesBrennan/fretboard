import React from 'react';
import { connect } from 'react-redux';

import * as action from './hitboxActions';

function HitBox({string, fret, onClick, onMouseEnter, onMouseLeave}) {
  return (
    <div className="HitBox"
         onMouseEnter={() => onMouseEnter(string, fret)}
         onMouseLeave={() => onMouseLeave(string, fret)}
         onClick={() => {onClick(string, fret)}}
    >
      <div className="HitBox__note"/>
    </div>
  )
}

const wrap = dispatch => actionCreator => {
  return (...args) => dispatch(actionCreator(...args))
};

export default connect(
  state => ({}),
  dispatch => ({
    onMouseEnter: wrap(dispatch)(action.mouseEnteredHitbox),
    onMouseLeave: wrap(dispatch)(action.mouseLeftHitbox),
    onClick: wrap(dispatch)(action.hitboxClicked)
  })
)(HitBox);
