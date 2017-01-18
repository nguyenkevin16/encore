import { connect } from 'react-redux';
import Playbar from './playbar';

const mapStateToProps = (state, ownProps) => ({
  track: ownProps.playbar.track,
  display: ownProps.playbar.display
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playbar);
