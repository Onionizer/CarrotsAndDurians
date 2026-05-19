/*
  This is the main page in the app. It displays the page with the chart and the
  transaction editing list (CalcList).
*/
import React, { useState, useEffect } from 'react';
import { Card } from 'kc-react-widgets';
import CalcList from '../../CalcList/CalcList.js';
import CashChart from '../../CashChart/CashChart.js';
import NavBar from '../../NavBar/NavBar.js';
import './CashFlow.css';

// These are used for "debouncing" the auto save feature (see below)
const DEBOUNCE_MS = 5000;
let timeout = null;

/*
  This function does one thing: It returns an object that contains the default
  format for data in this app. It's mixed in as a default value (see below)
  when we load data from the backend, so it's never totally blank.
*/
function getDefault() {
  return {
    calcList: [
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
      {
        type: 'expense',
        value: 15,
        interval: 1,
        intervalUnit: 'days',
        label: 'food',
      },
    ]
  };
}

function CashFlow(props) {
  const [data, setData] = useState(null);

  function getData() {
    console.log('NOTE: BACKEND is disabled for this activity, would READ');
    setData(getDefault());
  }

  function updateDatabase() {
    console.log('NOTE: BACKEND IS disabled, would UPDATE')
  }

  ///////////////////////////////
  // Whenever the backend data gets changed, we'll save it to the backend. This
  // clearTimeout and setTimeout causes this to be "debounced", or only occur
  // when changes pause for longer than a certain amount of time (otherwise it
  // might save literally every key stroke, as an example)
  function debouncedUpdateDatabase() {
    clearTimeout(timeout); // Stop existing timeout
    timeout = setTimeout(updateDatabase, DEBOUNCE_MS); // Schedule next one
  }
  // Run the function whenever the data variable changes
  useEffect(debouncedUpdateDatabase, [data]);
  ///////////////////////////////

  // On first visit to the page, load the data immediately
  useEffect(getData, []);

  if (data === null) {
    // If the data is null (hasn't loaded), show a blank page
    return (
      <div className="CashFlow"></div>
    );
  } else {
    // Render the JSX, in this case a NavBar on top, a CalcList (the sidebar of
    // calculations) and a CashChart (the chart itself)
    return (
      <div className="CashFlow">
        <NavBar />
        <div className="CashFlow-sidebar">
          <CalcList
            calcList={data.calcList}
            onUpdate={newList => setData({ ...data, calcList: newList})}
          />
        </div>
        <div className="CashFlow-graph">
          <Card depth="towering">
            <CashChart
              calcList={data.calcList}
            />
          </Card>
        </div>
      </div>
    );
  }
}

export default CashFlow;
