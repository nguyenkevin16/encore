import React from 'react';

import WelcomeMessage from './welcome_message';
import WelcomeDescriptions from './welcome_descriptions';
import TrendingContainer from '../discover/trending_container';

const WelcomePage = () => {
  return (
    <div className='welcome-page'>
      <div className='welcome-container'>
        <WelcomeMessage/>
      </div>

      <WelcomeDescriptions/>
      <TrendingContainer/>
    </div>
  );
};

export default WelcomePage;
