import React from 'react';
import './Decoration.css';

function Detail() {
  return <div className="Decoration__detail">･</div>
}

export default function Decoration({number}) {
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
