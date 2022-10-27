import { checkboxAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/styled-system';
import type { ComponentStyleConfig } from '@chakra-ui/theme';

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const $size = cssVar('checkbox-size');

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
const Checkbox: ComponentStyleConfig = {
  // The styles all checkbox have in common
  baseStyle: {
    borderRadius: 'sm',
  },
  // Two sizes: sm and md
  sizes: {
    sm: definePartsStyle({
      control: {
        [$size.variable]: 'sizes.4',
        borderRadius: 'md',
      },
      label: { fontSize: 'sm' },
      icon: { fontSize: '3xs' },
    }),
    md: definePartsStyle({
      control: {
        [$size.variable]: 'sizes.5',
        borderRadius: 'md',
      },
      label: { fontSize: 'md' },
      icon: { fontSize: '2xs' },
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

export default Checkbox;
