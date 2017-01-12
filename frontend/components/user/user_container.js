import { connect } from 'react-redux';
import User from './user';

const mapStateToProps = (state, ownProps) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
