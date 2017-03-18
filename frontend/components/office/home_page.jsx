import React from 'react';
import SearchContainer from '../search/search_container';
import OfficeContainer from './office_container';


export const HomePage = () => {
  return(
    <div>
      <h1 className='home-marketing-line-one'>Book an office today</h1>
      <h1 className='home-marketing-line-two'>and get things done!</h1>
      <SearchContainer />
      <OfficeContainer pageType='home' />
    </div>
  );
};
