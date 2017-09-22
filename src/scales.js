import { degreeName, degreeSequence, intervalSequence } from "./notes";
import {range, uniq} from "./util";

// common scales, expressed as semitones from root

//                    R,W,W,H,W,W, W, H
export const MAJOR = [0,2,4,5,7,9,11,12];

//                            R,W,H,W,W,H, W, W
export const NATURAL_MINOR = [0,2,3,5,7,8,10,12];

//                             R,W,H,W,W,H,1 1/2, H
export const HARMONIC_MINOR = [0,2,3,5,5,8,   11,12];

export function getNotes(root, scale) {
  let noteNames = intervalSequence(root, scale);
  let degrees = degreeSequence(root, range(1, scale.length));
  let notes = noteNames.map((noteName, idx) => {
    return degreeName(noteName, degrees[idx]);
  });
  return uniq(notes);
}
