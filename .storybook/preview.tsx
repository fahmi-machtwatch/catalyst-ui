import * as React from 'react';

export const parameters = {
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
        value: '#565656',
      },
    ],
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Getting Started', 'Core', 'Foundations', 'Components'],
    },
  },
};

export const decorators = [Story => <Story />];
