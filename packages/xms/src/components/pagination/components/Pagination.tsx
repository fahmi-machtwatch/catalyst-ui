/* eslint-disable react/require-default-props */
import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import PaginationButton from './PaginationButton';
import PaginationButtonTrigger from './PaginationButtonTrigger';

export interface PaginationProps {
  /** Additional CSS classes to give to the pagination. */
  className?: string;
  /** Additional CSS properties to give to the pagination. */
  // eslint-disable-next-line react/no-unused-prop-types
  style?: React.CSSProperties;
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

class Pagination extends React.Component<PaginationProps> {
  static displayName = 'Pagination';

  constructor(props: PaginationProps) {
    super(props);

    this.generatePages = this.generatePages.bind(this);
    this.handleSelectPage = this.handleSelectPage.bind(this);
  }

  handleSelectPage(page: number) {
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(page);
    }
  }

  generatePages(): (number | string)[] {
    const { total, current } = this.props;
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
  }

  render() {
    const { current, className, total } = this.props;
    const pages = this.generatePages();
    const firstPageCondition = current === 1;
    const firstPageColor = firstPageCondition ? 'secondary.100' : 'primary.500';
    const lastPageCondition = current === total;
    const lastPageColor = lastPageCondition ? 'secondary.100' : 'primary.500';

    return (
      <Box className={className} display="inline-flex" alignItems="center">
        <Box mr="5px">
          <PaginationButtonTrigger
            color={firstPageColor}
            disabled={firstPageCondition}
            onClick={() => this.handleSelectPage(1)}
            visuallyHidden="First Page"
            icon={<ArrowLeftIcon width="8px" />}
          />
        </Box>
        <Box backgroundColor="secondary.50" borderRadius={50}>
          <PaginationButtonTrigger
            color={firstPageColor}
            disabled={firstPageCondition}
            onClick={() => this.handleSelectPage(current - 1)}
            visuallyHidden="Previous Page"
            icon={<ChevronLeftIcon />}
          />
          {pages.map(page => {
            return (
              <PaginationButton
                key={page}
                isActive={page === current}
                onClick={() => (typeof page === 'number' ? this.handleSelectPage(page) : null)}
              >
                <Text scale={300} fontWeight={500}>
                  {page}
                </Text>
              </PaginationButton>
            );
          })}
          <PaginationButtonTrigger
            color={lastPageColor}
            disabled={lastPageCondition}
            onClick={() => this.handleSelectPage(current + 1)}
            visuallyHidden="Next Page"
            icon={<ChevronRightIcon />}
          />
        </Box>
        <Box ml="5px">
          <PaginationButtonTrigger
            color={lastPageColor}
            disabled={lastPageCondition}
            onClick={() => this.handleSelectPage(total)}
            visuallyHidden="Last Page"
            icon={<ArrowRightIcon width="8px" />}
          />
        </Box>
      </Box>
    );
  }
}

export default Pagination;
