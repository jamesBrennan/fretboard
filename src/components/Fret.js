import React from 'react';
import './Fret.css';
import { range } from '../util';

function HitBox({string, fret, onClick}) {
  return (
    <div className="HitBox" onClick={() => {onClick(string, fret)}}>
      <div className="HitBox__note">
      </div>
    </div>
  )
}

export default function Fret({number}) {
  return(
    <div className="Fret">
      {range(6).map(i =>
        <HitBox key={i} string={i+1} fret={number+1}
                onClick={(string, fret) => console.log(string, fret)}/>
      )}
    </div>
  )
}
