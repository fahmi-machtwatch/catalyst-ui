/* eslint-disable no-console */
import * as React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
  HStack,
  Button,
  Stack,
  Skeleton,
} from '@chakra-ui/react';

import UpdateAddress from '../update-address';
import { UserAddress } from '../update-address/types';
import { Actions, Response } from '../../interfaces/common';

import { useAxios } from '../../hooks';

type UsersListProps = Actions;

const UsersList: React.FC<UsersListProps> = ({ actions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUpdatedUser] = React.useState<UserAddress>();
  const { data } = useAxios<Response<UserAddress[]>>({
    url: actions?.onLoad,
    method: 'GET',
  });

  const onOpenUpdateAddress = (item: UserAddress) => {
    setUpdatedUser(item);
    onOpen();
  };

  if (data) {
    return (
      <>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Address</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.data.map(item => (
                <Tr key={item.id}>
                  <Td>{item.name}</Td>
                  <Td>{item.address}</Td>
                  <Td>
                    <HStack>
                      <Button onClick={() => onOpenUpdateAddress(item)}>Update</Button>
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <UpdateAddress
          isOpen={isOpen}
          onClose={onClose}
          user={user}
          actions={{ onUpdate: { method: 'PUT', path: `/api/resellers` } }}
        />
      </>
    );
  }

  return (
    <Stack>
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};

export default UsersList;
