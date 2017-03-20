import React from 'react';
import OfficeContainer from '../office/office_container';
import SearchContainer from './search_container';
import OfficeMap from '../office_map/office_map';

class SearchPage extends React.Component {
  render(){
    return (
      <div>
        <SearchContainer />
        <OfficeContainer />
        <OfficeMap />
      </div>
    );
  }
}

export default SearchPage;
