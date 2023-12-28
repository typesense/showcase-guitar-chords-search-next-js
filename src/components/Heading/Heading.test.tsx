import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Heading from './Heading';

describe('<Heading/>', () => {
  it('Should render', () => {
    render(<Heading />);
    expect(screen.getByText('Search guitar chords')).toBeInTheDocument();
  });
});
