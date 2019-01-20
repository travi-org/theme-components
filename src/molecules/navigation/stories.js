/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import NavigationDrawer from './presentational';

storiesOf('Molecules/NavigationDrawer', module)
  .add('default', () => (
    <NavigationDrawer open onToggle={action('navigation drawer closed')} />
  ));
