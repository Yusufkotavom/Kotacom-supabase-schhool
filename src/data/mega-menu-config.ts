import type { MegaMenuSection } from '../components/UnifiedMegaMenu.astro';

// Icons as inline SVG strings for better performance - Supabase-style
const ICONS = {
  // Main category icons (larger, more prominent)
  services: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
  code: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>',
  globe: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c1.657 0-3-4.03 3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>',
  portfolio: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>',
  shopping: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"></path></svg>',
  article: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
  support: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 019.75 9.75c0 5.384-4.365 9.75-9.75 9.75S2.25 17.634 2.25 12 6.615 2.25 12 2.25z"></path></svg>',
  document: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
  tools: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',
  mobile: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>',
  desktop: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',
  
  // Item icons (smaller, more subtle)
  itemCode: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>',
  itemGlobe: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c1.657 0-3-4.03 3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>',
  itemMobile: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>',
  itemShopping: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"></path></svg>',
  itemTools: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',
  itemDocument: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
  itemPortfolio: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>',
  itemSupport: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 019.75 9.75c0 5.384-4.365 9.75-9.75 9.75S2.25 17.634 2.25 12 6.615 2.25 12 2.25z"></path></svg>'
};

// Mega menu configurations
export const MEGA_MENU_CONFIG = {
  layanan: {
    trigger: 'Layanan',
    sections: [
      {
        title: 'Pengembangan Digital',
        icon: ICONS.code,
        items: [
          {
            title: 'Website Development',
            url: '/services/website-software-development',
            description: 'Pembuatan website profesional dan responsif untuk bisnis Anda',
            icon: ICONS.itemGlobe
          },
          {
            title: 'Software Development',
            url: '/services/software-development',
            description: 'Pengembangan aplikasi custom sesuai kebutuhan bisnis',
            icon: ICONS.itemCode
          },
          {
            title: 'Mobile App Development',
            url: '/services/mobile-app-development',
            description: 'Aplikasi mobile Android dan iOS yang user-friendly',
            icon: ICONS.itemMobile
          },
          {
            title: 'E-commerce Solutions',
            url: '/services/ecommerce-development',
            description: 'Platform toko online lengkap dengan sistem pembayaran',
            icon: ICONS.itemShopping
          }
        ]
      },
      {
        title: 'IT Support & Services',
        icon: ICONS.support,
        items: [
          {
            title: 'IT Support',
            url: '/services/it-support',
            description: 'Dukungan teknis dan maintenance sistem IT perusahaan',
            icon: ICONS.itemTools
          },
          {
            title: 'Network Setup',
            url: '/services/network-setup',
            description: 'Instalasi dan konfigurasi jaringan komputer',
            icon: ICONS.itemGlobe
          },
          {
            title: 'System Administration',
            url: '/services/system-admin',
            description: 'Pengelolaan server dan infrastruktur IT',
            icon: ICONS.itemTools
          },
          {
            title: 'Digital Consultation',
            url: '/services/consultation',
            description: 'Konsultasi strategi digital untuk transformasi bisnis',
            icon: ICONS.itemSupport,
            badge: 'Populer'
          }
        ]
      },
      {
        title: 'Printing & Design',
        icon: ICONS.document,
        items: [
          {
            title: 'Printing Services',
            url: '/services/printing-services',
            description: 'Layanan cetak profesional untuk kebutuhan bisnis',
            icon: ICONS.itemDocument
          },
          {
            title: 'Graphic Design',
            url: '/services/graphic-design',
            description: 'Desain logo, brosur, dan materi marketing',
            icon: ICONS.itemTools
          },
          {
            title: 'Branding Package',
            url: '/services/branding',
            description: 'Paket lengkap identitas visual perusahaan',
            icon: ICONS.itemPortfolio
          }
        ]
      }
    ] as MegaMenuSection[]
  },
  
  portfolio: {
    trigger: 'Portfolio',
    sections: [
      {
        title: 'Proyek Terbaru',
        icon: ICONS.portfolio,
        items: [
          {
            title: 'Semua Portfolio',
            url: '/projects',
            description: 'Lihat semua proyek yang telah kami kerjakan',
            icon: ICONS.itemPortfolio
          },
          {
            title: 'Website Development',
            url: '/projects/category/website',
            description: 'Proyek pengembangan website dan aplikasi web',
            icon: ICONS.itemGlobe
          },
          {
            title: 'Mobile Applications',
            url: '/projects/category/mobile',
            description: 'Aplikasi mobile yang telah kami develop',
            icon: ICONS.itemMobile
          },
          {
            title: 'System Integration',
            url: '/projects/category/system',
            description: 'Proyek integrasi sistem dan automation',
            icon: ICONS.itemTools
          }
        ]
      },
      {
        title: 'Case Studies',
        icon: ICONS.document,
        items: [
          {
            title: 'Restaurant Management System',
            url: '/projects/restaurant-management-system',
            description: 'Sistem manajemen restoran terintegrasi dengan POS',
            icon: ICONS.itemTools
          },
          {
            title: 'E-learning Platform',
            url: '/projects/elearning-platform',
            description: 'Platform pembelajaran online untuk institusi pendidikan',
            icon: ICONS.itemDocument
          },
          {
            title: 'Inventory Management',
            url: '/projects/inventory-system',
            description: 'Sistem manajemen inventori untuk UMKM',
            icon: ICONS.itemTools,
            badge: 'Terbaru'
          }
        ]
      }
    ] as MegaMenuSection[]
  },
  
  produk: {
    trigger: 'Produk',
    sections: [
      {
        title: 'Digital Products',
        icon: ICONS.shopping,
        items: [
          {
            title: 'Semua Produk',
            url: '/products',
            description: 'Lihat semua produk digital yang tersedia',
            icon: ICONS.itemShopping
          },
          {
            title: 'Software Tools',
            url: '/products/category/software',
            description: 'Tools dan software untuk produktivitas',
            icon: ICONS.itemTools
          },
          {
            title: 'Templates',
            url: '/products/category/templates',
            description: 'Template website dan aplikasi siap pakai',
            icon: ICONS.itemDocument
          },
          {
            title: 'Digital Assets',
            url: '/products/category/assets',
            description: 'Aset digital untuk kebutuhan desain',
            icon: ICONS.itemPortfolio
          }
        ]
      },
      {
        title: 'Featured Products',
        icon: ICONS.services,
        items: [
          {
            title: 'POS System Template',
            url: '/products/pos-system-template',
            description: 'Template sistem Point of Sale untuk UMKM',
            icon: ICONS.itemTools,
            badge: 'Terlaris'
          },
          {
            title: 'Website Template Pack',
            url: '/products/website-templates',
            description: 'Kumpulan template website profesional',
            icon: ICONS.itemGlobe
          },
          {
            title: 'Mobile UI Kit',
            url: '/products/mobile-ui-kit',
            description: 'UI Kit lengkap untuk pengembangan mobile app',
            icon: ICONS.itemMobile
          }
        ]
      }
    ] as MegaMenuSection[]
  }
};

