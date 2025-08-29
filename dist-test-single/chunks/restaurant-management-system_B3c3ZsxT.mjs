import { i as createVNode, C as Fragment, _ as __astro_tag_component__ } from './astro/server_CJHufnQ6.mjs';
import { $ as $$ProjectPage } from './ProjectPage_DofwOcs3.mjs';
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
  "title": "Sistem Manajemen Restoran - Warung Makan Sederhana",
  "category": ["Software Development", "Retail"],
  "slug": "restaurant-management-system",
  "imageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "published": "2024-08-20T00:00:00.000Z",
  "country": ["Indonesia"],
  "locale": ["Sidoarjo", "Jawa Timur"],
  "organiser": "kotacom.id",
  "cost": ["12000000", "18000000"],
  "url": "https://warung-sederhana-demo.kotacom.id",
  "verify": "Verified Project",
  "client": "Warung Makan Sederhana",
  "clientIndustry": "Food & Beverage",
  "projectDuration": "6 minggu",
  "teamSize": "3 orang",
  "technologies": ["Laravel", "MySQL", "Vue.js", "POS Integration", "Kitchen Display"],
  "challenges": "Restoran menggunakan sistem manual untuk order, inventory, dan pembayaran yang menyebabkan kesalahan pesanan, stok habis mendadak, dan antrian kasir panjang",
  "solutions": "Membangun sistem POS terintegrasi dengan kitchen display, inventory management, dan online ordering untuk efisiensi maksimal",
  "results": "Waktu order berkurang 70%, kesalahan pesanan turun 90%, omset naik 45% dengan online ordering dan delivery integration",
  "beforeMetrics": {
    "traffic": "Manual order: 15 menit per pesanan",
    "conversions": "120-150 customer/hari",
    "revenue": "Rp 85 juta/bulan",
    "performance": "25% kesalahan pesanan"
  },
  "afterMetrics": {
    "traffic": "Digital order: 4 menit per pesanan",
    "conversions": "200-250 customer/hari",
    "revenue": "Rp 123 juta/bulan",
    "performance": "2% kesalahan pesanan"
  },
  "roiPercentage": "165%",
  "clientTestimonial": "Sistem POS dari KOTACOM sangat membantu operasional warung kami. Dapur tidak bingung lagi dengan pesanan, kasir lebih cepat, dan yang paling penting omset naik karena bisa terima order online dari Gojek dan Grab.",
  "clientName": "Ibu Ratna Sari",
  "clientPosition": "Pemilik Warung Makan Sederhana",
  "beforeImage": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "afterImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "additionalImages": ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"]
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
    "slug": "-digital-pos-system",
    "text": "📱 Digital POS System"
  }, {
    "depth": 4,
    "slug": "-kitchen-display-system",
    "text": "🍳 Kitchen Display System"
  }, {
    "depth": 4,
    "slug": "-inventory-management",
    "text": "📦 Inventory Management"
  }, {
    "depth": 4,
    "slug": "-online-ordering-integration",
    "text": "🚚 Online Ordering Integration"
  }, {
    "depth": 4,
    "slug": "-analytics--reporting",
    "text": "📊 Analytics & Reporting"
  }, {
    "depth": 2,
    "slug": "implementation-process",
    "text": "Implementation Process"
  }, {
    "depth": 3,
    "slug": "week-1-system-analysis--setup",
    "text": "Week 1: System Analysis & Setup"
  }, {
    "depth": 3,
    "slug": "week-2-3-core-development",
    "text": "Week 2-3: Core Development"
  }, {
    "depth": 3,
    "slug": "week-4-5-advanced-features",
    "text": "Week 4-5: Advanced Features"
  }, {
    "depth": 3,
    "slug": "week-6-training--go-live",
    "text": "Week 6: Training & Go-Live"
  }, {
    "depth": 2,
    "slug": "results--impact",
    "text": "Results & Impact"
  }, {
    "depth": 3,
    "slug": "-operational-efficiency",
    "text": "📈 Operational Efficiency"
  }, {
    "depth": 3,
    "slug": "-financial-performance",
    "text": "💰 Financial Performance"
  }, {
    "depth": 3,
    "slug": "️-customer-experience",
    "text": "🍽️ Customer Experience"
  }, {
    "depth": 2,
    "slug": "key-features-delivered",
    "text": "Key Features Delivered"
  }, {
    "depth": 3,
    "slug": "for-customers",
    "text": "For Customers:"
  }, {
    "depth": 3,
    "slug": "for-waiters",
    "text": "For Waiters:"
  }, {
    "depth": 3,
    "slug": "for-kitchen-staff",
    "text": "For Kitchen Staff:"
  }, {
    "depth": 3,
    "slug": "for-management",
    "text": "For Management:"
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
    "slug": "hardware-integration",
    "text": "Hardware Integration"
  }, {
    "depth": 3,
    "slug": "software-features",
    "text": "Software Features"
  }, {
    "depth": 3,
    "slug": "third-party-integrations",
    "text": "Third-party Integrations"
  }, {
    "depth": 2,
    "slug": "business-impact",
    "text": "Business Impact"
  }, {
    "depth": 3,
    "slug": "operational-benefits",
    "text": "Operational Benefits:"
  }, {
    "depth": 3,
    "slug": "revenue-growth",
    "text": "Revenue Growth:"
  }, {
    "depth": 2,
    "slug": "long-term-success",
    "text": "Long-term Success"
  }, {
    "depth": 3,
    "slug": "6-months-later",
    "text": "6 Months Later:"
  }, {
    "depth": 3,
    "slug": "expansion-ready",
    "text": "Expansion Ready:"
  }, {
    "depth": 2,
    "slug": "success-factors",
    "text": "Success Factors"
  }, {
    "depth": 3,
    "slug": "-industry-understanding",
    "text": "🎯 Industry Understanding"
  }, {
    "depth": 3,
    "slug": "-technology-excellence",
    "text": "💡 Technology Excellence"
  }, {
    "depth": 3,
    "slug": "-partnership-approach",
    "text": "🤝 Partnership Approach"
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
        children: "Warung Makan Sederhana"
      }), " adalah restoran keluarga yang telah melayani masyarakat Sidoarjo selama 15 tahun dengan menu masakan Jawa tradisional. Dengan 25 meja dan 12 karyawan, warung ini menghadapi tantangan dalam mengelola pesanan yang semakin ramai namun masih menggunakan sistem manual."]
    }), "\n", createVNode(_components.h3, {
      id: "the-challenge",
      children: "The Challenge"
    }), "\n", createVNode(_components.p, {
      children: "Restoran menghadapi berbagai masalah operasional:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Manual Order Taking"
        }), ": Pelayan catat pesanan di kertas, sering salah atau hilang"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Kitchen Confusion"
        }), ": Dapur tidak tahu prioritas masakan, pesanan terlambat"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Inventory Issues"
        }), ": Stok bahan habis mendadak, tidak ada warning system"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Payment Delays"
        }), ": Kasir manual lambat, customer antri panjang"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "No Online Presence"
        }), ": Kehilangan peluang delivery online (Gojek, Grab)"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "our-solution",
      children: "Our Solution"
    }), "\n", createVNode(_components.p, {
      children: ["Tim kotacom.id mengembangkan ", createVNode(_components.strong, {
        children: "Sistem POS Restoran Terintegrasi"
      }), ":"]
    }), "\n", createVNode(_components.h4, {
      id: "-digital-pos-system",
      children: ["📱 ", createVNode(_components.strong, {
        children: "Digital POS System"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Tablet-based ordering untuk pelayan"
      }), "\n", createVNode(_components.li, {
        children: "Real-time menu availability"
      }), "\n", createVNode(_components.li, {
        children: "Table management system"
      }), "\n", createVNode(_components.li, {
        children: "Split bill & payment options"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-kitchen-display-system",
      children: ["🍳 ", createVNode(_components.strong, {
        children: "Kitchen Display System"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Digital order display di dapur"
      }), "\n", createVNode(_components.li, {
        children: "Priority queue management"
      }), "\n", createVNode(_components.li, {
        children: "Cooking time tracking"
      }), "\n", createVNode(_components.li, {
        children: "Order status updates"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-inventory-management",
      children: ["📦 ", createVNode(_components.strong, {
        children: "Inventory Management"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Real-time stock tracking"
      }), "\n", createVNode(_components.li, {
        children: "Low stock alerts"
      }), "\n", createVNode(_components.li, {
        children: "Supplier management"
      }), "\n", createVNode(_components.li, {
        children: "Cost calculation per dish"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-online-ordering-integration",
      children: ["🚚 ", createVNode(_components.strong, {
        children: "Online Ordering Integration"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Website ordering system"
      }), "\n", createVNode(_components.li, {
        children: "GoFood & GrabFood integration"
      }), "\n", createVNode(_components.li, {
        children: "Delivery tracking"
      }), "\n", createVNode(_components.li, {
        children: "Customer database"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-analytics--reporting",
      children: ["📊 ", createVNode(_components.strong, {
        children: "Analytics & Reporting"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Daily sales reports"
      }), "\n", createVNode(_components.li, {
        children: "Menu performance analytics"
      }), "\n", createVNode(_components.li, {
        children: "Staff productivity tracking"
      }), "\n", createVNode(_components.li, {
        children: "Customer behavior insights"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "implementation-process",
      children: "Implementation Process"
    }), "\n", createVNode(_components.h3, {
      id: "week-1-system-analysis--setup",
      children: "Week 1: System Analysis & Setup"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Restaurant workflow analysis"
      }), "\n", createVNode(_components.li, {
        children: "Menu digitization & pricing"
      }), "\n", createVNode(_components.li, {
        children: "Hardware procurement (tablets, kitchen display)"
      }), "\n", createVNode(_components.li, {
        children: "Staff requirement assessment"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "week-2-3-core-development",
      children: "Week 2-3: Core Development"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "POS system development"
      }), "\n", createVNode(_components.li, {
        children: "Kitchen display interface"
      }), "\n", createVNode(_components.li, {
        children: "Payment gateway integration"
      }), "\n", createVNode(_components.li, {
        children: "Table management system"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "week-4-5-advanced-features",
      children: "Week 4-5: Advanced Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Inventory management system"
      }), "\n", createVNode(_components.li, {
        children: "Online ordering platform"
      }), "\n", createVNode(_components.li, {
        children: "Delivery app integration"
      }), "\n", createVNode(_components.li, {
        children: "Reporting dashboard"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "week-6-training--go-live",
      children: "Week 6: Training & Go-Live"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Staff training program"
      }), "\n", createVNode(_components.li, {
        children: "System testing dengan real orders"
      }), "\n", createVNode(_components.li, {
        children: "Data migration & setup"
      }), "\n", createVNode(_components.li, {
        children: "Live deployment dengan support"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "results--impact",
      children: "Results & Impact"
    }), "\n", createVNode(_components.h3, {
      id: "-operational-efficiency",
      children: ["📈 ", createVNode(_components.strong, {
        children: "Operational Efficiency"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Process"
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
              children: "Order Processing Time"
            })
          }), createVNode(_components.td, {
            children: "15 minutes"
          }), createVNode(_components.td, {
            children: "4 minutes"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-73%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Order Accuracy"
            })
          }), createVNode(_components.td, {
            children: "75% (25% errors)"
          }), createVNode(_components.td, {
            children: "98% (2% errors)"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+31%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Table Turnover"
            })
          }), createVNode(_components.td, {
            children: "1.5x/day"
          }), createVNode(_components.td, {
            children: "2.3x/day"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+53%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Kitchen Efficiency"
            })
          }), createVNode(_components.td, {
            children: "60% utilization"
          }), createVNode(_components.td, {
            children: "85% utilization"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+42%"
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "-financial-performance",
      children: ["💰 ", createVNode(_components.strong, {
        children: "Financial Performance"
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
            children: "Growth"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Monthly Revenue"
            })
          }), createVNode(_components.td, {
            children: "Rp 85 juta"
          }), createVNode(_components.td, {
            children: "Rp 123 juta"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+45%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Daily Customers"
            })
          }), createVNode(_components.td, {
            children: "120-150"
          }), createVNode(_components.td, {
            children: "200-250"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+58%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Average Order Value"
            })
          }), createVNode(_components.td, {
            children: "Rp 45,000"
          }), createVNode(_components.td, {
            children: "Rp 52,000"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+16%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Online Orders"
            })
          }), createVNode(_components.td, {
            children: "0%"
          }), createVNode(_components.td, {
            children: "35%"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "New Revenue Stream"
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "️-customer-experience",
      children: ["🍽️ ", createVNode(_components.strong, {
        children: "Customer Experience"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Wait Time"
        }), ": Reduced from 25 minutes to 12 minutes"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Order Accuracy"
        }), ": 98% customer satisfaction with correct orders"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Payment Speed"
        }), ": 70% faster checkout process"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Online Accessibility"
        }), ": 24/7 online ordering availability"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "key-features-delivered",
      children: "Key Features Delivered"
    }), "\n", createVNode(_components.h3, {
      id: "for-customers",
      children: createVNode(_components.strong, {
        children: "For Customers:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Fast order processing with tablets"
      }), "\n", createVNode(_components.li, {
        children: "✅ Online ordering via website"
      }), "\n", createVNode(_components.li, {
        children: "✅ GoFood & GrabFood availability"
      }), "\n", createVNode(_components.li, {
        children: "✅ Multiple payment options"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "for-waiters",
      children: createVNode(_components.strong, {
        children: "For Waiters:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Tablet-based order taking"
      }), "\n", createVNode(_components.li, {
        children: "✅ Real-time menu availability"
      }), "\n", createVNode(_components.li, {
        children: "✅ Table status management"
      }), "\n", createVNode(_components.li, {
        children: "✅ Split bill functionality"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "for-kitchen-staff",
      children: createVNode(_components.strong, {
        children: "For Kitchen Staff:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Digital order display screen"
      }), "\n", createVNode(_components.li, {
        children: "✅ Priority queue system"
      }), "\n", createVNode(_components.li, {
        children: "✅ Cooking time tracking"
      }), "\n", createVNode(_components.li, {
        children: "✅ Order completion notifications"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "for-management",
      children: createVNode(_components.strong, {
        children: "For Management:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Real-time sales dashboard"
      }), "\n", createVNode(_components.li, {
        children: "✅ Inventory alerts & management"
      }), "\n", createVNode(_components.li, {
        children: "✅ Staff performance tracking"
      }), "\n", createVNode(_components.li, {
        children: "✅ Financial reporting"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "client-testimonial",
      children: "Client Testimonial"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "“Sistem POS dari KOTACOM sangat membantu operasional warung kami. Dapur tidak bingung lagi dengan pesanan, kasir lebih cepat, dan yang paling penting omset naik karena bisa terima order online dari Gojek dan Grab. Investasi terbaik untuk warung!”"
        })
      }), "\n", createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "— Ibu Ratna Sari, Pemilik Warung Makan Sederhana"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "technical-specifications",
      children: "Technical Specifications"
    }), "\n", createVNode(_components.h3, {
      id: "hardware-integration",
      children: createVNode(_components.strong, {
        children: "Hardware Integration"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "POS Tablets"
        }), ": Android tablets untuk pelayan"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Kitchen Display"
        }), ": 24” touchscreen untuk dapur"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Receipt Printer"
        }), ": Thermal printer integrasi"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cash Drawer"
        }), ": Electronic cash drawer"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "software-features",
      children: createVNode(_components.strong, {
        children: "Software Features"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Real-time Sync"
        }), ": Semua device tersinkronisasi real-time"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Offline Capability"
        }), ": Bisa beroperasi tanpa internet"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Multi-user"
        }), ": Support multiple staff simultaneous"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Backup System"
        }), ": Automatic data backup harian"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "third-party-integrations",
      children: createVNode(_components.strong, {
        children: "Third-party Integrations"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "GoFood"
        }), ": Direct integration untuk delivery orders"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "GrabFood"
        }), ": Seamless order management"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Payment Gateway"
        }), ": Multiple payment methods"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Accounting"
        }), ": Export data ke software akuntansi"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "business-impact",
      children: "Business Impact"
    }), "\n", createVNode(_components.h3, {
      id: "operational-benefits",
      children: createVNode(_components.strong, {
        children: "Operational Benefits:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Staff Productivity"
        }), ": 60% peningkatan efisiensi pelayan"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Kitchen Efficiency"
        }), ": 40% reduction dalam cooking time"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Inventory Control"
        }), ": 90% reduction dalam food waste"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Customer Satisfaction"
        }), ": 95% rating dari customer"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "revenue-growth",
      children: createVNode(_components.strong, {
        children: "Revenue Growth:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Dine-in Revenue"
        }), ": 25% increase dari improved efficiency"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Online Revenue"
        }), ": 35% dari total revenue (new stream)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Average Order"
        }), ": 16% increase dengan upselling features"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Customer Retention"
        }), ": 80% repeat customer rate"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "long-term-success",
      children: "Long-term Success"
    }), "\n", createVNode(_components.h3, {
      id: "6-months-later",
      children: createVNode(_components.strong, {
        children: "6 Months Later:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Monthly Revenue"
        }), ": Sustained Rp 120+ juta per bulan"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Customer Base"
        }), ": 40% increase dalam regular customers"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Online Orders"
        }), ": 45% dari total orders"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Staff Satisfaction"
        }), ": 90% staff prefer new system"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "expansion-ready",
      children: createVNode(_components.strong, {
        children: "Expansion Ready:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Multi-branch"
        }), ": System ready untuk cabang baru"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Franchise"
        }), ": Template system untuk franchise expansion"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Advanced Analytics"
        }), ": Customer behavior insights"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Loyalty Program"
        }), ": Customer loyalty integration ready"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "success-factors",
      children: "Success Factors"
    }), "\n", createVNode(_components.h3, {
      id: "-industry-understanding",
      children: ["🎯 ", createVNode(_components.strong, {
        children: "Industry Understanding"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Deep knowledge of restaurant operations"
      }), "\n", createVNode(_components.li, {
        children: "User-friendly design untuk non-tech staff"
      }), "\n", createVNode(_components.li, {
        children: "Fast implementation dengan minimal disruption"
      }), "\n", createVNode(_components.li, {
        children: "24/7 support untuk business continuity"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "-technology-excellence",
      children: ["💡 ", createVNode(_components.strong, {
        children: "Technology Excellence"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Reliable system dengan offline capability"
      }), "\n", createVNode(_components.li, {
        children: "Real-time synchronization across devices"
      }), "\n", createVNode(_components.li, {
        children: "Integration dengan delivery platforms"
      }), "\n", createVNode(_components.li, {
        children: "Scalable architecture untuk growth"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "-partnership-approach",
      children: ["🤝 ", createVNode(_components.strong, {
        children: "Partnership Approach"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Comprehensive staff training"
      }), "\n", createVNode(_components.li, {
        children: "Ongoing technical support"
      }), "\n", createVNode(_components.li, {
        children: "Regular system updates"
      }), "\n", createVNode(_components.li, {
        children: "Business consultation services"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Transform your restaurant operations like Warung Makan Sederhana!"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://wa.me/6285799520350",
        rel: "nofollow noopener noreferrer",
        target: "_blank",
        children: createVNode(_components.strong, {
          children: "Konsultasi Gratis"
        })
      }), " - Diskusikan kebutuhan sistem POS restoran Anda dengan F&B technology experts kami!"]
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

const url = "/projects/restaurant-management-system";
const file = "/workspace/src/pages/projects/restaurant-management-system.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspace/src/pages/projects/restaurant-management-system.mdx";
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
