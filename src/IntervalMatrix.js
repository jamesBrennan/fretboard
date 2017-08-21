import { range } from './util';

export default function IntervalMatrix(rootPosition = 0, tuning = [0,5,10,15,19,24]) {
  // rootPosition: The fret number on the lowest string that is the root
  //               of the interval matrix.

  // tuning: An array representing the interval of each open string,
  //         measured in half steps, in relation to the lowest open string.
  //
  //         For example, standard tuning (E,A,D,G,B,E) = [0,5,10,15,19,24]

  // Outputs a matrix of intervals [x[y]] = z where x is the string, from lowest
  // to highest, y is the fret, and z is the interval, in half steps, from the
  // rootPosition.

  let fretCount = 24;

  return tuning.reduce((matrix, openInterval) => {
    matrix.push(range(openInterval, openInterval + fretCount));
    return matrix;
  },[]);
}
