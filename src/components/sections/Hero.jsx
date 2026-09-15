// Homepage hero for the primary travel discovery experience.
import { Button } from '../ui/Button.jsx';
import { Container } from '../ui/Container.jsx';

export function Hero() {
  return (
    <section
      className="hero"
      // Keep the future Vietnam photograph replaceable without changing the component structure.
      style={{ '--hero-image': "url('/media/destinations/vietnam/hero-vietnam.jpg')" }}
      aria-labelledby="hero-title"
    >
      {/* The overlay stays separate from the content so readability can be adjusted in SCSS. */}
      <div className="hero__overlay" aria-hidden="true" />
      <Container className="hero__content">
        <p className="hero__eyebrow">Authentic journeys in Southeast Asia</p>
        <h1 id="hero-title">
          Experience Vietnam
          <br />
          Through Local Eyes
        </h1>
        <p className="hero__intro">
          Every journey is handcrafted around your interests, pace, and curiosity—not taken from a catalog.
        </p>
        {/* Primary and secondary routes give the hero two clear next steps. */}
        <div className="hero__actions">
          <Button to="/contact">Plan Your Journey</Button>
          <Button className="button--secondary" to="/destinations">Explore Vietnam</Button>
        </div>
      </Container>
    </section>
  );
}
