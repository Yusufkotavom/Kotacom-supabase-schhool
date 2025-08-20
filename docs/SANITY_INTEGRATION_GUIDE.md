# Content Sources (Local-Only) and Optional Payload CMS

Sanity and Notion integrations have been removed. The site now uses:

- Local MD/MDX only: `src/pages/**` for posts/projects/products/services/stays and `src/content/pages` for WordPress-like pages
- Optional: Payload CMS (self-hosted) for future dynamic content needs

## Local Content
- Collections are defined in `src/content.config.ts` for MDX content only
- All pages and components have been updated to read from MDX collections

## Optional: Payload CMS
- Add `payload` as a dependency (already in package.json)
- Scripts:
  - `npm run payload:dev` to start Payload locally
  - `npm run payload:build` to build Payload
- Create `payload.config.ts` with minimal collections (example: posts, products, services, projects) mirroring your MDX frontmatter fields
- Expose a read-only REST endpoint and adapt fetchers if you later want to hydrate content from Payload

## What was removed
- Sanity client and service fetchers are stubbed (return empty) to avoid breaking imports
- All Sanity/Notion references were removed from pages/components
- Category/tag pages now operate on MDX-only datasets

## Build
- `npm run build` (Astro static)
- `npm run dev` for local development