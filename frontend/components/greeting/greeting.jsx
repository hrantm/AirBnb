import React from 'react';
import {Link, hashHistory} from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';


class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.sessionButtons = this.sessionButtons.bind(this);
    this.toggleSessionForm = this.toggleSessionForm.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.signout();
    hashHistory.push('/');
  }


  loggedIn(currentUser, signout){

    return (
      <div className='main-nav'>
        <div className='logo' onClick={() => hashHistory.push('/')}>
            <img src='https://res.cloudinary.com/harvey93/image/upload/v1490387034/logo_zbyo8x.png' className='logo-image'/>
        </div>
        <div className='buttons'>
          <h4 className='profile-name'>Hello, </h4>
          <h4 className='profile-name pink-name'>{currentUser.fname}!</h4>
          <button className='auth-button' onClick={() => hashHistory.push(`/${currentUser.id}/bookings`)}>Bookings</button>
          <button className='auth-button' onClick={this.logout}>Sign Out</button>
        </div>
         <SessionFormContainer/>
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
      <div className='main-nav'>
          <div className='logo' onClick={() => hashHistory.push('/')}>
              <img src='https://res.cloudinary.com/harvey93/image/upload/v1490387034/logo_zbyo8x.png' className='logo-image'/>
          </div>
        <div className='buttons'>
          <button className='auth-button' onClick={this.toggleSessionForm('signup')}>Sign Up</button>
          <button className='auth-button' onClick={this.toggleSessionForm('login')}>Log In</button>
        </div>
         <SessionFormContainer/>
      </div>
    );
  }

  render(){
    const {currentUser, signout} = this.props;
    return (currentUser ? this.loggedIn(currentUser, signout) : this.loggedOut());
  }

}

export default Greeting;
