import React from 'react';
import {Link} from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';


class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.sessionButtons = this.sessionButtons.bind(this);
    this.toggleSessionForm = this.toggleSessionForm.bind(this);
  }


  loggedIn(currentUser, signout){

    return (
      <div>
      <div className='main-nav'>
        <h1 className='logo'>Air BnB</h1>
        <div className='buttons'>
          <h4 className='profile-name'>Hello, {currentUser.fname}!</h4>
          <button className='auth-button' onClick={signout}>Sign Out</button>
        </div>
         <SessionFormContainer/>
      </div>
      <h1 className='home-marketing-line-one'>Book an office today</h1>
      <h1 className='home-marketing-line-two'>and get things done!</h1>
      </div>
    );
  }

  sessionButtons(){
    return(
    <div>
      <button onClick={this.toggleSessionForm('signup')}>Sign Up</button>
      <br/>
      <button onClick={this.toggleSessionForm('login')}>Log In</button>
    </div>
  );
  }


  toggleSessionForm(type){
    // return () => <SessionFormContainer formType={type}/>;
    return () => {
      this.props.toggleModal(type);
    };
  }

  loggedOut(){
    return (
      <div>
      <div className='main-nav'>
        <h1 className='logo'>Air BnB</h1>
        <div className='buttons'>
          <button className='auth-button' onClick={this.toggleSessionForm('signup')}>Sign Up</button>
          <button className='auth-button' onClick={this.toggleSessionForm('login')}>Log In</button>
        </div>
         <SessionFormContainer/>
      </div>
      <h1 className='home-marketing'>Book an office today</h1>
      <h1 className='home-marketing'>and get things done!</h1>
    </div>
    );
  }

  render(){
    const {currentUser, signout} = this.props;
    return (currentUser ? this.loggedIn(currentUser, signout) : this.loggedOut());
  }

}

export default Greeting;
