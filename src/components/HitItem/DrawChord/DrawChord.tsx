import { _GuitarChord, _chordPosition } from '@/types/schema';
import s from './DrawChord.module.scss';
// @ts-ignore
import Chord from '@tombatossals/react-chords/lib/Chord';

const instrument = {
  strings: 6,
  fretsOnChord: 4,
  name: 'Guitar',
  keys: [],
  tunings: {
    standard: ['E', 'A', 'D', 'G', 'B', 'E'],
  },
};
export default function DrawChord({ chord }: { chord: _chordPosition }) {
  return (
    <div className={s.DrawChord}>
      <Chord chord={chord} instrument={instrument} lite={false} />
    </div>
  );
}
