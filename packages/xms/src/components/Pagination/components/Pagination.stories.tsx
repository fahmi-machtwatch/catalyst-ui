import * as React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';

import { theme } from '../../../config/theme';
import { XMSProvider } from '../../../provider';
import Pagination from './Pagination';
import PaginationDetail from './PaginationDetail';
import PaginationFilter from './PaginationFilter';

export default {
  chakra: {
    theme,
  },
  title: 'XMS Component Kit/Components/Pagination',
  decorators: [
    (Story: React.ElementType) => (
      <ChakraProvider theme={theme}>
        <XMSProvider>
          <Story />
        </XMSProvider>
      </ChakraProvider>
    ),
  ],
};

export const PaginationDefault = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Pagination
      current={currentPage}
      total={5}
      onSelect={select => {
        setCurrentPage(select);
      }}
    />
  );
};

export const LargePageNumbers = () => {
  const [currentPage, setCurrentPage] = React.useState(10);

  return (
    <Pagination
      current={currentPage}
      total={50}
      onSelect={select => {
        setCurrentPage(select);
      }}
    />
  );
};

export const PaginationFilterSample = () => {
  const [_, setLimit] = React.useState(10);
  return (
    <Box mt={64}>
      <PaginationFilter
        onChange={selectedItem => {
          if (selectedItem) {
            setLimit(selectedItem);
          }
        }}
        items={[10, 20, 30, 40, 50]}
      />
    </Box>
  );
};

export const WithPaginationDetail = () => {
  const [currentPage, setCurrentPage] = React.useState(10);
  const [limit, setLimit] = React.useState(10);
  const length = 475;
  const totalPages = Math.ceil(length / limit);

  return (
    <Box display="flex" flexDirection="column" height="80vh" justifyContent="space-between">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <PaginationFilter
          onChange={selectedItem => {
            if (selectedItem) {
              setLimit(selectedItem);
            }
          }}
          items={[10, 20, 30, 40, 50]}
        />
        <Pagination
          current={currentPage}
          total={totalPages}
          onSelect={select => {
            setCurrentPage(select);
          }}
        />
        <PaginationDetail page={currentPage} limit={limit} length={length} />
      </Box>
    </Box>
  );
};
