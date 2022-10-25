import * as React from 'react';
import { Box, ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import axios from 'axios';
import { Dict } from '@chakra-ui/utils';

import { theme } from '../config/theme';
import { XMSProviderContextObject, XMSProviderProps } from './types';

export const XMSProviderContext = React.createContext<XMSProviderContextObject>({
  instance: undefined,
});

export const useXMSProvider = (): XMSProviderContextObject => {
  const { instance } = React.useContext(XMSProviderContext);
  return { instance };
};

const XMSProvider: React.FC<XMSProviderProps> = ({ children, config, requestInterceptors, responseInterceptors }) => {
  const instanceRef = React.useRef(axios.create(config?.instance));

  React.useEffect(() => {
    requestInterceptors?.forEach(interceptor => {
      instanceRef.current.interceptors.request.use(interceptor);
    });
    responseInterceptors?.forEach(interceptor => {
      instanceRef.current.interceptors.response.use(interceptor);
    });
  }, []);

  return (
    <XMSProviderContext.Provider value={{ instance: instanceRef.current }}>
      <ChakraProvider theme={extendTheme(theme, config?.theme as Dict<unknown>)} cssVarsRoot="#xms">
        <Box id="xms">
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {children}
        </Box>
      </ChakraProvider>
    </XMSProviderContext.Provider>
  );
};

XMSProvider.displayName = 'XMSProvider';

export default XMSProvider;
