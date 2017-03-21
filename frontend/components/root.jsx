import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session_form/session_form_container.js';
import OfficeContainer from './office/office_container';
import OfficeDetailsContainer from './office/office_details_container';
import SearchContainer from './search/search_container';
import SearchPage from './search/search_page';
import SearchPageContainer from './search/search_page_container';
import { HomePage } from './office/home_page';
import BookingContainer from './booking/booking_container';


const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _redirectIfLoggedOut = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ HomePage } />
        <Route path='/search' component={SearchPageContainer}/>
        <Route path='/:user_id/bookings' component={BookingContainer} onEnter={_redirectIfLoggedOut}/>
        <Route path='/offices'>
            <Route path='/offices/:office_id' component={ OfficeDetailsContainer }/>
        </Route>
      </Route>
    </Router>
  </Provider>
  );
};

export default Root;
