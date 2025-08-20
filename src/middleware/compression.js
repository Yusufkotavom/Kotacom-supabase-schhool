import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  
  // Add compression headers
  response.headers.set('X-Compression', 'enabled');
  
  // Add cache headers for static assets
  const url = new URL(context.request.url);
  const pathname = url.pathname;
  
  if (pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|webp|woff|woff2)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (pathname.match(/\.(html|htm)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=3600');
  }
  
  return response;
});