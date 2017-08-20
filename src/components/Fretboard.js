import React from 'react';
import './Fretboard.css';
import FretGroup from './FretGroup';

function positionRatio(number) {
  let range = [...Array(number).keys()];
  return range.reduce((prev => prev / 1.05946), 1);
}

function Fretboard({frets}) {
  let range = [...Array(frets).keys()];
  return (
    <div className="Fretboard">
      {range.map(num => <FretGroup key={num} number={num} style={{flex: positionRatio(num)}} />)}
    </div>
  )
}

export default Fretboard;
