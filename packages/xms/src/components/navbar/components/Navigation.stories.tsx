import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi';

import { theme } from '../../../config/theme';
import { XMSProvider } from '../../../provider';
import NavigationComponent from './Navigation';

export default {
  chakra: {
    theme,
  },
  title: 'XMS',
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

export const Navigation = () => {
  return (
    <NavigationComponent
      navigations={[
        {
          title: 'Order',
          icon: FiShoppingBag,
          href: '/order',
          children: [
            {
              title: 'Order',
              icon: FiShoppingBag,
              href: '/order',
            },
            {
              title: 'Order Reseller',
              icon: FiShoppingBag,
              href: '/order/reseller',
            },
            {
              title: 'Order Retur',
              icon: FiShoppingBag,
              href: '/order/retur',
            },
          ],
        },
        {
          title: 'Fulfillment',
          icon: FiShoppingCart,
          href: '/fulfillment',
          children: [
            {
              title: 'Fulfillment',
              icon: FiShoppingCart,
              href: '/fulfillment',
            },
          ],
        },
      ]}
    />
  );
};
