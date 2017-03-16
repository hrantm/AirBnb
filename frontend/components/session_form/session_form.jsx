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
    left                       : '28%',
    right                      : '28%',
    bottom                     : '12%',
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
      this.redirect();
    });
  }else if (this.props.formType === 'signup') {
    // this.props.toggleModal('signup');
    this.props.signup(user).then(this.props.toggleModal.bind(this, 'signup')).then(this.redirect);
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
    <label className='input-label'>
      First Name
      <input className='input-field' key='first' type='text' onChange={this.update('fname')}/>
    </label>,
    <label className='input-label'>
       Last Name
      <input className='input-field' key='second'type='text' onChange={this.update('lname')}/>
    </label>
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


  render(){
    return (
      <Modal
        isOpen={this.props.modalIsOpen} contentLabel='Modal'
        onRequestClose={this.props.toggleModal}
        style={modStyle}>
        <form className='login-form' onSubmit= {this.handleSubmit}>
          <h2>{this.props.formType}</h2>
          {this.formatErrors()}
          <label className='input-label'>
            Email
            <input className='input-field'
              type='text' onChange={this.update('email')}
              placeholder="Email"/>
          </label>
          <label className='input-label'>
            Password
            <input className='input-field' type='password' onChange={this.update('password')}/>
          </label>
          {this.addFields()}

          <input type='submit'/>
          <br />
          {this.addLink()}
        </form>
      </Modal>
  );
  }
}

export default SessionForm;
