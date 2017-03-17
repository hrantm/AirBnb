import React from 'react';

class OfficeDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchOffice(this.props.routeParams.office_id);
  }

  render(){
    return(
      <div>
        <div>
          <img src={this.props.offices.image_url} />
        </div>
        <div>
          <h2>Description</h2>
          <p>{this.props.offices.about_this}</p>
        </div>
      </div>
    );
  }
}

export default OfficeDetails;
