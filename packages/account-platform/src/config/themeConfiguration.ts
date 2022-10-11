import { extendTheme, theme as baseTheme, ThemeOverride } from '@chakra-ui/react';

export const colors = {
  primary: '#f68523',
  secondary: '#f6ba22',
};

const theme = extendTheme(<ThemeOverride>{
  components: {
    Button: {
      defaultProps: {
        size: 'sm',
      },
      variants: {
        primary: () => ({
          bg: 'primary',
          color: baseTheme.colors.white,
        }),
        danger: () => ({
          bg: 'red',
          color: 'white',
        }),
      },
    },
    Switch: {
      defaultProps: {
        colorScheme: 'orange',
      },
    },
  },
  colors: { ...colors },
});

type Theme = typeof theme;

export type { Theme };
export { theme };
