import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/hitboxActions';
import './Hitbox.css';

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

const curry = dispatch => actionCreator => {
  return (...args) => dispatch(actionCreator(...args))
};

export default connect(
  state => ({}),
  dispatch => {
    let curried = curry(dispatch);
    return {
      onMouseEnter: curried(action.mouseEnteredHitbox),
      onMouseLeave: curried(action.mouseLeftHitbox),
      onClick:      curried(action.hitboxClicked)
    }
  }
)(HitBox);
