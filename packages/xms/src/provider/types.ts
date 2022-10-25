import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
