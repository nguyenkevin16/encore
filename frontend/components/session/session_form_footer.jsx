import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionFormFooter extends React.Component {
  constructor(props) {
    super(props);

    this.otherFormLink = this.otherFormLink.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.fillOutAndEnter = this.fillOutAndEnter.bind(this);
    this.fillField = this.fillField.bind(this);
  }

  otherFormLink() {
    if (this.props.formType === 'login') {
      return <a onClick={ this.props.closeAndOpenModal('signup') }>{'Don\'t have an account?'}</a>;
    } else {
      return <a onClick={ this.props.closeAndOpenModal('login') }>{'Already have an account?'}</a>;
    }
  }

  guestLogin() {
    const user = { username: 'guest', password: 'password' };
    this.props.login(user);
    this.props.router.push(`users/1`);
  }

  fillOutAndEnter(username, password) {
    return () => {
      const $usernameInput = $('.session-form-input.username');
      const $passwordInput = $('.session-form-input.password');

      this.fillField(username, $usernameInput);
      setTimeout(
        () => this.fillField(password, $passwordInput), (username.length * 80)
      );
      setTimeout(
        () => this.guestLogin(), ((username.length + password.length) * 90)
      );
    };
  }

  fillField(value, $field) {
    let i = 0;

    let timer = setInterval( () => {
      $field.val($field.val() + value[i]);
      i++;
      if (i >= value.length) clearInterval(timer);
    }, 70);
  }

  render() {
    const { closeModal } = this.props;

    return (
      <div className='session-form-footer'>
        <a onClick={ closeModal }>Cancel</a>
        { this.otherFormLink() }
        <a onClick={ this.fillOutAndEnter('guest', 'password') }>Demo account</a>
      </div>
    );
  }
}

export default withRouter(SessionFormFooter);
