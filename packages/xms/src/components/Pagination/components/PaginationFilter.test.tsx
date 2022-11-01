import * as React from 'react';
import { render } from '@testing-library/react';

import { PaginationFilter } from '..';

const handleSelect = jest.fn(x => x);

describe('components/PaginationFilter', () => {
  test('renders correctly', () => {
    const { container, getByText } = render(
      <PaginationFilter items={[10, 20, 30]} limit={10} label={'Limit'} onChange={handleSelect} />
    );
    const text = getByText('Limit');
    const displayValue = getByText('10');
    expect(container).toBeInTheDocument();
    expect(text).toBeVisible();
    expect(displayValue).toBeVisible();
  });
});
