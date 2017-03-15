import React from 'react';
import {Link} from 'react-router';

const sessionLinks = () => (
  <div>
    <Link to='/signup'>Sign Up</Link>
    <br/>
    <Link to='/login'>Log In</Link>
  </div>
);

const personalGreeting = (currentUser, logout) => {
  return(
  <div>
    <h3>Welcome {currentUser.email}</h3>
    <button onClick={logout}>Logout</button>
  </div>
);
};

const Greeting = ({currentUser, logout}) => {
  return (currentUser ? personalGreeting(currentUser, logout) : sessionLinks());
};

export default Greeting;
