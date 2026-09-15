// Homepage section introducing Viet Orient Travel's philosophy and value.
import { Container } from '../ui/Container.jsx';

// These philosophy points are kept as data so the editorial layout stays easy to extend.
const reasons = [
  {
    title: 'Local Knowledge',
    description: 'Know the places beyond the guidebook.',
  },
  {
    title: 'Personal Planning',
    description: 'Every journey is shaped around your interests, pace, and priorities.',
  },
  {
    title: 'Trusted Relationships',
    description: 'Travel through a network of people and partners we know and trust.',
  },
  {
    title: 'Meaningful Experiences',
    description: 'Go beyond seeing a destination to understanding and experiencing it.',
  },
];

export function WhyTravelWithViet() {
  return (
    <section className="why-travel" aria-labelledby="why-travel-title">
      <Container>
        {/* The introduction establishes the human value behind the travel service. */}
        <div className="why-travel__intro">
          <div>
            <p className="section-eyebrow">Why Viet Orient Travel</p>
            <h2 id="why-travel-title">
              Travel planning is easier than ever.
              <br />
              Knowing how to travel well is different.
            </h2>
          </div>
          <p className="why-travel__summary">
            Technology can help you discover a destination and organize the details. We bring something different:
            local experience, trusted relationships, and the human judgment to shape those details into a journey
            that feels personal.
          </p>
        </div>

        {/* Unboxed reasons preserve the section's editorial, philosophy-led tone. */}
        <div className="why-travel__reasons">
          {reasons.map((reason, index) => (
            <article className="why-travel__reason" key={reason.title}>
              <span className="why-travel__number">0{index + 1}</span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
