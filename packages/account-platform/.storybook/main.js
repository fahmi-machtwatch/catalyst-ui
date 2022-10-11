const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/**/*.{story,stories}.mdx',
    '../src/**/*.{story,stories}.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@chakra-ui/storybook-addon',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-links'
  ],
  webpackFinal: config => {
    config.resolve.mainFields = ['catalyst:src', 'browser', 'module', 'main'];
    return config;
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
};
