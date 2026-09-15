# Viet Orient Travel

> **A premium boutique travel website focused on authentic, handcrafted journeys through Vietnam, Laos, and Cambodia.**

## Project Vision

This project is a complete redesign of the Viet Orient Travel website.

The objective is not to modernize the existing website, but to redefine the digital identity of the company while preserving what makes it unique:

- Authentic local expertise
- Personalized itineraries
- Cultural immersion
- Trust built through decades of experience
- Long-term client relationships

The website should feel like a boutique travel studio rather than an online booking platform.

We are not competing with Expedia or Booking.com.

We are selling confidence, expertise, and meaningful travel experiences.

The redesigned website should be simple but informative. Although modern tools and apps have made travel planning easier than ever, Viet Orient Travel makes a difference through personal expertise, thoughtful guidance, and journeys shaped around each traveler.

## Design Philosophy

The website should evoke five emotions:

- Authentic
- Calm
- Premium
- Human
- Timeless

Every design decision should reinforce these values. Avoid unnecessary decoration, excessive animations, or trendy UI patterns that may age quickly.

Less is more.

## Brand Position

Viet Orient Travel specializes in:

- Vietnam (primary market)
- Laos
- Cambodia

Vietnam should always receive the greatest visual emphasis throughout the website.

> **Vietnam specialists with expertly crafted journeys extending throughout Indochina.**

## Target Audience

Primary audiences include:

- Couples
- Families
- Retirees
- Luxury travelers
- Cultural explorers
- University groups
- Vietnam veterans returning
- Travelers seeking personalized experiences

Users generally value safety, local knowledge, trust, authenticity, flexibility, and high-quality service.

## Core Principles

### Story before sales

Inspire before selling. The website should tell stories instead of listing products.

### Experience before itinerary

People dream about experiences, not schedules. Emphasize food, culture, nature, history, hidden gems, and personal connections rather than package durations.

### Viet is the brand

Visitors should feel they are planning a journey with an experienced local expert rather than submitting a request to an anonymous travel agency.

### Build trust early

Every page should answer, “Why should I trust Viet Orient?” before asking visitors to make contact.

## Technology Stack

- React 19
- Vite
- React Router
- JavaScript (ES6+)
- SCSS (Sass)
- Lucide React

Headings use Playfair Display and body text uses Inter. Development uses Vite; production deployment is intended for Vercel, with GitHub Pages and Netlify as future options.

## Project Structure

The architecture follows a layered approach:

1. **Foundation:** routing, layout, global styles, theme, and utilities
2. **Reusable UI:** buttons, cards, containers, forms, and section headers
3. **Page sections:** hero, trust bar, experiences, reviews, gallery, and calls to action
4. **Pages:** home, about, destinations, reviews, and contact

## Design System

### Colors

| Token | Value |
| --- | --- |
| Primary | `#1F4D3A` |
| Primary hover | `#285E47` |
| Accent | `#C8A96A` |
| Background | `#F8F6F2` |
| Surface | `#FFFFFF` |
| Heading | `#222222` |
| Body | `#555555` |
| Border | `#E5E5E5` |

- Border radius: `16px`
- Container width: `1200px`
- Spacing scale: `8`, `16`, `24`, `40`, `64`, `96`, `140`
- Animation: simple fade, slide, and hover-lift motion with a maximum duration of `300ms`

No flashy effects should be used.

## Planned Homepage Structure

1. Navigation
2. Hero
3. Trust bar
4. Why travel with Viet
5. Featured destinations
6. Experiences
7. Meet Viet
8. How it works
9. Reviews
10. Gallery
11. Call to action
12. Footer

## Development Philosophy

Every section must answer one question:

| Section | Question |
| --- | --- |
| Hero | What is this company? |
| Trust bar | Can I trust them? |
| Destinations | Where can I go? |
| Experiences | What kind of trip can I have? |
| Founder | Who am I trusting? |
| Reviews | What do other travelers think? |
| Call to action | What should I do next? |

## Reusable Components

Examples include:

- Button
- Card
- Container
- Section title
- Destination card
- Experience card
- Review card
- Call to action
- Gallery image

These components should remain generic enough to be reused throughout the project.

## Data Philosophy

Avoid hardcoding repeatable content in components. Store structured content separately for destinations, experiences, reviews, navigation, FAQs, and future CMS integration.

## Accessibility

Every page should include:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- ARIA labels where needed
- Responsive layouts
- High color contrast
- Alt text for meaningful images

Accessibility is a requirement, not an enhancement.

## Performance Goals

Target Lighthouse scores:

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

The website should load quickly, including on slower mobile connections.

## SEO Strategy

Prioritize semantic HTML, correct heading structure, metadata, structured data, optimized images, lazy loading, and clean URLs.

## Future Expansion

The architecture should support multilingual content, a blog, CMS integration, inquiry management, interactive maps, image galleries, travel articles, and seasonal landing pages without major architectural changes.

## Coding Standards

Use functional React components, descriptive naming, small reusable files, and readable code.

Avoid large components, duplicated code, deep component nesting, magic numbers, and inline styles.

## Git Workflow

- `main`: production-ready code
- `develop`: integration branch
- `feature/*`: new functionality
- `fix/*`: bug fixes
- `hotfix/*`: production fixes

## Definition of Done

A feature is complete when it is responsive, accessible, reusable, documented, free of console warnings and duplicated code, consistent with the design system, and reviewed against the Lighthouse goals.

## Final Principle

> **Every design decision should answer one question: Does this make a traveler feel more confident about trusting Viet with their journey?**

If the answer is no, it does not belong in the project.
