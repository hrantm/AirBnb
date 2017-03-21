import React from 'react';
import {hashHistory} from 'react-router';
import { DateRangePicker } from 'react-dates';

class BookingForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleFocusChange = this.handleFocusChange.bind(this);
  }

  handleFocusChange(focus){
    this.setState({focus});
  }

  render(){
    // console.log(this.props);
    return (
    <div>
      <div>
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
    </div>
  );
  }
}

export default BookingForm;
