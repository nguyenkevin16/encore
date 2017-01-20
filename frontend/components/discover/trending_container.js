import { connect } from 'react-redux';
import Trending from './trending';
import { receivePlaybarData } from '../../actions/playbar_actions';

const mapStateToProps = (state, ownProps) => {
  let tracks = [];

  let numTracks = Object.keys(state.tracks).length;
  let startIdx = Math.floor(Math.random() * (numTracks - 7) + 1);

  if (startIdx > 0) {
    let endIdx = startIdx + 7;

    for (startIdx; startIdx <= endIdx; startIdx++) {
      tracks.push(state.tracks[startIdx]);
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
