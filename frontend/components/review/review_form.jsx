import React from 'react';
import {hashHistory} from 'react-router';
import ReactStars from 'react-stars';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {rating: 0, body: ''};
  }

  handleSubmit(e){
    e.preventDefault();

  }

  update(field){
    // debugger
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  render(){
    console.log('Now its the form');
    console.log(this.props);
    console.log(this.state);
    return(
      <form className='review-form' onSubmit={this.handleSubmit}>
        <div className='review-form-header'>
          <h1 className='review-form-title'>Add Review</h1>
          <ReactStars
            count={5}
            size={24}
            half={false}
            onChange={this.update('rating')}
            color2={'#ff7e82'} />
        </div>
        <textarea
          className='form-textarea'
          onChange={this.update('body')}/>
        <div className='review-submit-container'>
          <div>
          </div>
          <input type='submit'
            value='Submit'
            className='review-submit'/>
      </div>
      </form>
    );
  }
}

export default ReviewForm;
