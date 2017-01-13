import React from 'react';
import { Link } from 'react-router';

class TrackFormInputs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const track = Object.assign({}, this.state);
    this.props.processForm(track);
  }

  handleChange(property) {
   return e => (this.setState({ [property]: e.target.value }));
  }

  render() {
    const { formType } = this.props;
    const submitButton = formType === 'create' ? 'Upload' : 'Edit';

    return (
      <form className='track-form-inputs'
        onSubmit={ this.handleSubmit }>

        <input className='track-form-input title'
          onChange={ this.handleChange('title') }
          value={ this.state.title }
          placeholder='title'/>

        <textarea className='track-form-input description'
          onChange={ this.handleChange('description') }
          value={ this.state.description }
          placeholder='description'/>

        <button className='track-form-button'>
          {submitButton}
        </button>
      </form>
    );
  }
}

export default TrackFormInputs;
