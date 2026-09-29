import { ArrowUpRight, Clock3, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ClassicItineraryCard({ itinerary, featured = false, detailPath }) {
  const itineraryPath = detailPath || `#itinerary-${itinerary.slug}`;

  return (
    <article className={`classic-itinerary-card${featured ? ' classic-itinerary-card--featured' : ''}`}>
      <Link className="classic-itinerary-card__image" to={itineraryPath} aria-label={`View ${itinerary.title}`}>
        <img
          src={itinerary.image}
          alt={`${itinerary.title} journey in ${itinerary.destinations.join(' and ')}`}
          onError={(event) => {
            event.currentTarget.hidden = true;
            event.currentTarget.parentElement.classList.add('classic-itinerary-card__image--placeholder');
          }}
        />
        <span className="classic-itinerary-card__image-label">Photography to be selected</span>
      </Link>
      <div className="classic-itinerary-card__content">
        <div className="classic-itinerary-card__meta">
          <span>{itinerary.category}</span>
          <span>{itinerary.duration || 'Duration to be shaped'}</span>
        </div>
        <h2>{itinerary.title}</h2>
        <p className="classic-itinerary-card__destinations">
          <MapPin size={15} aria-hidden="true" />
          {itinerary.destinations.join(' / ')}
        </p>
        <p className="classic-itinerary-card__description">{itinerary.shortDescription}</p>
        <Link className="classic-itinerary-card__action" to={itineraryPath}>
          View Itinerary
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function ClassicItineraryDetails({ itinerary }) {
  return (
    <article className="classic-itinerary-details" id={`itinerary-${itinerary.slug}`}>
      <div className="classic-itinerary-details__heading">
        <p className="section-eyebrow">{itinerary.category}</p>
        <h2>{itinerary.title}</h2>
        <p className="classic-itinerary-details__duration">
          <Clock3 size={16} aria-hidden="true" />
          {itinerary.duration || 'Duration to be shaped'}
        </p>
      </div>
      <ol className="classic-itinerary-details__days">
        {itinerary.days.map((day) => (
          <li key={day.day}>
            <span className="classic-itinerary-details__day-number">{String(day.day).padStart(2, '0')}</span>
            <div>
              {day.title && <h3>{day.title}</h3>}
              <p>{day.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}