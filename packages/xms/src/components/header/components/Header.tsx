import * as React from 'react';
import {
  Box,
  Button,
  Flex,
  useColorModeValue,
  Image,
  BoxProps,
  Badge,
  HStack,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  VStack,
  Text,
} from '@chakra-ui/react';

import { Environment } from '../types';
import { environmentName } from '../utils/formatter';

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
        <Image
          height={30}
          src={useColorModeValue(
            'https://assets.voila.id/xms/logo-xms.jpg',
            'https://assets.voila.id/xms/logo-xms-dark.png'
          )}
        />
        <HStack spacing={3} alignItems="center">
          <Image
            src="https://s3.ap-southeast-1.amazonaws.com/assets.voila.id/xms/logo-voila-black.png?v=1"
            filter={useColorModeValue('none', 'invert(1)')}
            maxW={100}
          />
          {version && (
            <Badge
              bg={useColorModeValue('secondary.50', 'secondary.800')}
              color={useColorModeValue('dark.500', 'secondary.400')}
              fontSize="0.75rem"
              p="4px 10px"
              fontWeight="bold"
              textTransform="lowercase"
              borderRadius="md"
            >
              {version}
            </Badge>
          )}
          <Box
            background="rgba(102, 16, 242, 0.12)"
            color="rgb(102, 16, 242)"
            fontSize="0.75rem"
            p="4px 10px"
            fontWeight="bold"
            borderRadius="md"
          >
            {environmentName(environment)}
          </Box>
        </HStack>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
              _hover={{ textDecor: 'none' }}
            >
              <HStack>
                <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-end" spacing="1px" ml="2">
                  <Text fontSize="sm" color={useColorModeValue('gray.600', 'white')}>
                    {email}
                  </Text>
                  <Text fontSize="xs" fontWeight="normal" color={useColorModeValue('success.600', 'success.400')}>
                    {userRole}
                  </Text>
                </VStack>
                <Avatar size={'sm'} src={'https://i.pravatar.cc/300?img=3'} />
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
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
