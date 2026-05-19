import React from 'react';
import Calc from './Calc.js';
import renderer from 'react-test-renderer';

it('renders snapshot with empty props', () => {
  const tree = renderer
    .create(<Calc />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders snapshot with example props', () => {
  const tree = renderer
    .create(
      <Calc
        intervalUnit="months"
        interval={1}
        type="expense"
        label="Monthly rent"
        value={2000}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders snapshot with dropdown shown', () => {
  const tree = renderer
    .create(
      <Calc
        isDropdownShown={true}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});



