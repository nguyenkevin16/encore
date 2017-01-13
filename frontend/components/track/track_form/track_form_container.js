import { connect } from 'react-redux';
import { createTrack,
         updateTrack } from '../../../actions/track_actions';
import TrackForm from './track_form';

const mapStateToProps = (state, ownProps) => ({
  formType: ownProps.formType,
  closeModal: ownProps.closeModal
});

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
