import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'astro/config';

// Bundle analyzer configuration
export default defineConfig({
  vite: {
    plugins: [
      visualizer({
        filename: 'dist/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    ]
  }
});

console.log('📊 Bundle analyzer configured. Run "npm run build" to generate analysis.');