# Architecture Guide

## Purpose

This repository is the application foundation for Viet Orient Travel. It intentionally contains route placeholders and reusable primitives, not finished marketing sections. New features should fit the boundaries below.

## Application flow

```text
src/main.jsx
  -> BrowserRouter
    -> App.jsx (route registry)
      -> SiteLayout (shared header, outlet, footer)
        -> route page
```

`src/main.jsx` is the browser entry point. `src/App.jsx` owns route registration. `SiteLayout` owns site-wide chrome and renders the active route through React Router's `Outlet`.

## Directory responsibilities

### `src/components`

Reusable presentation components live here. Components should be small, accept data through props, and avoid owning business data. Shared navigation and page chrome belong in `components/layout`; general primitives belong in `components/ui`.

### `src/pages`

Pages correspond to routes and compose components and data. Keep route-specific orchestration here. A page should not become a data store or a second component library.

### `src/data`

Structured content and configuration live here. Repeatable content should be exported from a data module rather than duplicated in JSX. These modules can later be replaced by a CMS adapter without changing the component API.

### `src/styles`

Sass is organized by responsibility:

- `abstracts`: tokens and mixins; no emitted CSS
- `base`: reset, typography, and global element rules
- `components`: styles for reusable UI and layout components
- `utilities`: small, intentional helper classes
- `main.scss`: the single stylesheet entry point

Use the variables in `abstracts/_variables.scss` for colors, typography, spacing, and motion. Do not introduce one-off values when a design token exists.

## Adding a route

1. Create a page component in `src/pages`.
2. Register its path in `src/App.jsx` inside the shared layout route.
3. Add or update its navigation entry in `src/data/navigation.js` when it should appear in site navigation.
4. Keep repeatable page content in `src/data`.
5. Add component styles in the relevant Sass partial and include the partial from `src/styles/main.scss`.

## Future integrations

- **Multilingual support:** move visible strings into locale data and resolve them at the page/component boundary.
- **CMS:** replace static data modules with an asynchronous content service while preserving normalized content shapes.
- **SEO:** add route metadata alongside page definitions or introduce a route metadata registry.
- **Forms:** keep submission and validation logic in a feature-specific module; keep input components presentational.
- **Animations:** centralize reusable motion tokens and respect `prefers-reduced-motion`.
