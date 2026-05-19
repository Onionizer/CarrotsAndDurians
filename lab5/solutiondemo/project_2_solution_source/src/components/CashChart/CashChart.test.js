import React from 'react';
import CashChart from './CashChart.js';
import renderer from 'react-test-renderer';

it('renders snapshot with empty props', () => {
  const tree = renderer
    .create(<CashChart />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders snapshot with default calc list', () => {
  const tree = renderer
    .create(
      <CashChart
        calcList={EXAMPLE_DATA}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});


const EXAMPLE_DATA = [
  {
    type: 'income',
    value: 1200,
    interval: null,
    intervalUnit: 'once',
    label: 'Starting cash',
  },
  {
    type: 'income',
    value: 2300,
    interval: 15,
    intervalUnit: 'days',
    label: 'paycheck',
  },
  {
    type: 'expense',
    value: 2000,
    interval: 1,
    intervalUnit: 'months',
    label: 'rent',
  },
];
