import { RECEIVE_BOOKINGS } from '../actions/booking_actions';

const BookingReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    default:
      return state;
  }
};

export default BookingReducer;
