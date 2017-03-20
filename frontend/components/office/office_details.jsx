import React from 'react';

class OfficeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.guestText = this.guestText.bind(this);
  }

  componentDidMount(){
    this.props.fetchOffice(this.props.routeParams.office_id);
  }

  guestText(){
    console.log(this.props);
    if (this.props.guests === 1) {
      return `${this.props.offices.guest_limit} Guest`;
    }else {
      return `${this.props.offices.guest_limit} Guests`;
    }
  }

  render(){
    return(
      <div>
        <div className='image-container'>
          <img
            className='detail-image'
            src={this.props.offices.image_url} />
        </div>
        <div className='detail-title'>
          <h1 className='location-guests'>{this.props.offices.location}</h1>
          <h1 className='location-guests'>{this.guestText()}</h1>
        </div>
        <div>
          <h2 className='about-title'>About This</h2>
          <p className='about-body'>{this.props.offices.about_this}</p>
        </div>
      </div>
    );
  }
}

export default OfficeDetails;
