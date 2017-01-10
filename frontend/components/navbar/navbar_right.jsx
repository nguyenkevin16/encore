import React from 'react';
import { hashHistory } from 'react-router';

const links = url => e => {
    e.preventDefault();
    hashHistory.push(url);
};

const NavbarRight = () => (
  <div className='navbar-right'>
    <button onClick={ links('/signup') }>
      Sign Up
    </button>

    <button onClick={ links('/login') }>
      Log In
    </button>
  </div>
);

export default NavbarRight;
