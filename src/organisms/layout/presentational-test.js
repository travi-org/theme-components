import React from 'react';
import {CssBaseline} from '@material-ui/core';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import sinon from 'sinon';
import * as wrappedMaterial from '../../../thirdparty-wrappers/material-ui';
import Layout from './presentational';
import Header from '../../molecules/header';
import NavigationDrawer from '../../molecules/navigation';
import * as themeCreator from '../../theme';

suite('layout', () => {
  let sandbox;
  const Child = () => null;
  Child.displayName = 'Child';

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(themeCreator, 'default');
    sandbox.stub(wrappedMaterial, 'useMediaQuery');
  });

  teardown(() => sandbox.restore());

  test('that the layout includes the header and children', () => {
    const navigationToggleHandler = () => undefined;
    const navigationOpen = any.boolean();
    const theme = any.simpleObject();
    wrappedMaterial.useMediaQuery.returns(false);
    themeCreator.default.withArgs('light').returns(theme);

    const wrapper = shallow(
      <Layout navigationOpen={navigationOpen} onNavigationDrawerToggle={navigationToggleHandler}>
        <Child />
      </Layout>
    );
    const themeProvider = wrapper.find('ThemeProvider');
    const header = themeProvider.find(Header);
    const navDrawer = themeProvider.find(NavigationDrawer);

    assert.equal(themeProvider.prop('theme'), theme);

    assert.isTrue(wrapper.find(CssBaseline).exists());
    assert.isTrue(themeProvider.find('Child').exists());

    assert.equal(header.prop('onNavigationDrawerToggle'), navigationToggleHandler);

    assert.equal(navDrawer.prop('onToggle'), navigationToggleHandler);
    assert.equal(navDrawer.prop('open'), navigationOpen);
  });

  test('that dark mode is enabled when preferred', () => {
    const navigationToggleHandler = () => undefined;
    const navigationOpen = any.boolean();
    const theme = any.simpleObject();
    wrappedMaterial.useMediaQuery.withArgs('(prefers-color-scheme: dark)').returns(true);
    themeCreator.default.withArgs('dark').returns(theme);

    const wrapper = shallow(
      <Layout navigationOpen={navigationOpen} onNavigationDrawerToggle={navigationToggleHandler}>
        <Child />
      </Layout>
    );
    const themeProvider = wrapper.find('ThemeProvider');

    assert.equal(themeProvider.prop('theme'), theme);
  });
});
