/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import * as React from 'react';
import { Box, Flex, Table, Tbody, Td, Th, Thead, Tr, Spinner, chakra } from '@chakra-ui/react';
import {
  ColumnDef,
  ColumnSort,
  SortingState,
  RowSelectionState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

const IndeterminateCheckbox = ({
  indeterminate,
  ...rest
}: { indeterminate?: boolean } & React.HTMLProps<HTMLInputElement>) => {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref.current && typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <Flex align="center">
      <input type="checkbox" ref={ref} {...rest} />
    </Flex>
  );
};

export type TableSize = 'sm' | 'md' | 'lg';

export interface DataTableProps {
  size?: TableSize;
  columns: ColumnDef<{}, any>[];
  dataSource: {}[] | undefined;
  isLoading?: boolean;
  selectedRow?: boolean;
  onSelectedRow?: (data: {}[]) => void;
  onSort?: (data: ColumnSort[] | ((prevState: SortingState) => SortingState)) => void | undefined;
}

const DataTable: React.FC<DataTableProps> = ({
  columns,
  dataSource,
  isLoading,
  selectedRow,
  onSelectedRow,
  onSort,
  size,
}) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
  const dataColumns = React.useMemo<ColumnDef<Record<string, never>>[]>(() => columns, [columns]);

  const checkboxColumn = {
    id: 'select',
    header: ({ table }: any) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }: any) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  };

  const generateColumn = () => {
    if (selectedRow) {
      return [checkboxColumn, ...dataColumns];
    }

    return dataColumns;
  };

  const handleSort = (data: ColumnSort[] | ((prevState: SortingState) => SortingState)) => {
    setSorting(data);
    if (onSort) {
      onSort(data);
    }
  };

  const table = useReactTable({
    data: dataSource ?? [],
    columns: generateColumn(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: handleSort,
    onRowSelectionChange: setRowSelection,
    manualPagination: true,
    sortDescFirst: true,
    state: {
      sorting,
      rowSelection,
    },
  });

  const { flatRows } = table.getSelectedRowModel();

  React.useEffect(() => {
    const rowData = flatRows.map(row => row.original);

    if (onSelectedRow) {
      onSelectedRow(rowData);
    }
  }, [flatRows]);

  return (
    <Box w="full" maxW="100%" overflowX="scroll" pos="relative" minH={400}>
      {isLoading && (
        <Flex w="100%" h="100%" pos="absolute" bg="white" align="center" justify="center" zIndex={2}>
          <Spinner color="primary.500" thickness="4px" size="lg" />
        </Flex>
      )}

      <Table size={size}>
        <Thead>
          {table.getHeaderGroups().map(headerGroup => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <Th key={header.id} colSpan={header.colSpan}>
                  <Flex
                    textTransform="capitalize"
                    userSelect="none"
                    align="center"
                    onClick={header.column.getToggleSortingHandler()}
                    cursor={header.column.getCanSort() ? 'pointer' : 'default'}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    <chakra.span pl="2">
                      {(header.column.getCanSort() &&
                        {
                          asc: <span>↑</span>,
                          desc: <span>↓</span>,
                        }[header.column.getIsSorted() as string]) ?? <span>↕</span>}
                    </chakra.span>
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>

        <Tbody>
          {table.getRowModel().rows.map(row => (
            <Tr key={row.id}>
              {row.getVisibleCells().map(cell => {
                return <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>;
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

DataTable.defaultProps = {
  selectedRow: false,
  size: 'md',
};

export default DataTable;
