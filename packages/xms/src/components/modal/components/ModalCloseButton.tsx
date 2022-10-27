import React, { forwardRef } from 'react';
import { ModalCloseButton as ChakraModalCloseButton } from '@chakra-ui/react';

const ModalCloseButton = forwardRef<HTMLButtonElement>((_props, ref) => {
  return (
    <ChakraModalCloseButton
      ref={ref}
      position="absolute"
      background="white"
      right={-3}
      top={-3}
      boxShadow="0 5px 20px 0 rgb(0 0 0 / 10%)"
      transition="all 0.2 ease-in-out"
      _hover={{
        transform: 'translate(0px, 12px)',
        boxShadow: 'none',
      }}
    />
  );
});
export default ModalCloseButton;
