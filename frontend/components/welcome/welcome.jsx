import React from 'react';

import WelcomeMessage from './welcome_message';
import WelcomeDescriptions from './welcome_descriptions';
import TrendingContainer from '../discover/trending_container';

const WelcomePage = () => {
  return (
    <div className='welcome-page'>
      <div className='welcome-container'>
        <img src='http://res.cloudinary.com/nguyenkevin16/image/upload/v1496811138/fineas-anton-136459_sivevq.jpg'></img>
        <WelcomeMessage/>
      </div>

      <WelcomeDescriptions/>
      <TrendingContainer/>
    </div>
  );
};

export default WelcomePage;
