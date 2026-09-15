// Homepage composition for the primary travel discovery experience.
import { Hero } from '../components/sections/Hero.jsx';
import { WhyTravelWithViet } from '../components/sections/WhyTravelWithViet.jsx';

export function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      {/* The philosophy section follows the hero before destinations and experiences are introduced. */}
      <WhyTravelWithViet />
    </div>
  );
}
