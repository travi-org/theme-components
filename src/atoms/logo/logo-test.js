import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import Logo from './index';

suite('logo test', () => {
  test('that the logo is text', () => {
    const wrapper = shallow(<Logo />);

    assert.equal(wrapper.text(), 'Travi');
  });
});
