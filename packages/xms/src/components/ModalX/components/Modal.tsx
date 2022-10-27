import React, { FC } from 'react';
import { Modal as ChakraModal, ModalProps } from '@chakra-ui/react';

const Modal: FC<ModalProps> = ({ children, ...rest }) => {
  return (
    <ChakraModal scrollBehavior="inside" {...rest}>
      {children}
    </ChakraModal>
  );
};

export default Modal;
