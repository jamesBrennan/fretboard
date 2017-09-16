import React from 'react';
import { connect } from 'react-redux';
import './Fretboard.css';
import FretGroup from './FretGroup';
import { range, positionRatio } from '../util';

function fretNotes(strings, num) {
  return strings.map(string => string[num]);
}

function Fretboard({frets, strings, pinnedNotes}) {
  return (
    <div className="Fretboard">
      <hr className="Fretboard__string Fretboard__string--1"/>
      <hr className="Fretboard__string Fretboard__string--2"/>
      <hr className="Fretboard__string Fretboard__string--3"/>
      <hr className="Fretboard__string Fretboard__string--4"/>
      <hr className="Fretboard__string Fretboard__string--5"/>
      <hr className="Fretboard__string Fretboard__string--6"/>
      {range(frets).map(num =>
        <FretGroup
          key={num}
          number={num}
          notes={fretNotes(strings, num+1)}
          pinnedNotes={pinnedNotes[num+1]}
          style={{flex: positionRatio(num)}} />
      )}
    </div>
  )
}

export default connect(
  state => {
    return {
      strings: state.noteMatrix,
      pinnedNotes: state.fretboard
    }
  }
)(Fretboard);
