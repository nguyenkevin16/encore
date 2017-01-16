import { connect } from 'react-redux';
import TrackIndex from './track_index';

import { deleteTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  let user = { tracks: [] };

  if (Object.keys(ownProps.user).length !== 0) {
    user = ownProps.user;
  }

  return {
    user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteTrack: (id) => dispatch(deleteTrack(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
