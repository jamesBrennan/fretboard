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