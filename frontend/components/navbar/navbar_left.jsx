import React from 'react';
import { Link, hashHistory } from 'react-router';

const NavbarLeft = () => (
  <div className='navbar-left'>
    <h3>
      <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/v1484099572/headphone-symbol_1_wyttnq.png'/>
      <Link to='/' className='navbar-link'>encore</Link>
    </h3>
  </div>
);

export default NavbarLeft;
