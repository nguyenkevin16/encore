import React from 'react';

import TrackFormHeader from './track_form_header';
import TrackFormInputs from './track_form_inputs';

const TrackForm = ({ formType, processForm, closeModal, track }) => {
  return (
    <div className='track-form'>
      <TrackFormHeader formType={formType}/>
      <TrackFormInputs formType={formType}
        processForm={processForm}
        closeModal={closeModal}
        track={track}/>
    </div>
  );
};

export default TrackForm;
