# 📚 QUICK REFERENCE - KOTACOM.ID

## ⚡ Referensi Cepat untuk Development

Cheat sheet untuk AI assistant dan developer yang bekerja dengan project kotacom.id.

---

## 🗂️ FILE LOCATIONS PENTING

### Config Files
```
📁 Root Level:
├── package.json              # Dependencies & scripts
├── astro.config.mjs          # Build configuration
├── tsconfig.json             # TypeScript config
├── netlify.toml              # Deploy config
└── .env                      # Environment variables

📁 Source Config:
├── src/consts.ts             # Global constants
├── src/content.config.ts     # Content schemas
└── src/data/mega-menu-config.ts  # Navigation config
```

### Core Files
```
📁 Data Layer:
├── src/lib/supabase-direct.ts    # Supabase integration
└── src/lib/mdx-fallback.ts       # MDX utilities

📁 Layout System:
├── src/layouts/MainLayout.astro  # Base layout
├── src/layouts/PostLayout.astro  # Blog layout
├── src/layouts/ProductPage.astro # Product layout
├── src/layouts/ServicePage.astro # Service layout
└── src/layouts/ProjectPage.astro # Project layout

📁 Key Components:
├── src/components/Header.astro        # Main navigation
├── src/components/Footer.astro        # Site footer
├── src/components/BaseHead.astro      # SEO meta tags
└── src/components/SchemaMarkup.astro  # Structured data
```

---

## 🔧 COMMAND CHEAT SHEET

### Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview

# Build with image optimization
npm run build:optimized
```

### Quality Assurance
```bash
# Lint code
npm run lint
npm run lint:fix

# Performance analysis
npm run analyze
npm run performance

# TypeScript check
npx tsc --noEmit
```

### Debugging Commands
```bash
# Check environment variables
echo $SUPABASE_URL
echo $SUPABASE_ANON_KEY

# Test Supabase connection
curl -H "apikey: $SUPABASE_ANON_KEY" "$SUPABASE_URL/rest/v1/posts?select=id,title&limit=1"

# Find component usage
grep -r "ComponentName" src/

# Check build output
npm run build 2>&1 | grep -E "(error|warning|✓)"
```

---

## 📊 DATA FUNCTIONS REFERENCE

### Supabase Fetch Functions
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

### Helper Functions
```typescript
// Tags & Categories (Many-to-Many)
getTagsForPosts(postIds: number[]): Promise<Map<number, string[]>>
getCategoriesForPosts(postIds: number[]): Promise<Map<number, string[]>>
getTagsForServices(serviceIds: number[]): Promise<Map<number, string[]>>
getCategoriesForServices(serviceIds: number[]): Promise<Map<number, string[]>>

// Data Processing
processPayloadField(field: any): any[]
convertSupabasePost(post: SupabasePost)
```

---

## 🎨 COMPONENT PATTERNS

### Card Component Template
```astro
---
interface Props {
  entity: any;
  className?: string;
}

const { entity, className = '' } = Astro.props;

const normalized = {
  title: entity.title || entity.xxTitle || '',
  slug: entity.slug || entity.xxSlug || '',
  description: entity.description || entity.xxDescription || '',
  imageUrl: entity.imageUrl || entity.xxImageUrl || '',
  published: entity.published || entity.xxPublished || '',
};
---

