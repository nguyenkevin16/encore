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
        this.props.updateUser({
          id: this.props.user.id,
          avatar_url: result[0].secure_url
        });
      }
    );
  }

  render() {
    const { user, currentUser } = this.props;
    const insertButton = () => {
      if (currentUser && currentUser.id === user.id) {
        return (
          <button onClick={ this.uploadAvatar }>
            Change Photo
          </button>
        );
      }
    };

    return (
      <div className='user-avatar'>
        <img src={ user.avatar_url }
             className='avatar-url'></img>

        { insertButton() }
      </div>
    );
  }
}

export default UserAvatar;
