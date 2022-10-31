import { Box, Select, Text } from '@chakra-ui/react';
import * as React from 'react';

export interface PaginationFilterProps<T> {
  /** Total limit of pages. */
  limit?: number;
  /** Label in front of select input */
  label?: string;
  /** Label items. */
  items: T[];
  /** The change handler for the select. */
  onChange: (changes: T) => void;
}

const PaginationFilter: React.FC<PaginationFilterProps<number>> = ({
  limit,
  label = 'Rows per page:',
  items,
  onChange,
  ...rest
}) => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Text scale={300} mr={3} {...rest}>
        {label}
      </Text>
      <Select
        height={38}
        outline="none"
        border="none"
        boxShadow="none"
        _focusVisible={{ boxShadow: 'none' }}
        width={70}
        onChange={e => onChange(Number(e.target.value))}
      >
        {items.map(item => {
          return <option value={item}>{item}</option>;
        })}
      </Select>
    </Box>
  );
};

PaginationFilter.defaultProps = {
  limit: undefined,
  label: undefined,
};

export default PaginationFilter;
