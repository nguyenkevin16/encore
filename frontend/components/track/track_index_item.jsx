import React from 'react';
import Modal from 'react-modal';
import TrackFormContainer from './track_form/track_form_container';

const customStyles = {
  content : {
    display        : 'flex',
    top            : '40%',
    left           : '50%',
    right          : 'auto',
    bottom         : 'auto',
    marginRight    : '-50%',
    transform      : 'translate(-50%, -50%)'
  },
  overlay : {
    zIndex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.11)'
  }
};

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.state = { modalIsOpen: false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  handleDelete() {
    this.props.deleteTrack(this.props.track.id);
  }

  componentDidMount() {
    this.setState({ modalIsOpen: false });
  }

  openModal(e) {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { track, artist, deleteTrack } = this.props;

    return (
      <div className='track-index-item'>
        <img className='track-index-item-img'
          src={ track.img_url }>
        </img>

        <div className='track-index-item-details'>
          <label>Title: { track.title }</label>
          <label>Artist: { artist.username }</label>
          <label>Description: { track.description }</label>

          <div className='track-index-buttons'>
            <button onClick={ this.handleDelete }>Delete Track</button>
            <button onClick={ this.openModal }>Edit Track</button>
          </div>

          <audio controls>
            <source src={ track.track_url } type='audio/mpeg'/>
          </audio>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Session Form Modal">

          <TrackFormContainer formType='edit'
            closeModal={this.closeModal}
            track={track}/>
        </Modal>
      </div>
    );
  }
}

export default TrackIndexItem;
