import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';

import SessionFormHeader from './session_form_header';
import SessionFormFooter from './session_form_footer';
import SessionFormInputs from './session_form_inputs';

class SessionForm extends React.Component {
  constructor() {
    super();

    this.state = { modalIsOpen: true };
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.props.router.push('/');
  }

  render() {
    const { formType, errors } = this.props;

    Modal.setAppElement(document.getElementById('session-form-modal'));

    const customStyles = {
      content : {
        display        : 'flex',
        top            : '40%',
        left           : '50%',
        right          : 'auto',
        bottom         : 'auto',
        marginRight    : '-50%',
        transform      : 'translate(-50%, -50%)'
      }
    };

    return (
      <div id='session-form-modal'>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Session Form Modal">

          <div className='session-form'>
            <SessionFormHeader formType={formType}/>
            <SessionFormInputs formType={formType}
              processForm={this.props.processForm}/>
            <SessionFormFooter formType={formType}/>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(SessionForm);
