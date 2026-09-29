import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ClassicItineraryCard, ClassicItineraryDetails } from '../components/sections/ClassicItineraryCard.jsx';
import { Container } from '../components/ui/Container.jsx';
import { classicItineraries } from '../data/classicItineraries.js';

export function ClassicItinerariesPage() {
  const [featuredItinerary, ...remainingItineraries] = classicItineraries;

  return (
    <div className="classic-itineraries-page">
      <section className="classic-itineraries-hero" aria-labelledby="classic-itineraries-title">
        <Container className="classic-itineraries-hero__inner">
          <div className="classic-itineraries-hero__copy">
            <p className="section-eyebrow">Classic itineraries</p>
            <h1 id="classic-itineraries-title">Journeys with a sense of place.</h1>
            <p>
              Selected journeys drawn from Viet Orient Travel&apos;s experience and historical itinerary collection.
              They are sample journeys to inspire a conversation, not a catalogue of currently available tours.
            </p>
          </div>
          <div className="classic-itineraries-hero__note">
            <span>01 / 08</span>
            <p>Vietnam and Cambodia through the eyes of a local travel studio.</p>
          </div>
        </Container>
      </section>

      <section className="classic-itineraries-featured" aria-labelledby="featured-itinerary-title">
        <Container>
          <div className="classic-itineraries-section-heading">
            <div>
              <p className="section-eyebrow">From the collection</p>
              <h2 id="featured-itinerary-title">A table set across Vietnam.</h2>
            </div>
            <p>One sample journey, shaped around the flavors, markets, and kitchens of the country.</p>
          </div>
          <ClassicItineraryCard itinerary={featuredItinerary} featured />
        </Container>
      </section>

      <section className="classic-itineraries-library" aria-labelledby="classic-library-title">
        <Container>
          <div className="classic-itineraries-section-heading classic-itineraries-section-heading--library">
            <div>
              <p className="section-eyebrow">The wider collection</p>
              <h2 id="classic-library-title">Different ways into the region.</h2>
            </div>
            <p>Cycle quiet roads, follow old histories, or walk into the northern hills. Each is a starting point.</p>
          </div>
          <div className="classic-itineraries-list">
            {remainingItineraries.map((itinerary) => (
              <ClassicItineraryCard key={itinerary.slug} itinerary={itinerary} />
            ))}
          </div>
        </Container>
      </section>

      <section className="classic-itineraries-details" aria-labelledby="itinerary-details-title">
        <Container>
          <div className="classic-itineraries-details__intro">
            <p className="section-eyebrow">The details</p>
            <h2 id="itinerary-details-title">A closer look at each sample journey.</h2>
            <p>These day-by-day outlines retain the character of the historical collection and can be reworked around the traveler.</p>
          </div>
          <div className="classic-itineraries-details__list">
            {classicItineraries.map((itinerary) => (
              <ClassicItineraryDetails key={itinerary.slug} itinerary={itinerary} />
            ))}
          </div>
        </Container>
      </section>

      <section className="classic-itineraries-cta" aria-labelledby="classic-cta-title">
        <Container className="classic-itineraries-cta__inner">
          <div>
            <p className="section-eyebrow">Made personal</p>
            <h2 id="classic-cta-title">Looking for something different?</h2>
          </div>
          <div className="classic-itineraries-cta__copy">
            <p>
              These classic itineraries are starting points. We can shape a journey around your interests, pace, and timeframe, with the details guided by conversation rather than a fixed package.
            </p>
            <Link className="classic-itineraries-cta__link" to="/contact">
              Begin a conversation
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}