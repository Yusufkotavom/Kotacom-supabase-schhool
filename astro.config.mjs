// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from "astro-pagefind";
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';

import tailwindcss from '@tailwindcss/vite';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

// https://astro.build/config
export default defineConfig({
  site: 'https://kotacom.id',
  output: 'static',
  env: {
    schema: {
      // Payload CMS configuration
      PUBLIC_PAYLOAD_URL: {
        context: 'client',
        access: 'public',
        type: 'string',
        optional: true,
      },
      PAYLOAD_PUBLIC_SERVER_URL: {
        context: 'server',
        access: 'public',
        type: 'string',
        optional: true,
      }
    }
  },
  build: {
    cssMinify: true,
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  integrations: [
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [rehypeExternalLinks, { target: '_blank', rel: ['nofollow', 'noopener', 'noreferrer'] }],
        rehypeSlug,
      ],
    }),
    sitemap({
      serialize(item) {
        const url = item.url;
        const priority = /\/\d+\/$/.test(url) ? 0.3 : url.includes('/posts/') || url.includes('/products/') || url.includes('/services/') || url.includes('/projects/') ? 0.9 : 0.7;
        return { ...item, priority };
      }
    }),
    pagefind()
  ],

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['astro', 'tailwindcss'],
          },
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
              return `assets/images/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
        }
      }
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer,
          cssnano({
            preset: ['default', {
              discardComments: {
                removeAll: true,
              },
            }]
          })
        ]
      }
    }
  },
});