import React, { forwardRef } from 'react';
import { ModalFooter as ChakraModalFooter, ModalFooterProps } from '@chakra-ui/react';

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(({ children, ...rest }, ref) => {
  return (
    <ChakraModalFooter ref={ref} display="flex" justifyContent="flex-start" {...rest}>
      {children}
    </ChakraModalFooter>
  );
});

export default ModalFooter;
