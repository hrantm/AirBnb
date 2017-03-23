import React from 'react';
import {hashHistory} from 'react-router';
import ReactStars from 'react-stars';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    console.log('Now its the form');
    console.log(this.props);
    return(
      <form className='review-form' onSubmit={this.handleSubmit}>
        <div className='review-form-header'>
          <h1 className='review-form-title'>Add Review</h1>
          <ReactStars
            count={5}
            size={24}
            half={false}
            color2={'#ff7e82'} />
        </div>
        <textarea
          className='form-textarea'/>
        <input type='submit'
          value='Submit'
          className='review-submit'/>
      </form>
    );
  }
}

export default ReviewForm;
