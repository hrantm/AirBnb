export const fetchBookings = () => (
  $.ajax({method: 'GET', url: 'api/bookings'})
);
