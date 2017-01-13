import React from 'react';

import UserImage from './user_image';
import UserDetails from './user_details';
import TrackIndexContainer from '../track/track_index_container';
import TrackIndexSidebar from '../track/track_index_sidebar';

class User extends React.Component {
  render() {
    const { user, updateUser, currentUser } = this.props;

    return (
      <div className='user-show'>
        <div className='user-show-header'>
          <UserImage user={user} updateUser={updateUser} currentUser={currentUser} />
          <UserDetails user={user} />
        </div>

        <div className='user-tracks'>          
          <TrackIndexContainer />
          <TrackIndexSidebar />
        </div>
      </div>
    );
  }
}

export default User;
