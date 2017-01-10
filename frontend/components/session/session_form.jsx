import React from 'react';
import { Link, withRouter } from 'react-router';

import SessionFormHeader from './session_form_header';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirect = this.redirect.bind(this);
   }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.redirect());
  }

  handleChange(property) {
    return e => (this.setState({ [property]: e.target.value }));
  }

  redirect() {
    this.props.router.push('/');
  }

  render() {
    const { loggedIn, formType, errors } = this.props;

    const formHeader = formType === '/login' ? 'Log In' : 'Sign Up';
    const submitButton = formType === '/login' ? 'Login' : 'Create';
    const linkHeader = () => {
      if (formType === '/login') {
        return <Link to='/signup'>{'Don\'t have an account?'}</Link>;
      } else {
        return <Link to='/login' >{'Already have an account?'}</Link>;
      }
    };

    return (
      <div className='session-form-modal'>
        <form className='session-form'
          onSubmit={ this.handleSubmit }>

          <SessionFormHeader formHeader={formHeader}/>

          <div className='session-form-inputs'>
            <input className='session-form-input'
              onChange={ this.handleChange('username') }
              value={ this.state.username }
              placeholder='username'/>

            <input className='session-form-input'
              onChange={ this.handleChange('password') }
              type='password'
              value={ this.state.password }
              placeholder='password'/>
          </div>

          <button className='session-form-button'
            type='submit'>{submitButton}</button>

          <Link to='/'>Cancel</Link>
          { linkHeader() }
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
