// Create custom theme
// https://storybook.js.org/docs/configurations/theming/

import { create } from '@storybook/theming/create';

const storybookTheme = create({
  base: 'light',
  brandTitle: 'Voila UI',
  brandUrl: 'https://github.com/machtwatch/voila-ui',
});

export default storybookTheme;
