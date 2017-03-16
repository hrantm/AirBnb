import { connect } from 'react-redux';
import { login, logout, signup, receiveErrors } from '../../actions/session_actions';
import { toggleModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({session, modal}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  modalIsOpen: modal.modalIsOpen,
  formType: modal.formType
});

const mapDispatchToProps = (dispatch) => {
  // const formType = location.pathname.slice(1);
  return ({
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    toggleModal: type => dispatch(toggleModal(type)),
    clearErrors: () => dispatch(receiveErrors([]))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
