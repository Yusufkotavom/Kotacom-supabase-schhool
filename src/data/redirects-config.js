// Redirect Management System - JavaScript Version for Build Scripts
// This is a JavaScript version of redirects-config.ts for build-time usage

// Redirect Categories
export const REDIRECT_CATEGORIES = [
  {
    id: 'legacy-urls',
    name: 'Legacy URLs',
    description: 'Redirects from old URL structure to new structure',
    enabled: true
  },
  {
    id: 'seo-optimization',
    name: 'SEO Optimization',
    description: 'SEO-focused redirects for better search rankings',
    enabled: true
  },
  {
    id: 'user-experience',
    name: 'User Experience',
    description: 'UX improvements and user-friendly redirects',
    enabled: true
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    description: 'Temporary redirects for maintenance or testing',
    enabled: true
  },
  {
    id: 'external',
    name: 'External Redirects',
    description: 'Redirects to external services or partners',
    enabled: true
  }
];

// Main Redirect Rules Configuration
export const REDIRECT_RULES = [
  // Legacy URL Structure Redirects
  {
    id: 'legacy-blog-posts',
    from: '/blog/*',
    to: '/:splat',
    status: 301,
    type: 'wildcard',
    enabled: true,
    category: 'legacy-urls',
    description: 'Redirect old blog URLs to root level posts',
    createdAt: '2025-01-22'
  },
  {
    id: 'legacy-posts-directory',
    from: '/posts/:slug',
    to: '/:slug',
    status: 301,
    type: 'pattern',
    enabled: true,
    category: 'legacy-urls',
    description: 'Redirect /posts/slug to root level /slug',
    createdAt: '2025-01-22'
  },

  // SEO Optimization Redirects
  {
    id: 'www-to-non-www',
    from: 'https://www.kotacom.id/*',
    to: 'https://kotacom.id/:splat',
    status: 301,
    type: 'wildcard',
    enabled: true,
    category: 'seo-optimization',
    description: 'Canonical URL - redirect www to non-www',
    createdAt: '2025-01-22'
  },
  {
    id: 'remove-html-extension',
    from: '*.html',
    to: '/:splat',
    status: 301,
    type: 'wildcard',
    enabled: true,
    category: 'seo-optimization',
    description: 'Remove .html extensions from URLs',
    createdAt: '2025-01-22'
  },

  // User Experience Redirects
  {
    id: 'home-alias',
    from: '/home',
    to: '/',
    status: 301,
    type: 'exact',
    enabled: true,
    category: 'user-experience',
    description: 'Redirect /home to homepage',
    createdAt: '2025-01-22'
  },
  {
    id: 'about-us-alias',
    from: '/about-us',
    to: '/about',
    status: 301,
    type: 'exact',
    enabled: true,
    category: 'user-experience',
    description: 'Redirect /about-us to /about',
    createdAt: '2025-01-22'
  },
  {
    id: 'contact-us-alias',
    from: '/contact-us',
    to: '/contact',
    status: 301,
    type: 'exact',
    enabled: true,
    category: 'user-experience',
    description: 'Redirect /contact-us to /contact',
    createdAt: '2025-01-22'
  },
  {
    id: 'portfolio-to-projects',
    from: '/portfolio',
    to: '/projects',
    status: 301,
    type: 'exact',
    enabled: true,
    category: 'user-experience',
    description: 'Redirect portfolio to projects',
    createdAt: '2025-01-22'
  },
  {
    id: 'portfolio-wildcard',
    from: '/portfolio/*',
    to: '/projects/:splat',
    status: 301,
    type: 'wildcard',
    enabled: true,
    category: 'user-experience',
    description: 'Redirect portfolio sub-pages to projects',
    createdAt: '2025-01-22'
  },
  {
    id: 'typo-services',
    from: '/service',
    to: '/services',
    status: 301,
    type: 'exact',
    enabled: true,
    category: 'user-experience',
    description: 'Redirect singular to plural form',
    createdAt: '2025-01-22'
  },
  {
    id: 'typo-products',
    from: '/product',
    to: '/products',
    status: 301,
    type: 'exact',
    enabled: true,
    category: 'user-experience',
    description: 'Redirect singular to plural form',
    createdAt: '2025-01-22'
  },
  {
    id: 'typo-projects',
    from: '/project',
    to: '/projects',
    status: 301,
    type: 'exact',
    enabled: true,
    category: 'user-experience',
    description: 'Redirect singular to plural form',
    createdAt: '2025-01-22'
  },

  // External Service Redirects
  {
    id: 'whatsapp-contact',
    from: '/wa',
    to: 'https://wa.me/6285799520350?text=Halo%20kotacom.id%2C%20saya%20tertarik%20dengan%20layanan%20Anda',
    status: 302,
    type: 'exact',
    enabled: true,
    category: 'external',
    description: 'Quick WhatsApp contact link',
    createdAt: '2025-01-22'
  },
  {
    id: 'whatsapp-service-inquiry',
    from: '/wa/service',
    to: 'https://wa.me/6285799520350?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20IT%20kotacom.id',
    status: 302,
    type: 'exact',
    enabled: true,
    category: 'external',
    description: 'WhatsApp service inquiry',
    createdAt: '2025-01-22'
  },
  {
    id: 'whatsapp-website-inquiry',
    from: '/wa/website',
    to: 'https://wa.me/6285799520350?text=Halo%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20kotacom.id',
    status: 302,
    type: 'exact',
    enabled: true,
    category: 'external',
    description: 'WhatsApp website inquiry',
    createdAt: '2025-01-22'
  }
];

