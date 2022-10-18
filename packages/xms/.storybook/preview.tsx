import * as React from 'react';

import { XMSProvider } from '../src';
import { theme } from '../src/config/themeConfiguration';

export const parameters = {
  chakra: {
    theme,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'base',
    values: [
      {
        name: 'base',
        value: '#fff',
      },
      {
        name: 'dark',
        value: '#b6b2b2',
      },
    ],
  },
};

export const decorators = [
  Story => (
    <XMSProvider>
      <Story />
    </XMSProvider>
  ),
];
