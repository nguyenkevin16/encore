import React from 'react';

import UserImage from './user_image';
import UserDetails from './user_details';
import TrackIndexContainer from '../track/track_index_container';

class User extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div className='user-show'>
        <div className='user-show-header'>
          <UserImage user={user} />
          <UserDetails user={user} />
        </div>

        <TrackIndexContainer />
      </div>
    );
  }
}

export default User;
