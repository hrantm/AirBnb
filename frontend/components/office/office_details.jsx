import React from 'react';

class OfficeDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchOffice(this.props.routeParams.office_id);
  }

  render(){
    console.log(this.props);
    return(
      <div>
        <img src={this.props.offices.image_url} />
      </div>
    );
  }
}

export default OfficeDetails;
