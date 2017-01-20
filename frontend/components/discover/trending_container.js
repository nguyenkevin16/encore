import { connect } from 'react-redux';
import Trending from './trending';
import { receivePlaybarData } from '../../actions/playbar_actions';

const mapStateToProps = (state, ownProps) => {
  let tracks = [];

  if (Object.keys(state.tracks).length !== 0) {
    let allTracks = Object.keys(state.tracks).map(id => state.tracks[id]);

    while (tracks.length <= 5) {
      tracks.push(allTracks.pop());
    }
  }

  if (!tracks[0]) {
    tracks = [{
      id: '',
      img_url: '',
      title: '',
      user: {
        id: '',
        username: ''
      }
    }];
  }

  return {
    tracks
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  receivePlaybarData: (playbarInfo) => dispatch(receivePlaybarData(playbarInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending);
