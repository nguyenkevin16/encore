import React from 'react';

const SessionFormHeader = ({ formType }) => {

  const formHeader = formType === 'login' ? 'Log In' : 'New Account';

  return (
    <div className='session-form-header'>
      <img src='http://res.cloudinary.com/nguyenkevin16/image/upload/v1484099848/headphone-symbol_iotteg.png'/>
      <h3>{ formHeader }</h3>
    </div>
  );
};

export default SessionFormHeader;
