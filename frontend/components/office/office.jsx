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
        {this.props.offices.map(office => (
          <h1>{office.id}</h1>
        ))}
      </div>
    );
  }
}

export default Office;
