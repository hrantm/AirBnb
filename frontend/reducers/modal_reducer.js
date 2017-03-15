import { TOGGLE_MODAL } from '../actions/modal_actions.js';

import merge from 'lodash/merge';

const _initialState = {
  modalIsOpen: false,
  formType: null
};

const ModalReducer = (state = _initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      if (state.modalIsOpen) {
        return {modalIsOpen: false,
          formType: action.formType};
      }else {
        return {modalIsOpen: true,
        formType: action.formType};
      }
    default:
      return state;
  }
};

export default ModalReducer;
