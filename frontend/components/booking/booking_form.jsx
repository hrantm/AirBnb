import React from 'react';
import {hashHistory} from 'react-router';
import { DateRangePicker } from 'react-dates';

class BookingForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {startDate: null, endDate: null};
    this.handleFocusChange = this.handleFocusChange.bind(this);
    this.calcCost = this.calcCost.bind(this);
  }

  handleFocusChange(focus){
    this.setState({focus});
  }

  calcCost() {
    // console.log('outer');
    if ((this.state.startDate !== null) && (this.state.endDate !== null)){
      const ms = this.state.endDate.diff(this.state.startDate);
      this.days = moment.duration(ms).asDays();
      return (
        <div>
          <div className='price-div'>
            <h1>Price</h1>
            <h1>{this.props.office.price}</h1>
          </div>
          <div className='days-div'>
            <h1>Days</h1>
            <h1>{this.days}</h1>
          </div>
          <div className='total-div'>
            <h1>Total</h1>
            <h1>{this.days * this.props.office.price}</h1>
          </div>

        </div>
      );
    }else {
      return(
        <div>
          <div className='price-div'>
            <h1>Price</h1>
            <h1>{this.props.office.price}</h1>
          </div>
          <div className='days-div'>
            <h1>Days</h1>
            <h1>0</h1>
          </div>
          <div className='total-div'>
            <h1>Total</h1>
            <h1>0</h1>
          </div>
        </div>
      );
    }
  }

  render(){
    // console.log(this.state.startDate._d);
    // console.log(this.state);
    return (
    <div>
      <div className='price-div'>
        <h1>${this.props.office.price}</h1>
        <h1>Per Night</h1>
      </div>
      <DateRangePicker
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        focusedInput={this.state.focus}
        onDatesChange={({startDate, endDate}) => { this.setState({ startDate, endDate }); }}
        onFocusChange={this.handleFocusChange}
      />
    {this.calcCost()}
    </div>
  );
  }
}

export default BookingForm;
