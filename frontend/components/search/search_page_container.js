import {connect} from 'react-redux';
import {searchOffice} from '../../actions/office_actions';
import SearchPage from './search_page';


const mapStateToProps = ({offices}) => ({
  offices
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
