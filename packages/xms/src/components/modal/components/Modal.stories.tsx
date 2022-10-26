import * as React from 'react';
import { Box, Button, ChakraProvider, useDisclosure, VStack } from '@chakra-ui/react';

import { theme } from '../../../config/theme';
import { XMSProvider } from '../../../provider';

import ModalComponent from './Modal';
import ModalBody from './ModalBody';
import ModalCloseButton from './ModalCloseButton';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalOverlay from './ModalOverlay';

export default {
  chakra: {
    theme,
  },
  title: 'XMS',
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

export const Modal = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <ModalComponent isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader p="10px">Create Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody p="10px">
            <VStack spacing="20px" my="10px" align="flex-start">
              <Box>Inner Modal</Box>
              <Box>Inner Modal</Box>
              <Box>Inner Modal</Box>
            </VStack>
          </ModalBody>
          <ModalFooter p="10px">
            <Button type="submit">Create</Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalComponent>
    </>
  );
};
