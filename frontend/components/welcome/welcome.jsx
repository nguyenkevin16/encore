import React from 'react';

import WelcomeMessage from './welcome_message';
import WelcomeDescriptions from './welcome_descriptions';
import TrendingContainer from '../discover/trending_container';

const WelcomePage = () => {
  return (
    <div className='welcome-page'>
      <div className='welcome-container'>
        <div className='overlay'/>
        <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/c_scale,w_1204/v1491513238/patrick-pilz-146040_gqbcid.jpg'></img>
        <WelcomeMessage/>
      </div>

      <WelcomeDescriptions/>
      <TrendingContainer/>
    </div>
  );
};

export default WelcomePage;
