import React from 'react';
import { Link, withRouter } from 'react-router';

const SessionFormFooter = ({ formFooter, formType, login, closeAndOpenModal, closeModal, router }) => {

  const otherFormLink = () => {
    if (formType === 'login') {
      return <a onClick={ closeAndOpenModal('signup') }>{'Don\'t have an account?'}</a>;
    } else {
      return <a onClick={ closeAndOpenModal('login') }>{'Already have an account?'}</a>;
    }
  };

  const guestLogin = () => {
   const user = { username: 'guest', password: 'password' };
   login(user);
   router.push(`users/1`);
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
      <a onClick={ closeModal }>Cancel</a>
      { otherFormLink() }
      <a onClick={ fillOutAndEnter('guest', 'password') }>Demo account</a>
    </div>
  );
};

export default withRouter(SessionFormFooter);
