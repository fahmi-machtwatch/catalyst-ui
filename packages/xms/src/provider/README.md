# Provider

Wrap XMS Component with config, use this component if there are components hit into some endpoint

## Usage

### `<XMSProvider />`

To use this component in your app, import as follows:

```jsx
import { XMSProvider } from '@catalyst-ui-testing/xms';

export default function Component() {
  return (
    <XMSProvider>
      <SomeComponent />
    </XMSProvider>
  );
}
```

## Props

| Property             | Type                        | Required | Default   | Description                               |
| -------------------- | --------------------------- | -------- | --------- | ----------------------------------------- |
| children             | React.ReactNode             | -        | undefined | Children component                        |
| config               | AxiosRequestConfig<unknown> | -        | undefined | Any axios config like authorization, etc. |
| requestInterceptors  | RequestInterceptors[]       | -        | undefined | Request interceptors                      |
| responseInterceptors | ResponseInterceptors[]      | -        | undefined | Response interceptors                     |
