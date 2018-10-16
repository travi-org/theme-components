/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import Layout from './index';

storiesOf('Organisms/Layout', module)
  .add('default', () => <Layout />)
  .add('w/ child content', () => (
    <Layout>
      Child Content
    </Layout>
  ));
