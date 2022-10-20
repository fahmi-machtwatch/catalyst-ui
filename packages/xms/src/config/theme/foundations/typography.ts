const fonts = {
  heading: `'Montserrat', sans-serif`,
  body: `'Montserrat', sans-serif`,
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const lineHeights = {
  normal: 'normal',
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  34: '2.125rem',
  30: '1.875rem',
  26: '1.625rem',
  24: '1.5rem',
  22: '1.375rem',
  20: '1.25rem',
  18: '1.125rem',
  14: '0.875rem',
  12: '0.75rem',
};

const fontSizes = {
  heading: {
    1: '1.75rem',
    2: '1.5rem',
    3: '1.25rem',
    4: '1.125rem',
    5: '1rem',
    6: '0.875rem',
  },
  text: {
    lg: '1rem',
    md: '0.875rem',
    sm: '0.75rem',
  },
  button: {
    lg: '1.25rem',
    md: '0.875rem',
    sm: '0.688rem',
  },
  form: {
    lg: '1rem',
    md: '0.875rem',
    sm: '0.75rem',
  },
  table: {
    header: '0.75rem',
  },
};

const heading = {
  1: {
    fontSize: fontSizes.heading[1],
    fontWeight: 'bold',
    lineHeight: '3.5rem',
    letterSpacing: '0',
  },
  2: {
    fontSize: fontSizes.heading[2],
    fontWeight: 'bold',
    lineHeight: '3rem',
    letterSpacing: '0',
  },
  3: {
    fontSize: fontSizes.heading[3],
    fontWeight: 'bold',
    lineHeight: '2.5rem',
    letterSpacing: '0',
  },
  4: {
    fontSize: fontSizes.heading[4],
    fontWeight: 'bold',
    lineHeight: '2rem',
    letterSpacing: '0',
  },
  5: {
    fontSize: fontSizes.heading[5],
    fontWeight: 'bold',
    lineHeight: '1.5rem',
    letterSpacing: '0',
  },
};

const text = {
  lg: {
    fontSize: fontSizes.text.lg,
    lineHeight: lineHeights[20],
    letterSpacing: '0',
  },
  md: {
    fontSize: fontSizes.text.md,
    lineHeight: lineHeights[20],
    letterSpacing: '0',
  },
  sm: {
    fontSize: fontSizes.text.sm,
    lineHeight: lineHeights[18],
    letterSpacing: '0',
  },
};

const button = {
  lg: {
    fontSize: fontSizes.button.lg,
    lineHeight: lineHeights[20],
    letterSpacing: '0',
    fontWeight: fontWeights.normal,
  },
  md: {
    fontSize: fontSizes.button.md,
    lineHeight: lineHeights[18],
    letterSpacing: '0',
    fontWeight: fontWeights.normal,
  },
  sm: {
    fontSize: fontSizes.button.sm,
    lineHeight: lineHeights[14],
    letterSpacing: '0',
    fontWeight: fontWeights.normal,
  },
};

const textStyles = {
  heading,
  text,
  button,
};

export { fonts, fontSizes, fontWeights, lineHeights, textStyles };
