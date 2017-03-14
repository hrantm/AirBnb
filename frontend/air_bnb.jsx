import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtils from './util/session_api_util.js';
import configureStore from './store/store.js';

// document.addEventListener('DOMContentLoaded', () => {
//   const root = document.getElementbyId('root');
//   ReactDOM.render(<Root />, root);
// });

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to AirBnb</h1>, root);
    window.store = configureStore();
    window.login = APIUtils.login;
    window.signup = APIUtils.signup;
    window.logout = APIUtils.logout;
});

//{email: 'testsad', password: 'testing123', fname: 'f', lname: 'l'}
