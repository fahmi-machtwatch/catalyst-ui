import * as React from 'react';
import {
  Button,
  useColorModeValue,
  HStack,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  VStack,
  Text,
} from '@chakra-ui/react';

export type ProfileProps = {
  email?: string;
  userRole?: string;
  onLogout?: () => void;
};

const Profile: React.FC<ProfileProps> = ({ email, userRole, onLogout }) => (
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
      <MenuItem onClick={onLogout}>Logout</MenuItem>
    </MenuList>
  </Menu>
);

Profile.defaultProps = {
  email: undefined,
  userRole: undefined,
  onLogout: undefined,
};

export default Profile;
