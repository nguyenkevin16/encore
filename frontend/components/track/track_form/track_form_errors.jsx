import React from 'react';

const TrackFormErrors = ({ errors }) => {
  const displayErrors = errors.map((error, i) => (
    <li key={i} className='error'>{ error }</li>
  ));

  return (
    <div className='track-form-errors'>
      <ul>
        {
          displayErrors
        }
      </ul>
    </div>
  );
};

export default TrackFormErrors;
