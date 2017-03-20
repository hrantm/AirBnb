import {connect} from 'react-redux';
import {searchOffice} from '../../actions/office_actions';
import OfficeMap from './office_map';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = ({offices}) => {
  return ({
  offices
});
};

const mapDispatchToProps = dispatch => ({
  searchOffice: (location) => dispatch(searchOffice(location)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfficeMap);
