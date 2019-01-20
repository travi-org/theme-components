/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Header from '.';

storiesOf('Molecules/Header', module)
  .add('default', () => (
    <Header onNavigationDrawerToggle={action('navigation drawer toggled')} />
  ));
