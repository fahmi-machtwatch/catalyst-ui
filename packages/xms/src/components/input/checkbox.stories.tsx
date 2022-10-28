import * as React from 'react';
import {
  ChakraProvider,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';

import { CheckIcon, PhoneIcon, SearchIcon } from '@chakra-ui/icons';
import { theme } from '../../config/theme';
import { XMSProvider } from '../../provider';

export default {
  chakra: {
    theme,
  },
  title: 'Components/Base/Input',
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

export const InputDefault = () => {
  return (
    <Stack spacing={3} py={4}>
      <Input />;
    </Stack>
  );
};

export const InputSize = () => {
  return (
    <Stack spacing={3} py={4}>
      <Input size="sm" placeholder="Input Size Small" />
      <Input size="md" placeholder="Input Size Medium (default)" />
      <Input size="lg" placeholder="Input Size Large" />
    </Stack>
  );
};

export const InputVariant = () => {
  return (
    <Stack spacing={3} py={4}>
      <Input variant="outline" placeholder="Outline" />
      <Input variant="unstyled" placeholder="Unstyled" />
    </Stack>
  );
};

export const InputAddon = () => {
  return (
    <Stack spacing={3} py={4}>
      <InputGroup>
        <InputLeftAddon>+62</InputLeftAddon>
        <Input type="tel" placeholder="phone number" />
      </InputGroup>
      <InputGroup>
        <Input placeholder="email" />
        <InputRightAddon>@catalyst.id</InputRightAddon>
      </InputGroup>
      {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
      <InputGroup size="md">
        <InputLeftAddon>http://</InputLeftAddon>
        <Input placeholder="mysite" />
        <InputRightAddon>.com</InputRightAddon>
      </InputGroup>
    </Stack>
  );
};

export const InputWithIcon = () => {
  return (
    <Stack spacing={3} p={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <PhoneIcon color="gray.300" />
        </InputLeftElement>
        <Input type="tel" placeholder="Phone number" />
      </InputGroup>

      <InputGroup>
        <Input placeholder="Search" />
        <InputRightElement>
          <SearchIcon color="green.500" />
        </InputRightElement>
      </InputGroup>

      <InputGroup>
        <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
          $
        </InputLeftElement>
        <Input placeholder="Enter amount" />
        <InputRightElement>
          <CheckIcon color="green.500" />
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};

export const InputCustomize = () => {
  return (
    <Stack spacing={3} p={4}>
      <Input focusBorderColor="lime" placeholder="Here is a sample placeholder" />
      <Input focusBorderColor="pink.400" placeholder="Here is a sample placeholder" />
      <Input isInvalid errorBorderColor="red.300" placeholder="Here is a sample placeholder" />
      <Input isInvalid errorBorderColor="crimson" placeholder="Here is a sample placeholder" />
    </Stack>
  );
};
