// Redirect Utilities for Astro Components
// Helper functions untuk implementasi redirect di pages dan middleware

import { redirectManager, type RedirectRule } from '../data/redirects-config.js';

export interface RedirectResult {
  shouldRedirect: boolean;
  destination?: string;
  status?: number;
  rule?: RedirectRule;
}

export interface RedirectContext {
  pathname: string;
  search?: string;
  userAgent?: string;
  referrer?: string;
  headers?: Record<string, string>;
}

// Main redirect checker function
export function checkRedirect(context: RedirectContext): RedirectResult {
  const { pathname, userAgent, referrer } = context;
  
  // Find matching redirect rule
  const rule = redirectManager.findRedirect(pathname, userAgent, referrer);
  
  if (!rule) {
    return { shouldRedirect: false };
  }
  
  // Process destination with parameter substitution
  const destination = redirectManager.processDestination(pathname, rule);
  
  return {
    shouldRedirect: true,
    destination,
    status: rule.status,
    rule
  };
}

// Astro component redirect helper
export function handleAstroRedirect(astroInstance: any): RedirectResult {
  const context: RedirectContext = {
    pathname: astroInstance.url.pathname,
    search: astroInstance.url.search,
    userAgent: astroInstance.request.headers.get('user-agent') || undefined,
    referrer: astroInstance.request.headers.get('referer') || undefined,
    headers: Object.fromEntries(astroInstance.request.headers.entries())
  };
  
  return checkRedirect(context);
}

// Apply redirect in Astro component
export function applyRedirect(astroInstance: any): Response | null {
  const result = handleAstroRedirect(astroInstance);
  
  if (result.shouldRedirect && result.destination) {
    console.log(`🔄 Redirecting: ${astroInstance.url.pathname} → ${result.destination} (${result.status})`);
    return astroInstance.redirect(result.destination, result.status);
  }
  
  return null;
}

// Middleware redirect handler
export function createRedirectMiddleware() {
  return (context: any, next: () => Promise<Response>) => {
    const redirectResult = checkRedirect({
      pathname: context.url.pathname,
      userAgent: context.request.headers.get('user-agent') || undefined,
      referrer: context.request.headers.get('referer') || undefined,
      headers: Object.fromEntries(context.request.headers.entries())
    });
    
    if (redirectResult.shouldRedirect && redirectResult.destination) {
      console.log(`🔄 Middleware redirect: ${context.url.pathname} → ${redirectResult.destination} (${redirectResult.status})`);
      return new Response(null, {
        status: redirectResult.status,
        headers: {
          Location: redirectResult.destination
        }
      });
    }
    
    return next();
  };
}

// Client-side redirect utilities
export const clientRedirectUtils = {
  // Check if current page should redirect
  checkCurrentPage(): RedirectResult {
    if (typeof window === 'undefined') {
      return { shouldRedirect: false };
    }
    
    return checkRedirect({
      pathname: window.location.pathname,
      userAgent: navigator.userAgent,
      referrer: document.referrer
    });
  },
  
  // Apply client-side redirect
  applyClientRedirect(): boolean {
    const result = this.checkCurrentPage();
    
    if (result.shouldRedirect && result.destination) {
      console.log(`🔄 Client redirect: ${window.location.pathname} → ${result.destination}`);
      
      if (result.status === 301 || result.status === 308) {
        // Permanent redirect
        window.location.replace(result.destination);
      } else {
        // Temporary redirect
        window.location.href = result.destination;
      }
      
      return true;
    }
    
    return false;
  },
  
  // Track redirect for analytics
  trackRedirect(rule: RedirectRule, from: string, to: string): void {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // Google Analytics tracking
      (window as any).gtag('event', 'redirect', {
        event_category: 'navigation',
        event_label: rule.id,
        custom_parameter_1: from,
        custom_parameter_2: to,
        custom_parameter_3: rule.status.toString()
      });
    }
    
    // Local storage tracking for development
    if (typeof localStorage !== 'undefined') {
      const redirectHistory = JSON.parse(localStorage.getItem('redirect_history') || '[]');
      redirectHistory.push({
        rule: rule.id,
        from,
        to,
        status: rule.status,
        timestamp: new Date().toISOString()
      });
      
      // Keep only last 50 redirects
      if (redirectHistory.length > 50) {
        redirectHistory.splice(0, redirectHistory.length - 50);
      }
      
      localStorage.setItem('redirect_history', JSON.stringify(redirectHistory));
    }
  }
};

// URL normalization utilities
export const urlUtils = {
  // Normalize URL for consistent matching
  normalize(url: string): string {
    return url
      .toLowerCase()
      .replace(/\/+/g, '/') // Multiple slashes to single
      .replace(/\/$/, '') // Remove trailing slash
      .trim();
  },
  
  // Check if URL is external
  isExternal(url: string): boolean {
    try {
      const parsed = new URL(url);
      return parsed.hostname !== 'kotacom.id' && 
             parsed.hostname !== 'www.kotacom.id' &&
             parsed.hostname !== 'localhost';
    } catch {
      return false;
    }
  },
  
  // Build absolute URL
  makeAbsolute(path: string, baseUrl = 'https://kotacom.id'): string {
    if (path.startsWith('http')) {
      return path;
    }
    
    return `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
  },
  
  // Extract parameters from URL pattern
  extractParams(pattern: string, url: string): Record<string, string> {
    const params: Record<string, string> = {};
    
    const patternParts = pattern.split('/');
    const urlParts = url.split('/');
    
    patternParts.forEach((part, index) => {
      if (part.startsWith(':')) {
        const paramName = part.slice(1);
        params[paramName] = urlParts[index] || '';
      }
    });
    
    return params;
  }
};

// Development and testing utilities
export const devUtils = {
  // Test all redirect rules
  testAllRules(testPaths: string[] = [
    '/',
    '/blog/sample-post',
    '/posts/sample-post',
    '/layanan/website',
    '/home',
    '/about-us',
    '/contact-us',
    '/portfolio',
    '/wa',
    '/service',
    '/product'
  ]): Array<{ path: string; result: RedirectResult }> {
    return testPaths.map(path => ({
      path,
      result: checkRedirect({ pathname: path })
    }));
  },
  
  // Get redirect performance stats
  getPerformanceStats(): any {
    const stats = redirectManager.getStats();
    const rules = redirectManager.getEnabledRules();
    
    return {
      ...stats,
      averageRuleComplexity: rules.reduce((acc, rule) => {
        let complexity = 1;
        if (rule.type === 'regex') complexity = 3;
        else if (rule.type === 'pattern') complexity = 2;
        else if (rule.type === 'wildcard') complexity = 1.5;
        return acc + complexity;
      }, 0) / rules.length,
      hasConditionalRules: rules.some(r => r.conditions),
      externalRedirects: rules.filter(r => urlUtils.isExternal(r.to)).length
    };
  },
  
  // Validate all rules
  validateAllRules(): Array<{ rule: RedirectRule; validation: { valid: boolean; errors: string[] } }> {
    return redirectManager.getEnabledRules().map(rule => ({
      rule,
      validation: redirectManager.validateRule(rule)
    }));
  }
};

// Export main utilities
export {
  redirectManager
} from '../data/redirects-config.js';