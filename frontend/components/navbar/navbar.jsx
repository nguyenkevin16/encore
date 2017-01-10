import React from 'react';

import NavbarRight from './navbar_right';
import NavbarLeft from './navbar_left';

const Navbar = ({ logout, loggedIn, currentUser }) => (
  <div className='navbar'>
    <NavbarLeft/>
    <NavbarRight
      logout={ logout }
      loggedIn={ loggedIn }
      currentUser={ currentUser }/>
  </div>
);

export default Navbar;
