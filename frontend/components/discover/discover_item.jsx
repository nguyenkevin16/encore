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
      <Link to={`users/${track.user_id}`}>
        <img src={ track.img_url } />
      </Link>

      <button onClick={ handlePlay }>
        Play
      </button>
    </div>
  );
};

export default DiscoverItem;
