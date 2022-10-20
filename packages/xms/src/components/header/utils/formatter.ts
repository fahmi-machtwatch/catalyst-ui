import { Environment } from '../types';

// eslint-disable-next-line import/prefer-default-export
export function environmentName(env?: Environment) {
  switch (env) {
    case 'DEVELOPMENT':
      return 'Dev';
    case 'STAGING':
      return 'Staging';
    default:
      return null;
  }
}
