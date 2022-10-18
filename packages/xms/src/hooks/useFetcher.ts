import * as React from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import { useXMSProvider } from '../provider';

export default function useFetcher() {
  const { instance } = useXMSProvider();

  const fetcher = async <TResponse = unknown>({ url, data, method, headers, ...config }: AxiosRequestConfig) => {
    const axiosInstance = React.useMemo(() => instance || axios, [instance]);
    const response = await axiosInstance.request<TResponse>({
      data,
      url,
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        ...headers,
      },
      ...config,
    });
    return response;
  };

  return {
    fetcher,
  };
}
