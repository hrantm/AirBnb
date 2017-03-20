import {connect} from 'react-redux';
import {searchOffice} from '../../actions/office_actions';
import OfficeMap from './office_map';

const mapStateToProps = ({offices}) => {
  return ({
  offices
});
};

const mapDispatchToProps = dispatch => ({
  searchOffice: (location) => dispatch(searchOffice(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfficeMap);
