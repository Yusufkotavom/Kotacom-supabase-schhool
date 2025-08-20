# Sanity External API Guide

This guide shows how to create and fetch content in Sanity from external systems (scripts, backends, serverless), and how fields map to the schemas used by this project.

- Project ID: `97fy6mdx`
- Dataset: `production`
- API Version: `2025-01-01` (or newer)
- Base API: `https://{projectId}.api.sanity.io/v{apiVersion}/data/*`
- Assets API: `https://{projectId}.api.sanity.io/v{apiVersion}/assets/images/{dataset}`
- Auth: Bearer token with Editor/Write perms (env: `SANITY_READ_TOKEN` also works for write if granted)

## Environment

Add to your environment (local + Vercel):

```
SANITY_PROJECT_ID=97fy6mdx
SANITY_DATASET=production
SANITY_API_VERSION=2025-01-01
SANITY_READ_TOKEN=YOUR_WRITE_CAPABLE_TOKEN
```

## Root-Domain Slugs (no /blog prefix)

Posts are routed by `src/pages/[...slug].astro` and appear at `/your-post-slug` directly (e.g., `kotacom.id/post-blog-satu`). Fill `post.slug.current` with the exact root-level slug you want. No `/blog/` prefix is used in routes.

## Document Types & Fields

The following types exist in Studio (`sanity/schemaTypes`):

- post
  - title (string, required)
  - slug (slug, required)
  - status (string, optional)
  - excerpt (text, optional)
  - body (text, optional)
  - content (array of portable text and images, optional)
  - coverImage / mainImage (image, optional)
  - tags (array of reference(tag), optional)
  - categories (array of reference(tag), optional)
  - publishedAt (datetime)
  - author (string)

- project
  - title (string, required)
  - slug (slug, required)
  - category (array of reference(tag))
  - image (image)
  - publishedAt (datetime)
  - country (array of string)
  - locale (array of string)
  - organiser (string)
  - cost (array of string)
  - url, gygUrl, mapsUrl (url)
  - verify (boolean or string per schema)
  - review (text)
  - getInvolved (text)
  - content (portable text/images)

- service
  - title (string, required)
  - slug (slug, required)
  - category (array of reference(tag))
  - image1, image2, image3 (image)
  - publishedAt (datetime)
  - wilayah (array of string)
  - provider (string)
  - type (array of string)
  - price (string)
  - url, whatsappUrl, mapsUrl (url)
  - verify (boolean or string)
  - review (text)
  - content (portable text/images)

- product
  - title (string, required)
  - slug (slug, required)
  - price (string)
  - description (string)
  - content (portable text/images)
  - country, locale, category (array)
  - image1, image2, image3 (image)
  - publishedAt (datetime)
  - affiliateCode, commissionRate, affiliateProvider, discountCode, specialOffer, ctaText, priority, externalRating, soldCount, originalPrice, isSponsored, targetAudience (various)
  - url, otherUrl, tokopediaUrl, shopeeUrl, blibliUrl, bukalapakUrl, lazadaUrl, mapsUrl (url)

- tag
  - title (string, required)
  - slug (slug, required)

- siteSettings
  - siteTitle (string)
  - siteDescription (text)
  - logo (image)
  - companyName (string)
  - companyWhatsapp (string)
  - email (string)
  - socials (object)
  - primaryNav (array of {title, url})
  - footerNav (array of {title, links[{title,url}]})

Optional: if you want to manage WordPress-like pages via Sanity, create a `page` type with fields: title, slug, description, publishDate, author, image, body/content. Then add GROQ/fetchers similarly.

## Fetching (GROQ)

- All posts (descending by date):
```groq
*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
  _id, title, "slug": slug.current, excerpt, body, content[]{..., asset->},
  mainImage, coverImage, tags, categories[]->{title}, publishedAt, _updatedAt, author
}
```

- Single by slug:
```groq
*[_type == "post" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, excerpt, body, content[]{..., asset->},
  mainImage, coverImage, tags, categories[]->{title}, publishedAt, _updatedAt, author
}
```

- Projects/Services/Products follow the same pattern, replacing `_type` and selecting the fields you need (see field lists above). See `src/lib/sanity-service.ts` for production queries.

## Create Documents (HTTP Mutations)

- Endpoint: `POST https://{projectId}.api.sanity.io/v{apiVersion}/data/mutate/{dataset}`
- Header: `Authorization: Bearer <token>` and `Content-Type: application/json`

