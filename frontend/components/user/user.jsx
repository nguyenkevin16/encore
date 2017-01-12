import React from 'react';

import UserImage from './user_image';

class User extends React.Component {

  uploadTrack(e) {
    e.preventDefault();

    cloudinary.openUploadWidget({
      cloud_name: window.CLOUDINARY_OPTIONS.cloud_name,
      upload_preset: window.CLOUDINARY_OPTIONS.upload_preset
    },
      (error, result) => {

      }
    );
  }

  render() {
    const { user } = this.props;

    return (
      <div className='user-show'>
        <UserImage />

        <h1>{ user.username }</h1>

        <button onClick={ this.uploadTrack }>Upload Track</button>
      </div>
    );
  }
}

export default User;
