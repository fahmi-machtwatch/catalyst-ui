import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  fontSize: 'field.label',
  marginEnd: '1',
  mb: '1',
});

const FormLabel = defineStyleConfig({
  baseStyle,
});

export default FormLabel;
