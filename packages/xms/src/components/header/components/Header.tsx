import * as React from 'react';
import { Box, Flex, useColorModeValue, BoxProps, HStack } from '@chakra-ui/react';

import { VoilaLogo, XMSLogo } from './Logo';
import Version from './Version';
import Profile from './Profile';

import { Environment } from '../types';

export type HeaderProps = BoxProps & {
  environment?: Environment;
  version?: string;
  email?: string;
  userRole?: string;
};

const Header: React.FC<HeaderProps> = ({ environment, version, email, userRole, ...props }) => (
  <>
    <Box
      bg={useColorModeValue('white', '#283046')}
      boxShadow="0 4px 20px 0 rgb(0 0 0 / 5%)"
      px="1.75rem"
      py="1.25rem"
      {...props}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <XMSLogo />
        <HStack spacing={3} alignItems="center">
          <VoilaLogo />
          <Version version={version} environment={environment} />
        </HStack>
        <Flex alignItems="center">
          <Profile email={email} userRole={userRole} />
        </Flex>
      </Flex>
    </Box>
  </>
);

Header.defaultProps = {
  environment: undefined,
  version: undefined,
  email: undefined,
  userRole: undefined,
};

export default Header;
