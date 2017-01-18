import React from 'react';
import { Link } from 'react-router';

const TrendingItem = ({ track, receivePlaybarData }) => {
  const handlePlay = () => {
    receivePlaybarData({
      track,
      display: true
    });
  };

  return (
    <div className='trending-item'>
      <img src={ track.img_url }/>
      <div className='trending-overlay' onClick={ handlePlay }/>

      <div className='trending-links'>
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

export default TrendingItem;
