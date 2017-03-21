import React from 'react';

class Booking extends React.Component {

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    return (
      <div className='booking-card-list'>
        {this.props.bookings.map(booking => (

          <div className='booking-card'>
            <img className='booking-image' src={booking.image_url} />
            <div className='card-info'>
            <h1 className='booking-card-item booking-location'>{booking.location}</h1>
            <div className='dates'>
              <div className='check-item'>
                <h1 className='booking-card-item'>Check In</h1>
                <h1 className='booking-card-item'>{booking.start_date}</h1>
              </div>
              <div className='check-item'>
                <h1 className='booking-card-item'>Check Out</h1>
                <h1 className='booking-card-item'>{booking.end_date}</h1>
              </div>
            </div>
            <input className='cancel-booking' type='submit' value='Cancel' />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Booking;
