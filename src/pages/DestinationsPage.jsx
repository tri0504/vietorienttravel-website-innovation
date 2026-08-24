// Destination listing page built from the shared destination data.
import { Container } from '../components/ui/Container.jsx';
import { destinations } from '../data/destinations.js';

export function DestinationsPage() {
  // The placeholder intentionally renders the data shape so future cards can
  // be added without moving content into the page component.
  return <Container as="section"><h1>Destinations</h1><ul>{destinations.map((destination) => <li key={destination.id}>{destination.name}</li>)}</ul></Container>;
}
