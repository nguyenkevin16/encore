import React from 'react';

class User extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div className='user-show'>
        <h1>{ user.username }</h1>
      </div>
    );
  }
}

export default User;
