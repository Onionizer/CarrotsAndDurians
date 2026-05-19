/*
  This is the first page in the app. It describes the application, and offers a
  big inviting button to get you going.
*/
import React from 'react';
import { Button } from 'kc-react-widgets';
import { MdShowChart } from 'react-icons/md';

import './LandingPage.css';
import logo from '../../NavBar/logo.png';

function LandingPage(props) {

  function createNew() {
    const fakeHex = 'f4keh3x';
    props.history.push('/chart/' + fakeHex);
    console.log('NOTE: BACKEND is disabled for this activity, would CREATE');
  }

  return (
    <div className="LandingPage">
      <header className="LandingPage-header">
        <img src={logo} className="LandingPage-logo" alt="Cash Flow Calc" />
        <h1>Cash Flow Calc</h1>
        <p>Quickly chart your personal or business finances.</p>

        <Button
            type="success"
            size="gigantic"
            depth="towering"
            onClick={createNew}>
          <MdShowChart /> Start!
        </Button>
      </header>
    </div>
  );
}

export default LandingPage;
