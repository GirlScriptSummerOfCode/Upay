/* globals describe, it, expect */
import React from 'react';
import { mount } from 'enzyme';
import Item from '../Item';

describe('<Item />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Item name="Item one" id={123} imageUrls={['']} />);
    expect(wrapper).toMatchSnapshot();
  });
});
