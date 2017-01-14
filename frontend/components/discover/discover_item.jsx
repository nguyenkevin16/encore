import React from 'react';
import { Link } from 'react-router';

const DiscoverItem = ({ track }) => (
  <div className='discover-item'>
    <Link to={`users/${track.user_id}`}>
      <img src={ track.img_url } />
    </Link>

    <audio controls>
      <source src={ track.track_url } type='audio/mpeg'/>
    </audio>
  </div>
);

export default DiscoverItem;
