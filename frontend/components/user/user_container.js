import { connect } from 'react-redux';
import User from './user';

import { updateUser } from '../../actions/user_actions';
import { tracksForUser } from '../../utils/selectors';

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  currentUser: state.session.currentUser,
  tracks: tracksForUser(state.tracks, state.user.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
