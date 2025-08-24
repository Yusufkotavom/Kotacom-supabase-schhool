import type { MegaMenuSection } from '../components/MegaMenu.astro';

// Icons as inline SVG strings for better performance
const ICONS = {
  services: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
  code: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>',
  globe: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03 3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>',
  portfolio: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>',
  shopping: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"></path></svg>',
  article: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
  support: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 019.75 9.75c0 5.384-4.365 9.75-9.75 9.75S2.25 17.634 2.25 12 6.615 2.25 12 2.25z"></path></svg>',
  document: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
  tools: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',
  mobile: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>',
  desktop: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>'
};

// Mega menu configurations
export const MEGA_MENU_CONFIG = {
  layanan: {
    trigger: 'Services',
    sections: [
      {
        title: 'Website',
        icon: ICONS.code,
        items: [
          {
            title: 'Website Development',
            url: '/jasa-pembuatan-website-surabaya',
            description: 'Pembuatan website profesional dan responsif untuk bisnis Anda',
            icon: ICONS.globe
          },
          {
            title: 'Software Development',
            url: '/jasa-pembuatan-software',
            description: 'Pengembangan aplikasi custom sesuai kebutuhan bisnis',
            icon: ICONS.code
          },
          {
            title: 'Mobile App Development',
            url: '/pembuatan-website/',
            description: 'Aplikasi mobile Android dan iOS yang user-friendly',
            icon: ICONS.mobile
          },
          {
            title: 'E-commerce Solutions',
            url: '/services/ecommerce-development',
            description: 'Platform toko online lengkap dengan sistem pembayaran',
            icon: ICONS.shopping
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
            icon: ICONS.tools
          },
          {
            title: 'Network Setup',
            url: '/services/network-setup',
            description: 'Instalasi dan konfigurasi jaringan komputer',
            icon: ICONS.globe
          },
          {
            title: 'System Administration',
            url: '/services/system-admin',
            description: 'Pengelolaan server dan infrastruktur IT',
            icon: ICONS.desktop
          },
          {
            title: 'Digital Consultation',
            url: '/services/consultation',
            description: 'Konsultasi strategi digital untuk transformasi bisnis',
            icon: ICONS.support,
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
            url: '/categories/percetakan',
            description: 'Layanan cetak profesional untuk kebutuhan bisnis',
            icon: ICONS.document
          },
          {
            title: 'Graphic Design',
            url: '/services/',
            description: 'Desain logo, brosur, dan materi marketing',
            icon: ICONS.tools
          },
          {
            title: 'Branding Package',
            url: '/services/',
            description: 'Paket lengkap identitas visual perusahaan',
            icon: ICONS.portfolio
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
            icon: ICONS.portfolio
          },
          {
            title: 'Website Development',
            url: '/projects/',
            description: 'Proyek pengembangan website dan aplikasi web',
            icon: ICONS.globe
          },
          {
            title: 'Mobile Applications',
            url: '/projects/',
            description: 'Aplikasi mobile yang telah kami develop',
            icon: ICONS.mobile
          },
          {
            title: 'System Integration',
            url: '/projects/',
            description: 'Proyek integrasi sistem dan automation',
            icon: ICONS.tools
          }
        ]
      },
      {
        title: 'Case Studies',
        icon: ICONS.document,
        items: [
          {
            title: 'Restaurant Management System',
            url: '/projects/',
            description: 'Sistem manajemen restoran terintegrasi dengan POS',
            icon: ICONS.services
          },
          {
            title: 'E-learning Platform',
            url: '/projects/',
            description: 'Platform pembelajaran online untuk institusi pendidikan',
            icon: ICONS.document
          },
          {
            title: 'Inventory Management',
            url: '/projects/',
            description: 'Sistem manajemen inventori untuk UMKM',
            icon: ICONS.tools,
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
            icon: ICONS.shopping
          },
          {
            title: 'Software Tools',
            url: '/products/',
            description: 'Tools dan software untuk produktivitas',
            icon: ICONS.tools
          },
          {
            title: 'Templates',
            url: '/products/',
            description: 'Template website dan aplikasi siap pakai',
            icon: ICONS.document
          },
          {
            title: 'Digital Assets',
            url: '/products/',
            description: 'Aset digital untuk kebutuhan desain',
            icon: ICONS.portfolio
          }
        ]
      },
      {
        title: 'Featured Products',
        icon: ICONS.services,
        items: [
          {
            title: 'POS System Template',
            url: '/products/',
            description: 'Template sistem Point of Sale untuk UMKM',
            icon: ICONS.services,
            badge: 'Terlaris'
          },
          {
            title: 'Website Template Pack',
            url: '/products/',
            description: 'Kumpulan template website profesional',
            icon: ICONS.globe
          },
          {
            title: 'Mobile UI Kit',
            url: '/products/',
            description: 'UI Kit lengkap untuk pengembangan mobile app',
            icon: ICONS.mobile
          }
        ]
      }
    ] as MegaMenuSection[]
  }
};

// Simple navigation items (without mega menu)
export const SIMPLE_NAV_ITEMS = [
  { title: 'Posts', url: '/posts' },
  { title: 'About-Us', url: '/about' },
  { title: 'Contact-Us', url: '/contact' }
];

// Mobile menu configuration
export const MOBILE_MENU_CONFIG = {
  // Main navigation items that show as simple links on mobile
  mainItems: [
    { title: 'Services', url: '/services', icon: ICONS.services },
    { title: 'Portfolio', url: '/projects', icon: ICONS.portfolio },
    { title: 'Produk', url: '/products', icon: ICONS.shopping }
  ],
  
  // Secondary navigation items
  secondaryItems: SIMPLE_NAV_ITEMS,
  
  // Mobile menu footer (optional)
  footer: {
    title: 'Need Help?',
    description: 'Our team is ready to help you',
    cta: {
      text: 'Free Consultation',
      url: '/contact',
      icon: ICONS.support
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