// Simple functions for build script usage
export function getEnabledRedirects() {
  return REDIRECT_RULES.filter(rule => 
    rule.enabled && 
    REDIRECT_CATEGORIES.find(cat => cat.id === rule.category)?.enabled !== false
  );
}

export function generateNetlifyRedirects() {
  const enabledRules = getEnabledRedirects();
  
  return enabledRules.map(rule => {
    return `${rule.from} ${rule.to} ${rule.status}`;
  }).join('\n');
}

export function generateApacheRedirects() {
  const enabledRules = getEnabledRedirects();
  
  let output = '# Generated redirects from kotacom.id redirect management\n';
  output += 'RewriteEngine On\n\n';
  
  enabledRules.forEach(rule => {
    output += `# ${rule.description || rule.id}\n`;
    
    switch (rule.type) {
      case 'exact':
        output += `RewriteRule ^${rule.from.replace(/^\//, '')}$ ${rule.to} [R=${rule.status},L]\n`;
        break;
      case 'wildcard':
        const pattern = rule.from.replace(/\*/g, '(.*)').replace(/^\//, '');
        const destination = rule.to.replace(/:splat/g, '$1');
        output += `RewriteRule ^${pattern}$ ${destination} [R=${rule.status},L]\n`;
        break;
      case 'pattern':
        const paramPattern = rule.from.replace(/:(\w+)/g, '([^/]+)').replace(/^\//, '');
        let paramDestination = rule.to;
        const paramNames = (rule.from.match(/:(\w+)/g) || []).map(p => p.slice(1));
        paramNames.forEach((param, index) => {
          paramDestination = paramDestination.replace(`:${param}`, `$${index + 1}`);
        });
        output += `RewriteRule ^${paramPattern}$ ${paramDestination} [R=${rule.status},L]\n`;
        break;
      case 'regex':
        output += `RewriteRule ${rule.from} ${rule.to} [R=${rule.status},L]\n`;
        break;
    }
    
    output += '\n';
  });
  
  return output;
}

export function generateNginxRedirects() {
  const enabledRules = getEnabledRedirects();
  
  let output = '# Generated redirects from kotacom.id redirect management\n\n';
  
  enabledRules.forEach(rule => {
    output += `# ${rule.description || rule.id}\n`;
    
    switch (rule.type) {
      case 'exact':
        output += `location = ${rule.from} { return ${rule.status} ${rule.to}; }\n`;
        break;
      case 'wildcard':
        const nginxPattern = rule.from.replace(/\*/g, '(.*)');
        const nginxDestination = rule.to.replace(/:splat/g, '$1');
        output += `location ~ ^${nginxPattern}$ { return ${rule.status} ${nginxDestination}; }\n`;
        break;
      case 'pattern':
        const nginxParamPattern = rule.from.replace(/:(\w+)/g, '([^/]+)');
        let nginxParamDestination = rule.to;
        const paramNames = (rule.from.match(/:(\w+)/g) || []).map(p => p.slice(1));
        paramNames.forEach((param, index) => {
          nginxParamDestination = nginxParamDestination.replace(`:${param}`, `$${index + 1}`);
        });
        output += `location ~ ^${nginxParamPattern}$ { return ${rule.status} ${nginxParamDestination}; }\n`;
        break;
      case 'regex':
        output += `location ~ ${rule.from} { return ${rule.status} ${rule.to}; }\n`;
        break;
    }
    
    output += '\n';
  });
  
  return output;
}

export function getRedirectStats() {
  const total = REDIRECT_RULES.length;
  const enabled = REDIRECT_RULES.filter(r => r.enabled).length;
  const byCategory = REDIRECT_CATEGORIES.map(cat => ({
    category: cat.name,
    count: REDIRECT_RULES.filter(r => r.category === cat.id).length,
    enabled: REDIRECT_RULES.filter(r => r.category === cat.id && r.enabled).length
  }));
  const byType = ['exact', 'wildcard', 'pattern', 'regex'].map(type => ({
    type,
    count: REDIRECT_RULES.filter(r => r.type === type).length
  }));

  return {
    total,
    enabled,
    disabled: total - enabled,
    byCategory,
    byType
  };
}

// Simple redirect manager for JavaScript usage
export const redirectManager = {
  getEnabledRules: getEnabledRedirects,
  getStats: getRedirectStats,
  findRedirect: (path) => {
    const enabledRules = getEnabledRedirects();
    return enabledRules.find(rule => {
      if (rule.type === 'exact') {
        return path === rule.from;
      }
      // Add other matching logic as needed
      return false;
    }) || null;
  }
};