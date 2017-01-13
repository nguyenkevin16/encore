import { connect } from 'react-redux';
import TrackIndex from './track_index';

import { deleteTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  tracks: Object.keys(ownProps.tracks).map(id => ownProps.tracks[id]),
  user: ownProps.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteTrack: (id) => dispatch(deleteTrack(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
