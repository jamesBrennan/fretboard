import React from 'react';
import './FretGroup.css';
import Decoration from './Decoration';
import Fret from './Fret';

export default function FretGroup({number, style}) {
  return (
    <div className="FretGroup" style={style}>
      <div className="FretGroup__space">
        <Decoration number={number}/>
      </div>
      <Fret/>
    </div>
  );
};
