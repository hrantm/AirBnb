import {connect} from 'react-redux';
import {fetchReviews, createReview, updateReview, deleteReview} from '../../actions/review_actions';
import Review from './review';

const mapStateToProps = ({session, reviews}) => ({
  currentUser: session.currentUser,
  reviews: reviews.reviews,
  erros: reviews.errors
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  createReview: review => dispatch(createReview(review)),
  updateReview: review => dispatch(updateReview(review)),
  deleteReview: id => dispatch(deleteReview(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Review);
