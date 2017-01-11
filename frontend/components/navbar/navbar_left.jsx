import React from 'react';
import { Link, hashHistory } from 'react-router';

const NavbarLeft = () => (
  <div className='navbar-left'>
    <h3>
      <i className="material-icons">music_note</i>
      <Link to='/' className='navbar-link'>encore</Link>
    </h3>
  </div>
);

export default NavbarLeft;
