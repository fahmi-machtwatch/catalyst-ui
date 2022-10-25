import React, { forwardRef } from 'react';
import { ModalHeader as ChakraModalHeader, ModalHeaderProps } from '@chakra-ui/react';

const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(({ children, ...rest }, ref) => {
  return (
    <ChakraModalHeader ref={ref} background="gray.100" borderTopRadius={'md'} {...rest}>
      {children}
    </ChakraModalHeader>
  );
});

export default ModalHeader;
