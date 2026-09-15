// Site header containing navigation and responsive menu controls.
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { navigationLinks } from '../../data/navigation.js';

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {/* The brand link is always available as the primary way back home. */}
        <Link className="site-header__brand" to="/" aria-label="Viet Orient Travel home">
          <img className="site-header__logo" src="/media/general/vot%20logo.png" alt="" />
        </Link>
        <nav className="site-header__nav" aria-label="Primary navigation">
          {/* Navigation labels and URLs come from data, not duplicated JSX. */}
          {navigationLinks.map((link) => (
            <NavLink key={link.path} to={link.path}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        {/* The menu button is the mobile-navigation hook for a future menu state. */}
        <button className="icon-button site-header__menu" type="button" aria-label="Open navigation">
          <Menu size={20} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
