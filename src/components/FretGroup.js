import React from 'react';
import './FretGroup.css';
import Decoration from './Decoration';

export default function FretGroup({number, style}) {
  return (
    <div className="FretGroup" style={style}>
      <div className="FretGroup__space">
        <Decoration number={number}/>
      </div>
      <div className="FretGroup__fret"/>
    </div>
  );
};
