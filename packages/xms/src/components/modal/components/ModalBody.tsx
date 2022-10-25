import React, { forwardRef } from 'react';
import { ModalBody as ChakraModalBody, ModalBodyProps } from '@chakra-ui/react';

const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(({ children, ...rest }, ref) => {
  return (
    <ChakraModalBody ref={ref} {...rest}>
      {children}
    </ChakraModalBody>
  );
});

export default ModalBody;
