import { connect } from 'react-redux';
import Trending from './trending';
import { receivePlaybarData } from '../../actions/playbar_actions';

const mapStateToProps = (state, ownProps) => {
  let tracks = [];

  if (Object.keys(state.tracks).length !== 0) {
    for (let i = 1; i <= 7; i++) {
      tracks.push(state.tracks[i]);
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
