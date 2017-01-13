import { connect } from 'react-redux';
import User from './user';

import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
