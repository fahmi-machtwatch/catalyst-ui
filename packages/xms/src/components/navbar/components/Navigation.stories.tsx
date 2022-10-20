import * as React from 'react';

import { theme } from '../../../config/theme';
import { XMSProvider } from '../../../provider';
import NavbarComponent from './Navigation';

export default {
  chakra: {
    theme,
  },
  title: 'XMS',
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Navigation = () => {
  return (
    <XMSProvider>
      <NavbarComponent />
    </XMSProvider>
  );
};
