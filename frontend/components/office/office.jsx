import React from 'react';
import {hashHistory} from 'react-router';
import SearchContainer from '../search/search_container';

class Office extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if (this.props.pageType === 'home') {
      this.props.fetchOffices({office: {show_amount: 9}});
    }
  }

  render(){
    return(
      <div >
        <ul className='image-list'>
        {this.props.offices.map(office => (
          <li className='office-li' onClick={() => hashHistory.push(`/offices/${office.id}`)}>
            <div className='office-title-dive'>
              <h1 className='office-price'>${office.price}</h1>
              <h1 className='office-location'>{office.location}</h1>
            </div>
            <img className='office-img' src={office.image_url}/>
          </li>
        ))}
      </ul>
      </div>
    );
  }
}


export default Office;
