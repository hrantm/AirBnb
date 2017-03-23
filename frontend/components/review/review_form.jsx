import React from 'react';
import {hashHistory} from 'react-router';
import ReactStars from 'react-stars';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log('Now its the form');
    console.log(this.props);
    return(
      <form className='review-form'>
        <h1>Add Review</h1>
        <ReactStars
          count={5}
          size={24}
          color2={'#ff7e82'} />
        <textarea
          className='form-textarea'/>
        <input type='submit'
          value='Submit Review'/>
      </form>
    );
  }
}

export default ReviewForm;
