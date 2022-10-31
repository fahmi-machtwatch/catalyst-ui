import * as React from 'react';
import { ChakraProvider, Button, Switch } from '@chakra-ui/react';

import { XMSProvider } from '../../../provider';
import { theme } from '../../../config/theme';
import DataTableComponents from './DataTable';

export default {
  title: 'Components/Data Table',
  chakra: {
    theme,
  },
  component: DataTableComponents,
  argTypes: {
    selectedRow: {
      options: [true, false],
      control: { type: 'select' },
    },
  },
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

const columns = [
  {
    accessorKey: 'collection',
    header: 'Collection',
    enableSorting: false,
  },
  {
    accessorKey: 'tags',
    header: () => 'Tags',
    enableSorting: true,
  },
  {
    accessorKey: 'stocks',
    header: 'Stocks',
    enableSorting: false,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: () => <Switch />,
    enableSorting: false,
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: () => <Button size="xs">...</Button>,
    enableSorting: false,
  },
];

const data = [
  {
    collection: 'Men',
    tags: 'Shoes',
    stocks: 'unlimited',
    status: 'active',
  },
  {
    collection: 'Women',
    tags: 'T-Shirt',
    stocks: 'unlimited',
    status: 'active',
  },
  {
    collection: 'Kids',
    tags: 'Hat',
    stocks: 'unlimited',
    status: 'active',
  },
  {
    collection: 'Hermes',
    tags: 'Bag',
    stocks: 'unlimited',
    status: 'active',
  },
];

export const DataTableDefault = ({ ...args }) => {
  return (
    <XMSProvider>
      <DataTableComponents {...args} columns={columns} dataSource={data} />
    </XMSProvider>
  );
};

DataTableDefault.bind({
  selectedRow: false,
});

export const DataTableSelectedRow = ({ ...args }) => {
  return (
    <XMSProvider>
      <DataTableComponents {...args} columns={columns} dataSource={data} selectedRow />
    </XMSProvider>
  );
};
