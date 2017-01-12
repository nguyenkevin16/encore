import React from 'react';

import UserImage from './user_image';


class User extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div className='user-show'>
        <UserImage />

        <h1>{ user.username }</h1>
      </div>
    );
  }
}

export default User;
