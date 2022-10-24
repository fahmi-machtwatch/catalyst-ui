import React, { forwardRef } from 'react';
import { ModalCloseButton as ChakraModalCloseButton } from '@chakra-ui/react';

const ModalCloseButton = forwardRef<HTMLButtonElement>((_props, ref) => {
  return (
    <ChakraModalCloseButton
      ref={ref}
      position="absolute"
      background="white"
      right={-10}
      top={-3}
      boxShadow="0 5px 20px 0 rgb(0 0 0 / 10%)"
      _hover={{
        right: -2,
        top: -1,
        transition: 'all 0.2s ease-in-out',
      }}
    />
  );
});
export default ModalCloseButton;
