import React from 'react';

import SessionFormHeader from './session_form_header';
import SessionFormFooter from './session_form_footer';
import SessionFormInputs from './session_form_inputs';
import SessionFormErrors from './session_form_errors';

const SessionForm = ({ formType, errors, processForm, login, closeAndOpenModal, closeModal }) => {
  return (
    <div className='session-form'>
      <SessionFormHeader formType={formType}/>
      <SessionFormErrors errors={errors}/>
      <SessionFormInputs formType={formType}
        processForm={processForm}/>
      <SessionFormFooter formType={formType}
        login={login}
        closeAndOpenModal={closeAndOpenModal}
        closeModal={closeModal}/>
    </div>
  );
};

export default SessionForm;
