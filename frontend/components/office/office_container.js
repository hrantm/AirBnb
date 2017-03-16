import {connect} from 'react-redux';
import {fetchOffices} from '../../actions/office_actions';
import Office from './office';

const mapStateToProps = ({offices}) => ({
  offices
});

const mapDispatchToProps = dispatch => ({
  fetchOffices: (showAmount) => dispatch(fetchOffices(showAmount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Office);
