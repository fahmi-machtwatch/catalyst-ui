import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import PaginationButton from './PaginationButton';
import PaginationButtonTrigger from './PaginationButtonTrigger';

export interface PaginationProps {
  /** Additional CSS classes to give to the pagination. */
  className?: string;
  /** The current page number. */
  current: number;
  /** Total number of pages. */
  total: number;
  /**
   * Callback to run when a page number is selected. You can use this to e.g.
   * run setState on your component's page state.
   */
  onSelect?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ className, current, total, onSelect }) => {
  const disabledPrevious = current === 1;
  const previousButtonColor = disabledPrevious ? 'secondary.100' : 'primary.500';
  const disabledNext = current === total;
  const nextButtonColor = disabledNext ? 'secondary.100' : 'primary.500';

  const handleSelectPage = (page: number) => {
    if (onSelect) {
      onSelect(page);
    }
  };

  const generatePages = (): (number | string)[] => {
    const maxButtons = 5;
    const pageButtons: (number | string)[] = [];

    let startPage: number;
    let endPage: number;

    if (maxButtons && maxButtons < total) {
      startPage = Math.max(Math.min(current - Math.floor(maxButtons / 2), total - maxButtons + 1), 1);
      endPage = startPage + maxButtons - 1;
    } else {
      startPage = 1;
      endPage = total;
    }

    // eslint-disable-next-line no-plusplus
    for (let page = startPage; page <= endPage; ++page) {
      pageButtons.push(page);
    }

    return pageButtons;
  };

  return (
    <Box className={className} display="inline-flex" alignItems="center">
      <Box mr="5px">
        <PaginationButtonTrigger
          color={previousButtonColor}
          disabled={disabledPrevious}
          onClick={() => handleSelectPage(1)}
          visuallyHidden="First Page"
          icon={<ArrowLeftIcon width="8px" />}
        />
      </Box>
      <Box backgroundColor="secondary.50" borderRadius={50}>
        <PaginationButtonTrigger
          color={previousButtonColor}
          disabled={disabledPrevious}
          onClick={() => handleSelectPage(current - 1)}
          visuallyHidden="Previous Page"
          icon={<ChevronLeftIcon />}
        />
        {generatePages().map(page => {
          return (
            <PaginationButton
              key={page}
              isActive={page === current}
              onClick={() => (typeof page === 'number' ? handleSelectPage(page) : null)}
            >
              <Text scale={300} fontWeight={500}>
                {page}
              </Text>
            </PaginationButton>
          );
        })}
        <PaginationButtonTrigger
          color={nextButtonColor}
          disabled={disabledNext}
          onClick={() => handleSelectPage(current + 1)}
          visuallyHidden="Next Page"
          icon={<ChevronRightIcon />}
        />
      </Box>
      <Box ml="5px">
        <PaginationButtonTrigger
          color={nextButtonColor}
          disabled={disabledNext}
          onClick={() => handleSelectPage(total)}
          visuallyHidden="Last Page"
          icon={<ArrowRightIcon width="8px" />}
        />
      </Box>
    </Box>
  );
};

Pagination.defaultProps = {
  className: undefined,
  onSelect: undefined,
};

Pagination.displayName = 'Pagination';

export default Pagination;
