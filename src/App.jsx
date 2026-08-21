import { Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { DestinationsPage } from './pages/DestinationsPage.jsx';
import { ExperiencesPage } from './pages/ExperiencesPage.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { ReviewsPage } from './pages/ReviewsPage.jsx';

function App() {
  return (
    // Keep route registration in one place so page composition stays separate
    // from shared site chrome and future route metadata.
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="destinations" element={<DestinationsPage />} />
        <Route path="experiences" element={<ExperiencesPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
