import React from 'react';

import NavbarRight from './navbar_right';
import NavbarLeft from './navbar_left';

const Navbar = ({ logout, loggedIn, currentUser, errors, clearErrors }) => (
  <div className='navbar'>
    <NavbarLeft/>
    <NavbarRight
      logout={ logout }
      loggedIn={ loggedIn }
      currentUser={ currentUser }
      errors={ errors }
      clearErrors={clearErrors}/>
  </div>
);

export default Navbar;
