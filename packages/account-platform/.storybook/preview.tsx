import * as React from 'react';

import { AccountPlatformProvider } from '../src';
import { theme } from '../src/config/themeConfiguration'

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
    ]
  },
};

export const decorators = [
  Story => (
    <AccountPlatformProvider config={{ baseURL: 'https://jsonplaceholder.typicode.com', headers: { Authorization: 'Bearer some-token' } }}>
      <Story />
    </AccountPlatformProvider>
  ),
];
