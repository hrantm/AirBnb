import React from 'react';
import {hashHistory, Link} from 'react-router';
import Modal from 'react-modal';

// Modal.setAppElement("#root");

const modStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '12%',
    left                       : '30%',
    right                      : '30%',
    bottom                     : '22%',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '30px'

  }
};

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
    this.formatErrors = this.formatErrors.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.switchForm = this.switchForm.bind(this);
    this.renderSignUp = this.renderSignUp.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
  }

// Modal Code
  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

//End Of Modal code
  handleSubmit(e) {
  e.preventDefault();
  const user = Object.assign({}, this.state);
  // this.props.processForm(user).then(() => this.redirect());
  if (this.props.formType === 'login') {
    // this.props.toggleModal('login');
    this.props.login(user).then(() => {
      this.props.toggleModal('login');
    });
  }else if (this.props.formType === 'signup') {
    // this.props.toggleModal('signup');
    this.props.signup(user).then(this.props.toggleModal.bind(this, 'signup'));
  }
}

  redirect(){
    hashHistory.push('/profile');
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
      <input className='input-field'
        type='text'
        onChange={this.update('fname')}
        placeholder='First Name'/>,
      <input className='input-field'
        type='text'
        onChange={this.update('lname')}
        placeholder='Last Name'/>
    ]
  );

  }
}

  formatErrors(){
    if (this.props.errors.length > 0) {
      return(
        this.props.errors.map(error => (
          <li>{error}</li>
        ))
      );
    }
  }

  renderTitle(){
    if (this.props.formType === 'signup') {
      return (
        <h1 className='login-marketing'>
          Sign up and join our amazing community!
        </h1>
      );
    }else if (this.props.formType === 'login') {
      return(
        <h1 className='login-marketing'>Book a space today!</h1>
      );
    }
  }

  renderSignUp(){
    this.props.toggleModal();

    // this.closeModal();
    this.props.toggleModal('signup');
    this.props.clearErrors();

  }

  renderLogin(){
    this.props.toggleModal();
    // this.closeModal();
    this.props.toggleModal('login');
    this.props.clearErrors();
  }

  switchForm(){
    if (this.props.formType === 'login') {
      return(
        <div className='switchModal'>
          <h5 className='switchModalText'>Don't have an account?</h5>
          <button onClick={this.renderSignUp}>Sign Up</button>
        </div>
      );
    }else if (this.props.formType === 'signup') {
      return(
        <div className='switchModal'>
          <h5 className='switchModalText'>Already have an account?</h5>
          <button onClick={this.renderLogin}>Log In</button>
        </div>
      );
    }
  }

  submitButtonText(){
    if (this.props.formType === 'login') {
      return 'Log In';
    }else if (this.props.formType === 'signup') {
      return 'Sign Up';
    }
  }

  render(){
    return (
      <Modal
        isOpen={this.props.modalIsOpen} contentLabel='Modal'
        onRequestClose={this.props.toggleModal}
        style={modStyle}>
        <form className='login-form' onSubmit= {this.handleSubmit}>
          {this.renderTitle()}
          <ul>
            {this.formatErrors()}
          </ul>
            <input className='input-field'
              type='text' onChange={this.update('email')}
              placeholder="Email"/>
            <input className='input-field'
              type='password' onChange={this.update('password')}
              placeholder='Password'/>
          {this.addFields()}

          <input
            className='form-submit-input'
            type='submit'
            value={this.submitButtonText()}/>
        </form>
        {this.switchForm()}
      </Modal>
  );
  }
}

export default SessionForm;
