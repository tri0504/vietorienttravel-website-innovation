// Site footer with shared navigation and supporting information.
import { Link } from 'react-router-dom';
import { navigationLinks } from '../../data/navigation.js';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <Link className="site-footer__brand" to="/">Viet Orient Travel</Link>
        {/* Reusing the same navigation data keeps header and footer in sync. */}
        <nav aria-label="Footer navigation">
          {navigationLinks.map((link) => <Link key={link.path} to={link.path}>{link.label}</Link>)}
        </nav>
      </div>
    </footer>
  );
}
