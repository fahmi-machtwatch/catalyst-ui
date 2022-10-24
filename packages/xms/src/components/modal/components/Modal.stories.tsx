import { Button, useDisclosure } from '@chakra-ui/react';
import * as React from 'react';

import { theme } from '../../../config/theme';
import { XMSProvider } from '../../../provider';
import ModalComp from './Modal';
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
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Modal = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <XMSProvider>
      <Button onClick={onOpen}>Open Modal</Button>
      <ModalComp isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody p="20px">Inner Modal</ModalBody>
          <ModalFooter>
            <Button type="submit">Create</Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalComp>
    </XMSProvider>
  );
};
