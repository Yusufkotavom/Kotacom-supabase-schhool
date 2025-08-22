import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Notion and remote CMS removed – keep only local MD/MDX loaders

// MDX Schema for posts
const postMdxSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()).default([]),
  slug: z.string(),
  coverImage: z.string().optional(),
  published: z.coerce.date(),
  lastUpdated: z.coerce.date().optional(),
  description: z.string(),
});

// MDX Schema for projects  
const projectMdxSchema = z.object({
  title: z.string(),
  country: z.array(z.string()).default([]),
  locale: z.array(z.string()).default([]),
  category: z.array(z.string()).default([]),
  organiser: z.string().optional(),
  slug: z.string(),
  cost: z.array(z.string()).default([]),
  url: z.string().url().optional(),
  gygUrl: z.string().url().optional(),
  mapsUrl: z.string().url().optional(),
  verify: z.string().optional(),
  imageUrl: z.string().url().optional(),
  published: z.coerce.date(),
  review: z.string().optional(),
  getInvolved: z.string().optional(),
  // Case Study Fields
  client: z.string().optional(),
  clientIndustry: z.string().optional(),
  projectDuration: z.string().optional(),
  teamSize: z.string().optional(),
  technologies: z.array(z.string()).default([]),
  challenges: z.string().optional(),
  solutions: z.string().optional(),
  results: z.string().optional(),
  // Before/After Metrics
  beforeMetrics: z.object({
    traffic: z.string().optional(),
    conversions: z.string().optional(),
    revenue: z.string().optional(),
    performance: z.string().optional(),
    other: z.string().optional(),
  }).optional(),
  afterMetrics: z.object({
    traffic: z.string().optional(),
    conversions: z.string().optional(),
    revenue: z.string().optional(),
    performance: z.string().optional(),
    other: z.string().optional(),
  }).optional(),
  // ROI & Testimonial
  roiPercentage: z.string().optional(),
  clientTestimonial: z.string().optional(),
  clientName: z.string().optional(),
  clientPosition: z.string().optional(),
  // Additional Images
  beforeImage: z.string().url().optional(),
  afterImage: z.string().url().optional(),
  additionalImages: z.array(z.string().url()).default([]),
});

// MDX Schema for stays
const stayMdxSchema = z.object({
  title: z.string(),
  country: z.array(z.string()).default([]),
  locale: z.array(z.string()).default([]),
  category: z.array(z.string()).default([]),
  slug: z.string(),
  imageUrl: z.string().url().optional(),
  published: z.coerce.date(),
  price: z.string().optional(),
  description: z.string().optional(),
});

// MDX Schema for products
const productMdxSchema = z.object({
  title: z.string(),
  country: z.array(z.string()).default([]),
  locale: z.array(z.string()).default([]),
  category: z.array(z.string()).default([]),
  slug: z.string(),
  imageUrl: z.string().url().optional(),
  published: z.coerce.date(),
  price: z.string().optional(),
  description: z.string().optional(),
  content: z.string().optional(), // Additional content field
});

// MDX Schema for services
const serviceMdxSchema = z.object({
  title: z.string(),
  category: z.array(z.string()).default([]),
  slug: z.string(),
  imageUrl1: z.string().url().optional(),
  published: z.coerce.date(),
  wilayah: z.array(z.string()).default([]),
  provider: z.string().optional(),
  type: z.array(z.string()).default([]),
  price: z.string().optional(),
  url: z.string().url().optional(),
  whatsappUrl: z.string().url().optional(),
  mapsUrl: z.string().url().optional(),
  verify: z.string().optional(),
  imageUrl2: z.string().url().optional(),
  imageUrl3: z.string().url().optional(),
  review: z.string().optional(),
});

// MDX Schema for pages (WordPress pages)
const pageMdxSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  publishDate: z.coerce.date().optional(),
  author: z.string().optional(),
  image: z.string().optional(),
  draft: z.boolean().default(false),
  slug: z.string().optional(), // Will be derived from filename
});

// Removed Notion posts – using MDX posts collection below

// MDX Posts collection
const postsMdx = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
    schema: postMdxSchema,
  });

// Removed Notion projects – using MDX projects collection below

// MDX Projects collection
const projectsMdx = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/pages/projects' }),
    schema: projectMdxSchema,
  });

// Removed Notion stays – using MDX stays collection below


// Removed Notion products – using MDX products collection below

// MDX Products collection - Handle empty directories gracefully  
const productsMdx = defineCollection({
      loader: glob({ 
      pattern: '**/*.{md,mdx}', 
      base: './src/pages/products'
    }),
    schema: productMdxSchema,
  });

// Removed Notion services – using MDX services collection below

// MDX Services collection
const servicesMdx = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/pages/services' }),
    schema: serviceMdxSchema,
  });


// Create an alias for 'blog' collection to maintain backward compatibility (MDX posts)
const blog = postsMdx;

export const collections = {
  postsMdx,
  projectsMdx,
  productsMdx,
  servicesMdx,
};