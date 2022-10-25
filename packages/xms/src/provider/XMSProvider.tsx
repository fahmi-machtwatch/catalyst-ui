import * as React from 'react';
import axios from 'axios';

import { XMSProviderContextObject, XMSProviderProps } from './types';

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
    <XMSProviderContext.Provider value={{ instance: instanceRef.current }}>{children}</XMSProviderContext.Provider>
  );
};

XMSProvider.displayName = 'XMSProvider';

export default XMSProvider;
