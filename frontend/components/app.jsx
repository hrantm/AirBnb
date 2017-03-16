import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import OfficeContainer from './office/office_container';

const App = ({ children }) => (
  <div>
    <GreetingContainer />
    { children }
    <OfficeContainer />
  </div>
);

export default App;
