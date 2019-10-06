/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import LayoutPresentational from './presentational';
import LayoutContainer from '.';

storiesOf('Organisms/Layout', module)
  .add('default', () => (
    <LayoutPresentational onNavigationDrawerToggle={action('navigation drawer opened')} navigationOpen={false}>
      Child Content
    </LayoutPresentational>
  ))
  .add('w/ navigation open', () => (
    <LayoutPresentational navigationOpen={true} onNavigationDrawerToggle={action('navigation drawer closed')}>
      Child Content
    </LayoutPresentational>
  ))
  .add('stateful', () => <LayoutContainer><p>Child Content</p></LayoutContainer>);
