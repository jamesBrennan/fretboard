const notes = [
  'A',
  'A♯/B♭',
  'B',
  'C',
  'C♯/D♭',
  'D',
  'D♯/E♭',
  'E',
  'F',
  'F♯/G♭',
  'G',
  'G♯/A♭'
];

function noteSequence(start, length) {
  let idx = notes.indexOf(start);
  let seq = [];
  for(let i=0; i <= length; i++) {
    seq.push(notes[(i+idx)%12])
  }
  return seq;
}

export default function NoteMatrix(rootNote = 'E', tuning = ['E','A','D','G','B','E']) {
  let fretCount = 24;

  return tuning.reduce((matrix, openNote) => {
    matrix.push(noteSequence(openNote, fretCount));
    return matrix;
  },[]);
};
