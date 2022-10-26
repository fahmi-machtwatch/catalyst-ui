import * as React from 'react';
import { render } from '@testing-library/react';

import PaginationButtonTrigger from './PaginationButtonTrigger';

describe('components/PaginationButtonTrigger', () => {
  test('renders component correctly', () => {
    const { container } = render(<PaginationButtonTrigger />);
    expect(container).toBeInTheDocument();
  });
});
