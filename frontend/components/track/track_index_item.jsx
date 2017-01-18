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
    zIndex: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }
};

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalIsOpen: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.showButtons = this.showButtons.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handleDelete() {
    this.props.deleteTrack(this.props.track.id);
    this.props.fetchUser(this.props.user.id);
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

  showButtons() {
    if (!this.props.currentUser || Object.keys(this.props.user).length === 0) {
      return;
    } else if (this.props.currentUser.id === this.props.user.id) {
      return (
        <div className='track-index-buttons'>
          <button onClick={ this.handleDelete }>Delete Track</button>
          <button onClick={ this.openModal }>Edit Track</button>
        </div>
      );
    }
  }

  handlePlay() {
    this.props.receivePlaybarData({
      track: this.props.track,
      display: true
    });
  }

  render() {
    const { track, user, deleteTrack } = this.props;

    return (
      <div className='track-index-item'>
        <img className='track-index-item-img' src={ track.img_url }/>
        <div className='track-item-overlay' onClick={ this.handlePlay }/>

        <div className='track-index-item-details'>
          <h3>{ track.title }</h3>
          <h5>{ track.description }</h5>
          { this.showButtons() }
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
