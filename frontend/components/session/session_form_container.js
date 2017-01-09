import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ loggedIn, errors }) => ({
  loggedIn,
  errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formTypeString = ownProps.location.pathname;

  const formToProcess =
    formTypeString === '/login' ?
    (user) => dispatch(login(user)) : (user) => dispatch(signup(user));

  return ({
    formType: formTypeString,
    processForm: formToProcess
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
