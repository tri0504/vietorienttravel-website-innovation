import { ArrowLeft, ArrowUpRight, Clock3, MapPin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button.jsx';
import { Container } from '../components/ui/Container.jsx';
import { ItineraryTimeline } from '../components/sections/ItineraryTimeline.jsx';
import { classicItineraries } from '../data/classicItineraries.js';
import { NotFoundPage } from './NotFoundPage.jsx';

export function ItineraryDetailPage() {
  const { slug } = useParams();
  const itinerary = classicItineraries.find((item) => item.slug === slug);

  if (!itinerary) return <NotFoundPage />;

  return (
    <div className="itinerary-detail-page">
      <Container>
        <nav className="itinerary-detail__breadcrumb" aria-label="Breadcrumb">
          <Link to="/classic-itineraries">
            <ArrowLeft size={16} aria-hidden="true" />
            Classic itineraries
          </Link>
          <span aria-hidden="true">/</span>
          <span>{itinerary.title}</span>
        </nav>
      </Container>

      <section className="itinerary-detail-hero" aria-labelledby="itinerary-detail-title">
        <Container className="itinerary-detail-hero__inner">
          <figure className="itinerary-detail-hero__image">
            <img
              src={itinerary.image}
              alt={itinerary.title}
              onError={(event) => {
                event.currentTarget.hidden = true;
                event.currentTarget.parentElement.classList.add('itinerary-detail-hero__image--placeholder');
              }}
            />
            <figcaption>Photography to be selected from the VOT collection</figcaption>
          </figure>
          <div className="itinerary-detail-hero__content">
            <p className="section-eyebrow">{itinerary.category}</p>
            <h1 id="itinerary-detail-title">{itinerary.title}</h1>
            <p className="itinerary-detail-hero__description">{itinerary.shortDescription}</p>
            <div className="itinerary-detail-hero__facts">
              <div>
                <Clock3 size={18} aria-hidden="true" />
                <span>{itinerary.duration || 'Duration to be shaped'}</span>
              </div>
              <div>
                <MapPin size={18} aria-hidden="true" />
                <span>{itinerary.destinations.join(' / ')}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="itinerary-detail-overview" aria-labelledby="itinerary-overview-title">
        <Container className="itinerary-detail-overview__inner">
          <div>
            <p className="section-eyebrow">A journey from the collection</p>
            <h2 id="itinerary-overview-title">A thoughtful route through {itinerary.destinations.join(' and ')}.</h2>
          </div>
          <p>
            This classic itinerary is presented as a reference point from Viet Orient Travel&apos;s historical collection. The route and rhythm can be revisited in conversation rather than treated as a current package.
          </p>
        </Container>
      </section>

      <section className="itinerary-detail-days" aria-labelledby="itinerary-days-title">
        <Container className="itinerary-detail-days__inner">
          <div className="itinerary-detail-days__heading">
            <p className="section-eyebrow">The rhythm of the journey</p>
            <h2 id="itinerary-days-title">Day by day</h2>
            <p>{itinerary.duration ? `${itinerary.duration} of places, encounters, and time to take in the route.` : 'A day-by-day outline from the historical collection.'}</p>
          </div>
          <ItineraryTimeline days={itinerary.days} />
        </Container>
      </section>

      <section className="itinerary-detail-photography" aria-label="Journey photography">
        <Container className="itinerary-detail-photography__inner">
          <div className="itinerary-detail-photography__line" />
          <p>Images for this classic journey will be selected from the VOT photography collection as the page develops.</p>
        </Container>
      </section>

      <section className="itinerary-detail-cta" aria-labelledby="itinerary-detail-cta-title">
        <Container className="itinerary-detail-cta__inner">
          <div>
            <p className="section-eyebrow">Your journey, your way</p>
            <h2 id="itinerary-detail-cta-title">Make This Journey Your Own</h2>
          </div>
          <div className="itinerary-detail-cta__copy">
            <p>Use this sample journey as a beginning. We can shape the pace, emphasis, and details around the traveler and the time available.</p>
            <Button to="/contact">
              Plan Your Journey
              <ArrowUpRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}