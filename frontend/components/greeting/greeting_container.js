import { connect } from 'react-redux';
import { signout } from '../../actions/session_actions';
import { toggleModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, modal }) => ({
  currentUser: session.currentUser,
  modalIsOpen: modal.modalIsOpen
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
  toggleModal: type => dispatch(toggleModal(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
