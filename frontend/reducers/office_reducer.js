import { RECEIVE_OFFICES } from '../actions/office_actions';



const OfficeReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_OFFICES:
      return action.offices;
    default:
      return state;
  }
};

export default OfficeReducer;
