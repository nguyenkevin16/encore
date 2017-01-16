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
      <img src={ track.img_url } onClick={ handlePlay } />
    </div>
  );
};

export default DiscoverItem;
