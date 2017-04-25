import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import OfficeContainer from './office/office_container';
import SearchContainer from './search/search_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div>
    <GreetingContainer />
    { children }
    <Footer />
  </div>
);

export default App;
