import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Dict } from '@chakra-ui/utils';

type RequestInterceptors = (
  value: AxiosRequestConfig<unknown>
) => AxiosRequestConfig<unknown> | Promise<AxiosRequestConfig<unknown>>;

type ResponseInterceptors = (value: AxiosResponse<unknown>) => AxiosResponse<unknown> | Promise<AxiosResponse<unknown>>;

type XMSProviderConfig = {
  instance?: AxiosRequestConfig<unknown>;
  theme?: Dict<unknown>;
};

export type XMSProviderProps = {
  children?: React.ReactNode;
  config?: XMSProviderConfig;
  requestInterceptors?: RequestInterceptors[];
  responseInterceptors?: ResponseInterceptors[];
};

export type XMSProviderContextObject = {
  instance?: AxiosInstance;
};
