import React from 'react';

class UserAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.uploadAvatar = this.uploadAvatar.bind(this);
  }

  uploadAvatar(e) {
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
      <div className='user-avatar'>
        <img src={ user.avatar_url }
             className='avatar-url'></img>

        <button onClick={ this.uploadAvatar }>
          Change Photo
        </button>
      </div>
    );
  }
}

export default UserAvatar;
