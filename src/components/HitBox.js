import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import * as action from '../actions/hitboxActions';
import './Hitbox.css';

function HitBox({string, fret, note, visible, onClick, onMouseEnter, onMouseLeave}) {
  return (
    <div className="HitBox"
         onMouseEnter={() => onMouseEnter({string, fret, note, visible})}
         onMouseLeave={() => onMouseLeave({string, fret, note, visible})}
         onClick={() => onClick({string, fret, note, visible})}
    >
      <div className={classNames('HitBox__note', {'HitBox__note--pinned': visible})} />
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
