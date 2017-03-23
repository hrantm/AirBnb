import React from 'react';
import {hashHistory} from 'react-router';
import ReactStars from 'react-stars';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.renderDeleteButton = this.renderDeleteButton.bind(this);
  }

  componentDidMount(){
    // debugger
    console.log(this.props.office);
    this.props.fetchReviews(this.props.office);
  }
  // <h1>{review.rating} Stars</h1>

  renderDeleteButton(authorId, reviewId){
    if ((this.props.currentUser) && (this.props.currentUser.id === authorId)) {
      return (
        <div className='button-div'>
          <div>
          </div>
          <button
            className='delete-review'
            onClick={() => this.props.deleteReview(reviewId)}>
            Delete
          </button>
      </div>
      );
    }
  }

  // {this.renderDeleteButton(review.authorId, review.id)}
  // {this.renderDeleteButton(review.authorId, review.id)}


  render(){
    console.log(this.props);
    if (this.props.reviews) {
      return(
        <div className='review-list'>
          <h1 className='reviews-title'>Reviews</h1>
          {this.props.reviews.map(review => (
            <div className='review-block'>
              <div className='author-stars'>
                  <ReactStars
                    count={review.rating}
                    value={review.rating}
                    edit='false'
                    color2={'#ff7e82'}
                    color1={'#ff7e82'}
                    size={20}/>
                <h1 className='author-name'>{review.author}</h1>
              </div>
                <h1 className='review-body'>{review.body}</h1>
                {this.renderDeleteButton(review.authorId, review.id)}
            </div>
          ))}
        </div>
      );
  }
  }
}

export default Review;
