import React from 'react';
import {Link} from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';

// const sessionLinks = () => (
//   <div>
//     <Link to='/signup'>Sign Up</Link>
//     <br/>
//     <Link to='/login'>Log In</Link>
//   </div>
// );
//
// const sessionButtons = () => (
//   <div>
//     <button onClick={toggleSessionForm('Signup')}>Sign Up</button>
//     <br/>
//     <button onClick={toggleSessionForm('Login')}>Log In</button>
//   </div>
// );
//
// const toggleSessionForm = (type) => () => (
//   <SessionFormContainer formType={type}/>
// );
//
// const personalGreeting = (currentUser, signout) => {
//   return(
//   <div>
//     <h3>Welcome {currentUser.email}</h3>
//     <button onClick={signout}>Signout</button>
//   </div>
// );
// };
//
// const Greeting = ({currentUser, signout, modalIsOpen, toggleModal}) => {
//   return (currentUser ? personalGreeting(currentUser, signout) : session());
// };

class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.sessionButtons = this.sessionButtons.bind(this);
    this.toggleSessionForm = this.toggleSessionForm.bind(this);
  }

  sessionLinks(){
    return(
    <div>
      <Link to='/signup'>Sign Up</Link>
      <br/>
      <Link to='/login'>Log In</Link>
    </div>
  );
  }

  personalGreeting(currentUser, signout){
    return(
    <div>
      <h3>Welcome {currentUser.email}</h3>
      <button onClick={signout}>Signout</button>
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

  render(){
    const {currentUser, signout} = this.props;
    // return (currentUser ? this.personalGreeting(currentUser, signout) : this.sessionLinks());
    // return (currentUser ? this.personalGreeting(currentUser, signout) : this.sessionButtons());
    return (
      <div>
        <button onClick={this.toggleSessionForm('signup')}>Sign Up</button>
        <br/>
        <button onClick={this.toggleSessionForm('login')}>Log In</button>
         <SessionFormContainer/>
      </div>

    );

  }

}

export default Greeting;
