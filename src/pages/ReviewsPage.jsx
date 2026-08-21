import { Container } from '../components/ui/Container.jsx';
import { reviews } from '../data/reviews.js';

export function ReviewsPage() {
  // Review content remains external to markup so it can later come from a CMS.
  return <Container as="section"><h1>Reviews</h1><ul>{reviews.map((review) => <li key={review.id}>{review.quote}</li>)}</ul></Container>;
}
