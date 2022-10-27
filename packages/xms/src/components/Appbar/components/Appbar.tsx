import * as React from 'react';
import { Box, Flex, useColorModeValue, BoxProps, HStack } from '@chakra-ui/react';

import { VoilaLogo, XMSLogo } from './Logo';
import Version from './Version';
import Profile from './Profile';

import { Environment } from '../types';

export type NavbarProps = BoxProps & {
  environment?: Environment;
  version?: string;
  email?: string;
  userRole?: string;
};

const Navbar: React.FC<NavbarProps> = ({ environment, version, email, userRole, ...props }) => (
  <Box
    h={14}
    bg={useColorModeValue('white', '#283046')}
    boxShadow="0 4px 20px 0 rgb(0 0 0 / 5%)"
    px={4}
    py={1}
    {...props}
  >
    <Flex h={14} alignItems="center" justifyContent="space-between">
      <XMSLogo />
      <HStack spacing={2} alignItems="center">
        <VoilaLogo />
        <Version version={version} environment={environment} />
      </HStack>
      <Flex alignItems="center">
        <Profile email={email} userRole={userRole} />
      </Flex>
    </Flex>
  </Box>
);

Navbar.defaultProps = {
  environment: undefined,
  version: undefined,
  email: undefined,
  userRole: undefined,
};

export default Navbar;
