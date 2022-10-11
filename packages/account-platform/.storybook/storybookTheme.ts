// Create custom theme
// https://storybook.js.org/docs/configurations/theming/

import { create } from '@storybook/theming/create';

const storybookTheme = create({
  base: 'light',
  brandTitle: 'Catalyst UI',
  brandUrl: 'https://github.com',
});

export default storybookTheme;
