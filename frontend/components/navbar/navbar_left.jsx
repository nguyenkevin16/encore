import React from 'react';
import { Link, hashHistory } from 'react-router';

const NavbarLeft = () => (
  <div className='navbar-left'>
    <h3>
      <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/v1484099572/System/headphone-symbol_1_wyttnq.png'/>
      <Link to='/' className='navbar-link'>encore</Link>
      <Link to='discover' className='navbar-link'>discover</Link>
    </h3>
  </div>
);

export default NavbarLeft;
