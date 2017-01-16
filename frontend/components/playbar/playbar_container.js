import { connect } from 'react-redux';
import Playbar from './playbar';

const mapStateToProps = (state, ownProps) => ({
  track_url: ownProps.playbar.track_url,
  display: ownProps.playbar.display
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playbar);
