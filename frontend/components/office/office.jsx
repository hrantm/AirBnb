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
        <ul>
        {this.props.offices.map(office => (
          <li><img src={office.image_url}/></li>
        ))}
      </ul>
      </div>
    );
  }
}

export default Office;
