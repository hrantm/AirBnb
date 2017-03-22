import React from 'react';
import {hashHistory} from 'react-router';
import { DateRangePicker } from 'react-dates';

class BookingForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {startDate: null, endDate: null, message: '', errors: this.props.errors};
    this.handleFocusChange = this.handleFocusChange.bind(this);
    this.calcCost = this.calcCost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.notLoggedInMessage = this.notLoggedInMessage.bind(this);
  }

  handleFocusChange(focus){
    this.setState({focus});
  }

  calcCost() {
    // console.log('outer');
    if ((this.state.startDate !== null) && (this.state.endDate !== null)){
      const ms = this.state.endDate.diff(this.state.startDate);
      this.days = moment.duration(ms).asDays() + 1;
      return (
        <div className='price-calc-div'>
          <div>
            <h1>Price</h1>
            <h1>${this.props.office.price}</h1>
          </div>
          <div className='days-div'>
            <h1>Days</h1>
            <h1>{this.days}</h1>
          </div>
          <div className='total-div'>
            <h1>Total</h1>
            <h1>${this.days * this.props.office.price}</h1>
          </div>

        </div>
      );
    }else {
      return(
        <div className='price-calc-div'>
          <div>
            <h1 >Price</h1>
            <h1 >${this.props.office.price}</h1>
          </div>
          <div className='days-div'>
            <h1>Days</h1>
            <h1>0</h1>
          </div>
          <div className='total-div'>
            <h1>Total</h1>
            <h1>$0</h1>
          </div>
        </div>
      );
    }
  }

  notLoggedInMessage(){
    if (!this.props.currentUser) {
      return(
        <h1 className='not-logged-message'>Not Logged In</h1>
      );
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if (!this.state.startDate || !this.state.endDate) {
      this.setState({errors: ['Please Select A Date']});
    }
    if (this.props.currentUser) {
      const booking = {
        author_id: this.props.currentUser.id,
        office_id: this.props.office.id,
        start_date: this.state.startDate._d,
        end_date: this.state.endDate._d
      };
      this.props.createBooking(booking)
        .then(() => hashHistory.push(`/:${this.props.currentUser.id}/bookings`));
    }
  }

  // {this.props.errors.map(error => (
  //   <h1 className='booking-form-error'>{error}</h1>
  // ))}


  render(){
    // console.log(this.state.startDate._d);
    console.log(this.state);
    // console.log(this.props);
    return (
    <form className='booking-form' onSubmit={this.handleSubmit}>
      {this.state.errors.map(error => (
        <h1 className='booking-form-error'>{error}</h1>
      ))}
      {this.props.errors.map(error => (
        <h1 className='booking-form-error'>{error}</h1>
      ))}

      <div className='daily-price'>
        <h1>${this.props.office.price}</h1>
        <div></div>
        <h1>Per Day</h1>
      </div>
      <DateRangePicker
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        focusedInput={this.state.focus}
        onDatesChange={({startDate, endDate}) => { this.setState({ startDate, endDate }); }}
        onFocusChange={this.handleFocusChange}
        minimumNights={0}
      />
    {this.calcCost()}
    <div className='booking-submit-container'>
      <input className='booking-form-submit' type='submit' value='Book Now!'/>
      {this.notLoggedInMessage()}
    </div>
  </form>
  );
  }
}

export default BookingForm;
