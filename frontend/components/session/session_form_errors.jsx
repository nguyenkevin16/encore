import React from 'react';

const SessionFormErrors = ({ errors }) => {
  const displayErrors = errors.map((error, i) => (
    <li key={i} className='error'>{ error }</li>
  ));

  return (
    <div className='session-form-errors'>
      <ul>
        {
          displayErrors
        }
      </ul>
    </div>
  );
};

export default SessionFormErrors;
