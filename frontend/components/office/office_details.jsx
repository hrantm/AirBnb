import React from 'react';
import BookingFormContainer from '../booking/booking_form_container';
import ReviewContainer from '../review/review_container';

class OfficeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.guestText = this.guestText.bind(this);
  }

  componentDidMount(){
    this.props.fetchOffice(this.props.routeParams.office_id);
  }

  guestText(){
    if (this.props.offices.guest_limit === 1) {
      return `${this.props.offices.guest_limit} Guest`;
    }else {
      return `${this.props.offices.guest_limit} Guests`;
    }
  }

  render(){
    // console.log(this.props.offices);
    return(
      <div>
        <div className='image-container'>
          <img
            className='detail-image'
            src={this.props.offices.image_url} />
        </div>
        <div className='details-and-form'>
          <div className= 'detail-content'>
            <div className='detail-title'>
              <h1 className='location-guests'>{this.props.offices.location}</h1>
              <div></div>
              <h1 className='location-guests'>Seats {this.props.offices.guest_limit}</h1>
            </div>
            <div className='about-section'>
              <h2 className='about-title'>About This</h2>
              <p className='about-body'>{this.props.offices.about_this}</p>
            </div>
          </div>
            <BookingFormContainer office={this.props.offices}/>
        </div>
        <ReviewContainer />
      </div>
    );
  }
}

export default OfficeDetails;
