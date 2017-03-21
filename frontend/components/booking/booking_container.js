import {connect} from 'react-redux';
import {fetchBookings} from '../../actions/booking_actions';
import Booking from './booking';

const mapStateToProps = state => {
  return (
    {
      bookings: state.bookings
    }
  );
};

const mapDispatchToProps = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);
