import React from 'react';
import { Link } from 'react-router';

class TrackFormInputs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      decription: "",
      track_url: "",
      img_url: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImg = this.uploadImg.bind(this);
  }

  uploadImg(e) {
    e.preventDefault();

    cloudinary.openUploadWidget({
      cloud_name: window.CLOUDINARY_OPTIONS.cloud_name,
      upload_preset: window.CLOUDINARY_OPTIONS.upload_preset
    },
      (error, result) => {
        this.setState({ img_url: result[0].secure_url });
      }
    );
  }

  uploadAudio(e) {
    e.preventDefault();

    cloudinary.openUploadWidget({
      cloud_name: window.CLOUDINARY_OPTIONS.cloud_name,
      upload_preset: window.CLOUDINARY_OPTIONS.upload_preset
    },
      (error, result) => {
        this.setState({ track_url: result[0].secure_url });
      }
    );
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

          <button onClick={ this.uploadAudio }>
            Upload Audio
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
