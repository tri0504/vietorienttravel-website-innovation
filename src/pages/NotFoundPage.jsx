// Fallback page shown when a requested route does not exist.
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container.jsx';

export function NotFoundPage() {
  // The wildcard route gives unknown URLs a consistent layout and recovery link.
  return <Container as="section"><h1>Page not found</h1><p>The page you requested does not exist.</p><Link to="/">Return home</Link></Container>;
}
