import { connect } from 'react-redux';
import TrackIndex from './track_index';

import { deleteTrack } from '../../actions/track_actions';
import { receivePlaybarData } from '../../actions/playbar_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  let user = { tracks: [] };

  if (Object.keys(ownProps.user).length !== 0) {
    user = ownProps.user;
  }

  return {
    user,
    currentUser: ownProps.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteTrack: (id) => dispatch(deleteTrack(id)),
  receivePlaybarData: (playbarInfo) => dispatch(receivePlaybarData(playbarInfo)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
