export function range(a, b) {
  if(!b) {
    return [...(new Array(a)).keys()];
  }
  let c = [];
  for(let i = a; i<=b; i++) {
    c.push(i);
  }
  return c;
}

export function positionRatio(position) {
  return range(position).reduce((prev => prev / 1.05946), 1);
}