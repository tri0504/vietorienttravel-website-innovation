// Experience listing page built from the shared experience data.
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/Button.jsx';
import { Container } from '../components/ui/Container.jsx';
import { experiences } from '../data/experiences.js';

export function ExperiencesPage() {
  return (
    <div className="experiences-page">
      <section className="experiences-page__intro" aria-labelledby="experiences-title">
        <Container className="experiences-page__intro-inner">
          <div>
            <p className="section-eyebrow">The way you travel</p>
            <h1 id="experiences-title">Begin with what moves you.</h1>
          </div>
          <div className="experiences-page__intro-copy">
            <p>
              From living heritage to quiet landscapes and meals shared at the local table, the best journeys begin with a feeling rather than a fixed package.
            </p>
            <Button to="/classic-itineraries" className="experiences-page__link">
              Explore classic itineraries
              <ArrowUpRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="experiences-page__collection" aria-labelledby="experiences-collection-title">
        <Container>
          <div className="experiences-page__heading">
            <div>
              <p className="section-eyebrow">Experiences</p>
              <h2 id="experiences-collection-title">A collection of ways to see the region.</h2>
            </div>
            <p>Each experience can become part of a journey shaped around your curiosity and pace.</p>
          </div>
          <ul className="experiences-page__list">
            {experiences.map((experience, index) => (
              <li key={experience.id}>
                <span>0{index + 1}</span>
                <div>
                  <p>{experience.category}</p>
                  <h3>{experience.title}</h3>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="experiences-page__classic" aria-labelledby="experiences-classic-title">
        <Container className="experiences-page__classic-inner">
          <div>
            <p className="section-eyebrow">A place to begin</p>
            <h2 id="experiences-classic-title">Explore journeys from our collection.</h2>
          </div>
          <div>
            <p>
              Our classic itineraries gather sample routes from VOT&apos;s experience across Vietnam and the wider region. They are starting points for a more personal conversation, not a catalogue of current departures.
            </p>
            <Button to="/classic-itineraries" className="experiences-page__classic-link">
              View classic itineraries
              <ArrowUpRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
