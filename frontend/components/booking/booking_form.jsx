import React from 'react';
import {hashHistory} from 'react-router';
import { DateRangePicker } from 'react-dates';

class BookingForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {startDate: null, endDate: null};
    this.handleFocusChange = this.handleFocusChange.bind(this);
    this.calcCost = this.calcCost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e){
    debugger
    e.preventDefault();
    const booking = {
      author_id: this.props.currentUser.id,
      office_id: this.props.office.id,
      start_date: this.state.startDate,
      end_date: this.state.endDate
    };
    this.props.createBooking(booking);
  }

  render(){
    // console.log(this.state.startDate._d);
    // console.log(this.state);
    // console.log(this.props);
    return (
    <form className='booking-form' onSubmit={this.handleSubmit}>
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
    </div>
  </form>
  );
  }
}

export default BookingForm;
