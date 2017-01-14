import { connect } from 'react-redux';
import Discover from './discover';

const mapStateToProps = (state, ownProps) => ({
  tracks: Object.keys(state.tracks).map(id => state.tracks[id])
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
