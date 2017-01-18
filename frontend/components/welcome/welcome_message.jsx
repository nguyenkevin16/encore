import React from 'react';
import { hashHistory } from 'react-router';

const WelcomeMessage = () => {
  const _redirect = () => { hashHistory.push('discover'); };

  return (
    <div className='welcome-message'>
      <h2>music for the soul</h2>
      <button onClick={ _redirect }>LISTEN NOW</button>
    </div>
  );
};

export default WelcomeMessage;
