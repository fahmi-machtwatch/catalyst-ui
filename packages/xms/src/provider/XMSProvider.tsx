import * as React from 'react';
import { Box, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { theme } from '../config/theme';

type RequestInterceptors = (
  value: AxiosRequestConfig<unknown>
) => AxiosRequestConfig<unknown> | Promise<AxiosRequestConfig<unknown>>;

type ResponseInterceptors = (value: AxiosResponse<unknown>) => AxiosResponse<unknown> | Promise<AxiosResponse<unknown>>;

export type XMSProviderProps = {
  children?: React.ReactNode;
  config?: AxiosRequestConfig<unknown>;
  requestInterceptors?: RequestInterceptors[];
  responseInterceptors?: ResponseInterceptors[];
};

export type XMSProviderContextObject = {
  instance?: AxiosInstance;
};

export const XMSProviderContext = React.createContext<XMSProviderContextObject>({
  instance: undefined,
});

export const useXMSProvider = (): XMSProviderContextObject => {
  const { instance } = React.useContext(XMSProviderContext);
  return { instance };
};

const XMSProvider: React.FC<XMSProviderProps> = ({ children, config, requestInterceptors, responseInterceptors }) => {
  const instanceRef = React.useRef(axios.create(config));

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
      <ChakraProvider theme={theme} cssVarsRoot="#xms">
        <Box id="xms">
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {children}
        </Box>
      </ChakraProvider>
    </XMSProviderContext.Provider>
  );
};

XMSProvider.defaultProps = {
  children: undefined,
  config: undefined,
  requestInterceptors: undefined,
  responseInterceptors: undefined,
};

XMSProvider.displayName = 'XMSProvider';

export default XMSProvider;
