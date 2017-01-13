import { connect } from 'react-redux';
import TrackIndex from './track_index';

const mapStateToProps = (state, ownProps) => ({
  tracks: Object.keys(ownProps.tracks).map(id => ownProps.tracks[id]),
  user: ownProps.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
