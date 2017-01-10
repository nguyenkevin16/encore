import React from 'react';

import NavbarRight from './navbar_right';
import NavbarLeft from './navbar_left';

const Navbar = ({ logout }) => (
  <div className='navbar'>
    <NavbarLeft/>
    <NavbarRight logout={ logout }/>
  </div>
);

export default Navbar;
