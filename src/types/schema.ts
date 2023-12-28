export type _GuitarChord = {
  key: string;
  suffix: string;
  positions: (_chordPosition & {
    baseFret: number;
    midi: number[];
  })[];
};

export type _chordPosition = {
  frets: number[];
  fingers: number[];
  barres: number[];
  capo?: boolean;
};
