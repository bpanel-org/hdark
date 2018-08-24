import themeVariables from './themeVariables';
import themeConfig from './themeConfig';

export const metadata = {
  name: '@bpanel/hdark',
  pathName: '',
  displayName: '@bpanel/hdark',
  author: 'bpanel-org',
  description:
    'bPanel ❤️s handshake. Dark theme for handshake. Based on original bdark skin for bPanel.',
  version: require('../package.json').version
};

export const decorateTheme = themeCreator => () =>
  themeCreator(themeVariables, themeConfig);
