/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Drawer from './presentational';

storiesOf('Molecules/Navigation Drawer', module)
  .add('default', () => (
    <Drawer open={true} onToggle={action('navigation drawer toggled')} />
  ));
