import { connect } from 'react-redux';
import Playbar from './playbar';

import { receivePlaybarData } from '../../actions/playbar_actions';

const mapStateToProps = (state, ownProps) => ({
  track: ownProps.playbar.track,
  display: ownProps.playbar.display
});

const mapDispatchToProps = (dispatch) => ({
  receivePlaybarData: (playbar) => dispatch(receivePlaybarData(playbar))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playbar);
