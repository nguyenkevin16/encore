import React from 'react';

import TrackFormHeader from './track_form_header';
import TrackFormInputs from './track_form_inputs';

const TrackForm = ({ formType, processForm }) => {
  return (
    <div className='track-form'>
      <TrackFormHeader formType={formType}/>
      <TrackFormInputs formType={formType}
        processForm={processForm}/>
    </div>
  );
};

export default TrackForm;
