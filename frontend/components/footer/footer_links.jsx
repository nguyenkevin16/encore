import React from 'react';
import { Link } from 'react-router';

const FooterLinks = () => (
  <div className='footer-links'>
    <Link>About</Link>
    <a href='https://github.com/nguyenkevin16/encore'>Github</a>
    <a href='https://www.linkedin.com/in/nguyenkevin16/'>LinkedIn</a>
    <Link>Credits</Link>
  </div>
);

export default FooterLinks;
