import { _GuitarChord } from '@/types/schema';
import s from './HitItem.module.scss';
import DrawChord from './DrawChord/DrawChord';

export default function HitItem({ hit }: { hit: _GuitarChord }) {
  const chord = hit.positions[0];
  const posCount = hit.positions.length;
  return (
    <div className={s.HitItem}>
      <h2>{`${hit.key} ${hit.suffix}`}</h2>
      <DrawChord chord={chord} />
      <div id={s.posCount}>
        {posCount > 1 ? `${posCount} positions` : '1 position'}{' '}
      </div>
    </div>
  );
}
