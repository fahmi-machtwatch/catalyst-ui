import * as React from 'react';
import { Story } from '@storybook/react';
import { Box } from '@chakra-ui/react';

export default {
  title: 'Account Platform',
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Provider: Story = () => {
  return <Box>Account Platform</Box>;
};
