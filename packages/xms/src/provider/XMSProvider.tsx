import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { theme } from '../config/themeConfiguration';

type RequestInterceptors = (
  value: AxiosRequestConfig<unknown>
) => AxiosRequestConfig<unknown> | Promise<AxiosRequestConfig<unknown>>;

type ResponseInterceptors = (value: AxiosResponse<unknown>) => AxiosResponse<unknown> | Promise<AxiosResponse<unknown>>;

export type XMSProviderProviderProps = {
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

const XMSProviderProvider: React.FC<XMSProviderProviderProps> = ({
  children,
  config,
  requestInterceptors,
  responseInterceptors,
}) => {
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
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </XMSProviderContext.Provider>
  );
};

XMSProviderProvider.defaultProps = {
  children: undefined,
  config: undefined,
  requestInterceptors: undefined,
  responseInterceptors: undefined,
};

XMSProviderProvider.displayName = 'XMSProviderProvider';

export default XMSProviderProvider;
