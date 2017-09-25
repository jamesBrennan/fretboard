import React from 'react';
import './Decoration.css';

function Detail() {
  return <div className="Decoration__detail">･</div>
}

function details(num) {
  if(num === 12) {
    return [<Detail key={0}/>, <Detail key={1}/>]
  }
  if([5,7,9,15,17,19,21].includes(num)) {
    return <Detail/>
  }
}

export default function Decoration({number}) {
  return (
    <div className="Decoration">
      {details(number+1)}
    </div>
  );
}
