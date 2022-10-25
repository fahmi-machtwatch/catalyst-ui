import React, { forwardRef } from 'react';
import { ModalOverlay as ChakraModalOverlay, ModalOverlayProps } from '@chakra-ui/react';

const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(({ children, ...rest }, ref) => {
  return (
    <ChakraModalOverlay ref={ref} {...rest}>
      {children}
    </ChakraModalOverlay>
  );
});

export default ModalOverlay;
