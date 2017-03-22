import { connect } from 'react-redux';
import BookingForm from './booking_form';
import {createBooking} from '../../actions/booking_actions';

const mapStateToProps = ({session, bookings}) => ({
  currentUser: session.currentUser,
  errors: bookings.errors
});

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
