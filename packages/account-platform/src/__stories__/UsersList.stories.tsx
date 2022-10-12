import * as React from 'react';
import { Story } from '@storybook/react';

import UsersListComponent from '../components/users-list';

export default {
  title: 'Account Platform',
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const UsersList: Story = () => {
  return <UsersListComponent actions={{ onLoad: '/api/resellers' }} />;
};
