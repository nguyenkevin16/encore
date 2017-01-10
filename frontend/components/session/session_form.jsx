import React from 'react';

import SessionFormHeader from './session_form_header';
import SessionFormFooter from './session_form_footer';
import SessionFormInputs from './session_form_inputs';

class SessionForm extends React.Component {
  render() {
    const { formType, errors } = this.props;

    return (
      <div className='session-form'>
        <SessionFormHeader formType={formType}/>
        <SessionFormInputs formType={formType}
          processForm={this.props.processForm}/>
        <SessionFormFooter formType={formType}/>
      </div>
    );
  }
}

export default SessionForm;
