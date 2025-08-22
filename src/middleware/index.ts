// Astro Middleware - Redirect Handler
// Automatically handles redirects for all incoming requests

import { defineMiddleware } from 'astro:middleware';
import { checkRedirect } from '../lib/redirect-utils';

export const onRequest = defineMiddleware(async (context, next) => {
  // Check for redirect rules
  const redirectResult = checkRedirect({
    pathname: context.url.pathname,
    search: context.url.search,
    userAgent: context.request.headers.get('user-agent') || undefined,
    referrer: context.request.headers.get('referer') || undefined,
    headers: Object.fromEntries(context.request.headers.entries())
  });
  
  // Apply redirect if found
  if (redirectResult.shouldRedirect && redirectResult.destination) {
    console.log(`🔄 Middleware redirect: ${context.url.pathname} → ${redirectResult.destination} (${redirectResult.status})`);
    
    // Return redirect response
    return new Response(null, {
      status: redirectResult.status || 301,
      headers: {
        Location: redirectResult.destination,
        'Cache-Control': redirectResult.status === 301 || redirectResult.status === 308 
          ? 'public, max-age=31536000' // Cache permanent redirects for 1 year
          : 'no-cache' // Don't cache temporary redirects
      }
    });
  }
  
  // Continue to next middleware/page
  return next();
});