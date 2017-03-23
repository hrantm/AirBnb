import {RECEIVE_REVIEWS, RECEIVE_REVIEW_ERRORS} from '../actions/review_actions';
import merge from 'lodash/merge';

const _initialState = {
  reviews: [],
  errors: []
};

const ReviewReducer = (state = _initialState, action) => {
  switch (action.type) {
    case RECEIVE_REVIEWS:
    // debugger
      return {
        reviews: action.reviews,
        errors: []};
    case RECEIVE_REVIEW_ERRORS:
      const errors = action.errors;
        return merge({}, state, {
          errors
        });
    default:
      return state;

  }
};

export default ReviewReducer;
