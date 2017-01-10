import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ loggedIn, errors }) => ({
  loggedIn,
  errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname;
  const formToProcess =
    formType === '/login' ?
    (user) => dispatch(login(user)) : (user) => dispatch(signup(user));

  return ({
    formType: formType,
    processForm: formToProcess
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
