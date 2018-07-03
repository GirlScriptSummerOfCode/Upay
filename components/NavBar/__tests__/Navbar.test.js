/* globals describe, it, expect */
import React from 'react';
import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'; //removes unnecessary JSON from snapshot
import Navbar from '../';
import links from '../../../constants/links';

describe('<Navbar />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Navbar links={links} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
