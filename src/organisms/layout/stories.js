/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Layout from './presentational';
import LayoutContainer from '.';

storiesOf('Organisms/Layout', module)
  .add('default', () => (
    <Layout onNavigationDrawerToggle={action('navigation drawer opened')} navigationOpen={false}>
      Child Content
    </Layout>
  ))
  .add('w/ navigation open', () => (
    <Layout onNavigationDrawerToggle={action('navigation drawer closed')}>
      Child Content
    </Layout>
  ))
  .add('stateful', () => <LayoutContainer>Child Content</LayoutContainer>);
