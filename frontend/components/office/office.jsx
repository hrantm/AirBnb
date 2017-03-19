import React from 'react';
import {hashHistory} from 'react-router';
import SearchContainer from '../search/search_container';

class Office extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if (this.props.pageType === 'home') {
      this.props.fetchOffices(9);
    }
  }

  render(){
    return(
      <div>
        <h3 className='feature-title'>Featured</h3>
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
