import { connect } from 'react-redux';
import { login,
         signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  formType: ownProps.formType,
  errors: ownProps.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formToProcess = ownProps.formType === 'login' ?
    (user) => dispatch(login(user)) : (user) => dispatch(signup(user));

  return ({
    processForm: formToProcess,
    login: (user) => dispatch(login(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
