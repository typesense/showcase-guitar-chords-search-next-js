import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import HitItem from './HitItem';

describe('<Hititem/>', () => {
  const hit = {
    key: 'C',
    suffix: 'major',
    positions: [
      {
        frets: [-1, 3, 2, 0, 1, 0],
        fingers: [0, 3, 2, 0, 1, 0],
        baseFret: 1,
        barres: [],
        midi: [48, 52, 55, 60, 64],
      },
      {
        frets: [-1, 1, 3, 3, 3, 1],
        fingers: [0, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3,
        midi: [48, 55, 60, 64, 67],
      },
    ],
  };
  it('Should render', () => {
    const { container } = render(<HitItem hit={hit} />);
    expect(screen.getByText('Cmajor')).toBeInTheDocument();
    expect(container.querySelector('svg')).not.toBeUndefined();
    expect(screen.getByText('2 positions')).toBeInTheDocument();
  });

  it('Should render singular noun "position"', () => {
    const { positions, ...data } = hit;

    render(<HitItem hit={{ ...data, positions: [positions[0]] }} />);

    expect(screen.getByText('1 position')).toBeInTheDocument();
  });
});
