import React from 'react';
import { DateRangePicker } from 'react-dates';
import {START_DATE, END_DATE} from 'react-dates/constants';
import {hashHistory} from 'react-router';

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      guests: 0,
      focus: null
    };
    this.update = this.update.bind(this);
    this.search = this.search.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
  }

  update(field){
    return e => (
      this.setState({[field]: e.currentTarget.value})
    );
  }

  search(e) {
    e.preventDefault();
    const startDate = this.state.startDate ? this.state.startDate._d : '';
    const endDate = this.state.endDate ? this.state.endDate._d : '';
    this.props.searchOffice({
      location: this.state.location,
      guests: this.state.guests,
      startDate: startDate,
      endDate: endDate
    }).then(hashHistory.push('/search'));
  }

  handleFocusChange(focus){
    this.setState({focus});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.search} className='search-form'>
          <div>
            <input type='text'
              className='location-input'
              onChange={this.update('location')}
              placeholder='Where'/>
          </div>
          <div>
              <DateRangePicker
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                focusedInput={this.state.focus}
                onDatesChange={({startDate, endDate}) => { this.setState({ startDate, endDate }); }}
                onFocusChange={this.handleFocusChange}
              />
          </div>
          <div className='search-and-guests'>
            <div className='title-and-guests'>
              <select className='guests-drop-down' onChange={this.update('guests')}>
                <option value="1" select='selected'>1 Guest</option>
                <option value="2">2 Guest</option>
                <option value="3">3 Guest</option>
                <option value="4">4 Guest</option>
                <option value="larger">4+</option>
              </select>
            </div>
            <div className='search-button-container'>
              <input
                className='search-submit'
                type='submit'
                value='Search'/>
            </div>
          </div>
      </form>
      </div>
    );
  }
}

export default Search;
