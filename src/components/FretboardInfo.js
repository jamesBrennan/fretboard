import React from 'react';
import { connect } from 'react-redux';
import { range, positionRatio } from '../util';
import './FretboardInfo.css';

function FretboardInfoColumn({notes}) {
  return (
    <div className="FretboardInfo__column">
      {notes.map((note, idx) => {
        if (!note) { return null; }
        return(
          <div key={idx} className="FretboardInfo__note">
            {note}
          </div>
        );
      })}
    </div>
  )
}

function notes(fretboard, num) {
  return fretboard[num] ? Object.values(fretboard[num]) : [];
}

function FretboardInfo({frets, fretboard}) {
  return (
    <div className="FretboardInfo">
      {range(frets).map((num, idx) =>
        <div className="FretboardInfo__spacer" key={idx} style={{flex: positionRatio(num)}}>
          <FretboardInfoColumn number={num} notes={notes(fretboard, num+1)} />
        </div>
      )}
    </div>
  )
}

export default connect(
  state => {
    return {
      fretboard: state.fretboard
    }
  }
)(FretboardInfo);
