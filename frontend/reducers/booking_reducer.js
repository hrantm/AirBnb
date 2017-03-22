import { RECEIVE_BOOKINGS,
  RECEIVE_DELETED_BOOKING,
  RECEIVE_BOOKING,
  RECEIVE_ERRORS} from '../actions/booking_actions';
import merge from 'lodash/merge';

// const BookingReducer = (state = [], action) => {
//   switch (action.type) {
//     case RECEIVE_BOOKINGS:
//       return action.bookings;
//     case RECEIVE_DELETED_BOOKING:
//       return state.filter( el => el.id !== action.booking.id);
//     case RECEIVE_BOOKING:
//       return action.booking;
//     default:
//       return state;
//   }
// };

const _initialState = Object.freeze({
  bookings: [],
  errors: []
});

const BookingReducer = (state = _initialState, action) => {
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return {bookings: action.bookings,
              errors: []};
    case RECEIVE_DELETED_BOOKING:
      return {
        bookings: state.bookings.filter( el => el.id !== action.booking.id),
        errors: []};
    case RECEIVE_BOOKING:
      return action.booking;
    case RECEIVE_ERRORS:
    const errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
      return state;
  }
};

export default BookingReducer;
