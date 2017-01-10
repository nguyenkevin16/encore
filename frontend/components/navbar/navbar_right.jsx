import React from 'react';
import { hashHistory } from 'react-router';

const links = url => e => {
    e.preventDefault();
    hashHistory.push(url);
};

const NavbarRight = ({ logout, loggedIn, currentUser }) => {
  const buttons = () => {
    if (loggedIn) {
      return (
        <div className='navbar-right'>
          <button onClick={ logout }>
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div className='navbar-right'>
          <button onClick={ links('/signup') }>
            Sign Up
          </button>

          <button onClick={ links('/login') }>
            Log In
          </button>
        </div>
      );
    }
  };

  return buttons();
};

export default NavbarRight;
