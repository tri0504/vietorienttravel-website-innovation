// About page composition and introductory travel-company content.
import { Container } from '../components/ui/Container.jsx';

export function AboutPage() {
  // Page-level composition stays separate from the shared site layout.
  return <Container as="section"><h1>About</h1><p>About page placeholder.</p></Container>;
}
