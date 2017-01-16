import React from 'react';

import WelcomeMessage from './welcome_message';
import WelcomeDescriptions from './welcome_descriptions';

const WelcomePage = () => (
  <div className='welcome-container'>
    <img src="https://res.cloudinary.com/nguyenkevin16/image/upload/v1484338468/s0y8oz7psn60gqjm9bmr.jpg"/>

    <WelcomeMessage />
    <WelcomeDescriptions />
  </div>
);

export default WelcomePage;