<article class={`bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
  {normalized.imageUrl && (
    <div class="aspect-video overflow-hidden rounded-t-lg">
      <img src={normalized.imageUrl} alt={normalized.title} class="w-full h-full object-cover" loading="lazy" />
    </div>
  )}
  
  <div class="p-6">
    <h3 class="text-xl font-semibold mb-2">
      <a href={`/entity/${normalized.slug}`} class="hover:text-blue-600 dark:hover:text-blue-400">
        {normalized.title}
      </a>
    </h3>
    
    {normalized.description && (
      <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {normalized.description}
      </p>
    )}
    
    <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
      {normalized.published && (
        <time datetime={normalized.published}>
          {new Date(normalized.published).toLocaleDateString('id-ID')}
        </time>
      )}
      
      <a href={`/entity/${normalized.slug}`} class="text-blue-600 dark:text-blue-400 hover:underline font-medium">
        Selengkapnya →
      </a>
    </div>
  </div>
</article>
```

### Homepage Latest Component Template
```astro
---
import { getXXXDirectFromSupabase } from "../../lib/supabase-direct";
import XXXCard from "../XXXCard.astro";

interface Props {
  limit: number;
}

const { limit } = Astro.props;
const entities = await getXXXDirectFromSupabase(limit);
---

<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div class="max-w-screen-md mb-8">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Section Title
      </h2>
      <p class="text-gray-500 sm:text-xl dark:text-gray-400">
        Section description
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {entities.map((entity) => (
        <XXXCard entity={entity} />
      ))}
    </div>
    
    <div class="text-center mt-8">
      <a href="/entities" class="inline-flex items-center px-6 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Lihat Semua
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
</section>
```

---

## 🗃️ DATABASE QUICK REFERENCE

### Table Structure
```sql
-- Main Tables
CREATE TABLE posts (
  id bigserial PRIMARY KEY,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  body text,
  description text,
  published timestamptz DEFAULT now(),
  status text DEFAULT 'published',
  author text DEFAULT 'Kotacom.id',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Junction Tables Pattern
CREATE TABLE posts_tags (
  _parent_id bigint REFERENCES posts(id) ON DELETE CASCADE,
  value text NOT NULL,
  _order int DEFAULT 0
);
```

### Common Queries
```sql
-- Get published posts
SELECT * FROM posts WHERE status = 'published' ORDER BY published DESC LIMIT 10;

-- Get tags for posts
SELECT _parent_id, value FROM posts_tags WHERE _parent_id IN (1,2,3) ORDER BY _order;

-- Full text search
SELECT * FROM posts WHERE title ILIKE '%website%' OR description ILIKE '%website%';
```

### RLS Policies
```sql
-- Enable RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Public posts" ON posts FOR SELECT USING (status = 'published');
```

---

## 🎨 CSS UTILITY CLASSES

### Responsive Grid Patterns
```css
/* Standard responsive grid */
.grid-responsive {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

/* Mobile horizontal scroll */
.mobile-scroll {
  @apply flex overflow-x-auto hide-scrollbar space-x-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6;
}

/* Mobile card sizing */
.mobile-card {
  @apply w-[70%] sm:w-[50%] md:w-auto flex-shrink-0 md:flex-shrink;
}
```

### Dark Mode Patterns
```css
/* Standard dark mode variants */
.card-base {
  @apply bg-white dark:bg-gray-800;
  @apply text-gray-900 dark:text-white;
  @apply border-gray-200 dark:border-gray-700;
}

/* Interactive elements */
.button-primary {
  @apply bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800;
  @apply text-white;
  @apply focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800;
}
```

### Typography Patterns
```css
/* Section headings */
.section-title {
  @apply text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white;
}

/* Section descriptions */
.section-description {
  @apply text-gray-500 sm:text-xl dark:text-gray-400;
}

/* Card titles */
.card-title {
  @apply text-xl font-semibold mb-2 text-gray-900 dark:text-white;
}

/* Card descriptions */
.card-description {
  @apply text-gray-600 dark:text-gray-300 mb-4 line-clamp-3;
}
```

---

## 🔄 WORKFLOW QUICK STEPS

### Menambah Field ke Entity
```bash
# 1. Database (Supabase SQL Editor)
ALTER TABLE posts ADD COLUMN new_field text;

# 2. TypeScript Interface (src/lib/supabase-direct.ts)
export interface SupabasePost {
  // ... existing
  new_field?: string;
}

# 3. Fetch Function Update
return {
  ...post,
  new_field: post.new_field || '',
};

# 4. Component Update (if display needed)
{entity.new_field && <p>{entity.new_field}</p>}

# 5. Test
npm run dev
```

### Membuat Entity Baru
```bash
# 1. Database Schema
CREATE TABLE new_entity (...);
ALTER TABLE new_entity ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public access" ON new_entity FOR SELECT USING (status = 'published');

# 2. TypeScript Interface
export interface SupabaseNewEntity { ... }

# 3. Fetch Function
export async function getNewEntitiesDirectFromSupabase() { ... }

# 4. Card Component
<!-- src/components/NewEntityCard.astro -->

# 5. Homepage Component  
<!-- src/components/Homepage/LatestNewEntities.astro -->

# 6. Detail Layout
<!-- src/layouts/NewEntityPage.astro -->

# 7. Update Navigation (if needed)
```

### Fix Data Issues
```bash
# 1. Check console logs (Browser DevTools)
# Look for: 🔄 Fetching... and ✅ Successfully fetched...

# 2. Test Supabase connection
curl -H "apikey: $SUPABASE_ANON_KEY" "$SUPABASE_URL/rest/v1/posts?select=id&limit=1"

# 3. Check RLS policies (Supabase Dashboard)
# 4. Verify environment variables
# 5. Check data structure matches interfaces
```

---

## 🧩 COMPONENT IMPORT PATTERNS

### Common Imports
```astro
---
// Layouts
import MainLayout from "../layouts/MainLayout.astro";
import PostLayout from "../layouts/PostLayout.astro";

// Components
import PostCard from "../components/PostCard.astro";
import ServiceCard from "../components/ServiceCard.astro";
import ResponsiveImage from "../components/ResponsiveImage.astro";

// Data functions
import { getPostsDirectFromSupabase, convertSupabasePost } from "../lib/supabase-direct";
import { getCollection } from "astro:content";

// Utilities
import { Image } from "astro:assets";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
---
```

### Props Interface Patterns
```typescript
// Basic component props
interface Props {
  title: string;
  description?: string;
  className?: string;
}

// Entity card props
interface EntityCardProps {
  entity: any;
  showImage?: boolean;
  showDate?: boolean;
  className?: string;
}

// Layout props
interface LayoutProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'service' | 'project';
  published?: string;
  modified?: string;
  tags?: string[];
}
```

---

## 📱 RESPONSIVE DESIGN PATTERNS

### Breakpoint System (Tailwind)
```css
/* Mobile First Approach */
.responsive-element {
  /* Mobile (default) */
  @apply text-sm p-4;
  
  /* Tablet (768px+) */
  @apply md:text-base md:p-6;
  
  /* Desktop (1024px+) */
  @apply lg:text-lg lg:p-8;
  
  /* Large Desktop (1280px+) */
  @apply xl:text-xl xl:p-10;
}
```

### Grid Patterns
```css
/* Standard responsive grid */
.grid-standard {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6;
}

/* Homepage cards grid */
.grid-homepage {
  @apply flex overflow-x-auto hide-scrollbar space-x-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12;
}

/* Full width on mobile, constrained on desktop */
.container-responsive {
  @apply w-full px-4 mx-auto max-w-screen-xl lg:px-6;
}
```

---

## 🎯 TROUBLESHOOTING CHECKLIST

### Data Issues
- [ ] Check console logs untuk error messages
- [ ] Verify Supabase connection dengan curl
- [ ] Check RLS policies di Supabase dashboard
- [ ] Verify environment variables loaded
- [ ] Check data structure matches TypeScript interfaces
- [ ] Verify status filtering (published vs draft)

### UI Issues
- [ ] Check component import paths (case-sensitive)
- [ ] Verify props interface matches usage
- [ ] Check Tailwind classes untuk typos
- [ ] Test responsive design di different screen sizes
- [ ] Verify dark mode variants
- [ ] Check for JavaScript errors di console

### Build Issues
- [ ] Run `npm run lint:fix` untuk code quality
- [ ] Check TypeScript errors dengan `npx tsc --noEmit`
- [ ] Verify all imports exist dan correct
- [ ] Check for circular dependencies
- [ ] Verify Astro config syntax
- [ ] Check for missing environment variables

### Performance Issues
- [ ] Run `npm run analyze` untuk bundle size
- [ ] Check image optimization
- [ ] Verify lazy loading implementation
- [ ] Check for unnecessary re-renders
- [ ] Optimize data fetching queries
- [ ] Check Core Web Vitals dengan Lighthouse

---

## 🔗 USEFUL LINKS & RESOURCES

### Internal Documentation
- [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md) - Complete project overview
- [AI_DEVELOPMENT_GUIDE.md](./AI_DEVELOPMENT_GUIDE.md) - AI assistant workflows
- [COMPONENT_RELATIONSHIPS.md](./COMPONENT_RELATIONSHIPS.md) - Component interactions
- [ROUTING_GUIDE.md](./ROUTING_GUIDE.md) - Routing system
- [SUPABASE_INTEGRATION.md](./SUPABASE_INTEGRATION.md) - Database integration

### External Resources
- [Astro Documentation](https://docs.astro.build/) - Framework docs
- [Supabase Documentation](https://supabase.com/docs) - Database docs
- [Tailwind CSS](https://tailwindcss.com/docs) - Styling docs
- [Flowbite Components](https://flowbite.com/docs/components/) - UI components
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Type system

### Tools & Services
- [Supabase Dashboard](https://supabase.com/dashboard) - Database management
- [Netlify Dashboard](https://app.netlify.com/) - Deployment management
- [Vercel Analytics](https://vercel.com/analytics) - Performance monitoring
- [Lighthouse](https://pagespeed.web.dev/) - Performance audit

---

## 📋 FIELD MAPPING REFERENCE

### Entity Prefixes
| Entity | Prefix | Example Fields |
|--------|--------|----------------|
| Posts | `b` | `bTitle`, `bSlug`, `bTags`, `bCoverImage` |
| Services | `sv` | `svTitle`, `svSlug`, `svCategory`, `svImageURL1` |
| Products | `p` | `pTitle`, `pSlug`, `pPrice`, `pCountry` |
| Projects | `p` | `pTitle`, `pSlug`, `pCategory`, `pImageUrl` |

### Common Field Mappings
```typescript
// Supabase → Frontend mapping
const fieldMappings = {
  // Images
  'image_url': 'imageUrl',
  'cover_image': 'coverImage',
  'imageUrl1': 'svImageURL1',
  
  // Dates
  'published': 'publishedAt',
  'updated_at': 'updatedAt', 
  'created_at': 'createdAt',
  
  // Content
  'body': 'content',
  'description': 'excerpt'
};
```

---

## 🚨 CRITICAL PATTERNS

### Always Follow These Patterns

#### 1. Error Handling
```typescript
// ✅ GOOD: Proper error handling
try {
  const { data, error } = await supabase.from('table').select('*');
  if (error) {
    console.error('❌ Supabase error:', error);
    return [];
  }
  return data || [];
} catch (error) {
  console.error('❌ Error fetching data:', error);
  return [];
}
```

#### 2. Data Validation
```typescript
// ✅ GOOD: Validate data structure
if (!data || !Array.isArray(data)) {
  console.warn('Invalid data structure received');
  return [];
}

// ✅ GOOD: Safe property access
const title = entity.title || entity.xxTitle || 'Untitled';
```

#### 3. TypeScript Interfaces
```typescript
// ✅ GOOD: Define proper interfaces
interface Props {
  title: string;
  optional?: boolean;
}

const { title, optional = false } = Astro.props;
```

#### 4. Responsive Design
```astro
<!-- ✅ GOOD: Mobile-first responsive -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

<!-- ✅ GOOD: Dark mode variants -->
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
```

---

## 🔍 SEARCH & FIND PATTERNS

### Find Component Usage
```bash
# Find where component is used
grep -r "ComponentName" src/

# Find specific import
grep -r "import.*ComponentName" src/

# Find prop usage
grep -r "propName=" src/
```

### Find Configuration
```bash
# Find navigation config
grep -r "MEGA_MENU_CONFIG" src/

# Find constants usage
grep -r "SITE_TITLE\|COMPANY_" src/

# Find Supabase functions
grep -r "getPostsDirectFromSupabase\|getServicesDirectFromSupabase" src/
```

### Find Styling Patterns
```bash
# Find Tailwind classes
grep -r "bg-white dark:bg-gray-800" src/

# Find responsive patterns
grep -r "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" src/

# Find component-specific styles
grep -r "<style>" src/
```

---

## 🛠️ DEVELOPMENT HELPERS

### VS Code Snippets
```json
{
  "Astro Component": {
    "prefix": "astro-component",
    "body": [
      "---",
      "interface Props {",
      "  ${1:prop}: ${2:string};",
      "}",
      "",
      "const { ${1:prop} } = Astro.props;",
      "---",
      "",
      "<div class=\"${3:component-wrapper}\">",
      "  ${0}",
      "</div>"
    ]
  },
  
  "Supabase Fetch": {
    "prefix": "supabase-fetch",
    "body": [
      "const { data, error } = await supabase",
      "  .from('${1:table}')",
      "  .select('${2:*}')",
      "  .eq('status', 'published')",
      "  .order('published', { ascending: false })",
      "  .limit(${3:limit});",
      "",
      "if (error) {",
      "  console.error('❌ Supabase error:', error);",
      "  return [];",
      "}",
      "",
      "return data || [];"
    ]
  }
}
```

### Git Hooks (Optional)
```bash
# Pre-commit hook
#!/bin/sh
npm run lint
npm run build
```

---

## 📊 PERFORMANCE BENCHMARKS

### Target Metrics
```
Page Load Times:
├── Homepage: < 1.5s
├── Blog Posts: < 1.0s  
├── Service Pages: < 1.2s
├── Product Pages: < 1.2s
└── Project Pages: < 1.0s

Core Web Vitals:
├── LCP: < 2.5s
├── FID: < 100ms
└── CLS: < 0.1

Lighthouse Scores:
├── Performance: > 90
├── Accessibility: > 95
├── Best Practices: > 95
└── SEO: > 95
```

### Optimization Checklist
- [ ] Images optimized dan lazy loaded
- [ ] Critical CSS inlined
- [ ] JavaScript code split
- [ ] Fonts preloaded
- [ ] Third-party scripts deferred
- [ ] Bundle size < 500KB
- [ ] Database queries optimized

---

## 🎯 COMMON TASKS QUICK REFERENCE

| Task | Files to Edit | Key Functions |
|------|---------------|---------------|
| **Add new field to posts** | `supabase-direct.ts`, `PostCard.astro` | `getPostsDirectFromSupabase` |
| **Create new component** | `src/components/NewComponent.astro` | Component props interface |
| **Update navigation** | `mega-menu-config.ts`, `MegaMenu.astro` | `MEGA_MENU_CONFIG` |
| **Add new page** | `src/pages/new-page.astro` | `MainLayout` props |
| **Fix styling issues** | Component `.astro` files | Tailwind classes |
| **Update SEO** | `BaseHead.astro`, `SchemaMarkup.astro` | Meta tags, schema |
| **Performance optimization** | `astro.config.mjs`, component files | Build config, lazy loading |

---

**Simpan file ini sebagai bookmark untuk referensi cepat saat development! 🔖**

**Last Updated**: $(date)
**Version**: 1.0.0