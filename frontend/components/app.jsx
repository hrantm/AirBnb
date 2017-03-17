import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import OfficeContainer from './office/office_container';
import SearchContainer from './search/search_container';

const App = ({ children }) => (
  <div>
    <GreetingContainer />
    { children }
  </div>
);

export default App;
