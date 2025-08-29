import { i as createVNode, C as Fragment, _ as __astro_tag_component__ } from './astro/server_CJHufnQ6.mjs';
import { $ as $$ProjectPage } from './ProjectPage_CBbnfzqy.mjs';
import 'clsx';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$ProjectPage, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../../layouts/ProjectPage.astro",
  "title": "Website Toko Online UMKM - Batik Nusantara",
  "category": ["Website Development", "E-commerce"],
  "slug": "website-toko-online-umkm",
  "imageUrl": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "published": "2024-11-15T00:00:00.000Z",
  "country": ["Indonesia"],
  "locale": ["Surabaya", "Jawa Timur"],
  "organiser": "kotacom.id",
  "cost": ["5000000", "7500000"],
  "url": "https://batik-nusantara-demo.kotacom.id",
  "verify": "Verified Project",
  "client": "Batik Nusantara",
  "clientIndustry": "Fashion & Textile",
  "projectDuration": "6 minggu",
  "teamSize": "3 orang",
  "technologies": ["WordPress", "WooCommerce", "Payment Gateway", "SEO Optimization"],
  "challenges": "Klien tidak memiliki sistem penjualan online, bergantung pada penjualan offline dan WhatsApp yang tidak terstruktur",
  "solutions": "Membangun website e-commerce lengkap dengan sistem pembayaran otomatis, manajemen inventory, dan dashboard analytics",
  "results": "Peningkatan penjualan 300% dalam 3 bulan pertama, otomatisasi proses order, dan jangkauan pasar nasional",
  "beforeMetrics": {
    "traffic": "0 visitor online",
    "conversions": "5-10 order/bulan via WhatsApp",
    "revenue": "Rp 15 juta/bulan",
    "performance": "Manual order processing"
  },
  "afterMetrics": {
    "traffic": "2,500+ visitor/bulan",
    "conversions": "45-60 order/bulan via website",
    "revenue": "Rp 45 juta/bulan",
    "performance": "Automated order & payment"
  },
  "roiPercentage": "300%",
  "clientTestimonial": "Website dari KOTACOM benar-benar mengubah bisnis kami. Sekarang order datang otomatis dari seluruh Indonesia, tidak perlu lagi repot balas chat WhatsApp satu-satu. Omset naik 3x lipat!",
  "clientName": "Ibu Sari Dewi",
  "clientPosition": "Owner Batik Nusantara",
  "beforeImage": "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "afterImage": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "additionalImages": ["https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "project-overview",
    "text": "Project Overview"
  }, {
    "depth": 3,
    "slug": "the-challenge",
    "text": "The Challenge"
  }, {
    "depth": 3,
    "slug": "our-solution",
    "text": "Our Solution"
  }, {
    "depth": 4,
    "slug": "-website-e-commerce-modern",
    "text": "🌐 Website E-commerce Modern"
  }, {
    "depth": 4,
    "slug": "-payment-gateway-integration",
    "text": "💳 Payment Gateway Integration"
  }, {
    "depth": 4,
    "slug": "-admin-dashboard",
    "text": "📊 Admin Dashboard"
  }, {
    "depth": 4,
    "slug": "-digital-marketing-setup",
    "text": "🚀 Digital Marketing Setup"
  }, {
    "depth": 2,
    "slug": "implementation-process",
    "text": "Implementation Process"
  }, {
    "depth": 3,
    "slug": "week-1-2-planning--design",
    "text": "Week 1-2: Planning & Design"
  }, {
    "depth": 3,
    "slug": "week-3-4-development",
    "text": "Week 3-4: Development"
  }, {
    "depth": 3,
    "slug": "week-5-6-testing--launch",
    "text": "Week 5-6: Testing & Launch"
  }, {
    "depth": 2,
    "slug": "results--impact",
    "text": "Results & Impact"
  }, {
    "depth": 3,
    "slug": "-dramatic-business-growth",
    "text": "📈 Dramatic Business Growth"
  }, {
    "depth": 3,
    "slug": "-operational-efficiency",
    "text": "🎯 Operational Efficiency"
  }, {
    "depth": 3,
    "slug": "-customer-experience",
    "text": "🌟 Customer Experience"
  }, {
    "depth": 2,
    "slug": "client-testimonial",
    "text": "Client Testimonial"
  }, {
    "depth": 2,
    "slug": "technical-specifications",
    "text": "Technical Specifications"
  }, {
    "depth": 3,
    "slug": "platform--technologies",
    "text": "Platform & Technologies"
  }, {
    "depth": 3,
    "slug": "features-delivered",
    "text": "Features Delivered"
  }, {
    "depth": 2,
    "slug": "long-term-impact",
    "text": "Long-term Impact"
  }, {
    "depth": 2,
    "slug": "why-this-project-succeeded",
    "text": "Why This Project Succeeded"
  }, {
    "depth": 3,
    "slug": "-strategic-approach",
    "text": "🎯 Strategic Approach"
  }, {
    "depth": 3,
    "slug": "-technical-excellence",
    "text": "💡 Technical Excellence"
  }, {
    "depth": 3,
    "slug": "-partnership-mindset",
    "text": "🤝 Partnership Mindset"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "project-overview",
      children: "Project Overview"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Batik Nusantara"
      }), " adalah UMKM fashion yang telah berdiri selama 8 tahun di Surabaya, fokus pada produksi dan penjualan batik berkualitas tinggi. Sebelum bekerja sama dengan kotacom.id, mereka hanya mengandalkan penjualan offline dan WhatsApp untuk menerima pesanan."]
    }), "\n", createVNode(_components.h3, {
      id: "the-challenge",
      children: "The Challenge"
    }), "\n", createVNode(_components.p, {
      children: "Pemilik usaha menghadapi beberapa tantangan utama:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Keterbatasan Jangkauan"
        }), ": Hanya bisa melayani customer lokal"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Proses Manual"
        }), ": Semua order melalui WhatsApp, sulit tracking dan management"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "No Online Presence"
        }), ": Tidak ada website atau toko online"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Payment Issues"
        }), ": Pembayaran manual via transfer, sering terjadi miscommunication"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Inventory Chaos"
        }), ": Tidak ada sistem untuk track stok produk"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "our-solution",
      children: "Our Solution"
    }), "\n", createVNode(_components.p, {
      children: ["Tim kotacom.id mengembangkan ", createVNode(_components.strong, {
        children: "solusi e-commerce komprehensif"
      }), " yang mencakup:"]
    }), "\n", createVNode(_components.h4, {
      id: "-website-e-commerce-modern",
      children: ["🌐 ", createVNode(_components.strong, {
        children: "Website E-commerce Modern"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Design responsive untuk desktop & mobile"
      }), "\n", createVNode(_components.li, {
        children: "Katalog produk dengan high-quality images"
      }), "\n", createVNode(_components.li, {
        children: "Shopping cart & wishlist functionality"
      }), "\n", createVNode(_components.li, {
        children: "User registration & customer dashboard"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-payment-gateway-integration",
      children: ["💳 ", createVNode(_components.strong, {
        children: "Payment Gateway Integration"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Multiple payment options (Bank Transfer, E-wallet, Credit Card)"
      }), "\n", createVNode(_components.li, {
        children: "Automatic payment confirmation"
      }), "\n", createVNode(_components.li, {
        children: "Invoice generation & email notifications"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-admin-dashboard",
      children: ["📊 ", createVNode(_components.strong, {
        children: "Admin Dashboard"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Real-time sales analytics"
      }), "\n", createVNode(_components.li, {
        children: "Inventory management system"
      }), "\n", createVNode(_components.li, {
        children: "Order tracking & fulfillment"
      }), "\n", createVNode(_components.li, {
        children: "Customer database management"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-digital-marketing-setup",
      children: ["🚀 ", createVNode(_components.strong, {
        children: "Digital Marketing Setup"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "SEO optimization untuk Google ranking"
      }), "\n", createVNode(_components.li, {
        children: "Google My Business setup"
      }), "\n", createVNode(_components.li, {
        children: "Social media integration"
      }), "\n", createVNode(_components.li, {
        children: "Email marketing automation"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "implementation-process",
      children: "Implementation Process"
    }), "\n", createVNode(_components.h3, {
      id: "week-1-2-planning--design",
      children: "Week 1-2: Planning & Design"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Business requirements analysis"
      }), "\n", createVNode(_components.li, {
        children: "UI/UX design & mockups"
      }), "\n", createVNode(_components.li, {
        children: "Content strategy & product photography"
      }), "\n", createVNode(_components.li, {
        children: "Technical architecture planning"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "week-3-4-development",
      children: "Week 3-4: Development"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "WordPress & WooCommerce setup"
      }), "\n", createVNode(_components.li, {
        children: "Custom theme development"
      }), "\n", createVNode(_components.li, {
        children: "Payment gateway integration"
      }), "\n", createVNode(_components.li, {
        children: "Admin dashboard customization"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "week-5-6-testing--launch",
      children: "Week 5-6: Testing & Launch"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Quality assurance testing"
      }), "\n", createVNode(_components.li, {
        children: "Performance optimization"
      }), "\n", createVNode(_components.li, {
        children: "SEO implementation"
      }), "\n", createVNode(_components.li, {
        children: "Go-live & staff training"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "results--impact",
      children: "Results & Impact"
    }), "\n", createVNode(_components.h3, {
      id: "-dramatic-business-growth",
      children: ["📈 ", createVNode(_components.strong, {
        children: "Dramatic Business Growth"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Metric"
          }), createVNode(_components.th, {
            children: "Before"
          }), createVNode(_components.th, {
            children: "After"
          }), createVNode(_components.th, {
            children: "Improvement"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Monthly Revenue"
            })
          }), createVNode(_components.td, {
            children: "Rp 15 juta"
          }), createVNode(_components.td, {
            children: "Rp 45 juta"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+200%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Orders per Month"
            })
          }), createVNode(_components.td, {
            children: "5-10 orders"
          }), createVNode(_components.td, {
            children: "45-60 orders"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+500%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Customer Base"
            })
          }), createVNode(_components.td, {
            children: "Local only"
          }), createVNode(_components.td, {
            children: "Nationwide"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Unlimited"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Processing Time"
            })
          }), createVNode(_components.td, {
            children: "2-3 days"
          }), createVNode(_components.td, {
            children: "Same day"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-70%"
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "-operational-efficiency",
      children: ["🎯 ", createVNode(_components.strong, {
        children: "Operational Efficiency"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Automated Order Processing"
        }), ": No more manual WhatsApp handling"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Real-time Inventory"
        }), ": Automatic stock updates prevent overselling"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Payment Automation"
        }), ": Instant payment confirmation & invoice"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Analytics Dashboard"
        }), ": Data-driven business decisions"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "-customer-experience",
      children: ["🌟 ", createVNode(_components.strong, {
        children: "Customer Experience"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "24/7 Availability"
        }), ": Customers can order anytime"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Professional Appearance"
        }), ": Enhanced brand credibility"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Easy Navigation"
        }), ": User-friendly shopping experience"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Multiple Payment Options"
        }), ": Convenient checkout process"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "client-testimonial",
      children: "Client Testimonial"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "“Website dari KOTACOM benar-benar mengubah bisnis kami. Sekarang order datang otomatis dari seluruh Indonesia, tidak perlu lagi repot balas chat WhatsApp satu-satu. Omset naik 3x lipat! Tim mereka sangat profesional dan support after-sales nya excellent.”"
        })
      }), "\n", createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "— Ibu Sari Dewi, Owner Batik Nusantara"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "technical-specifications",
      children: "Technical Specifications"
    }), "\n", createVNode(_components.h3, {
      id: "platform--technologies",
      children: createVNode(_components.strong, {
        children: "Platform & Technologies"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "CMS"
        }), ": WordPress 6.4+ with WooCommerce"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Hosting"
        }), ": Cloud hosting with SSD storage"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Security"
        }), ": SSL certificate, daily backups, malware protection"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Performance"
        }), ": CDN integration, image optimization, caching"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "features-delivered",
      children: createVNode(_components.strong, {
        children: "Features Delivered"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Responsive e-commerce website"
      }), "\n", createVNode(_components.li, {
        children: "✅ Product catalog with 200+ items"
      }), "\n", createVNode(_components.li, {
        children: "✅ Multi-payment gateway integration"
      }), "\n", createVNode(_components.li, {
        children: "✅ Automated inventory management"
      }), "\n", createVNode(_components.li, {
        children: "✅ Customer registration & login"
      }), "\n", createVNode(_components.li, {
        children: "✅ Order tracking system"
      }), "\n", createVNode(_components.li, {
        children: "✅ Admin dashboard & analytics"
      }), "\n", createVNode(_components.li, {
        children: "✅ SEO optimization"
      }), "\n", createVNode(_components.li, {
        children: "✅ Social media integration"
      }), "\n", createVNode(_components.li, {
        children: "✅ Email marketing setup"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "long-term-impact",
      children: "Long-term Impact"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "6 Months Later:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Website traffic: 5,000+ monthly visitors"
      }), "\n", createVNode(_components.li, {
        children: "Google ranking: Top 3 for “batik Surabaya”"
      }), "\n", createVNode(_components.li, {
        children: "Customer retention: 65% repeat customers"
      }), "\n", createVNode(_components.li, {
        children: "Geographic reach: 25+ cities across Indonesia"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "why-this-project-succeeded",
      children: "Why This Project Succeeded"
    }), "\n", createVNode(_components.h3, {
      id: "-strategic-approach",
      children: ["🎯 ", createVNode(_components.strong, {
        children: "Strategic Approach"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Deep understanding of UMKM challenges"
      }), "\n", createVNode(_components.li, {
        children: "Focus on ROI and business growth"
      }), "\n", createVNode(_components.li, {
        children: "User-centric design philosophy"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "-technical-excellence",
      children: ["💡 ", createVNode(_components.strong, {
        children: "Technical Excellence"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Modern, scalable technology stack"
      }), "\n", createVNode(_components.li, {
        children: "Performance-optimized implementation"
      }), "\n", createVNode(_components.li, {
        children: "Mobile-first responsive design"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "-partnership-mindset",
      children: ["🤝 ", createVNode(_components.strong, {
        children: "Partnership Mindset"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Comprehensive training & handover"
      }), "\n", createVNode(_components.li, {
        children: "Ongoing technical support"
      }), "\n", createVNode(_components.li, {
        children: "Growth-oriented consultation"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Ready to transform your UMKM like Batik Nusantara?"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://wa.me/6285799520350",
        rel: "nofollow noopener noreferrer",
        target: "_blank",
        children: createVNode(_components.strong, {
          children: "Konsultasi Gratis"
        })
      }), " - Diskusikan kebutuhan website e-commerce Anda dengan tim expert kami!"]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/projects/website-toko-online-umkm";
const file = "/workspace/src/pages/projects/website-toko-online-umkm.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspace/src/pages/projects/website-toko-online-umkm.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
