import * as React from 'react';
import { Box, useColorModeValue, BoxProps } from '@chakra-ui/react';

export type NavigationProps = BoxProps;

const Navigation: React.FC<NavigationProps> = ({ ...props }) => (
  <>
    <Box
      bg={useColorModeValue('white', '#283046')}
      boxShadow="0 4px 20px 0 rgb(0 0 0 / 5%)"
      px="1.75rem"
      py="1.25rem"
      {...props}
    >
      Navigation
    </Box>
  </>
);

export default Navigation;
