import {connect} from 'react-redux';
import {fetchBookings, deleteBooking} from '../../actions/booking_actions';
import Booking from './booking';

const mapStateToProps = state => {
  return (
    {
      bookings: state.bookings.bookings
    }
  );
};

const mapDispatchToProps = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings()),
  deleteBooking: id => dispatch(deleteBooking(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);
