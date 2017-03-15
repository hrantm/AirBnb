import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session_form/session_form_container.js';

// const Root = ({ store }) => (
//   <Provider store={ store }>
//     <Router history={ hashHistory }>
//       <Route path="/" component={ App } >
//         <Route path="/login" component={ SessionFormContainer } />
//         <Route path="/signup" component={ SessionFormContainer } />
//       </Route>
//     </Router>
//   </Provider>
// );

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <Route path="/profile" component={ SessionFormContainer } />
      </Route>
    </Router>
  </Provider>
  );
};

export default Root;
