import React from 'react';
import {hashHistory} from 'react-router';

class Office extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchOffices(9);
  }

  render(){
    console.log(this.props.offices);
    return(
      <div>
        <h1 className='home-marketing-line-one'>Book an office today</h1>
        <h1 className='home-marketing-line-two'>and get things done!</h1>
        <h3 className='feature-title'>Featured Offices</h3>
        <ul className='image-list'>
        {this.props.offices.map(office => (
          <li className='office-li' onClick={() => hashHistory.push(`/offices/${office.id}`)}>
            <h1 className='office-price'>${office.price} {office.location}</h1>
            <img className='office-img' src={office.image_url}/>
          </li>
        ))}
      </ul>
      </div>
    );
  }
}

export default Office;
