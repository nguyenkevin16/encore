import React from 'react';
import Modal from 'react-modal';

import UserImage from './user_image';
import UserDetails from './user_details';
import TrackIndexContainer from '../track/track_index_container';
import TrackFormContainer from '../track/track_form/track_form_container';

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

class User extends React.Component {
  constructor() {
    super();

    this.state = { modalIsOpen: false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.showButton = this.showButton.bind(this);
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

  showButton() {
    if (!this.props.currentUser || Object.keys(this.props.user).length === 0) {
      return;
    } else if (this.props.currentUser.id === this.props.user.id) {
      return (<button onClick={ this.openModal }>Upload Track</button>);
    }
  }

  render() {
    const { user, updateUser, currentUser } = this.props;

    return (
      <div className='user-show'>
        <div className='user-show-header'>
          <UserImage user={user} updateUser={updateUser} currentUser={currentUser} />
          <UserDetails user={user} updateUser={updateUser} currentUser={currentUser}/>
        </div>

        <div className='user-tracks'>
          { this.showButton() }
          <TrackIndexContainer user={user}
            currentUser={currentUser}/>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Session Form Modal">

          <TrackFormContainer formType='create'
            closeModal={this.closeModal}/>
        </Modal>
      </div>
    );
  }
}

export default User;
