import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import OfficeReducer from './office_reducer';
import FiltersReducer from './filters_reducer';



const rootReducer = combineReducers({
  session: SessionReducer,
  modal: ModalReducer,
  offices: OfficeReducer,
  filters: FiltersReducer
});

export default rootReducer;