// Simple navigation items (without mega menu)
export const SIMPLE_NAV_ITEMS = [
  { title: 'Shop', url: '/shop' },
  { title: 'Artikel', url: '/posts' },
  { title: 'Tentang', url: '/about' },
  { title: 'Kontak', url: '/contact' }
];

// Mobile menu configuration
export const MOBILE_MENU_CONFIG = {
  // Main navigation items that show as simple links on mobile
  mainItems: [
    { title: 'Layanan', url: '/services', icon: ICONS.code },
    { title: 'Portfolio', url: '/projects', icon: ICONS.portfolio },
    { title: 'Produk', url: '/products', icon: ICONS.shopping }
  ],
  
  // Secondary navigation items
  secondaryItems: SIMPLE_NAV_ITEMS,
  
  // Mobile menu footer (optional)
  footer: {
    title: 'Butuh Bantuan?',
    description: 'Tim kami siap membantu Anda',
    cta: {
      text: 'Konsultasi Gratis',
      url: '/contact',
      icon: ICONS.itemSupport
    }
  }
};

// Complete navigation structure
export const NAVIGATION_CONFIG = {
  desktop: {
    megaMenu: MEGA_MENU_CONFIG,
    simpleItems: SIMPLE_NAV_ITEMS
  },
  mobile: MOBILE_MENU_CONFIG
};
