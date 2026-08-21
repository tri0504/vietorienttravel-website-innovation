# Content Model Guide

Content is kept separate from component markup so destination, experience, and review content can grow without making pages harder to maintain.

## Current modules

| Module | Purpose | Required identity |
| --- | --- | --- |
| `src/data/navigation.js` | Header and footer links | `path` |
| `src/data/destinations.js` | Countries and destination records | `id`, `name`, `region` |
| `src/data/experiences.js` | Experience records | `id`, `title`, `category` |
| `src/data/reviews.js` | Guest review records | `id`, `quote`, `author` |
| `src/data/faqs.js` | Reserved FAQ collection | none yet |

## Data conventions

- Use stable, human-readable `id` values for records.
- Keep content objects serializable so they can later come from JSON or a CMS.
- Keep display logic in components, not inside data objects.
- Add optional fields without changing the meaning of existing fields.
- Avoid embedding JSX, imports, or callbacks in content modules.

## Example record

```js
{
  id: 'vietnam',
  name: 'Vietnam',
  region: 'Southeast Asia',
  featured: true,
}
```

When a record needs images, use a stable asset reference such as `imageKey` or `imageUrl`; keep image rendering and responsive behavior inside an image component.
