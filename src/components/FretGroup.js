import React from 'react';
import './FretGroup.css';
import Decoration from './Decoration';
import Fret from './Fret';

export default function FretGroup({number, style, notes = [], pinnedNotes={}}) {
  return (
    <div className="FretGroup" style={style}>
      <div className="FretGroup__space">
        <Decoration number={number}/>
      </div>
      <Fret number={number} notes={notes} pinnedNotes={pinnedNotes} />
    </div>
  );
};
