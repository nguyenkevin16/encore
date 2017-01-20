import React from 'react';
import { Link, withRouter } from 'react-router';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.user;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
    this.props.closeModal();
  }

  handleChange(property) {
   return e => (this.setState({ [property]: e.target.value }));
  }

  render() {
    return (
      <form className='user-form'
        onSubmit={ this.handleSubmit }>

        <div className='user-form-header'>
          <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/v1484099848/System/headphone-symbol_iotteg.png'/>
          <h3>Update Description</h3>
        </div>

        <textarea onChange={ this.handleChange('description') }
          value={this.state.description}>
        </textarea>

        <button className='user-form'>
          Update Description
        </button>
      </form>
    );
  }
}

export default UserForm;
