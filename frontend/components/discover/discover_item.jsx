import React from 'react';
import { Link } from 'react-router';

const DiscoverItem = ({ track, receivePlaybarData }) => {
  const handlePlay = () => {
    receivePlaybarData({
      track,
      display: true
    });
  };

  return (
    <div className='discover-item'>
      <img src={ track.img_url }/>
      <div className='discover-overlay' onClick={ handlePlay }/>

      <div className='discover-links'>
        <Link to={`tracks/${track.id}`}>
          <h3>{ track.title }</h3>
        </Link>

        <Link to={`users/${track.user.id}`}>
          <h5>{ track.user.username }</h5>
        </Link>
      </div>
    </div>
  );
};

export default DiscoverItem;
