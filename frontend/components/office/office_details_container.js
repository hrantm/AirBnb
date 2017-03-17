import {connect} from 'react-redux';
import {fetchOffice} from '../../actions/office_actions';
import OfficeDetails from './office_details';

const mapStateToProps = ({offices}) => ({
  offices
});

const mapDispatchToProps = dispatch => ({
  fetchOffice: (id) => dispatch(fetchOffice(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfficeDetails);
