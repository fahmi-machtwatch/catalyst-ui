import * as React from 'react';

import { theme } from '../../../config/theme';
import { XMSProvider } from '../../../provider';
import HeaderComponent from './Header';

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

export const Header = () => {
  return (
    <XMSProvider>
      <HeaderComponent
        version="v1.0.0"
        environment="DEVELOPMENT"
        email="fahmi@machtwatch.co.id"
        userRole="Super Admin"
      />
    </XMSProvider>
  );
};
