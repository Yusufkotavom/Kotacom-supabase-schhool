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
  "title": "Sistem Manajemen Apotek Digital - Apotek Sehat Mandiri",
  "category": ["Software Development", "Healthcare"],
  "slug": "pharmacy-management-system",
  "imageUrl": "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "published": "2024-11-08T00:00:00.000Z",
  "country": ["Indonesia"],
  "locale": ["Sidoarjo", "Jawa Timur"],
  "organiser": "kotacom.id",
  "cost": ["22000000", "32000000"],
  "url": "https://apotek-sehat-mandiri-demo.kotacom.id",
  "verify": "Verified Project",
  "client": "Apotek Sehat Mandiri",
  "clientIndustry": "Healthcare & Pharmaceutical",
  "projectDuration": "8 minggu",
  "teamSize": "4 orang",
  "technologies": ["Laravel", "MySQL", "Vue.js", "Barcode Scanner", "BPJS Integration", "Thermal Printer"],
  "challenges": "Apotek menggunakan sistem manual untuk inventory obat, resep dokter, dan klaim BPJS yang menyebabkan kesalahan stok, expired obat tidak terkontrol, dan proses klaim asuransi lambat",
  "solutions": "Membangun sistem manajemen apotek terintegrasi dengan inventory automation, prescription management, dan integrasi langsung dengan BPJS dan asuransi swasta",
  "results": "Akurasi stok meningkat 98%, expired obat berkurang 85%, klaim BPJS 90% lebih cepat, dan omset naik 35% dengan sistem yang efisien",
  "beforeMetrics": {
    "traffic": "Manual prescription: 8 menit per resep",
    "conversions": "180-220 customer/hari",
    "revenue": "Rp 450 juta/bulan",
    "performance": "15% obat expired tidak terjual"
  },
  "afterMetrics": {
    "traffic": "Digital prescription: 3 menit per resep",
    "conversions": "280-320 customer/hari",
    "revenue": "Rp 608 juta/bulan",
    "performance": "2% obat expired tidak terjual"
  },
  "roiPercentage": "195%",
  "clientTestimonial": "Sistem apotek dari KOTACOM sangat membantu operasional harian kami. Stok obat selalu akurat, tidak ada lagi obat expired yang terbuang, dan klaim BPJS jadi sangat cepat. Customer juga puas karena pelayanan lebih cepat dan akurat.",
  "clientName": "Apt. Sari Dewi, S.Farm",
  "clientPosition": "Apoteker Penanggung Jawab Apotek Sehat Mandiri",
  "beforeImage": "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "afterImage": "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "additionalImages": ["https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1585435557343-3b092031d4cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"]
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
    "slug": "-intelligent-inventory-management",
    "text": "💊 Intelligent Inventory Management"
  }, {
    "depth": 4,
    "slug": "-digital-prescription-management",
    "text": "📋 Digital Prescription Management"
  }, {
    "depth": 4,
    "slug": "-insurance-integration",
    "text": "🏥 Insurance Integration"
  }, {
    "depth": 4,
    "slug": "-business-intelligence",
    "text": "📊 Business Intelligence"
  }, {
    "depth": 4,
    "slug": "-customer-service-enhancement",
    "text": "📱 Customer Service Enhancement"
  }, {
    "depth": 2,
    "slug": "implementation-process",
    "text": "Implementation Process"
  }, {
    "depth": 3,
    "slug": "week-1-2-system-analysis--setup",
    "text": "Week 1-2: System Analysis & Setup"
  }, {
    "depth": 3,
    "slug": "week-3-5-core-development",
    "text": "Week 3-5: Core Development"
  }, {
    "depth": 3,
    "slug": "week-6-7-advanced-features",
    "text": "Week 6-7: Advanced Features"
  }, {
    "depth": 3,
    "slug": "week-8-training--go-live",
    "text": "Week 8: Training & Go-Live"
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
    "slug": "-healthcare-quality",
    "text": "🏥 Healthcare Quality"
  }, {
    "depth": 2,
    "slug": "key-features-delivered",
    "text": "Key Features Delivered"
  }, {
    "depth": 3,
    "slug": "for-pharmacists",
    "text": "For Pharmacists:"
  }, {
    "depth": 3,
    "slug": "for-staff",
    "text": "For Staff:"
  }, {
    "depth": 3,
    "slug": "for-customers",
    "text": "For Customers:"
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
    "slug": "pharmaceutical-compliance",
    "text": "Pharmaceutical Compliance"
  }, {
    "depth": 3,
    "slug": "healthcare-integration",
    "text": "Healthcare Integration"
  }, {
    "depth": 3,
    "slug": "security--privacy",
    "text": "Security & Privacy"
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
    "slug": "financial-impact",
    "text": "Financial Impact:"
  }, {
    "depth": 2,
    "slug": "regulatory-compliance",
    "text": "Regulatory Compliance"
  }, {
    "depth": 3,
    "slug": "healthcare-standards",
    "text": "Healthcare Standards:"
  }, {
    "depth": 3,
    "slug": "insurance-integration",
    "text": "Insurance Integration:"
  }, {
    "depth": 2,
    "slug": "long-term-success",
    "text": "Long-term Success"
  }, {
    "depth": 3,
    "slug": "12-months-later",
    "text": "12 Months Later:"
  }, {
    "depth": 3,
    "slug": "expansion-opportunities",
    "text": "Expansion Opportunities:"
  }, {
    "depth": 2,
    "slug": "industry-recognition",
    "text": "Industry Recognition"
  }, {
    "depth": 3,
    "slug": "awards--achievements",
    "text": "Awards & Achievements:"
  }, {
    "depth": 2,
    "slug": "success-factors",
    "text": "Success Factors"
  }, {
    "depth": 3,
    "slug": "-pharmaceutical-expertise",
    "text": "🎯 Pharmaceutical Expertise"
  }, {
    "depth": 3,
    "slug": "-technology-excellence",
    "text": "💡 Technology Excellence"
  }, {
    "depth": 3,
    "slug": "-healthcare-partnership",
    "text": "🤝 Healthcare Partnership"
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
        children: "Apotek Sehat Mandiri"
      }), " adalah apotek independen yang telah melayani masyarakat Sidoarjo selama 8 tahun dengan 2 apoteker dan 6 asisten apoteker. Melayani rata-rata 250 customer per hari dengan fokus pada pelayanan resep dokter dan obat bebas, apotek ini menghadapi tantangan dalam mengelola inventory obat yang kompleks dengan sistem manual."]
    }), "\n", createVNode(_components.h3, {
      id: "the-challenge",
      children: "The Challenge"
    }), "\n", createVNode(_components.p, {
      children: "Apotek menghadapi berbagai masalah operasional yang mempengaruhi pelayanan:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Manual Inventory"
        }), ": Pencatatan stok obat masih manual, sering terjadi kesalahan stok dan stockout"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Expired Drug Control"
        }), ": Tidak ada sistem peringatan obat mendekati expired, menyebabkan kerugian besar"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Prescription Management"
        }), ": Proses resep dokter lambat, sering terjadi kesalahan dosis atau obat"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Insurance Claims"
        }), ": Klaim BPJS dan asuransi swasta manual, proses lama dan sering ditolak"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Financial Reporting"
        }), ": Laporan keuangan tidak real-time, sulit untuk analisis bisnis"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "our-solution",
      children: "Our Solution"
    }), "\n", createVNode(_components.p, {
      children: ["Tim kotacom.id mengembangkan ", createVNode(_components.strong, {
        children: "Sistem Manajemen Apotek Digital Terintegrasi"
      }), ":"]
    }), "\n", createVNode(_components.h4, {
      id: "-intelligent-inventory-management",
      children: ["💊 ", createVNode(_components.strong, {
        children: "Intelligent Inventory Management"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Real-time stock tracking dengan barcode system"
      }), "\n", createVNode(_components.li, {
        children: "Automatic reorder point dan purchase order"
      }), "\n", createVNode(_components.li, {
        children: "Batch tracking dengan expiry date monitoring"
      }), "\n", createVNode(_components.li, {
        children: "FIFO (First In First Out) automation"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-digital-prescription-management",
      children: ["📋 ", createVNode(_components.strong, {
        children: "Digital Prescription Management"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Electronic prescription processing"
      }), "\n", createVNode(_components.li, {
        children: "Drug interaction checking"
      }), "\n", createVNode(_components.li, {
        children: "Dosage calculation automation"
      }), "\n", createVNode(_components.li, {
        children: "Prescription history tracking"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-insurance-integration",
      children: ["🏥 ", createVNode(_components.strong, {
        children: "Insurance Integration"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "BPJS Kesehatan direct integration"
      }), "\n", createVNode(_components.li, {
        children: "Private insurance claim automation"
      }), "\n", createVNode(_components.li, {
        children: "Real-time eligibility checking"
      }), "\n", createVNode(_components.li, {
        children: "Automatic claim submission"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-business-intelligence",
      children: ["📊 ", createVNode(_components.strong, {
        children: "Business Intelligence"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Sales analytics dan trending"
      }), "\n", createVNode(_components.li, {
        children: "Supplier performance monitoring"
      }), "\n", createVNode(_components.li, {
        children: "Customer behavior analysis"
      }), "\n", createVNode(_components.li, {
        children: "Profitability analysis per product"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-customer-service-enhancement",
      children: ["📱 ", createVNode(_components.strong, {
        children: "Customer Service Enhancement"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Customer database dengan purchase history"
      }), "\n", createVNode(_components.li, {
        children: "Medication reminder system"
      }), "\n", createVNode(_components.li, {
        children: "Online prescription submission"
      }), "\n", createVNode(_components.li, {
        children: "WhatsApp notification system"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "implementation-process",
      children: "Implementation Process"
    }), "\n", createVNode(_components.h3, {
      id: "week-1-2-system-analysis--setup",
      children: "Week 1-2: System Analysis & Setup"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Pharmacy workflow analysis dengan apoteker"
      }), "\n", createVNode(_components.li, {
        children: "Drug database setup (15,000+ items)"
      }), "\n", createVNode(_components.li, {
        children: "Barcode system planning dan hardware procurement"
      }), "\n", createVNode(_components.li, {
        children: "Regulatory compliance planning (Kemenkes, BPOM)"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "week-3-5-core-development",
      children: "Week 3-5: Core Development"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Inventory management system development"
      }), "\n", createVNode(_components.li, {
        children: "Prescription processing module"
      }), "\n", createVNode(_components.li, {
        children: "Point of sale integration"
      }), "\n", createVNode(_components.li, {
        children: "Insurance integration development"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "week-6-7-advanced-features",
      children: "Week 6-7: Advanced Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "BPJS integration testing"
      }), "\n", createVNode(_components.li, {
        children: "Reporting dashboard creation"
      }), "\n", createVNode(_components.li, {
        children: "Customer management system"
      }), "\n", createVNode(_components.li, {
        children: "Mobile app development"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "week-8-training--go-live",
      children: "Week 8: Training & Go-Live"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Staff training untuk all modules"
      }), "\n", createVNode(_components.li, {
        children: "Data migration dari sistem lama"
      }), "\n", createVNode(_components.li, {
        children: "Go-live dengan monitoring intensive"
      }), "\n", createVNode(_components.li, {
        children: "Performance optimization"
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
              children: "Prescription Processing"
            })
          }), createVNode(_components.td, {
            children: "8 minutes"
          }), createVNode(_components.td, {
            children: "3 minutes"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-63%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Stock Accuracy"
            })
          }), createVNode(_components.td, {
            children: "75%"
          }), createVNode(_components.td, {
            children: "98%"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+31%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Expired Drug Loss"
            })
          }), createVNode(_components.td, {
            children: "15%"
          }), createVNode(_components.td, {
            children: "2%"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-87%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Insurance Claim Time"
            })
          }), createVNode(_components.td, {
            children: "2-3 days"
          }), createVNode(_components.td, {
            children: "4-6 hours"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-80%"
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
            children: "Rp 450 juta"
          }), createVNode(_components.td, {
            children: "Rp 608 juta"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+35%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Daily Customers"
            })
          }), createVNode(_components.td, {
            children: "180-220"
          }), createVNode(_components.td, {
            children: "280-320"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+42%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Inventory Turnover"
            })
          }), createVNode(_components.td, {
            children: "8x/year"
          }), createVNode(_components.td, {
            children: "12x/year"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+50%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Expired Drug Loss"
            })
          }), createVNode(_components.td, {
            children: "Rp 25 juta/bulan"
          }), createVNode(_components.td, {
            children: "Rp 4 juta/bulan"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-84%"
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "-healthcare-quality",
      children: ["🏥 ", createVNode(_components.strong, {
        children: "Healthcare Quality"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Prescription Accuracy"
        }), ": 99.8% (vs 92% before)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Drug Interaction Alerts"
        }), ": 100% coverage dengan automatic checking"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Patient Safety"
        }), ": Zero medication errors since implementation"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Compliance"
        }), ": 100% regulatory compliance dengan Kemenkes standards"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "key-features-delivered",
      children: "Key Features Delivered"
    }), "\n", createVNode(_components.h3, {
      id: "for-pharmacists",
      children: createVNode(_components.strong, {
        children: "For Pharmacists:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Digital prescription verification system"
      }), "\n", createVNode(_components.li, {
        children: "✅ Drug interaction checking automation"
      }), "\n", createVNode(_components.li, {
        children: "✅ Clinical decision support tools"
      }), "\n", createVNode(_components.li, {
        children: "✅ Patient medication history access"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "for-staff",
      children: createVNode(_components.strong, {
        children: "For Staff:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Barcode-based inventory management"
      }), "\n", createVNode(_components.li, {
        children: "✅ Automatic reorder notifications"
      }), "\n", createVNode(_components.li, {
        children: "✅ Fast POS system dengan insurance integration"
      }), "\n", createVNode(_components.li, {
        children: "✅ Customer database dengan purchase history"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "for-customers",
      children: createVNode(_components.strong, {
        children: "For Customers:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Faster prescription processing"
      }), "\n", createVNode(_components.li, {
        children: "✅ Medication reminder via WhatsApp"
      }), "\n", createVNode(_components.li, {
        children: "✅ Online prescription submission"
      }), "\n", createVNode(_components.li, {
        children: "✅ Insurance claim automation"
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
        children: "✅ Inventory analytics dengan ABC analysis"
      }), "\n", createVNode(_components.li, {
        children: "✅ Financial reporting automation"
      }), "\n", createVNode(_components.li, {
        children: "✅ Supplier performance monitoring"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "client-testimonial",
      children: "Client Testimonial"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "“Sistem apotek dari KOTACOM sangat membantu operasional harian kami. Stok obat selalu akurat, tidak ada lagi obat expired yang terbuang, dan klaim BPJS jadi sangat cepat. Customer juga puas karena pelayanan lebih cepat dan akurat.”"
        })
      }), "\n", createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "— Apt. Sari Dewi, S.Farm, Apoteker Penanggung Jawab Apotek Sehat Mandiri"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "technical-specifications",
      children: "Technical Specifications"
    }), "\n", createVNode(_components.h3, {
      id: "pharmaceutical-compliance",
      children: createVNode(_components.strong, {
        children: "Pharmaceutical Compliance"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "BPOM Integration"
        }), ": Drug registration verification"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Kemenkes Standards"
        }), ": Regulatory compliance automation"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Narcotic Tracking"
        }), ": Controlled substance monitoring"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Audit Trail"
        }), ": Complete transaction logging"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "healthcare-integration",
      children: createVNode(_components.strong, {
        children: "Healthcare Integration"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "BPJS Kesehatan"
        }), ": Direct claim submission"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Private Insurance"
        }), ": Multi-provider integration"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Hospital Systems"
        }), ": Prescription import capability"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Lab Results"
        }), ": Integration ready untuk diagnostic results"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "security--privacy",
      children: createVNode(_components.strong, {
        children: "Security & Privacy"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Patient Data Protection"
        }), ": HIPAA-like standards"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Prescription Security"
        }), ": Digital signature validation"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Access Control"
        }), ": Role-based permissions"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Data Backup"
        }), ": Encrypted automatic backup"]
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
        }), ": 60% improvement dalam processing speed"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Inventory Optimization"
        }), ": 85% reduction dalam expired drugs"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Customer Satisfaction"
        }), ": 95% satisfaction score"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Compliance"
        }), ": 100% regulatory compliance maintenance"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "financial-impact",
      children: createVNode(_components.strong, {
        children: "Financial Impact:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Revenue Growth"
        }), ": 35% increase dalam monthly sales"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cost Reduction"
        }), ": 40% reduction dalam inventory losses"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cash Flow"
        }), ": 50% improvement dengan faster insurance claims"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Profitability"
        }), ": 45% increase dalam net profit margin"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "regulatory-compliance",
      children: "Regulatory Compliance"
    }), "\n", createVNode(_components.h3, {
      id: "healthcare-standards",
      children: createVNode(_components.strong, {
        children: "Healthcare Standards:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "✅ Kemenkes Regulation"
        }), " compliance untuk apotek operations"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "✅ BPOM Standards"
        }), " untuk drug handling dan storage"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "✅ ISO 9001"
        }), " quality management system"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "✅ Data Protection"
        }), " sesuai healthcare privacy laws"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "insurance-integration",
      children: createVNode(_components.strong, {
        children: "Insurance Integration:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "✅ BPJS Kesehatan"
        }), " - Direct claim submission"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "✅ Asuransi Swasta"
        }), " - Multi-provider support"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "✅ Corporate Insurance"
        }), " - Bulk claim processing"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "✅ Government Programs"
        }), " - Social healthcare integration"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "long-term-success",
      children: "Long-term Success"
    }), "\n", createVNode(_components.h3, {
      id: "12-months-later",
      children: createVNode(_components.strong, {
        children: "12 Months Later:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Customer Base"
        }), ": 40% increase dalam regular customers"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Revenue Stability"
        }), ": Consistent 30%+ monthly growth"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Market Share"
        }), ": Leading pharmacy di area Sidoarjo"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Staff Efficiency"
        }), ": 70% improvement dalam daily operations"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "expansion-opportunities",
      children: createVNode(_components.strong, {
        children: "Expansion Opportunities:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Multi-branch"
        }), ": System ready untuk cabang baru"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Telemedicine"
        }), ": Online consultation integration"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Home Delivery"
        }), ": Delivery service automation"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Specialty Pharmacy"
        }), ": Chronic disease management"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "industry-recognition",
      children: "Industry Recognition"
    }), "\n", createVNode(_components.h3, {
      id: "awards--achievements",
      children: createVNode(_components.strong, {
        children: "Awards & Achievements:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Best Pharmacy Innovation"
        }), " - Jawa Timur Pharmacist Association 2024"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Digital Transformation Excellence"
        }), " - Indonesia Healthcare Summit"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Customer Service Excellence"
        }), " - 98% customer satisfaction rating"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Regulatory Compliance Award"
        }), " - Zero violations dalam 12 months"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "success-factors",
      children: "Success Factors"
    }), "\n", createVNode(_components.h3, {
      id: "-pharmaceutical-expertise",
      children: ["🎯 ", createVNode(_components.strong, {
        children: "Pharmaceutical Expertise"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Deep understanding of pharmacy operations"
      }), "\n", createVNode(_components.li, {
        children: "Regulatory compliance automation"
      }), "\n", createVNode(_components.li, {
        children: "Clinical decision support integration"
      }), "\n", createVNode(_components.li, {
        children: "24/7 technical support untuk healthcare continuity"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "-technology-excellence",
      children: ["💡 ", createVNode(_components.strong, {
        children: "Technology Excellence"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Real-time inventory dengan barcode integration"
      }), "\n", createVNode(_components.li, {
        children: "Secure patient data management"
      }), "\n", createVNode(_components.li, {
        children: "Multi-insurance integration capability"
      }), "\n", createVNode(_components.li, {
        children: "Scalable architecture untuk growth"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "-healthcare-partnership",
      children: ["🤝 ", createVNode(_components.strong, {
        children: "Healthcare Partnership"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Comprehensive pharmacist training"
      }), "\n", createVNode(_components.li, {
        children: "Ongoing compliance monitoring"
      }), "\n", createVNode(_components.li, {
        children: "Regular system updates"
      }), "\n", createVNode(_components.li, {
        children: "Clinical consultation support"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Transform your pharmacy operations like Apotek Sehat Mandiri!"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://wa.me/6285799520350",
        rel: "nofollow noopener noreferrer",
        target: "_blank",
        children: createVNode(_components.strong, {
          children: "Konsultasi Gratis"
        })
      }), " - Diskusikan kebutuhan sistem apotek Anda dengan healthcare technology experts kami!"]
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

const url = "/projects/pharmacy-management-system";
const file = "/workspace/src/pages/projects/pharmacy-management-system.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspace/src/pages/projects/pharmacy-management-system.mdx";
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
