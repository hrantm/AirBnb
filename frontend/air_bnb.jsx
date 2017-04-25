import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtils from './util/session_api_util.js';
import configureStore from './store/store.js';
import Root from './components/root';
import Modal from 'react-modal';
//
// document.addEventListener('DOMContentLoaded', () => {
//   const store = configureStore();
//   const root = document.getElementById('root');
//   ReactDOM.render(<Root store={ store }/>, root);
//   window.login = APIUtils.login;
//   window.signup = APIUtils.signup;
//   window.logout = APIUtils.logout;
//   window.store = store;
// });


document.addEventListener('DOMContentLoaded', () => {
    // const store = configureStore();
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
    Modal.setAppElement(document.body);
    ReactDOM.render(<Root store={store}/>, root);
    window.store = store;
});

//{email: 'testsad', password: 'testing123', fname: 'f', lname: 'l'}
