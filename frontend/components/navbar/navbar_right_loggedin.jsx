import React from 'react';

const NavbarRightLoggedIn = ({ logout, currentUser }) => {
  return (
    <div className='navbar-right-buttons'>
      <button onClick={ logout }>
        Logout
      </button>
    </div>
  );
};

export default NavbarRightLoggedIn;
