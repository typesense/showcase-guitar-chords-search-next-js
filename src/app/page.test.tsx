import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from './page';

describe('<Home/>', () => {
  it('Should render <SearchAndFilter/>', () => {
    render(<Home />);
    expect(screen.getByText('Suffix')).toBeInTheDocument();
  });
});
