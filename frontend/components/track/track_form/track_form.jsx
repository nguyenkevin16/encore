import React from 'react';

import TrackFormHeader from './track_form_header';
import TrackFormInputs from './track_form_inputs';

const TrackForm = ({ formType, processForm, closeModal, track, fetchUser }) => {
  return (
    <div className='track-form'>
      <TrackFormHeader formType={formType}/>
      <TrackFormInputs formType={formType}
        processForm={processForm}
        closeModal={closeModal}
        track={track}
        fetchUser={fetchUser}/>
    </div>
  );
};

export default TrackForm;
