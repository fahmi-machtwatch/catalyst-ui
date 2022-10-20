import { extendTheme, ThemeConfig, ThemeOverride } from '@chakra-ui/react';

import * as components from './components';
import * as foundations from './foundations';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme(<ThemeOverride>{
  ...foundations,
  components: {
    ...components,
  },
  styles: {
    global: {
      '*::-webkit-scrollbar': {
        width: '4px',
      },
      '*::-webkit-scrollbar-track': {
        width: '6px',
      },
      '*::-webkit-scrollbar-thumb': {
        background: 'gray.500',
      },
    },
  },
  config,
});

type Theme = typeof theme;

export type { Theme };
export { theme };
