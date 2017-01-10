import React from 'react';
import { Link } from 'react-router';

const SessionFormFooter = ({ formFooter, formType }) => {

  const otherFormLink = () => {
    if (formType === '/login') {
      return <Link to='/signup'>{'Don\'t have an account?'}</Link>;
    } else {
      return <Link to='/login' >{'Already have an account?'}</Link>;
    }
  };

  return (
    <div className='session-form-footer'>
      <Link to='/'>Cancel</Link>
      { otherFormLink() }
    </div>
  );
};

export default SessionFormFooter;
