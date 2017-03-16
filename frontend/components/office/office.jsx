import React from 'react';

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
        <h3 className='feature-title'>Featured Offices</h3>
        <ul className='image-list'>
        {this.props.offices.map(office => (
          <li className='office-li'>
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
