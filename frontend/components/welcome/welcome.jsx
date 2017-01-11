import React from 'react';

import WelcomeMessage from './welcome_message';
import WelcomeDescriptions from './welcome_descriptions';

const WelcomePage = () => (
  <div className='welcome-container'>
    <img src="https://images.pexels.com/photos/96857/pexels-photo-96857.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"/>

    <WelcomeMessage />
    <WelcomeDescriptions />
  </div>
);

export default WelcomePage;
