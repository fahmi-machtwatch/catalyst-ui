/* eslint-disable no-console */
import * as React from 'react';
import { Story } from '@storybook/react';
import { Button, Stack } from '@chakra-ui/react';

import { useAxios } from '../hooks';

export default {
  title: 'Account Platform',
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Provider: Story = () => {
  const { data, isLoading } = useAxios({
    url: '/users',
    method: 'GET',
  });
  console.dir(isLoading);
  console.dir(data);

  return (
    <Stack spacing={2}>
      <Button>button</Button>
      <Button>button 2</Button>
    </Stack>
  );
};
