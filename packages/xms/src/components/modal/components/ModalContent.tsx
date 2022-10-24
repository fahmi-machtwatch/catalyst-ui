import React, { forwardRef } from 'react';
import { ModalContent as ChakraModalContent, ModalContentProps } from '@chakra-ui/react';

const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(({ children, ...rest }, ref) => {
  return (
    <ChakraModalContent ref={ref} {...rest}>
      {children}
    </ChakraModalContent>
  );
});

export default ModalContent;
