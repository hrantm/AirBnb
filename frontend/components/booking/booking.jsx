import React from 'react';

class Booking extends React.Component {

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    return (
      <div>
        {this.props.bookings.map(booking => (
          booking.author_id
        ))}
      </div>
    );
  }
}

export default Booking;
