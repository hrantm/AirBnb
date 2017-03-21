import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import OfficeReducer from './office_reducer';
import FiltersReducer from './filters_reducer';
import BookingReducer from './booking_reducer';


const rootReducer = combineReducers({
  session: SessionReducer,
  modal: ModalReducer,
  offices: OfficeReducer,
  filters: FiltersReducer,
  bookings: BookingReducer
});

export default rootReducer;
