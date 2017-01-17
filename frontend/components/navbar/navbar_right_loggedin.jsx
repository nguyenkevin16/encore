import React from 'react';
import { withRouter } from 'react-router';

const NavbarRightLoggedIn = (props) => {
  const { logout, currentUser } = props;

  const _redirect = () => props.router.push(`/users/${currentUser.id}`);
  const _logout = () => {
    logout;
    props.router.push('/');
  };

  return (
    <div className='navbar-right-content'>
      <button onClick={ logout }>
        Logout
      </button>

      <img onClick={ _redirect }
        src={currentUser.avatar_url}/>
    </div>
  );
};

export default withRouter(NavbarRightLoggedIn);
