import React from 'react';
import NavBar from './NavBar.js';
import renderer from 'react-test-renderer';

it('renders snapshot with empty props', () => {
  const tree = renderer
    .create(<NavBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

