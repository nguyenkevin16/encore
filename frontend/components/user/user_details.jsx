import React from 'react';

const UserDetails = ({ user }) => (
  <div className='user-details'>
    <h1>{ user.username }</h1>
  </div>
);

export default UserDetails;
