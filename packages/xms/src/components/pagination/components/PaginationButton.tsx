import React from 'react';
import { Button, ButtonProps, forwardRef } from '@chakra-ui/react';

export interface PaginationButtonProps {
  isActive?: boolean;
}

const PaginationButton = forwardRef<ButtonProps, 'button'>(({ className, style, isActive, children, ...rest }, ref) => {
  return (
    <Button
      ref={ref}
      className={className}
      borderRadius={50}
      fontWeight={700}
      m={0}
      p={3}
      h={30}
      style={style}
      minW="auto"
      background={isActive ? 'primary.500' : 'secondary.50'}
      color={isActive ? 'white' : 'black'}
      _hover={!isActive ? { background: 'secondary.50', color: 'primary.500' } : {}}
      _disabled={{ background: 'secondary.50', pointerEvents: 'none' }}
      {...rest}
    >
      {children}
    </Button>
  );
});

PaginationButton.displayName = 'PaginationButton';

PaginationButton.defaultProps = {
  isActive: undefined,
};

export default PaginationButton;