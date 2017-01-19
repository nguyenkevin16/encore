import React from 'react';
import { Link } from 'react-router';
import TrackFormErrors from './track_form_errors';

class TrackFormInputs extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.track;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImg = this.uploadImg.bind(this);
    this.uploadAudio = this.uploadAudio.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  uploadImg(e) {
    e.preventDefault();

    cloudinary.openUploadWidget({
      cloud_name: window.CLOUDINARY_OPTIONS.cloud_name,
      upload_preset: window.CLOUDINARY_OPTIONS.upload_preset,
      cropping: 'server',
      cropping_aspect_ratio: 1,
      folder: 'track_photos',
      max_image_width: 300,
      max_image_height: 300,
      theme: 'minimal'
    },
      (error, result) => {
        if (result) {
          this.setState({ img_url: result[0].secure_url });
        }
      }
    );
  }

  uploadAudio(e) {
    e.preventDefault();

    cloudinary.openUploadWidget({
      cloud_name: window.CLOUDINARY_OPTIONS.cloud_name,
      upload_preset: window.CLOUDINARY_OPTIONS.upload_preset,
      sources: ['local'],
      multiple: false,
      folder: 'track_audio',
      theme: 'minimal'
    },
      (error, result) => {
        if (result) {
          this.setState({ track_url: result[0].secure_url });
        }
      }
    );
  }

  handleSubmit(e) {
    if (this.state.title !== '' && this.state.track_url !== '') {
      e.preventDefault();
      this.props.processForm(this.state);
      this.props.fetchUser(this.props.userId);
      this.props.closeModal();
    } else {
      if (this.state.title === '' && this.state.track_url === '') {
        this.setState({ errors:
          ['Track title is required', 'Track audio is required']
        });
      } else if (this.state.title === '') {
        this.setState({ errors: ['Track title is required'] });
      } else if (this.state.track_url === '') {
        this.setState({ errors: ['Track audio is required'] });
      }
    }
  }

  renderErrors() {
    if (this.state.errors) {
      return (
        <TrackFormErrors errors={this.state.errors}/>
      );
    }
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

        { this.renderErrors() }

        <div className='track-form-input-avatar'>
          <img src={ this.state.img_url }></img>

          <button onClick={ this.uploadImg }>
            Upload Image
          </button>
        </div>

        <div className='track-form-input-fields'>
          <input className='track-form-input title'
            onChange={ this.handleChange('title') }
            value={ this.state.title }
            placeholder='title'/>

          <textarea className='track-form-input description'
            onChange={ this.handleChange('description') }
            value={ this.state.description }
            placeholder='description'/>

          <button className='track-form-input button'
            onClick={ this.uploadAudio }>
            Upload Audio

            <input
              value={ this.state.track_url }
              disabled/>
          </button>

        </div>

        <input type='submit'
          className='track-form-button'
          value={submitButton}/>
      </form>
    );
  }
}

export default TrackFormInputs;
