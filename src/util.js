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

export function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
}

export function uniq(array) { return [ ...new Set(array) ]; }

export function merge(a, b) {
  if (isObject(a) && isObject(b)) {
    let keys = uniq(Object.keys(a).concat(Object.keys(b)));
    return keys.reduce((obj, key) => {
      if(b.hasOwnProperty(key)) {
        obj[key] = merge(a[key], b[key]);
      }
      else {
        obj[key] = a[key];
      }
      return obj;
    }, {});
  }
  return b;
}
