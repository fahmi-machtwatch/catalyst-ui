import * as React from 'react';
import {
  Box,
  useColorModeValue,
  BoxProps,
  Flex,
  Text,
  Icon,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Link,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import { NavigationLink } from '../types';

export type NavigationProps = BoxProps & {
  navigations?: NavigationLink[];
};

const Navigation: React.FC<NavigationProps> = ({ navigations, ...props }) => (
  <>
    <Box
      bg={useColorModeValue('white', '#283046')}
      boxShadow="0 4px 20px 0 rgb(0 0 0 / 5%)"
      borderRadius="md"
      p="0.5rem"
      {...props}
    >
      <HStack spacing={5}>
        <Flex alignItems="center">
          {navigations?.map(navigation => (
            <Popover key={navigation.title} trigger="hover" placement="bottom-start">
              {({ isOpen }) => (
                <>
                  <PopoverTrigger>
                    <Link
                      display="flex"
                      alignItems="center"
                      borderRadius="md"
                      _hover={{ backgroundColor: '#f8f8f8' }}
                      backgroundColor={isOpen ? '#f8f8f8' : undefined}
                      p="4px 8px"
                      href={navigation.href}
                    >
                      <Icon as={navigation.icon} mr="0.75rem" />
                      <Text>{navigation.title}</Text>
                      <ChevronDownIcon ml={2} />
                    </Link>
                  </PopoverTrigger>
                  {navigation.children && (
                    <PopoverContent
                      key={navigation.title}
                      maxW={250}
                      border="none"
                      boxShadow="0 5px 25px rgb(0 0 0 / 10%)"
                    >
                      {navigation.children.map(subNavigation => (
                        <Link
                          key={subNavigation.title}
                          display="flex"
                          alignItems="center"
                          _hover={{ backgroundColor: '#f8f8f8', color: 'primary.500' }}
                          p="0.7rem 1rem"
                          href={subNavigation.title}
                        >
                          <Icon as={subNavigation.icon} mr="0.75rem" />
                          <Text fontSize="sm">{subNavigation.title}</Text>
                        </Link>
                      ))}
                    </PopoverContent>
                  )}
                </>
              )}
            </Popover>
          ))}
        </Flex>
      </HStack>
    </Box>
  </>
);

Navigation.defaultProps = {
  navigations: undefined,
};

export default Navigation;
