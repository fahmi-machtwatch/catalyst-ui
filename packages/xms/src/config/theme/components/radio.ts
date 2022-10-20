import { radioAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import type { ComponentStyleConfig } from '@chakra-ui/theme';

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
const Radio: ComponentStyleConfig = {
  // The styles all checkbox have in common
  baseStyle: definePartsStyle({
    control: {
      _checked: {
        borderColor: 'primary.500',
        bg: 'white',
        _before: {
          h: '72%',
          w: '72%',
          bg: 'primary.500',
        },
        _hover: {
          borderColor: 'primary.500',
          bg: 'gray.200',
        },
      },
    },
  }),
  // Two sizes: sm and md
  sizes: {
    sm: definePartsStyle({
      control: {
        w: '12',
        h: '12',
      },
      label: {
        fontSize: 'sm',
      },
    }),
    md: definePartsStyle({
      control: {
        w: '16',
        h: '16',
      },
      label: {
        fontSize: 'md',
      },
    }),
  },
  // Two variants: outline and solid
  variants: {},
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'solid',
    orientation: 'vertical',
    colorScheme: 'primary',
  },
};

export default Radio;
