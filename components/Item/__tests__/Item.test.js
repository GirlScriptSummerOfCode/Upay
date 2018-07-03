/* globals describe, it, expect */
import React from 'react';
import { mount } from 'enzyme';
import Item from '../Item';

describe('<Item />', () => {
  it('is defined', () => {
    expect(Item).toBeDefined();
  });
  it('renders correctly', () => {
    const wrapper = mount(<Item name="Item one" id="123" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should contain minanshu', () => {
    const wrapper = mount(<Item name="testing" />);
    expect(wrapper.props().name).toEqual('testing');
  });
});
