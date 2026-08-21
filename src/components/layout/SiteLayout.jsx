import { Outlet } from 'react-router-dom';
import { Footer } from './Footer.jsx';
import { Header } from './Header.jsx';

export function SiteLayout() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Each route renders here while the header and footer remain stable. */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
