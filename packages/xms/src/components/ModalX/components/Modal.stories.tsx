import * as React from 'react';
import { Box, Button, ChakraProvider, FormLabel, Input, useDisclosure, VStack } from '@chakra-ui/react';

import { theme } from '../../../config/theme';
import { XMSProvider } from '../../../provider';

import Modal from './Modal';
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
  title: 'XMS Component Kit/Components/Modal',
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

export const ModalDefault = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader p="10px">Create Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody p="10px">
            <VStack spacing="20px" my="10px">
              <Box w="100%">
                <FormLabel>Name</FormLabel>
                <Input placeholder="Here is a sample placeholder" />
              </Box>
              <Box w="100%">
                <FormLabel>Address</FormLabel>
                <Input placeholder="Here is a sample placeholder" />
              </Box>
              <Box w="100%">
                <FormLabel>Email</FormLabel>
                <Input placeholder="Here is a sample placeholder" />
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter p="10px">
            <Button type="submit">Create</Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
