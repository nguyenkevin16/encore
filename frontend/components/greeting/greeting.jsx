import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  render() {
    const { currentUser } = this.props;

    if (currentUser) {
      return (
        <div>
          <h3>Welcome, {currentUser.username}!</h3>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to='/signup'>Signup</Link>
          <Link to='/login'>Login</Link>
        </div>
      );
    }
  }
}

export default Greeting;
