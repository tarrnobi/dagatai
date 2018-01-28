import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Calendar from './Calendar';
import Item from './Item';

const MockDate = require('mockdate');

test('Calendar Renders', () => {
  const component = renderer.create(<Calendar />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('Calendar Renders 30 Days for Jun-2017', () => {
  const mockDate = new Date(2017, 5, 1); // Month starts at zero
  MockDate.set(mockDate.valueOf());

  const wrapper = mount(<Calendar />);
  expect(wrapper.find(Item)).toHaveLength(30);
  MockDate.reset();
});

test('Calendar Renders 29 Days for Feb-2016', () => {
  const mockDate = new Date(2016, 1, 1); // Month starts at zero
  MockDate.set(mockDate.valueOf());

  const wrapper = mount(<Calendar />);
  expect(wrapper.find(Item)).toHaveLength(29);
  MockDate.reset();
});
