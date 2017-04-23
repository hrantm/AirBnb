import React from 'react';
import {hashHistory} from 'react-router';
import SearchContainer from '../search/search_container';
import ReactStars from 'react-stars';


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
    console.log(this.props.offices);
    return(
      <div >
        <ul className='image-list'>
        {this.props.offices.map(office => (
          <li className='office-li' onClick={() => hashHistory.push(`/offices/${office.id}`)}>
            <div className='office-title-div-container'>
              <div className='office-title-div'>
                <h1 className='office-price'>${office.price}</h1>
                <h1 className='office-location'>{office.location}</h1>
              </div>
              <ReactStars
                count={5}
                size={16}
                edit={false}
                half={false}
                color2={'#ff7e82'}
                value={office.average_rating}/>
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
