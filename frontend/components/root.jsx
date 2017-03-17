import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session_form/session_form_container.js';
import OfficeContainer from './office/office_container';
import OfficeDetailsContainer from './office/office_details_container';

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
        <IndexRoute component={ OfficeContainer } />
        <Route path="/profile" component={ SessionFormContainer } />
        <Route path='/offices'>
            <Route path='/offices/:office_id' component={ OfficeDetailsContainer }/>
        </Route>
      </Route>
    </Router>
  </Provider>
  );
};

export default Root;
