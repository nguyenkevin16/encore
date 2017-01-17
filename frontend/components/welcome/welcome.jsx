import React from 'react';

import WelcomeMessage from './welcome_message';
import WelcomeDescriptions from './welcome_descriptions';

const WelcomePage = () => (
  <div className='welcome-container'>
    <WelcomeMessage/>
    <WelcomeDescriptions/>
  </div>
);

export default WelcomePage;
