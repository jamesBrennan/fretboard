// Index is number of semitones
export const INTERVAL_DESCRIPTION = [
  { name: 'Unison',         med: 'Unison',    short: 'P1' },
  { name: 'Minor second',   med: 'Min. 2nd',  short: 'm2' },
  { name: 'Major second',   med: 'Maj. 2nd',  short: 'M2' },
  { name: 'Minor third',    med: 'Min. 3rd',  short: 'm3' },
  { name: 'Major third',    med: 'Maj. 3rd',  short: 'M3' },
  { name: 'Perfect fourth', med: '4th',       short: 'P4' },
  { name: null,             med: null,        short: null },
  { name: 'Perfect fifth',  med: '5th',       short: 'P5' },
  { name: 'Minor sixth',    med: 'Min. 6th',  short: 'm6' },
  { name: 'Major sixth',    med: 'Maj. 6th',  short: 'M6' },
  { name: 'Minor seventh',  med: 'Min. 7th',  short: 'm7' },
  { name: 'Major seventh',  med: 'Maj. 7th',  short: 'M7' },
  { name: 'Octave',         med: 'Oct',       short: 'P8' },
  { name: 'Minor 9th',      med: 'Min. 9th',  short: 'm9' },
  { name: 'Major 9th',      med: 'Maj. 9th',  short: 'M9' },
  { name: 'Minor 10th',     med: 'Min. 10th', short: 'm10' },
  { name: 'Major 10th',     med: 'Maj. 10th', short: 'M10' },
  { name: 'Minor 11th',     med: 'Min. 11th', short: 'm11' },
  { name: 'Major 11th',     med: 'Maj. 11th', short: 'M11' },
  { name: '12th',           med: '12th',      short: 'P12' },
  { name: null,             med: null,        short: null },
  { name: '13th',           med: '13th',      short: 'P13' },
  { name: 'Minor 14th',     med: 'Min. 14th', short: 'm14' },
  { name: 'Major 14th',     med: 'Maj. 14th', short: 'M14' },
  { name: 'Minor 15th',     med: 'Min. 15th', short: 'm15' },
  { name: 'Major 15th',     med: 'Maj. 15th', short: 'M15' },
  { name: 'Double Octave',  med: 'Db. Oct',   short: 'P16' },
];

export function getIntervalDescription(semitones) {
  return INTERVAL_DESCRIPTION[Math.abs(semitones)];
}
