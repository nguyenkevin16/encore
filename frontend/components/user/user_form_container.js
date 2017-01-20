import { connect } from 'react-redux';
import { updateUser, fetchUser } from '../../actions/user_actions';
import UserForm from './user_form';

const mapStateToProps = (state, ownProps) => {
  return {
    user: ownProps.user,
    closeModal: ownProps.closeModal,
    currentUser: ownProps.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
