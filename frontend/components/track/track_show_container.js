import { connect } from 'react-redux';
import TrackShow from './track_show';

import { deleteTrack,
         fetchTracks } from '../../actions/track_actions';
import { receivePlaybarData } from '../../actions/playbar_actions';
import { createComment,
         updateComment,
         deleteComment } from '../../utils/comment_api_util';

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
    track,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  receivePlaybarData: (playbarInfo) => dispatch(receivePlaybarData(playbarInfo)),
  fetchTracks: () => dispatch(fetchTracks()),
  createComment: (comment) => createComment(comment),
  updateComment: (comment) => updateComment(comment),
  deleteComment: (id) => deleteComment(id)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