- Create a new post (basic):
```bash
curl -X POST \
  -H "Authorization: Bearer $SANITY_READ_TOKEN" \
  -H "Content-Type: application/json" \
  "https://$SANITY_PROJECT_ID.api.sanity.io/v$SANITY_API_VERSION/data/mutate/$SANITY_DATASET" \
  -d '{
    "mutations": [
      {
        "create": {
          "_type": "post",
          "title": "Judul Baru",
          "slug": {"_type": "slug", "current": "judul-baru"},
          "excerpt": "Ringkasan",
          "author": "Kotacom.id",
          "publishedAt": "2025-02-01T00:00:00Z"
        }
      }
    ]
  }'
```

- Upsert tag by title (create if missing), then link to post:
```bash
curl -X POST \
  -H "Authorization: Bearer $SANITY_READ_TOKEN" \
  -H "Content-Type: application/json" \
  "https://$SANITY_PROJECT_ID.api.sanity.io/v$SANITY_API_VERSION/data/mutate/$SANITY_DATASET" \
  -d '{
    "mutations": [
      {
        "createIfNotExists": {
          "_id": "tag.surabaya",
          "_type": "tag",
          "title": "Surabaya",
          "slug": {"_type": "slug", "current": "surabaya"}
        }
      },
      {
        "create": {
          "_type": "post",
          "title": "Post dengan Tag",
          "slug": {"_type": "slug", "current": "post-dengan-tag"},
          "tags": [{"_type": "reference", "_ref": "tag.surabaya"}],
          "publishedAt": "2025-02-02T00:00:00Z"
        }
      }
    ]
  }'
```

- Create project/service/product: use `_type` = `project` | `service` | `product` and pass fields from the lists above. For references (e.g., category tags), upsert tag first then reference as above.

## Upload Images

1) Upload asset:
```bash
curl -X POST \
  -H "Authorization: Bearer $SANITY_READ_TOKEN" \
  -H "Content-Type: image/jpeg" \
  --data-binary @cover.jpg \
  "https://$SANITY_PROJECT_ID.api.sanity.io/v$SANITY_API_VERSION/assets/images/$SANITY_DATASET"
```
Response includes `document._id` like `image-abc123-1200x630-jpg`. Use it in image fields.

2) Reference image in a document:
```json
{
  "_type": "image",
  "asset": {"_type": "reference", "_ref": "image-abc123-1200x630-jpg"}
}
```

## Node.js Example (Official Client)

```ts
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION || '2025-01-01',
  token: process.env.SANITY_READ_TOKEN,
  useCdn: false,
  perspective: process.env.SANITY_READ_TOKEN ? 'drafts' : 'published'
});

// Create a post
await client.create({
  _type: 'post',
  title: 'Judul Baru',
  slug: { _type: 'slug', current: 'judul-baru' },
  excerpt: 'Ringkasan',
  author: 'Kotacom.id',
  publishedAt: new Date().toISOString()
});

// Fetch posts
const posts = await client.fetch(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
  _id, title, "slug": slug.current, excerpt, body, content[]{..., asset->},
  mainImage, coverImage, tags, categories[]->{title}, publishedAt, _updatedAt, author
}`);
```

## Best Practices

- IDs: Use predictable IDs for tags (e.g., `tag.{slug}`) and let posts auto-ID. For idempotent external upserts, consider deterministic IDs.
- Slugs: Unique per type. Generate from title; enforce lowercase-kebab.
- Dates: Use ISO 8601 (UTC) strings in `publishedAt`.
- Transactions: For multi-step ops (create tags, then post), use batch mutations as shown.
- Images: Upload first, then reference by asset `_ref`.
- Drafts: When a token is present, reads include drafts (`perspective: 'drafts'`) in this project.

## How This Project Maps Sanity → UI

See `src/lib/sanity-service.ts` for GROQ and normalization:
- Posts: `body` (markdown/html) or `content` (portable text) become `contentHtml` rendered in Post layout.
- Products/Services/Projects: fields map to existing card and layout props.
- Site Settings: header/footer/SEO via `sanityGetSiteSettings()`.

## Adding a New Type

1) Add schema in `sanity/schemaTypes/<type>.ts`.
2) Export in `sanity/schemaTypes/index.ts`.
3) Add fetchers in `src/lib/sanity-service.ts`.
4) Create pages/components under `src/pages/<type>`.
5) Update `BaseHead.astro`/layouts if you need custom SEO.

With these examples, developers can programmatically create and fetch posts, pages (if added), projects, services, and products in Sanity, and wire them directly into this Astro app.