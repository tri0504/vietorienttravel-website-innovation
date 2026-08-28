# Viet Orient Travel Website

Viet Orient Travel (VOT) is an established family travel business being repositioned through a complete website modernization and redevelopment. The new website will present VOT as a professional, visually immersive, and internationally credible Southeast Asia travel company, with a strong foundation for individual travelers, travel agents, and future expansion.

## Project Vision And Objectives

The website is intended to:

- Strengthen VOT's brand image and modernize its online presence.
- Present destinations, services, tours, and travel experiences through clear storytelling.
- Attract international travelers, particularly potential American clients.
- Establish a credible B2B presence for travel agents and agency partnerships.
- Support future operations and growth in the United States.
- Differentiate VOT from generic package-tour websites through exceptional design, content, and user experience.

The experience should inspire confidence in VOT's local knowledge, personal service, and ability to create meaningful journeys.

## Target Audiences

- Individual travelers seeking curated or tailor-made journeys in Southeast Asia.
- International clients, with future growth toward the United States market.
- Travel agents and agencies seeking a trusted Southeast Asia travel partner or local operator.

## Key Features And Planned Sections

The planned information architecture includes:

- Home and brand introduction
- Destinations
- Travel Experiences
- Tours and Featured Journeys
- Tailor-Made Travel and inquiry workflow
- Why Viet Orient Travel
- About and Our Story
- Travel Agents and Partnerships
- Travel Journal and inspiration
- Contact and Plan Your Journey

Future functionality may include searchable journeys, rich destination content, inquiry management, partner resources, and booking-related integrations. These are planned capabilities, not current functionality.

## User Journey

The intended discovery path is:

**Inspiration -> Destination -> Experience -> Sample Journey -> Customize -> Inquiry**

Content and calls to action should guide visitors naturally through that path, inspiring them before asking them to book or make an inquiry.

## Design And Brand Direction

VOT should feel authentic, modern, sophisticated, locally knowledgeable, visually immersive, and internationally trustworthy. Tours should be presented as curated journeys and experiences rather than interchangeable itinerary lists. The website should feel like a knowledgeable travel studio, not a low-cost package seller or a large online booking platform.

Design priorities include strong destination imagery, thoughtful storytelling, confident editorial presentation, accessible interactions, responsive layouts, and a clear route from discovery to tailor-made inquiry.

## Inspiration References

The following websites are reference points for direction only. Their design, content, and branding will not be copied:

- [Butterfield & Robinson](https://www.butterfield.com/): aspirational presentation, immersive visuals, storytelling, and curated journeys.
- [Trufflepig](https://trufflepig.com/): distinctive personality and positioning as a knowledgeable travel planner.
- [Ansova Travel](https://ansovatravel.com/): local Southeast Asia expertise and credibility with international clients and partners.

## Technology Stack

- React 19 with JavaScript (ES modules)
- Vite for development and production builds
- React Router for client-side routing
- Sass/SCSS for styles, design tokens, and utilities
- Lucide React for interface icons

## Current Functionality

The repository currently provides the project foundation:

- Vite-powered React application with shared site layout components.
- Routes for Home, About, Destinations, Experiences, Reviews, and Contact, plus a not-found route.
- Structured data modules for destinations, experiences, reviews, FAQs, and navigation.
- Organized SCSS architecture and reusable UI primitives such as buttons, containers, and section headers.

Several route pages currently contain placeholder or foundation content. A production inquiry form, CMS, booking system, partner portal, customer accounts, and complete editorial content are not yet implemented.

## Development Workflow

Development uses GitHub, GitHub Codespaces, and VS Code.

```bash
npm install
npm run dev
```

Before opening a pull request, create a production build and check the affected experience:

```bash
npm run build
npm run preview
```

Keep repeatable content in `src/data`, reusable interface pieces in `src/components`, route composition in `src/pages`, and styling in `src/styles`. See the documentation guides for architecture and content conventions.

## Deployment Plan

The intended production platform is Vercel, connected to the GitHub repository for preview and production deployments. The existing `vietorienttravel.com` domain is currently separate from the legacy third-party website and will be connected to the new Vercel deployment after domain and DNS access is available.

## Future Development Possibilities

The architecture should be able to grow toward:

- A larger tour and journey database with search and filtering.
- Travel Journal, guides, seasonal content, and multilingual content.
- CMS integration for maintainable business content.
- Tailor-made inquiry workflows, CRM integration, and lead management.
- Travel-agent resources, partner tools, and B2B workflows.
- Customer accounts, interactive maps, galleries, and online booking.
- Analytics, SEO enhancements, structured data, and performance optimization.

## Project Status

**Early development / foundation phase.** The application shell, routing, shared layout, styling foundation, reusable UI primitives, and initial structured content are in place. The visual redesign, complete page experiences, inquiry workflows, production content, and deployment setup remain in progress.

## Documentation

- [Project Vision](docs/README.md): brand position, design philosophy, audiences, goals, and principles.
- [Architecture Guide](docs/ARCHITECTURE.md): application flow, directory ownership, routes, styling, and future integrations.
- [Content Model Guide](docs/CONTENT-MODEL.md): data modules, record conventions, and CMS preparation.
