const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../packages/**/src/**/*.{story,stories}.mdx', '../packages/**/src/**/*.{story,stories}.@(js|jsx|ts|tsx)'],
  addons: [
    '@chakra-ui/storybook-addon',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
  ],
  webpackFinal: config => {
    config.resolve.mainFields = ['xms:src', 'browser', 'module', 'main'];
    return config;
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
};
