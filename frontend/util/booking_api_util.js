export const fetchBookings = () => (
  $.ajax({method: 'GET', url: 'api/bookings'})
);

export const deleteBooking = id => (
  $.ajax({method: 'DELETE', url: `api/bookings/${id}`})
);
