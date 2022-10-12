/* eslint-disable no-console */
import * as React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
} from '@chakra-ui/react';
import axios from 'axios';

import { UserAddress } from './types';
import { Actions } from '../../interfaces/common';

type UpdateAddressProps = Actions & {
  user?: UserAddress;
  isOpen: boolean;
  onClose: () => void;
};

const UpdateAddress: React.FC<UpdateAddressProps> = ({ isOpen, onClose, user, actions }) => {
  const [name, setName] = React.useState<string>('');
  const [address, setAddress] = React.useState<string>('');

  const onUpdateAddress = React.useCallback(
    (updatedName: string, updatedAddress: string, userAddressData?: UserAddress) => {
      axios({
        baseURL: 'http://188.166.209.178:8080',
        method: actions?.onUpdate?.method,
        url: `${actions?.onUpdate?.path as string}/${userAddressData?.id}`,
        data: { name: updatedName, address: updatedAddress },
      })
        .then(response => {
          onClose();
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    [axios]
  );

  React.useEffect(() => {
    if (user) {
      setName(user.name);
      setAddress(user.address);
    }
  }, [user]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Address</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={name} onChange={e => setName(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={address} onChange={e => setAddress(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" onClick={() => onUpdateAddress(name, address, user)}>
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

UpdateAddress.defaultProps = {
  user: undefined,
};

export default UpdateAddress;
