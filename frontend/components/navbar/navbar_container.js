import { connect } from 'react-redux';
import { logout,
         clearErrors } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = (state) => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
