# DOKUMENTASI PROJECT KOTACOM.ID - PANDUAN LENGKAP UNTUK AI

## 📋 DAFTAR ISI

1. [Ringkasan Project](#1-ringkasan-project)
2. [Arsitektur & Teknologi](#2-arsitektur--teknologi)
3. [Struktur Direktori](#3-struktur-direktori)
4. [Integrasi Supabase](#4-integrasi-supabase)
5. [Relasi Komponen](#5-relasi-komponen)
6. [Pola Data & Normalisasi](#6-pola-data--normalisasi)
7. [Routing & Layout](#7-routing--layout)
8. [Panduan Development](#8-panduan-development)
9. [Troubleshooting](#9-troubleshooting)
10. [Best Practices](#10-best-practices)

---

## 1. RINGKASAN PROJECT

**kotacom.id** adalah website IT Service & Publications yang dibangun dengan **Astro** sebagai static site generator dengan integrasi **Supabase** sebagai database utama.

### 1.1 Fitur Utama
- **Multi-source Content**: Mendukung MDX files dan Supabase database
- **Static Site Generation**: Build-time data fetching untuk performa optimal
- **Responsive Design**: Mobile-first dengan Tailwind CSS
- **SEO Optimized**: Schema markup, sitemap, dan meta tags
- **Performance**: Image optimization, lazy loading, code splitting
- **Dark Mode**: Theme switcher dengan localStorage persistence

### 1.2 Entitas Utama
- **Posts**: Artikel dan blog posts
- **Services**: Layanan IT yang ditawarkan
- **Products**: Produk digital dan software
- **Projects**: Portfolio dan case studies

---

## 2. ARSITEKTUR & TEKNOLOGI

### 2.1 Tech Stack
```json
{
  "framework": "Astro 5.10.0",
  "styling": "Tailwind CSS 4.1.3",
  "database": "Supabase (PostgreSQL)",
  "ui": "Flowbite components",
  "markdown": "MDX + Marked.js",
  "search": "Pagefind",
  "analytics": "Vercel Analytics",
  "deployment": "Netlify/Vercel"
}
```

### 2.2 Alur Data
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│   Supabase  │    │     Astro    │    │   Static    │
│  (Runtime)  ├───►│ (Build Time) ├───►│    Site     │
└─────────────┘    └──────────────┘    └─────────────┘
       │                    │                   │
       ▼                    ▼                   ▼
   Database             Data Fetch         Optimized
   PostgreSQL           Normalization      HTML/CSS/JS
   Junction Tables      Component Render   CDN Ready
```

### 2.3 Deployment Flow
1. **Build Time**: Astro fetches data dari Supabase
2. **Static Generation**: Pages di-generate sebagai HTML statis
3. **CDN Deployment**: Files di-deploy ke Netlify/Vercel
4. **Runtime**: Client hanya load static assets

---

## 3. STRUKTUR DIREKTORI

```
src/
├── assets/                 # Static assets (images, logos)
├── components/            # Reusable UI components
│   ├── Homepage/         # Homepage-specific components
│   ├── Popups/          # Modal dan drawer components
│   ├── Ads/             # Advertisement components
│   └── *.astro          # General components
├── data/                 # Configuration files
│   ├── mega-menu-config.ts  # Navigation configuration
│   ├── config.ts            # App configuration
│   └── *.json              # Static data files
├── layouts/              # Page layout templates
│   ├── MainLayout.astro     # Base layout
│   ├── PostLayout.astro     # Blog post layout
│   ├── ProductPage.astro    # Product detail layout
│   ├── ServicePage.astro    # Service detail layout
│   └── ProjectPage.astro    # Project detail layout
├── lib/                  # Utility functions
│   ├── supabase-direct.ts   # Supabase integration
│   └── mdx-fallback.ts     # MDX utilities
├── pages/                # File-based routing
│   ├── posts/           # Blog posts (MDX)
│   ├── services/        # Service pages
│   ├── products/        # Product pages
│   ├── projects/        # Project pages
│   └── *.astro          # Static pages
├── scripts/              # Build scripts
├── styles/              # Global styles
└── utils/               # Helper utilities
```

---

## 4. INTEGRASI SUPABASE

### 4.1 Konfigurasi Client
**File**: `src/lib/supabase-direct.ts`

```typescript
const SUPABASE_URL = import.meta.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
```

### 4.2 Struktur Database

#### 4.2.1 Tabel Utama
| Tabel | Deskripsi | Kolom Utama |
|-------|-----------|-------------|
| `posts` | Artikel dan blog posts | `id`, `title`, `slug`, `body`, `published`, `status` |
| `services` | Layanan IT | `id`, `title`, `slug`, `provider`, `price`, `wilayah` |
| `products` | Produk digital | `id`, `title`, `slug`, `price`, `country`, `locale` |
| `projects` | Portfolio projects | `id`, `title`, `slug`, `organiser`, `body`, `image_url` |

#### 4.2.2 Junction Tables (Many-to-Many)
| Tabel | Relasi | Kolom |
|-------|--------|-------|
| `posts_tags` | Posts ↔ Tags | `_parent_id`, `value`, `_order` |
| `posts_categories` | Posts ↔ Categories | `_parent_id`, `value`, `_order` |
| `services_tags` | Services ↔ Tags | `_parent_id`, `value`, `_order` |
| `services_categories` | Services ↔ Categories | `_parent_id`, `value`, `_order` |

### 4.3 Fungsi Utama

#### 4.3.1 Data Fetching Functions
```typescript
// Posts
getPostsDirectFromSupabase(limit = 100, status = 'published')

// Services  
getServicesDirectFromSupabase(limit = 10000, status = 'published')

// Products
getProductsDirectFromSupabase(limit = 10000, status = 'published')

// Projects
getProjectsDirectFromSupabase(limit = 10000)
```

#### 4.3.2 Helper Functions
```typescript
// Tags & Categories
getTagsForPosts(postIds: number[]): Map<number, string[]>
getCategoriesForPosts(postIds: number[]): Map<number, string[]>
getTagsForServices(serviceIds: number[]): Map<number, string[]>
getCategoriesForServices(serviceIds: number[]): Map<number, string[]>

// Data Processing
processPayloadField(field: any): any[]
convertSupabasePost(post: SupabasePost)
```

### 4.4 Query Patterns

#### 4.4.1 Basic Query
```typescript
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .eq('status', 'published')
  .order('published', { ascending: false })
  .limit(limit);
```

#### 4.4.2 Junction Table Query
```typescript
const { data: tagsData } = await supabase
  .from('posts_tags')
  .select('_parent_id, value')
  .in('_parent_id', postIds)
  .order('_order', { ascending: true });
```

---

## 5. RELASI KOMPONEN

### 5.1 Layout Hierarchy
```
MainLayout.astro
├── BaseHead.astro (SEO, meta tags)
├── Header.astro
│   ├── ThemeToggle.astro
│   ├── MegaMenu.astro
│   └── MobileMegaMenu.astro
├── [Page Content]
├── Footer.astro
├── ContactButtons.astro
└── SubscribeDrawer.astro
```

### 5.2 Homepage Components
```
index.astro
├── HomeHero.astro
├── ServicesHighlight.astro
├── LatestServices.astro
├── LatestProjects.astro
├── LatestProducts.astro
├── ClientTestimonials.astro
└── LatestPosts.astro
```

### 5.3 Card Components
| Component | Digunakan Untuk | Data Source |
|-----------|-----------------|-------------|
| `PostCard.astro` | Blog posts | MDX + Supabase |
| `ServiceCard.astro` | Services listing | Supabase |
| `ProductCard.astro` | Products listing | Supabase |
| `ProjectCard.astro` | Portfolio projects | Supabase |

### 5.4 Navigation Components
```
Header.astro
├── MegaMenu.astro (Desktop)
│   └── mega-menu-config.ts
├── MobileMegaMenu.astro (Mobile)
└── ThemeToggle.astro
```

### 5.5 Data Flow dalam Components

#### 5.5.1 Homepage Latest Components
```typescript
// Pattern yang sama di semua LatestXXX.astro
1. Import getXXXDirectFromSupabase
2. Fetch data: await getXXXDirectFromSupabase(limit)
3. Normalisasi data ke format yang konsisten
4. Map ke Card components
5. Render dengan responsive grid
```

#### 5.5.2 Detail Page Components
```typescript
// Pattern di ProductPage.astro, ServicePage.astro, dll
1. Receive data via Astro.props
2. Extract metadata untuk SEO
3. Render structured content
4. Include related items
5. Add schema markup
```

---

## 6. POLA DATA & NORMALISASI

### 6.1 Multi-Source Data Handling

Project ini menggabungkan data dari:
- **MDX Files**: Content collections untuk posts, services, products, projects
- **Supabase**: Database untuk dynamic content

### 6.2 Normalisasi Pattern

#### 6.2.1 Posts Normalization
```typescript
// MDX Posts
const normalizedMdxPosts = mdxPosts.map((entry) => ({
  source: 'mdx',
  data: {
    properties: {
      bTitle: entry.data.title,
      bTags: entry.data.tags,
      bSlug: entry.data.slug,
      bCoverImage: entry.data.coverImage,
      bPublished: { start: entry.data.published },
      bDescription: entry.data.description,
    }
  }
}));

// Supabase Posts
const normalizedSupabase = supabasePosts
  .map(convertSupabasePost)
  .map((p) => ({
    source: 'supabase',
    data: {
      properties: {
        bTitle: p.title,
        bTags: (p.tags||[]).map((x)=>x.value||x),
        bSlug: p.slug,
        bCoverImage: p.coverImage,
        bPublished: { start: new Date(p.published) },
        bDescription: p.description,
      }
    }
  }));
```

#### 6.2.2 Field Mapping Conventions
| Entity | Prefix | Example Fields |
|--------|--------|----------------|
| Posts | `b` | `bTitle`, `bSlug`, `bTags`, `bCoverImage` |
| Services | `sv` | `svTitle`, `svSlug`, `svCategory`, `svImageURL1` |
| Products | `p` | `pTitle`, `pSlug`, `pPrice`, `pCountry` |
| Projects | `p` | `pTitle`, `pSlug`, `pCategory`, `pImageUrl` |

### 6.3 Markdown Processing

#### 6.3.1 Automatic HTML Conversion
```typescript
// Deteksi markdown content
if (post.body && (post.body.includes('#') || post.body.includes('*'))) {
  const { marked } = await import('marked');
  processedBody = marked(post.body);
}
```

#### 6.3.2 Multi-field Processing (Projects)
```typescript
const processMarkdownField = (content: string): string => {
  if (!content) return '';
  let processed = marked(content);
  
  // HTML cleanup untuk prose rendering
  processed = processed
    .replace(/\n\s*\n/g, '</p>\n<p>')
    .replace(/^(?!<[ph])/gm, '<p>')
    .replace(/(?<!>)$/gm, '</p>')
    .replace(/<p><\/p>/g, '');
    
  return processed;
};
```

---

## 7. ROUTING & LAYOUT

### 7.1 File-based Routing (Astro)
```
pages/
├── index.astro              # Homepage (/)
├── [...slug].astro          # Dynamic blog posts
├── [...page].astro          # Pagination
├── contact.astro            # Contact page
├── search.astro             # Search page
├── posts/                   # Blog posts
├── services/               # Service pages
│   └── index.astro         # Services listing
├── products/               # Product pages
│   └── index.astro         # Products listing
└── projects/               # Project pages
    └── [...page].astro     # Projects with pagination
```

### 7.2 Layout Templates

#### 7.2.1 MainLayout.astro (Base Layout)
```typescript
interface Props {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'service' | 'project';
  published?: string;
  modified?: string;
  section?: string;
  tags?: string[];
}
```

**Komponen yang disertakan**:
- `BaseHead` (SEO meta tags)
- `Header` (Navigation)
- `Footer` (Site footer)
- `ContactButtons` (Floating action buttons)
- `SubscribeDrawer` (Newsletter popup)

#### 7.2.2 Specialized Layouts
- **PostLayout.astro**: Blog post dengan TOC, related posts
- **ProductPage.astro**: Product detail dengan specs, pricing
- **ServicePage.astro**: Service detail dengan features, CTA
- **ProjectPage.astro**: Portfolio dengan case study format

### 7.3 Navigation Structure

#### 7.3.1 Mega Menu Configuration
**File**: `src/data/mega-menu-config.ts`

```typescript
export const MEGA_MENU_CONFIG = {
  layanan: {
    trigger: 'Layanan',
    sections: [
      {
        title: 'Pengembangan Digital',
        items: [
          { title: 'Website Development', url: '/services/website-software-development' },
          { title: 'Software Development', url: '/services/software-development' },
          // ...
        ]
      },
      // ...
    ]
  },
  // portfolio, produk
};
```

---

## 8. PANDUAN DEVELOPMENT

### 8.1 Environment Setup

#### 8.1.1 Required Environment Variables
```env
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key  # Optional, for server-side operations

# Site Configuration
SITE_URL=https://kotacom.id
```

#### 8.1.2 Development Commands
```bash
# Development server
npm run dev

# Build for production
npm run build

# Build with image optimization
npm run build:optimized

# Lint code
npm run lint
npm run lint:fix

# Performance analysis
npm run analyze
npm run performance
```

### 8.2 Menambah Entity Baru

#### 8.2.1 Langkah Database (Supabase)
1. **Buat tabel utama**:
```sql
create table new_entity (
  id bigserial primary key,
  title text not null,
  slug text unique not null,
  description text,
  published timestamptz default now(),
  status text default 'published',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

2. **Buat junction tables** (jika perlu tags/categories):
```sql
create table new_entity_tags (
  _parent_id bigint references new_entity(id) on delete cascade,
  value text not null,
  _order int default 0
);

create table new_entity_categories (
  _parent_id bigint references new_entity(id) on delete cascade,
  value text not null,
  _order int default 0
);
```

3. **Setup RLS (Row Level Security)**:
```sql
alter table new_entity enable row level security;
create policy "Public access" on new_entity for select using (status = 'published');
```

#### 8.2.2 Langkah Code

1. **Update Interface** di `supabase-direct.ts`:
```typescript
export interface SupabaseNewEntity {
  id: string;
  title?: string;
  slug?: string;
  description?: string;
  published?: string;
  status?: string;
  // ... other fields
}
```

2. **Tambah Fetch Function**:
```typescript
export async function getNewEntitiesDirectFromSupabase(
  limit: number = 10000, 
  status: 'published' | 'draft' | 'all' = 'published'
): Promise<SupabaseNewEntity[]> {
  // Implementation similar to existing functions
}
```

3. **Buat Card Component**:
```astro
<!-- src/components/NewEntityCard.astro -->
---
interface Props {
  entity: any;
}
const { entity } = Astro.props;
---
<div class="card-container">
  <!-- Card implementation -->
</div>
```

4. **Buat Layout Page**:
```astro
<!-- src/layouts/NewEntityPage.astro -->
---
// Layout implementation
---
<MainLayout>
  <!-- Entity detail layout -->
</MainLayout>
```

5. **Update Navigation** di `mega-menu-config.ts`

### 8.3 Menambah Field Baru

#### 8.3.1 Database
```sql
alter table posts add column excerpt text;
update posts set excerpt = left(description, 160) where excerpt is null;
```

#### 8.3.2 TypeScript Interface
```typescript
export interface SupabasePost {
  // ... existing fields
  excerpt?: string;
}
```

#### 8.3.3 Data Processing
```typescript
// Di function getPostsDirectFromSupabase
return {
  ...post,
  excerpt: post.excerpt || post.description?.slice(0,160) || ''
};
```

---

## 9. TROUBLESHOOTING

### 9.1 Common Issues

| Issue | Symptoms | Solution |
|-------|----------|----------|
| **Empty Supabase Data** | Components show no content | Check RLS policies, verify environment variables |
| **Build Failures** | Astro build errors | Check TypeScript interfaces, verify data structure |
| **Slow Build Times** | Long build duration | Reduce Supabase query limits, optimize images |
| **Missing Images** | Broken image links | Verify image URLs, check CDN configuration |
| **Navigation Errors** | Menu not working | Check mega-menu-config.ts, verify component imports |

### 9.2 Debug Commands

```bash
# Check environment variables
echo $SUPABASE_URL

# Test Supabase connection
curl -H "apikey: $SUPABASE_ANON_KEY" "$SUPABASE_URL/rest/v1/posts?select=id,title&limit=1"

# Analyze bundle size
npm run analyze

# Check for TypeScript errors
npx tsc --noEmit

# Lint and fix issues
npm run lint:fix
```

### 9.3 Performance Monitoring

#### 9.3.1 Build-time Monitoring
```typescript
// Pattern yang digunakan di semua fetch functions
console.log(`🔄 Fetching ${limit} posts from Supabase...`);
console.log(`✅ Successfully fetched ${data?.length || 0} posts`);
```

#### 9.3.2 Runtime Monitoring
- Vercel Analytics untuk page views
- Speed Insights untuk Core Web Vitals
- WhatsApp click tracking untuk conversions

---

## 10. BEST PRACTICES

### 10.1 Code Organization

#### 10.1.1 Component Structure
```astro
---
// 1. Imports
import Component from './Component.astro';

// 2. Interface definition
interface Props {
  title: string;
  optional?: boolean;
}

// 3. Props destructuring
const { title, optional = false } = Astro.props;

// 4. Data fetching (if needed)
const data = await fetchData();

// 5. Data processing
const processedData = data.map(transform);
---

<!-- 6. Template -->
<div class="component-container">
  <!-- Component markup -->
</div>

<!-- 7. Styles (if needed) -->
<style>
  .component-container {
    /* Component-specific styles */
  }
</style>
```

#### 10.1.2 Data Fetching Best Practices
```typescript
// ✅ Good: Batch queries
const [posts, tags, categories] = await Promise.all([
  getPostsData(),
  getTagsData(postIds),
  getCategoriesData(postIds)
]);

// ❌ Bad: Sequential queries
const posts = await getPostsData();
const tags = await getTagsData(postIds);
const categories = await getCategoriesData(postIds);
```

### 10.2 Performance Optimization

#### 10.2.1 Image Optimization
```astro
<!-- Use Astro's Image component -->
import { Image } from "astro:assets";
<Image src={imageUrl} alt={title} width={400} height={300} />

<!-- Or ResponsiveImage component -->
import ResponsiveImage from "./ResponsiveImage.astro";
<ResponsiveImage src={imageUrl} alt={title} />
```

#### 10.2.2 Lazy Loading
```astro
<!-- Use LazyComponent for non-critical content -->
import LazyComponent from "./LazyComponent.astro";
<LazyComponent>
  <HeavyComponent />
</LazyComponent>
```

#### 10.2.3 Code Splitting
```javascript
// astro.config.mjs
manualChunks: {
  'vendor': ['astro', 'tailwindcss'],
  'supabase': ['@supabase/supabase-js'],
  'ui': ['flowbite']
}
```

### 10.3 SEO & Accessibility

#### 10.3.1 Schema Markup
```astro
<SchemaMarkup
  type="article"
  title={post.title}
  description={post.description}
  breadcrumbs={breadcrumbs}
  data={schemaData}
/>
```

#### 10.3.2 Accessibility
- Semantic HTML elements (`<main>`, `<nav>`, `<article>`)
- ARIA labels dan roles
- Skip links untuk keyboard navigation
- Color contrast compliance
- Focus management

### 10.4 Content Management

#### 10.4.1 Content Strategy
- **MDX**: Untuk content yang jarang berubah, memerlukan version control
- **Supabase**: Untuk content yang sering diupdate, memerlukan CMS-like interface

#### 10.4.2 Content Validation
```typescript
// Gunakan Zod schemas di content.config.ts
const postMdxSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()).default([]),
  slug: z.string(),
  published: z.coerce.date(),
  description: z.string(),
});
```

---

## 11. PANDUAN KHUSUS UNTUK AI

### 11.1 Ketika Menganalisis Project

1. **Selalu baca file-file kunci ini terlebih dahulu**:
   - `package.json` - Dependencies dan scripts
   - `astro.config.mjs` - Build configuration
   - `src/lib/supabase-direct.ts` - Data layer
   - `src/consts.ts` - Global constants
   - `src/content.config.ts` - Content schemas

2. **Pahami pola normalisasi data**:
   - Setiap entity menggunakan prefix yang konsisten
   - Data dari MDX dan Supabase dinormalisasi ke format yang sama
   - Junction tables untuk many-to-many relationships

3. **Perhatikan file-file konfigurasi**:
   - `src/data/mega-menu-config.ts` - Navigation structure
   - Environment variables untuk Supabase

### 11.2 Ketika Membuat Perubahan

1. **Selalu ikuti pattern yang ada**:
   - Gunakan interface TypeScript yang sudah ada
   - Ikuti naming convention (prefix untuk entity)
   - Gunakan helper functions yang sudah tersedia

2. **Testing pattern**:
   - Test di development mode: `npm run dev`
   - Test build: `npm run build`
   - Check linting: `npm run lint`

3. **Update dokumentasi**:
   - Update interface jika menambah field baru
   - Update file ini jika menambah entity atau pattern baru
   - Update SUPABASE_INTEGRATION.md untuk perubahan database

### 11.3 Common Tasks untuk AI

#### 11.3.1 Menambah Field ke Entity
1. ALTER table di Supabase
2. Update TypeScript interface
3. Update fetch function
4. Update normalisasi di component
5. Update UI rendering

#### 11.3.2 Membuat Component Baru
1. Buat file `.astro` di `src/components/`
2. Define Props interface
3. Import di parent component
4. Update navigation jika perlu

#### 11.3.3 Debugging Data Issues
1. Check console logs di browser (ada logging di setiap fetch)
2. Verify Supabase data di dashboard
3. Check RLS policies
4. Verify environment variables

---

## 12. REFERENSI CEPAT

### 12.1 File Locations
```
Key Files:
├── src/lib/supabase-direct.ts     # Supabase integration
├── src/data/mega-menu-config.ts   # Navigation config
├── src/content.config.ts          # Content schemas
├── src/consts.ts                  # Global constants
├── astro.config.mjs               # Build config
└── package.json                   # Dependencies

Layout Files:
├── src/layouts/MainLayout.astro   # Base layout
├── src/layouts/PostLayout.astro   # Blog layout
├── src/layouts/ProductPage.astro  # Product layout
├── src/layouts/ServicePage.astro  # Service layout
└── src/layouts/ProjectPage.astro  # Project layout

Component Categories:
├── src/components/Homepage/       # Homepage sections
├── src/components/Popups/         # Modals & drawers
├── src/components/Ads/            # Advertisement components
└── src/components/*.astro         # General components
```

### 12.2 Key Functions
```typescript
// Data Fetching
getPostsDirectFromSupabase(limit, status)
getServicesDirectFromSupabase(limit, status)
getProductsDirectFromSupabase(limit, status)
getProjectsDirectFromSupabase(limit)

// Data Processing
convertSupabasePost(post)
processPayloadField(field)

// Helper Functions
getTagsForPosts(postIds)
getCategoriesForPosts(postIds)
getTagsForServices(serviceIds)
getCategoriesForServices(serviceIds)
```

### 12.3 Component Patterns
```astro
<!-- Homepage Latest Component Pattern -->
---
import { getXXXDirectFromSupabase } from "../../lib/supabase-direct";
import XXXCard from "../XXXCard.astro";

const data = await getXXXDirectFromSupabase(limit);
const normalizedData = data.map(normalize);
---

<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl">
    <h2>Section Title</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {normalizedData.map((item) => (
        <XXXCard item={item} />
      ))}
    </div>
  </div>
</section>
```

---

## 13. MONITORING & ANALYTICS

### 13.1 Performance Tracking
- **Vercel Speed Insights**: Core Web Vitals
- **Vercel Analytics**: Page views dan user behavior
- **Lighthouse**: Performance auditing
- **Bundle Analyzer**: Code splitting analysis

### 13.2 Business Metrics
- **WhatsApp Click Tracking**: Lead generation
- **Search Analytics**: User intent tracking
- **Navigation Patterns**: User journey analysis

---

## 14. DEPLOYMENT & CI/CD

### 14.1 Build Process
1. **Install Dependencies**: `npm install`
2. **Image Optimization**: `npm run optimize-images`
3. **Static Generation**: `npm run build`
4. **Performance Check**: Lighthouse audit
5. **Deploy**: Netlify/Vercel deployment

### 14.2 Environment-specific Configurations
- **Development**: Hot reload, debug logging
- **Production**: Minification, analytics, optimizations

---

## 15. FUTURE ROADMAP

### 15.1 Planned Improvements
- [ ] CMS Interface untuk Supabase content management
- [ ] Real-time updates dengan Supabase subscriptions
- [ ] Advanced search dengan full-text search
- [ ] Multi-language support (i18n)
- [ ] Advanced caching strategies

### 15.2 Technical Debt
- [ ] Extract Supabase config ke environment variables
- [ ] Implement proper error boundaries
- [ ] Add comprehensive testing suite
- [ ] Optimize bundle splitting further

---

**Dokumentasi ini harus selalu diupdate ketika ada perubahan signifikan pada arsitektur, struktur data, atau pola development.**

**Last Updated**: $(date)
**Version**: 1.0.0