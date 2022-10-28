import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../../../config/theme';
import { XMSProvider } from '../../../provider';
import Appbar from './Appbar';

export default {
  chakra: {
    theme,
  },
  title: 'Components/Appbar',
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

export const AppbarDefault = () => {
  return <Appbar version="v1.0.0" environment="DEVELOPMENT" email="fahmi@machtwatch.co.id" userRole="Super Admin" />;
};
