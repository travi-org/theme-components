import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import {Menu as MenuIcon} from '@material-ui/icons';
import {assert} from 'chai';
import {shallow} from 'enzyme';
import Header from './presentational';

suite('header', () => {
  test('that the app-bar from material-ui is used', () => {
    const navigationToggleHandler = () => undefined;

    const wrapper = shallow(<Header onNavigationDrawerToggle={navigationToggleHandler} />);
    const bar = wrapper.find(AppBar);
    const toolbar = bar.find(Toolbar);
    const navigationToggleButton = toolbar.find(IconButton);
    const siteLogo = toolbar.find(Typography);
    const homepageLink = siteLogo.find('a');
    const logo = homepageLink.find('Logo');

    assert.equal(siteLogo.prop('component'), 'h1');
    assert.equal(siteLogo.prop('variant'), 'h5');
    assert.equal(homepageLink.prop('href'), 'https://matt.travi.org');
    assert.isTrue(logo.exists());

    assert.equal(navigationToggleButton.prop('onClick'), navigationToggleHandler);
    assert.isTrue(navigationToggleButton.find(MenuIcon).exists());
  });
});
