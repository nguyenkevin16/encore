import { connect } from 'react-redux';
import { login,
         signup,
         clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname;
  const formToProcess = formType === '/login' ?
    (user) => dispatch(login(user)) : (user) => dispatch(signup(user));

  return ({
    formType: formType,
    processForm: formToProcess,
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
