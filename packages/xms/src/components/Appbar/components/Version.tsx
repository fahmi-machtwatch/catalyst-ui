import * as React from 'react';
import { useColorModeValue, Badge, Box } from '@chakra-ui/react';

import { environmentName } from '../utils/formatter';
import { Environment } from '../types';

export type VersionProps = {
  environment?: Environment;
  version?: string;
};

const Version: React.FC<VersionProps> = ({ version, environment }) => (
  <>
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
  </>
);

Version.defaultProps = {
  environment: undefined,
  version: undefined,
};

export default Version;
