import React from 'react';
import Modal from 'react-modal';

import UserFormContainer from './user_form_container';

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

class UserDetails extends React.Component {
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
      return (<button onClick={ this.openModal }>Update Description</button>);
    }
  }

  render() {
    const { user, currentUser, updateUser } = this.props;

    return (
      <div className='user-details'>
        <h1>{ user.username }</h1>
        <h3>{ user.description }</h3>
        { this.showButton() }

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="User Form Modal">

          <UserFormContainer
            closeModal={this.closeModal}
            currentUser={currentUser}
            user={user}/>
        </Modal>
      </div>
    );
  }
}

export default UserDetails;
