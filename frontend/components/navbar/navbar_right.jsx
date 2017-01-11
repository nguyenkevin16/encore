import React from 'react';

import NavbarRightLoggedIn from './navbar_right_loggedin.jsx';
import NavbarRightLoggedOut from './navbar_right_loggedout.jsx';

const NavbarRight = (
  { loggedIn, logout, currentUser, errors, clearErrors }) => {

  const displayButtons = () => {
    if (loggedIn) {
      return <NavbarRightLoggedIn
        logout={logout}
        currentUser={currentUser} />;
    } else {
      return <NavbarRightLoggedOut
        errors={errors}
        clearErrors={clearErrors} />;
    }
  };

  return (
    <div className='navbar-right'>
      { displayButtons() }
    </div>
  );
};

export default NavbarRight;
