import React from 'react';
import {hashHistory} from 'react-router';
import ReactStars from 'react-stars';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {rating: 0, body: ''};
    this.handleErrors = this.handleErrors.bind(this);
    this.notLoggedInMessage = this.notLoggedInMessage.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createReview({
      author_id: this.props.currentUser.id,
      office_id: this.props.office,
      rating: this.state.rating,
      body: this.state.body
    }).then(this.setState({rating: 5, body: ''}));
  }

  update(field){
    // debugger
    return e => {
      // debugger
      return(
      this.setState({[field]: e.target ? e.target.value : e}));
    };
  }

  handleErrors(){
    if (this.props.currentUser) {
      return(
        <div className='review-form-errors'>
          {this.props.errors.map(error => (
            <h1>{error}</h1>
          ))}
      </div>
      );
    }
  }

  notLoggedInMessage(){
    if (!this.props.currentUser) {
      return(
        <h1 className='not-logged-message'>Not Logged In</h1>
      );
    }
  }

  render(){
    console.log('Now its the form');
    console.log(this.props);
    console.log(this.state);
    return(
      <form className='review-form' onSubmit={this.handleSubmit}>
        {this.handleErrors()}
        <div className='review-form-header'>
          <h1 className='review-form-title'>Add Review</h1>
          <ReactStars
            count={5}
            size={24}
            half={false}
            onChange={this.update('rating')}
            color2={'#ff7e82'}
            value={this.state.rating}/>
        </div>
        <textarea
          className='form-textarea'
          onChange={this.update('body')}
          value={this.state.body}/>
        <div className='review-submit-container'>
          <div>
          </div>
          <input type='submit'
            value='Submit'
            className='review-submit'
            disabled={!this.props.currentUser}/>
      </div>
      {this.notLoggedInMessage()}
      </form>
    );
  }
}

export default ReviewForm;
