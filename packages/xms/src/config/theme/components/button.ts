import type { ComponentStyleConfig } from '@chakra-ui/theme';

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    fontSize: 'body.1',
    margin: 4,
    lineHeight: '1.25',
    minW: 24,
    px: 4,
    py: 3,
    borderRadius: 'md',
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
      h: 12,
    },
    md: {
      h: 9,
    },
    sm: {
      h: 8,
    },
  },
  // Two variants: outline and solid
  variants: {
    solid: {
      color: 'white',
      bg: 'primary.500',
    },
    outline: {
      color: 'primary.500',
      borderWidth: 2,
      borderStyle: 'inside',
      borderColor: 'primary.500',
    },
    ghost: {
      color: 'primary.500',
    },
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
