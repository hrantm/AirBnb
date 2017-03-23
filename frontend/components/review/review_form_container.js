import {connect} from 'react-redux';
import {fetchReviews, createReview, updateReview, deleteReview} from '../../actions/review_actions';
import ReviewForm from './review_form';


const mapStateToProps = ({session, reviews}) => ({
  currentUser: session.currentUser,
  reviews: reviews.reviews,
  errors: reviews.errors
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
)(ReviewForm);
