import React from 'react';
import {IconButton, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer} from '@material-ui/core';
import {ChevronLeft, Dvr, Home, MailOutline} from '@material-ui/icons';
import travi from 'travi';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import {NavigationDrawer} from './presentational';

suite('navigation-drawer', () => {
  test('that the drawer is anchored to the left', () => {
    const open = any.boolean();
    const toggleHandler = () => undefined;

    const wrapper = shallow(<NavigationDrawer open={open} onToggle={toggleHandler} />);
    const drawer = wrapper.find(SwipeableDrawer);
    const closeButton = drawer.find(IconButton);
    const navList = drawer.find(List);

    assert.equal(drawer.prop('anchor'), 'left');
    assert.equal(drawer.prop('variant'), 'temporary');
    assert.equal(drawer.prop('open'), open);
    assert.equal(drawer.prop('onOpen'), toggleHandler);
    assert.equal(drawer.prop('onClose'), toggleHandler);

    assert.equal(closeButton.prop('onClick'), toggleHandler);
    assert.isTrue(closeButton.find(ChevronLeft).exists());

    assert.equal(navList.prop('component'), 'nav');

    const homeNavItem = navList.find(ListItem).at(0);
    assert.equal(homeNavItem.prop('component'), 'a');
    assert.equal(homeNavItem.prop('href'), travi.contact.website);
    assert.equal(homeNavItem.find(ListItemText).prop('primary'), 'Home');
    assert.isTrue(homeNavItem.find(ListItemIcon).find(Home).exists());

    const presentationsNavItem = navList.find(ListItem).at(1);
    assert.equal(presentationsNavItem.prop('component'), 'a');
    assert.equal(presentationsNavItem.prop('href'), 'https://presentations.travi.org');
    assert.equal(presentationsNavItem.find(ListItemText).prop('primary'), 'Presentations');
    assert.isTrue(presentationsNavItem.find(ListItemIcon).find(Dvr).exists());

    const contatNavItem = navList.find(ListItem).at(2);
    assert.equal(contatNavItem.prop('component'), 'a');
    assert.equal(contatNavItem.prop('href'), 'https://matt.travi.org/contact');
    assert.equal(contatNavItem.find(ListItemText).prop('primary'), 'Contact');
    assert.isTrue(contatNavItem.find(ListItemIcon).find(MailOutline).exists());
  });
});
