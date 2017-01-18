import { connect } from 'react-redux';
import TrackShow from './track_show';

import { deleteTrack } from '../../actions/track_actions';
import { receivePlaybarData } from '../../actions/playbar_actions';

const mapStateToProps = (state, ownProps) => {
  let track = state.tracks[ownProps.params.trackId];

  if (!track) {
    track = {
      img_url: '',
      title: '',
      description: '',
      user: {
        username: ''
      },
      comments: []
    };
  }

  return {
    track
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  receivePlaybarData: (playbarInfo) => dispatch(receivePlaybarData(playbarInfo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
