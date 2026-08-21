import { Container } from '../components/ui/Container.jsx';
import { experiences } from '../data/experiences.js';

export function ExperiencesPage() {
  // Experiences are rendered from structured records ready for reusable cards.
  return <Container as="section"><h1>Experiences</h1><ul>{experiences.map((experience) => <li key={experience.id}>{experience.title}</li>)}</ul></Container>;
}
