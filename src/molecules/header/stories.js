/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import Header from './index';

storiesOf('Header', module).add('default', () => (
  <Header />
));
