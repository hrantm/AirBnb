import { RECEIVE_BOOKINGS, RECEIVE_DELETED_BOOKING, RECEIVE_BOOKING } from '../actions/booking_actions';

const BookingReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_DELETED_BOOKING:
      return state.filter( el => el.id !== action.booking.id);
    case RECEIVE_BOOKING:
      return action.booking;
    default:
      return state;
  }
};

export default BookingReducer;
