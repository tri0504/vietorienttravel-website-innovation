import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ClassicItineraryCard } from './ClassicItineraryCard.jsx';
import { Container } from '../ui/Container.jsx';
import { classicItineraries } from '../../data/classicItineraries.js';

const featuredSlugs = [
  'vietnam-gourmet-journey',
  'bike-the-mekong-delta',
  'hiking-and-discovering-the-tonkinese-alps',
];

export function ClassicItinerariesTeaser() {
  const featuredItineraries = featuredSlugs
    .map((slug) => classicItineraries.find((itinerary) => itinerary.slug === slug))
    .filter(Boolean);

  return (
    <section className="classic-itineraries-teaser" aria-labelledby="classic-itineraries-teaser-title">
      <Container>
        <div className="classic-itineraries-teaser__heading">
          <div>
            <p className="section-eyebrow">From the collection</p>
            <h2 id="classic-itineraries-teaser-title">Journeys Shaped by Experience</h2>
          </div>
          <p>
            Explore a selection of classic journeys developed through years of travel, local knowledge, and meaningful connections across Vietnam and the region.
          </p>
        </div>

        <div className="classic-itineraries-teaser__grid">
          {featuredItineraries.map((itinerary) => (
            <ClassicItineraryCard
              key={itinerary.slug}
              itinerary={itinerary}
              detailPath={`/classic-itineraries/${itinerary.slug}`}
            />
          ))}
        </div>

        <div className="classic-itineraries-teaser__action">
          <Link to="/classic-itineraries">
            Explore Classic Itineraries
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}