import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';

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

class NavbarRightLoggedOut extends React.Component {
  constructor() {
    super();

    this.state = { modalIsOpen: false, formType: '' };
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.setState({ modalIsOpen: false });
  }

  openModal(formType) {
    return () => this.setState({ modalIsOpen: true, formType });
  }

  closeModal() {
    this.props.clearErrors();
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className='navbar-right-buttons'>
        <button onClick={ this.openModal('signup') }>
          Sign Up
        </button>

        <button onClick={ this.openModal('login') }>
          Log In
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Session Form Modal">

          <SessionFormContainer
            formType={ this.state.formType }
            errors={ this.props.errors }/>
        </Modal>
      </div>
    );
  }
}

export default NavbarRightLoggedOut;