import React from 'react';

const TrackFormHeader = ({ formType }) => {

  const formHeader = formType === 'create' ? 'Upload Track' : 'Edit Track';

  return (
    <div className='track-form-header'>
      <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/v1484099848/headphone-symbol_iotteg.png'/>
      <h3>{ formHeader }</h3>
    </div>
  );
};

export default TrackFormHeader;
