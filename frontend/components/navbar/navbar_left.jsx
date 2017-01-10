import React from 'react';
import { Link, hashHistory } from 'react-router';

const NavbarLeft = () => (
  <div className='navbar-left'>
    <h3>
      <Link to='/'
        className='navbar-link'>encore</Link>
    </h3>
  </div>
);

export default NavbarLeft;
