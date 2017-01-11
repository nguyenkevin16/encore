import React from 'react';
import { Link, hashHistory } from 'react-router';

const SessionFormFooter = ({ formFooter, formType, login }) => {

  const otherFormLink = () => {
    if (formType === '/login') {
      return <Link to='/signup'>{'Don\'t have an account?'}</Link>;
    } else {
      return <Link to='/login' >{'Already have an account?'}</Link>;
    }
  };

  const guestLogin = () => {
   const user = { username: 'guest', password: 'password' };
   login(user)
     .then(() => redirect());
  };

  const redirect = () => {
    hashHistory.push('/');
  };

  return (
    <div className='session-form-footer'>
      <Link to='/'>Cancel</Link>
      { otherFormLink() }
      <a onClick={ guestLogin }>Demo account</a>
    </div>
  );
};

export default SessionFormFooter;
