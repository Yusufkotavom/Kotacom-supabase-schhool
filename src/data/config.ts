import { defineCollection, z } from 'astro:content';

// Define the blog collection schema with enhanced image support
const blog = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    image: image().optional(), // ✅ Use Astro's image helper
    imageAlt: z.string().optional(), // ✅ Alt text for accessibility
    featured: z.boolean().default(false),
  }),
});

// Export the collections
export const collections = {
  blog,
}; 