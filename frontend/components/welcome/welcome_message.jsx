import React from 'react';
import { hashHistory } from 'react-router';

const WelcomeMessage = () => {
  const _redirect = () => { hashHistory.push('discover'); };

  return (
    <div className='welcome-message'>
      <h2>ENCORE AUDIO</h2>
      <button onClick={ _redirect }>DISCOVER</button>
    </div>
  );
};

export default WelcomeMessage;
