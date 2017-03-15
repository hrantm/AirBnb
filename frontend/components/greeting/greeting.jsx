import React from 'react';
import {Link} from 'react-router';

const sessionLinks = () => (
  <div>
    <Link to='/signup'>Sign Up</Link>
    <br/>
    <Link to='/login'>Log In</Link>
  </div>
);

const personalGreeting = (currentUser, signout) => {
  return(
  <div>
    <h3>Welcome {currentUser.email}</h3>
    <button onClick={signout}>Signout</button>
  </div>
);
};

const Greeting = ({currentUser, signout}) => {
  return (currentUser ? personalGreeting(currentUser, signout) : sessionLinks());
};

export default Greeting;
