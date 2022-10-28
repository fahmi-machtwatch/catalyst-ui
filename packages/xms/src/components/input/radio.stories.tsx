import * as React from 'react';
import { ChakraProvider, Radio, RadioGroup, Stack } from '@chakra-ui/react';

import { theme } from '../../config/theme';
import { XMSProvider } from '../../provider';

export default {
  chakra: {
    theme,
  },
  title: 'Components/Base/Radio',
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

export const RadioDefault = () => {
  return (
    <Stack spacing={3} py={4}>
      <Radio />;
    </Stack>
  );
};

export const RadioExample = () => {
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </Stack>
    </RadioGroup>
  );
};

export const RadioSize = () => {
  return (
    <Stack spacing={3} py={4}>
      <Radio size="sm" />
      <Radio size="md" />
      <Radio size="lg" />
    </Stack>
  );
};

export const RadioCustomColor = () => {
  return (
    <RadioGroup defaultValue="2">
      <Stack spacing={5} direction="row">
        <Radio colorScheme="danger" value="1">
          Radio
        </Radio>
        <Radio colorScheme="primary" value="2">
          Radio
        </Radio>
      </Stack>
    </RadioGroup>
  );
};

export const RadioDisabled = () => {
  return (
    <RadioGroup>
      <Stack direction="row">
        <Radio value="1" isDisabled>
          First
        </Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </Stack>
    </RadioGroup>
  );
};

export const RadioHorizontal = () => {
  return (
    <RadioGroup defaultValue="1">
      <Stack spacing={4} direction="row">
        <Radio value="1" isDisabled>
          Radio 1
        </Radio>
        <Radio value="2">Radio 2</Radio>
        <Radio value="3">Radio 3</Radio>
      </Stack>
    </RadioGroup>
  );
};
