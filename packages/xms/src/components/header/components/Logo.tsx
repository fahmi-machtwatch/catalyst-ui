import * as React from 'react';
import { useColorModeValue, Image } from '@chakra-ui/react';

export const XMSLogo = () => (
  <Image
    height={30}
    src={useColorModeValue('https://assets.voila.id/xms/logo-xms.jpg', 'https://assets.voila.id/xms/logo-xms-dark.png')}
  />
);

export const VoilaLogo = () => (
  <Image
    src="https://s3.ap-southeast-1.amazonaws.com/assets.voila.id/xms/logo-voila-black.png?v=1"
    filter={useColorModeValue('none', 'invert(1)')}
    maxW={100}
  />
);
