import React from 'react';
import { connect } from 'react-redux';
import { range, positionRatio } from '../util';
import './FretboardInfo.css';

function FretboardInfoColumn({number}) {
  return (
    <div className="FretboardInfo__column">
    </div>
  )
}

function FretboardInfo({frets}) {
  return (
    <div className="FretboardInfo">
      {range(frets).map(num =>
        <div className="FretboardInfo__spacer" key={num} style={{flex: positionRatio(num)}}>
          <FretboardInfoColumn number={num} />
        </div>
      )}
    </div>
  )
}

export default connect()(FretboardInfo);
