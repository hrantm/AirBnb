import React from 'react';
import {hashHistory} from 'react-router';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log('component fires');
    this.props.fetchReviews();
  }

  render(){
    console.log(this.props);
    return(
      <div>
        {this.props.reviews.map(review => (
          <h1>{review.body}</h1>
        ))}
      </div>
    );
  }
}

export default Review;
