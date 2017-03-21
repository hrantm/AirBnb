import React from 'react';
import {hashHistory} from 'react-router';

class Booking extends React.Component {
  constructor(props){
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.props.fetchBookings();
  }

  handleCancel(id){
    return (e) => this.props.deleteBooking(id);
  }

  render() {
    return (
      <div className='booking-card-list'>
        {this.props.bookings.map(booking => (

          <div className='booking-card'>
              <img className='booking-image' src={booking.image_url}
                onClick={ () => hashHistory.push(`/offices/${booking.office_id}`)}/>
            <div className='card-info'>
            <div className='booking-title'>
              <h1 className='booking-card-item booking-location'
                onClick={ () => hashHistory.push(`/offices/${booking.office_id}`)}>{booking.location}</h1>
              <h1 className='booking-guest-limit'>{booking.guest_limit}</h1>
            </div>

            <h1 className='booking-desc'>{booking.desc.slice(0,40)}...</h1>
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
            <div className='calc-div'>
              <div className='calc-div-item'>
                <h1 className='calc-div-content'>Price</h1>
                <h1 className='calc-div-content'>${booking.price}</h1>
              </div>
              <div className='calc-div-item'>
                <h1 className='calc-div-content'>Days</h1>
                <h1 className='calc-div-content'>{booking.days}</h1>
              </div>
              <div className='calc-div-item'>
                <h1 className='calc-div-content'>Total</h1>
                <h1 className='calc-div-content'>${booking.price * booking.days}</h1>
              </div>
            </div>

            <input className='cancel-booking'
              type='submit'
              value='Cancel'
              onClick={this.handleCancel(booking.id)}/>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Booking;
