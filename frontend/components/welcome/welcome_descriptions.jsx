import React from 'react';

const WelcomeDescriptions = () => (
  <div className='welcome-descriptions'>
    <div className='welcome-subcontainer'>
      <div className='welcome-subcontainer-text'>
        <h3>Create Music</h3>
        <p>Upload your own music.</p>
      </div>

      <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/v1496899181/music-studio_hxg5bz.jpg'
        alt='recording studio'/>
    </div>

    <div className='welcome-subcontainer'>
      <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/c_scale,w_1500/v1496899304/egor-khomiakov-242859_ljncyp.jpg'
        alt='music amp and speakers'/>
      
      <div className='welcome-subcontainer-text'>
        <h3>Listen to Music</h3>
        <p>Discover new music or listen to your own.</p>
      </div>
    </div>

    <div className='welcome-subcontainer'>
      <div className='welcome-subcontainer-text'>
        <h3>Share Music</h3>
        <p>Share your music with others.</p>
      </div>

      <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/c_scale,w_1500/v1496899293/mitchel-lensink-236502_vayi8i.jpg'
        alt='music records'/>
    </div>
  </div>
);

export default WelcomeDescriptions;
