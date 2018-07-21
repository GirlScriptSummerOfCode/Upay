/* globals describe, it, expect */
import React from 'react';
import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'; //removes unnecessary JSON from snapshot
import Footer from '../';

describe('<Footer />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Footer />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
