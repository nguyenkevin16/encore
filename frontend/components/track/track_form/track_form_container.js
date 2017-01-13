import { connect } from 'react-redux';
import { createTrack,
         updateTrack } from '../../../actions/track_actions';
import TrackForm from './track_form';

const mapStateToProps = (state, ownProps) => {
  let track = {
    title: "",
    description: "",
    track_url: "",
    img_url: ""
  };

  if (ownProps.track) {
    track = ownProps.track;
  }

  return {
    formType: ownProps.formType,
    closeModal: ownProps.closeModal,
    track
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formToProcess = ownProps.formType === 'create' ?
    (track) => dispatch(createTrack(track)) : (track) => dispatch(updateTrack(track));

  return ({
    processForm: formToProcess
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);
