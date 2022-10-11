import * as React from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import { useAccountPlatform } from '../provider';

const useAxios = <TResponse = unknown>({ url, data: body, method, headers, ...config }: AxiosRequestConfig) => {
  const { instance } = useAccountPlatform();
  const [data, setData] = React.useState<TResponse | null>(null);
  const [error, setError] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const axiosInstance = React.useMemo(() => instance || axios, [instance]);
  const controllerRef = React.useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  React.useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.request({
          signal: controllerRef.current.signal,
          data: body,
          url,
          method,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            ...headers,
          },
          ...config,
        });
        setData(response?.data);
      } catch (err) {
        setError((err as { message: string }).message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { cancel, data, error, isLoading };
};

export default useAxios;
