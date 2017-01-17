import React from 'react';
import { Link, hashHistory } from 'react-router';

const NavbarLeft = () => (
  <div className='navbar-left'>
    <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/v1484099572/System/headphone-symbol_1_wyttnq.png'/>
    <Link to='/' className='navbar-link'>encore</Link>
    <Link to='discover' className='navbar-link'>discover</Link>
  </div>
);

export default NavbarLeft;
