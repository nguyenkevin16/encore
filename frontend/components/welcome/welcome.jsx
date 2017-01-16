import React from 'react';

import WelcomeMessage from './welcome_message';
import WelcomeDescriptions from './welcome_descriptions';

const WelcomePage = () => (
  <div className='welcome-container'>
    <img src="https://res.cloudinary.com/nguyenkevin16/image/upload/v1484176396/System/pexels-photo-96857_dxn3ak.jpg"/>

    <WelcomeMessage />
    <WelcomeDescriptions />
  </div>
);

export default WelcomePage;
