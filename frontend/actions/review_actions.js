import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

export const fetchReviews = () => dispatch => {
  debugger
  return (
    ReviewAPIUtil.fetchReviews()
      .then(reviews => dispatch(receiveReviews(reviews)),
      err => dispatch(receiveReviewErrors(err.responseJSON)))
  );
};

export const createReview = review => dispatch => {
  return(
    ReviewAPIUtil.createReview(review)
      .then(reviews => dispatch(receiveReviews(reviews)),
      err => dispatch(receiveReviewErrors(err.responseJSON)))
  );
};

export const updateReview = review => dispatch => {
  return(
    ReviewAPIUtil.updateReview(review)
      .then(reviews => dispatch(receiveReviews(reviews)),
      err => dispatch(receiveReviewErrors(err.responseJSON)))
  );
};

export const deleteReview = id => dispatch => {
  return (
    ReviewAPIUtil.deleteReview(id)
      .then(reviews => dispatch(receiveReviews(reviews)),
      err => dispatch(receiveReviewErrors(err.responseJSON)))
  );
};

//SYNC

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});
