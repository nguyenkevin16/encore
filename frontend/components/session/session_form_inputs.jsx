import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionFormInputs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(property) {
   return e => (this.setState({ [property]: e.target.value }));
  }

  render() {
    const { formType } = this.props;
    const submitButton = formType === '/login' ? 'Login' : 'Create';

    return (
      <form className='session-form-inputs'
        onSubmit={ this.handleSubmit }>

        <input className='session-form-input username'
          onChange={ this.handleChange('username') }
          value={ this.state.username }
          placeholder='username'/>

        <input className='session-form-input password'
          onChange={ this.handleChange('password') }
          type='password'
          value={ this.state.password }
          placeholder='password'/>

        <button className='session-form-button'>
          {submitButton}
        </button>
      </form>
    );
  }
}

export default withRouter(SessionFormInputs);
