import React from 'react';
import { Link } from 'react-router';

const DiscoverItem = ({ track, receivePlaybarData }) => {
  const handlePlay = () => {
    receivePlaybarData({
      track_url: track.track_url,
      display: true
    });
  };

  return (
    <div className='discover-item'>
      <img src={ track.img_url }/>
      <div className='discover-overlay' onClick={ handlePlay }/>

      <Link to={`users/${track.user.id}`}>
        <h3>{ track.user.username }</h3>
        <h5>{ track.description }</h5>
      </Link>
    </div>
  );
};

export default DiscoverItem;
