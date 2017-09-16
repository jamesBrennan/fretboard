import React from 'react';
import './Fret.css';
import { range } from '../util';
import HitBox from './HitBox';
import classNames from 'classnames';

export default function Fret({number, notes = [], pinnedNotes = [], ...props}) {
  return(
    <div {...props} className={classNames('Fret', props.className)}>
      {range(6).map(i =>
        <HitBox
          key={i}
          string={i+1}
          fret={number+1}
          note={notes[i]}
          visible={!!pinnedNotes[i+1]} />
      )}
    </div>
  )
}
