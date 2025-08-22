export type SeoType = 'website' | 'article' | 'product' | 'service' | 'project' | 'page';

export interface SeoDefaults {
  titleTemplate: string; // e.g. "%s - kotacom.id"
  siteName: string;
  siteDescription: string;
  defaultType: SeoType;
  defaultLocale: string; // e.g. id_ID
}

export interface SectionSeoConfig {
  // slug base path, e.g. '/products', '/services', '/projects', '/posts'
  basePath: string;
  type: SeoType;
  titlePrefix?: string; // e.g. 'Produk'
  robotsIndexPaginated?: boolean; // if false, add noindex on pages > 1
}

export const SEO_DEFAULTS: SeoDefaults = {
  titleTemplate: '%s - kotacom.id',
  siteName: 'kotacom.id',
  siteDescription: 'IT Service & Publications - Pengadaan, Service, Penjualan, Website Development, Software Development, Social Media Management',
  defaultType: 'website',
  defaultLocale: 'id_ID',
};

export const SEO_SECTIONS: Record<string, SectionSeoConfig> = {
  posts: { basePath: '/posts', type: 'article', titlePrefix: 'Semua Artikel', robotsIndexPaginated: false },
  products: { basePath: '/products', type: 'product', titlePrefix: 'Produk', robotsIndexPaginated: false },
  services: { basePath: '/services', type: 'service', titlePrefix: 'Layanan', robotsIndexPaginated: false },
  projects: { basePath: '/projects', type: 'project', titlePrefix: 'Project', robotsIndexPaginated: false },
};

export function formatTitle(rawTitle: string, template = SEO_DEFAULTS.titleTemplate): string {
  if (!rawTitle) return SEO_DEFAULTS.siteName;
  const site = SEO_DEFAULTS.siteName.toLowerCase();
  const hasSite = rawTitle.toLowerCase().includes(site);
  return hasSite ? rawTitle : template.replace('%s', rawTitle);
}

export function getSectionConfigByPath(pathname: string): SectionSeoConfig | undefined {
  const match = Object.values(SEO_SECTIONS).find((s) => pathname.startsWith(s.basePath));
  return match;
}