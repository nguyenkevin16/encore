import { connect } from 'react-redux';
import Discover from './discover';
import { receivePlaybarData } from '../../actions/playbar_actions';

const mapStateToProps = (state, ownProps) => ({
  tracks: Object.keys(state.tracks).map(id => state.tracks[id])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  receivePlaybarData: (playbarInfo) => dispatch(receivePlaybarData(playbarInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
