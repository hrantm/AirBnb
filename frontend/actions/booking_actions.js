import * as BookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_DELETED_BOOKING = 'RECEIVE_DELETED_BOOKING';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';

export const fetchBookings = () => dispatch => {
  return (
    BookingAPIUtil.fetchBookings()
      .then( bookings => dispatch(receiveBookings(bookings)))
  );
};

export const deleteBooking = id => dispatch => {
  return (
    BookingAPIUtil.deleteBooking(id)
      .then( booking => dispatch(receiveDeltedBooking(booking)))
  );
};

export const createBooking = booking => dispatch => {
  //No need to receive booking because the bookings page is requesting all of them
  return (
    BookingAPIUtil.createBooking(booking)
  );
};

//SYNC

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveDeltedBooking = booking => ({
  type: RECEIVE_DELETED_BOOKING,
  booking
});
