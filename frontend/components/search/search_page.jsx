import React from 'react';
import OfficeContainer from '../office/office_container';
import SearchContainer from './search_container';
import OfficeMap from '../office_map/office_map';

class SearchPage extends React.Component {
  render(){
    return (
      <div>
        <SearchContainer />
        <h3 className='feature-title'>Available Office Space</h3>
        <div className='results-map'>
          <OfficeContainer />
          <OfficeMap />
        </div>
      </div>
    );
  }
}

export default SearchPage;
