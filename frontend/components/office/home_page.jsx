import React from 'react';
import SearchContainer from '../search/search_container';
import OfficeContainer from './office_container';


export const HomePage = () => {
  return(
    <div className='home-div'>
      <div className='line-one-div'>
        <h1 className='home-marketing-line-one mark-color'>Book&nbsp;</h1>
        <h1 className='home-marketing-line-one'>an</h1>
        <h1 className='home-marketing-line-one mark-color'>&nbsp;office</h1>
        <h1 className='home-marketing-line-one'>&nbsp;today</h1>
      </div>
      <h1 className='home-marketing-line-two'>and get things done!</h1>
      <SearchContainer />
      <h3 className='feature-title'>Featured Spaces</h3>
      <OfficeContainer pageType='home' />
    </div>
  );
};
