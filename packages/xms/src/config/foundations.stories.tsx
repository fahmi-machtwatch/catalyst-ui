import * as React from 'react';
import { Box, ChakraProvider, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { theme } from '.';

export default {
  title: 'XMS Component Kit/Foundation/Theme',
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Color = () => {
  const colors = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Stack>
          <SimpleGrid columns={10} spacing={4}>
            {colors.map(color => (
              <Box
                m={3}
                w={24}
                h={14}
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="lg"
                key={color}
                bg={`primary.${color}`}
              >
                <Text fontSize="2xs">primary.{color}</Text>
              </Box>
            ))}
          </SimpleGrid>
          <SimpleGrid columns={10} spacing={4}>
            {colors.map(color => (
              <Box
                m={3}
                w={24}
                h={14}
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="lg"
                key={color}
                bg={`secondary.${color}`}
              >
                <Text fontSize="2xs">secondary.{color}</Text>
              </Box>
            ))}
          </SimpleGrid>
          <SimpleGrid columns={10} spacing={4}>
            {colors.map(color => (
              <Box
                m={3}
                w={24}
                h={14}
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="lg"
                key={color}
                bg={`success.${color}`}
              >
                <Text fontSize="2xs">success.{color}</Text>
              </Box>
            ))}
          </SimpleGrid>
          <SimpleGrid columns={10} spacing={4}>
            {colors.map(color => (
              <Box
                m={3}
                w={24}
                h={14}
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="lg"
                key={color}
                bg={`danger.${color}`}
              >
                <Text fontSize="2xs">danger.{color}</Text>
              </Box>
            ))}
          </SimpleGrid>
          <SimpleGrid columns={10} spacing={4}>
            {colors.map(color => (
              <Box
                m={3}
                w={24}
                h={14}
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="lg"
                key={color}
                bg={`warning.${color}`}
              >
                <Text fontSize="2xs">warning.{color}</Text>
              </Box>
            ))}
          </SimpleGrid>
          <SimpleGrid columns={10} spacing={4}>
            {colors.map(color => (
              <Box
                m={3}
                w={24}
                h={14}
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="lg"
                key={color}
                bg={`info.${color}`}
              >
                <Text fontSize="2xs">info.{color}</Text>
              </Box>
            ))}
          </SimpleGrid>
          <SimpleGrid columns={10} spacing={4}>
            {colors.map(color => (
              <Box
                m={3}
                w={24}
                h={14}
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="lg"
                key={color}
                bg={`dark.${color}`}
              >
                <Text fontSize="2xs">dark.{color}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </ChakraProvider>
  );
};

export const Typography = () => {
  return (
    <ChakraProvider theme={theme}>
      <Stack py={4}>
        <Text textStyle="heading.1">heading.1 - Voila XMS Typograhpy - 28px / 700 / 56px</Text>
        <Text textStyle="heading.2">heading.2 - Voila XMS Typograhpy - 24px / 700 / 46px</Text>
        <Text textStyle="heading.3">heading.3 - Voila XMS Typograhpy - 20px / 700 / 40px</Text>
        <Text textStyle="heading.4">heading.4 - Voila XMS Typograhpy - 18px / 700 / 32px</Text>
        <Text textStyle="heading.5">heading.5 - Voila XMS Typograhpy - 16px / 700 / 24px</Text>
        <Text textStyle="heading.6">heading.6 - Voila XMS Typograhpy - 14px / 700 / 16px</Text>
      </Stack>
      <Stack py={4}>
        <Text textStyle="text.lg">text.lg - Voila XMS Typograhpy - 16px / 400 / 20px</Text>
        <Text textStyle="text.md">text.md - Voila XMS Typograhpy - 14px / 400 / 20px</Text>
        <Text textStyle="text.sm">text.sm - Voila XMS Typograhpy - 12px / 400 / 18px</Text>
      </Stack>
      <Stack py={4}>
        <Text textStyle="button.lg">button.lg - Voila XMS Typograhpy - 16px / 400 / 20px</Text>
        <Text textStyle="button.md">button.md - Voila XMS Typograhpy - 14px / 400 / 18px</Text>
        <Text textStyle="button.sm">button.sm - Voila XMS Typograhpy - 11px / 400 / 14px</Text>
      </Stack>
      <Stack py={4}>
        <Text textStyle="field.lg">field.lg - Voila XMS Typograhpy - 16px / 400 / 20px</Text>
        <Text textStyle="field.md">field.md - Voila XMS Typograhpy - 12px / 400 / 18px</Text>
        <Text textStyle="field.sm">field.sm - Voila XMS Typograhpy - 10px / 400 / 14px</Text>
      </Stack>
    </ChakraProvider>
  );
};

export const Spacing = () => {
  const spacing = [
    'px',
    0.5,
    1,
    1.5,
    2,
    2.5,
    3,
    3.5,
    4,
    4.5,
    5,
    6,
    7,
    8,
    9,
    10,
    12,
    14,
    16,
    18,
    20,
    22,
    24,
    26,
    28,
    30,
    32,
    36,
    40,
    44,
    48,
    52,
    56,
    60,
    64,
    72,
    80,
    96,
  ];

  return (
    <ChakraProvider theme={theme}>
      <Box>
        {spacing.map(space => (
          <Box key={space} display="flex" py={1} borderBottom="1px solid" borderColor="secondary.50">
            <Box w={10} mx={4}>
              {space}
            </Box>
            <Box w={16} mx={4}>
              {space === 'px' ? 1 : (space as number) * 4} px
            </Box>
            <Box w={space} h={4} bg="primary.100" m={1} />
          </Box>
        ))}
      </Box>
    </ChakraProvider>
  );
};
