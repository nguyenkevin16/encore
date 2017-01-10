import React from 'react';

const SessionFormHeader = ({ formType }) => {

  const formHeader = formType === '/login' ? 'Log In' : 'New Account';

  return (
    <div className='session-form-header'>
      <h3>{ formHeader }</h3>
    </div>
  );
};

export default SessionFormHeader;
