import type { ComponentStyleConfig } from '@chakra-ui/theme';

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    fontSize: 'body.1',
    margin: 4,
    lineHeight: '1.25',
    minW: 104,
    _disabled: {
      borderColor: 'neutral.sm',
      color: 'neutral.sm',
      bg: 'neutral.7',
    },
    _hover: {
      _disabled: {
        bg: 'neutral.7',
      },
    },
    _active: {
      _disabled: {
        borderColor: 'neutral.sm',
        bg: 'neutral.7',
      },
    },
  },
  // Two sizes: sm and md
  sizes: {
    lg: {
      h: 46,
      minW: 104,
      px: 16,
      py: 12,
      borderRadius: 'md',
    },
    md: {
      h: 38,
      minW: 104,
      px: 16,
      py: 12,
      borderRadius: 'md',
    },
    sm: {
      h: 30,
      minW: 104,
      px: 16,
      py: 8,
      borderRadius: 'md',
    },
  },
  // Two variants: outline and solid
  variants: {
    solid: {},
    outline: {
      borderWidth: 2,
      borderStyle: 'inside',
    },
    ghost: {},
    link: {
      bg: 'transparent',
      color: 'primary.500',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'solid',
    orientation: 'vertical',
    colorScheme: 'primary',
  },
};

export default Button;
