import {connect} from 'react-redux';
import {searchOffice} from '../../actions/office_actions';
import Search from './search';


const mapStateToProps = ({offices}) => ({
  offices
});

const mapDispatchToProps = dispatch => ({
  searchOffice: (location) => dispatch(searchOffice(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
