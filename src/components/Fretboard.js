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
      <hr className="Fretboard__string Fretboard__string--1"/>
      <hr className="Fretboard__string Fretboard__string--2"/>
      <hr className="Fretboard__string Fretboard__string--3"/>
      <hr className="Fretboard__string Fretboard__string--4"/>
      <hr className="Fretboard__string Fretboard__string--5"/>
      <hr className="Fretboard__string Fretboard__string--6"/>
      {range.map(num =>
        <FretGroup key={num} number={num} style={{flex: positionRatio(num)}} />
      )}
    </div>
  )
}

export default Fretboard;
