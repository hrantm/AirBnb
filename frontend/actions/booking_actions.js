import * as BookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';

export const fetchBookings = () => dispatch => {
  return (
    BookingAPIUtil.fetchBookings()
      .then( bookings => dispatch(receiveBookings(bookings)))
  );
};

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});
