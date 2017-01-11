import React from 'react';
import { Link, hashHistory } from 'react-router';

const SessionFormFooter = ({ formFooter, formType, login }) => {

  const otherFormLink = () => {
    if (formType === 'login') {
      return <Link to='/signup'>{'Don\'t have an account?'}</Link>;
    } else {
      return <Link to='/login' >{'Already have an account?'}</Link>;
    }
  };

  const guestLogin = () => {
   const user = { username: 'guest', password: 'password' };
   login(user);
  };

  const fillOutAndEnter = (username, password) => () => {
    const $usernameInput = $('.session-form-input.username');
    const $passwordInput = $('.session-form-input.password');

    fillField(username, $usernameInput);
    setTimeout(
      () => fillField(password, $passwordInput), (username.length * 50)
    );
    setTimeout(
      () => guestLogin(), ((username.length + password.length) * 60)
    );
  };

  const fillField = (value, $field) => {
    let i = 0;

    let timer = setInterval( () => {
      $field.val($field.val() + value[i]);
      i++;
      if (i >= value.length) clearInterval(timer);
    }, 70);
  };

  return (
    <div className='session-form-footer'>
      <Link to='/'>Cancel</Link>
      { otherFormLink() }
      <a onClick={ fillOutAndEnter('guest', 'password') }>Demo account</a>
    </div>
  );
};

export default SessionFormFooter;
