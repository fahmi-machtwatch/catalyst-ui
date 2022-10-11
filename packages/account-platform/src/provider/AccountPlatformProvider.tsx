import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { theme } from '../config/themeConfiguration';

type RequestInterceptors = (
  value: AxiosRequestConfig<unknown>
) => AxiosRequestConfig<unknown> | Promise<AxiosRequestConfig<unknown>>;

type ResponseInterceptors = (value: AxiosResponse<unknown>) => AxiosResponse<unknown> | Promise<AxiosResponse<unknown>>;

export type AccountPlatformProviderProps = {
  children?: React.ReactNode;
  config?: AxiosRequestConfig<unknown>;
  requestInterceptors?: RequestInterceptors[];
  responseInterceptors?: ResponseInterceptors[];
};

export type AccountPlatformContextObject = {
  instance?: AxiosInstance;
};

export const AccountPlatformContext = React.createContext<AccountPlatformContextObject>({
  instance: undefined,
});

export const useAccountPlatform = (): AccountPlatformContextObject => {
  const { instance } = React.useContext(AccountPlatformContext);
  return { instance };
};

const AccountPlatformProvider: React.FC<AccountPlatformProviderProps> = ({
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
    <AccountPlatformContext.Provider value={{ instance: instanceRef.current }}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </AccountPlatformContext.Provider>
  );
};

AccountPlatformProvider.defaultProps = {
  children: undefined,
  config: undefined,
  requestInterceptors: undefined,
  responseInterceptors: undefined,
};

AccountPlatformProvider.displayName = 'AccountPlatformProvider';

export default AccountPlatformProvider;
