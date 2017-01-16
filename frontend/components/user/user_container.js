import { connect } from 'react-redux';
import User from './user';

import { updateUser, fetchUser } from '../../actions/user_actions';
import { tracksForUser } from '../../utils/selectors';
import { fetchTracks } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateUser: (user) => dispatch(updateUser(user)),
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchTracks: () => dispatch(fetchTracks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
