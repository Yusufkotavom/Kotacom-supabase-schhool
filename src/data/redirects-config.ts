// Redirect Management System - Kotacom.id
// Comprehensive redirect configuration and utilities

export interface RedirectRule {
  id: string;
  from: string;
  to: string;
  status: 301 | 302 | 307 | 308;
  type: 'exact' | 'wildcard' | 'regex' | 'pattern';
  enabled: boolean;
  description?: string;
  category?: string;
  createdAt?: string;
  updatedAt?: string;
  conditions?: {
    userAgent?: string[];
    referrer?: string[];
    query?: Record<string, string>;
    headers?: Record<string, string>;
  };
}

export interface RedirectCategory {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

// Redirect Categories
export const REDIRECT_CATEGORIES: RedirectCategory[] = [
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
export const REDIRECT_RULES: RedirectRule[] = [
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
  {
    id: 'legacy-layanan-to-services',
    from: '/layanan/*',
    to: '/services/:splat',
    status: 301,
    type: 'wildcard',
    enabled: true,
    category: 'legacy-urls',
    description: 'Redirect Indonesian layanan URLs to English services',
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
    id: 'trailing-slash-normalization',
    from: '/*/',
    to: '/:splat',
    status: 301,
    type: 'wildcard',
    enabled: true,
    category: 'seo-optimization',
    description: 'Remove trailing slashes for consistency',
    createdAt: '2025-01-22'
  },
  {
    id: 'uppercase-to-lowercase',
    from: '/[A-Z]*',
    to: '/:splat',
    status: 301,
    type: 'regex',
    enabled: true,
    category: 'seo-optimization',
    description: 'Redirect uppercase URLs to lowercase',
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
  },

  // Maintenance Redirects (can be enabled/disabled as needed)
  {
    id: 'maintenance-admin',
    from: '/admin',
    to: '/contact',
    status: 302,
    type: 'exact',
    enabled: false,
    category: 'maintenance',
    description: 'Redirect admin access to contact during maintenance',
    createdAt: '2025-01-22'
  },
  {
    id: 'maintenance-dashboard',
    from: '/dashboard',
    to: '/contact',
    status: 302,
    type: 'exact',
    enabled: false,
    category: 'maintenance',
    description: 'Redirect dashboard access to contact during maintenance',
    createdAt: '2025-01-22'
  },

  // File Extension Redirects
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
  {
    id: 'remove-php-extension',
    from: '*.php',
    to: '/:splat',
    status: 301,
    type: 'wildcard',
    enabled: true,
    category: 'seo-optimization',
    description: 'Remove .php extensions from old URLs',
    createdAt: '2025-01-22'
  },

  // Common Typos and Variations
  {
    id: 'typo-kotacom',
    from: '/kotakom.id',
    to: '/',
    status: 301,
    type: 'exact',
    enabled: true,
    category: 'user-experience',
    description: 'Fix common typo in domain name',
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
  }
];

// Utility Functions for Redirect Management
export class RedirectManager {
  private rules: RedirectRule[];
  private categories: RedirectCategory[];

  constructor(rules = REDIRECT_RULES, categories = REDIRECT_CATEGORIES) {
    this.rules = rules;
    this.categories = categories;
  }

  // Get all enabled redirects
  getEnabledRules(): RedirectRule[] {
    return this.rules.filter(rule => 
      rule.enabled && 
      this.categories.find(cat => cat.id === rule.category)?.enabled !== false
    );
  }

  // Get rules by category
  getRulesByCategory(categoryId: string): RedirectRule[] {
    return this.rules.filter(rule => rule.category === categoryId);
  }

  // Get rules by type
  getRulesByType(type: RedirectRule['type']): RedirectRule[] {
    return this.rules.filter(rule => rule.type === type);
  }

  // Find matching redirect for a given path
  findRedirect(path: string, userAgent?: string, referrer?: string): RedirectRule | null {
    const enabledRules = this.getEnabledRules();
    
    for (const rule of enabledRules) {
      if (this.matchesRule(path, rule, userAgent, referrer)) {
        return rule;
      }
    }
    
    return null;
  }

  // Check if path matches a redirect rule
  private matchesRule(path: string, rule: RedirectRule, userAgent?: string, referrer?: string): boolean {
    // Check conditions first
    if (rule.conditions) {
      if (rule.conditions.userAgent && userAgent) {
        const matchesUA = rule.conditions.userAgent.some(ua => 
          userAgent.toLowerCase().includes(ua.toLowerCase())
        );
        if (!matchesUA) return false;
      }
      
      if (rule.conditions.referrer && referrer) {
        const matchesRef = rule.conditions.referrer.some(ref => 
          referrer.toLowerCase().includes(ref.toLowerCase())
        );
        if (!matchesRef) return false;
      }
    }

    switch (rule.type) {
      case 'exact':
        return path === rule.from;
      
      case 'wildcard':
        const wildcardPattern = rule.from
          .replace(/\*/g, '(.*)')
          .replace(/\//g, '\\/');
        const wildcardRegex = new RegExp(`^${wildcardPattern}$`);
        return wildcardRegex.test(path);
      
      case 'pattern':
        const patternStr = rule.from
          .replace(/:(\w+)/g, '([^/]+)')
          .replace(/\//g, '\\/');
        const patternRegex = new RegExp(`^${patternStr}$`);
        return patternRegex.test(path);
      
      case 'regex':
        try {
          const regex = new RegExp(rule.from);
          return regex.test(path);
        } catch {
          return false;
        }
      
      default:
        return false;
    }
  }

  // Process redirect destination with parameter substitution
  processDestination(path: string, rule: RedirectRule): string {
    let destination = rule.to;

    switch (rule.type) {
      case 'wildcard':
        const wildcardPattern = rule.from.replace(/\*/g, '(.*)');
        const wildcardRegex = new RegExp(`^${wildcardPattern.replace(/\//g, '\\/')}$`);
        const wildcardMatch = path.match(wildcardRegex);
        if (wildcardMatch) {
          destination = destination.replace(/:splat/g, wildcardMatch[1] || '');
        }
        break;
      
      case 'pattern':
        const patternStr = rule.from.replace(/:(\w+)/g, '([^/]+)');
        const patternRegex = new RegExp(`^${patternStr.replace(/\//g, '\\/')}$`);
        const patternMatch = path.match(patternRegex);
        if (patternMatch) {
          const paramNames = (rule.from.match(/:(\w+)/g) || []).map(p => p.slice(1));
          paramNames.forEach((param, index) => {
            destination = destination.replace(`:${param}`, patternMatch[index + 1] || '');
          });
        }
        break;
      
      case 'regex':
        try {
          const regex = new RegExp(rule.from);
          const regexMatch = path.match(regex);
          if (regexMatch) {
            regexMatch.forEach((match, index) => {
              destination = destination.replace(`$${index}`, match || '');
            });
          }
        } catch {
          // Invalid regex, return as-is
        }
        break;
    }

    return destination;
  }

  // Add new redirect rule
  addRule(rule: Omit<RedirectRule, 'id' | 'createdAt'>): RedirectRule {
    const newRule: RedirectRule = {
      ...rule,
      id: `redirect-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString()
    };
    
    this.rules.push(newRule);
    return newRule;
  }

  // Update existing rule
  updateRule(id: string, updates: Partial<RedirectRule>): RedirectRule | null {
    const ruleIndex = this.rules.findIndex(r => r.id === id);
    if (ruleIndex === -1) return null;
    
    this.rules[ruleIndex] = {
      ...this.rules[ruleIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    return this.rules[ruleIndex];
  }

  // Remove redirect rule
  removeRule(id: string): boolean {
    const ruleIndex = this.rules.findIndex(r => r.id === id);
    if (ruleIndex === -1) return false;
    
    this.rules.splice(ruleIndex, 1);
    return true;
  }

  // Enable/disable rule
  toggleRule(id: string, enabled?: boolean): RedirectRule | null {
    const rule = this.rules.find(r => r.id === id);
    if (!rule) return null;
    
    rule.enabled = enabled !== undefined ? enabled : !rule.enabled;
    rule.updatedAt = new Date().toISOString();
    
    return rule;
  }

  // Get redirect statistics
  getStats() {
    const total = this.rules.length;
    const enabled = this.rules.filter(r => r.enabled).length;
    const byCategory = this.categories.map(cat => ({
      category: cat.name,
      count: this.rules.filter(r => r.category === cat.id).length,
      enabled: this.rules.filter(r => r.category === cat.id && r.enabled).length
    }));
    const byType = ['exact', 'wildcard', 'pattern', 'regex'].map(type => ({
      type,
      count: this.rules.filter(r => r.type === type).length
    }));

    return {
      total,
      enabled,
      disabled: total - enabled,
      byCategory,
      byType
    };
  }

  // Export rules for external systems (Netlify, Vercel, etc.)
  exportNetlifyFormat(): string {
    const enabledRules = this.getEnabledRules();
    
    return enabledRules.map(rule => {
      let line = `${rule.from} ${rule.to} ${rule.status}`;
      
      // Add conditions if any
      if (rule.conditions) {
        const conditions = [];
        
        if (rule.conditions.userAgent) {
          conditions.push(`User-Agent=${rule.conditions.userAgent.join(',')}`);
        }
        
        if (rule.conditions.referrer) {
          conditions.push(`Referrer=${rule.conditions.referrer.join(',')}`);
        }
        
        if (conditions.length > 0) {
          line += ` ${conditions.join(' ')}`;
        }
      }
      
      return line;
    }).join('\n');
  }

  // Export rules for Apache .htaccess
  exportApacheFormat(): string {
    const enabledRules = this.getEnabledRules();
    
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

  // Export rules for Nginx
  exportNginxFormat(): string {
    const enabledRules = this.getEnabledRules();
    
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

  // Validate redirect rule
  validateRule(rule: Partial<RedirectRule>): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!rule.from) {
      errors.push('From path is required');
    }

    if (!rule.to) {
      errors.push('To path is required');
    }

    if (rule.status && ![301, 302, 307, 308].includes(rule.status)) {
      errors.push('Status must be 301, 302, 307, or 308');
    }

    if (rule.type && !['exact', 'wildcard', 'pattern', 'regex'].includes(rule.type)) {
      errors.push('Type must be exact, wildcard, pattern, or regex');
    }

    if (rule.from === rule.to) {
      errors.push('From and To paths cannot be the same');
    }

    // Test regex validity
    if (rule.type === 'regex' && rule.from) {
      try {
        new RegExp(rule.from);
      } catch {
        errors.push('Invalid regex pattern');
      }
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  // Test redirect rule
  testRule(rule: RedirectRule, testPath: string): { matches: boolean; destination?: string } {
    const matches = this.matchesRule(testPath, rule);
    
    if (matches) {
      const destination = this.processDestination(testPath, rule);
      return { matches: true, destination };
    }
    
    return { matches: false };
  }
}

// Create default redirect manager instance
export const redirectManager = new RedirectManager();

// Export utility functions
export const getEnabledRedirects = () => redirectManager.getEnabledRules();
export const findRedirectForPath = (path: string) => redirectManager.findRedirect(path);
export const getRedirectStats = () => redirectManager.getStats();

// Export formats for different servers
export const generateNetlifyRedirects = () => redirectManager.exportNetlifyFormat();
export const generateApacheRedirects = () => redirectManager.exportApacheFormat();
export const generateNginxRedirects = () => redirectManager.exportNginxFormat();