import React from 'react';
import './Fretboard.css';
import FretGroup from './FretGroup';
import { range } from '../util';

function positionRatio(number) {
  return range(number).reduce((prev => prev / 1.05946), 1);
}

function Fretboard({frets}) {
  return (
    <div className="Fretboard">
      <hr className="Fretboard__string Fretboard__string--1"/>
      <hr className="Fretboard__string Fretboard__string--2"/>
      <hr className="Fretboard__string Fretboard__string--3"/>
      <hr className="Fretboard__string Fretboard__string--4"/>
      <hr className="Fretboard__string Fretboard__string--5"/>
      <hr className="Fretboard__string Fretboard__string--6"/>
      {range(frets).map(num =>
        <FretGroup key={num} number={num} style={{flex: positionRatio(num)}} />
      )}
    </div>
  )
}

export default Fretboard;
