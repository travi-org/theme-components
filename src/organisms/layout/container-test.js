import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import Layout from './presentational';
import LayoutContainer from './container';

suite('layout container', () => {
  const Child = () => null;

  test('that the drawer defaults to closed', () => {
    const wrapper = shallow(<LayoutContainer><Child /></LayoutContainer>);
    const presentationalLayout = wrapper.find(Layout);

    assert.isFalse(presentationalLayout.prop('navigationOpen'));
    assert.isTrue(presentationalLayout.find('Child').exists());
  });

  test('that the open state of the drawer is toggled by the handler', () => {
    const wrapper = shallow(<LayoutContainer><Child /></LayoutContainer>);
    const presentationalLayout = wrapper.find(Layout);

    presentationalLayout.simulate('navigationDrawerToggle');
    assert.isTrue(wrapper.find(Layout).prop('navigationOpen'));

    presentationalLayout.simulate('navigationDrawerToggle');
    assert.isFalse(wrapper.find(Layout).prop('navigationOpen'));
  });
});
