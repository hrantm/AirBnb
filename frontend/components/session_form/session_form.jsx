import React from 'react';
import {hashHistory, Link} from 'react-router';


class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          email: "",
          password: "",
          fname: "",
          lname: ""
      };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
  e.preventDefault();
  const user = Object.assign({}, this.state);
  this.props.processForm(user).then(() => this.redirect());
}

  redirect(){
    hashHistory.push('/');
  }

addLink(){
  if (this.props.formType === 'login') {
    return(
      <Link to='/signup'>Signup</Link>
    );
  }else {
    return (<Link to='/login'>Login</Link>);
  }
}

update(field){
  return e => (
    this.setState({[field]: e.currentTarget.value})
  );
}

addFields(){
  if (this.props.formType === 'signup') {
    return (
      [
    <label>
      First Name
      <input type='text' onChange={this.update('fname')}/>
    </label>,
    <label>
       Last Name
      <input type='text' onChange={this.update('lname')}/>
    </label>
    ]
  );

  }
}

  render(){

    return (
    <form onSubmit= {this.handleSubmit}>
      <h2>{this.props.formType}</h2>
      <label>
        Email
        <input type='text' onChange={this.update('email')}/>
      </label>
      <label>
        Password
        <input type='password' onChange={this.update('password')}/>
      </label>
      <br />
      {this.addFields()}

      <input type='submit'/>
      <br />
      {this.addLink()}
    </form>
  );
  }
}

export default SessionForm;
