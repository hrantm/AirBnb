import { RECEIVE_OFFICES, RECEIVE_OFFICE } from '../actions/office_actions';



const OfficeReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case RECEIVE_OFFICES:
      return action.offices;
    case RECEIVE_OFFICE:
      return action.office;
    default:
      return state;
  }
};

export default OfficeReducer;
