import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';
import { getColor, mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  field: {
    width: '100%',
    minWidth: 0,
    outline: 0,
    px: 4,
    py: 3,
    position: 'relative',
    appearance: 'none',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
});

const size = {
  lg: defineStyle({
    fontSize: 'field.lg',
    h: 12,
    borderRadius: 'md',
  }),
  md: defineStyle({
    fontSize: 'field.md',
    h: 9,
    borderRadius: 'md',
  }),
  sm: defineStyle({
    fontSize: 'field.sm',
    h: 8,
    borderRadius: 'md',
  }),
};

const sizes = {
  lg: definePartsStyle({
    field: size.lg,
    addon: size.lg,
  }),
  md: definePartsStyle({
    field: size.md,
    addon: size.md,
  }),
  sm: definePartsStyle({
    field: size.sm,
    addon: size.sm,
  }),
};

function getDefaults(props: Record<string, any>) {
  const { focusBorderColor: fc, errorBorderColor: ec, readOnlyBorderColor: rc } = props;
  return {
    focusBorderColor: fc || mode('primary.500', 'primary.300')(props),
    errorBorderColor: ec || mode('danger.500', 'danger.300')(props),
    readOnlyBorderColor: rc || mode('.500', 'danger.300')(props),
  };
}

const variantOutline = definePartsStyle(props => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec, readOnlyBorderColor: rc } = getDefaults(props);

  return {
    field: {
      border: '1px solid',
      borderColor: 'inherit',
      bg: 'inherit',
      _hover: {
        borderColor: mode('gray.300', 'whiteAlpha.400')(props),
      },
      _readOnly: {
        // boxShadow: 'none !important',
        userSelect: 'all',
        borderColor: getColor(theme, rc),
        boxShadow: `0 0 0 0 ${getColor(theme, rc)}`,
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: `0 0 0 0 ${getColor(theme, ec)}`,
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: getColor(theme, fc),
        boxShadow: `0 0 0 0 ${getColor(theme, fc)}`,
      },
    },
    addon: {
      border: '1px solid',
      borderColor: mode('inherit', 'whiteAlpha.50')(props),
      bg: mode('gray.100', 'whiteAlpha.300')(props),
    },
  };
});

const variantUnstyled = definePartsStyle({
  field: {
    bg: 'transparent',
    px: '0',
    height: 'auto',
  },
  addon: {
    bg: 'transparent',
    px: '0',
    height: 'auto',
  },
});

const variants = {
  outline: variantOutline,
  unstyled: variantUnstyled,
};

const Input = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});

export default Input;
