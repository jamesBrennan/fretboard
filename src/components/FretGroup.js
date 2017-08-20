import React from 'react';
import './FretGroup.css';

function Detail() {
  return <div className="Decoration__detail">･</div>
}

function Decoration({number}) {
  if([5,7,9,15,17,19,21].includes(number)) {
    return (
      <div className="Decoration">
        <Detail/>
      </div>
    );
  }
  if(12 === number) {
    return (
      <div className="Decoration">
        <Detail/>
        <Detail/>
      </div>
    );
  }
  return null;
}

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
