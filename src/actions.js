export const CHORD_SELECTED="CHORD_SELECTED";
export function chordSelected(chordName) {
  return {
    type: CHORD_SELECTED,
    payload: chordName
  }
}
