import React from 'react';
import './Fret.css';
import { range } from '../util';
import HitBox from './HitBox';

export default function Fret({number, notes = [], pinnedNotes = []}) {
  return(
    <div className="Fret">
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
