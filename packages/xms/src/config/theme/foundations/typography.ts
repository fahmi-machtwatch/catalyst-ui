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
  34: '2.125rem', // 34px
  30: '1.875rem', // 30px
  26: '1.625rem', // 26px
  24: '1.5rem', // 24px
  22: '1.375rem', // 22px
  20: '1.25rem', // 20px
  18: '1.125rem', // 18px
  14: '0.875rem', // 14px
  12: '0.75rem', // 12px
};

const fontSizes = {
  heading: {
    1: '1.75rem', // 28px
    2: '1.5rem', // 24px
    3: '1.25rem', // 20px
    4: '1.125rem', // 18px
    5: '1rem', //	16px
    6: '0.875rem', //	14px
  },
  text: {
    lg: '1rem', // 16px
    md: '0.875rem', // 14px
    sm: '0.75rem', // 12px
  },
  button: {
    lg: '1.25rem', // 20px
    md: '0.875rem', // 14px
    sm: '0.688rem', // 11px
  },
  field: {
    lg: '1rem', // 16px
    md: '0.75rem', // 12px
    sm: '0.625rem', // 10px
  },
  table: {
    header: '0.75rem', // 12px
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
  6: {
    fontSize: fontSizes.heading[6],
    fontWeight: 'bold',
    lineHeight: '1rem',
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

const field = {
  lg: {
    fontSize: fontSizes.field.lg,
    lineHeight: lineHeights[20],
    letterSpacing: '0',
    fontWeight: fontWeights.normal,
  },
  md: {
    fontSize: fontSizes.field.md,
    lineHeight: lineHeights[18],
    letterSpacing: '0',
    fontWeight: fontWeights.normal,
  },
  sm: {
    fontSize: fontSizes.field.sm,
    lineHeight: lineHeights[14],
    letterSpacing: '0',
    fontWeight: fontWeights.normal,
  },
};

const textStyles = {
  heading,
  text,
  button,
  field,
};

export { fonts, fontSizes, fontWeights, lineHeights, textStyles };
