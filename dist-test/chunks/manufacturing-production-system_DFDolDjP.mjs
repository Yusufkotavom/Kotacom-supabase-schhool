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
  "title": "Sistem Produksi Digital - PT Maju Industri Plastik",
  "category": ["Software Development", "Manufacturing"],
  "slug": "manufacturing-production-system",
  "imageUrl": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "published": "2024-10-12T00:00:00.000Z",
  "country": ["Indonesia"],
  "locale": ["Surabaya", "Jawa Timur"],
  "organiser": "kotacom.id",
  "cost": ["35000000", "50000000"],
  "url": "https://maju-industri-demo.kotacom.id",
  "verify": "Verified Project",
  "client": "PT Maju Industri Plastik",
  "clientIndustry": "Manufacturing & Industry",
  "projectDuration": "12 minggu",
  "teamSize": "5 orang",
  "technologies": ["Laravel", "MySQL", "Vue.js", "IoT Sensors", "Barcode System", "API Integration"],
  "challenges": "Pabrik menggunakan sistem manual untuk tracking produksi, inventory, dan quality control yang menyebabkan waste tinggi, delay produksi, dan kesulitan tracking order",
  "solutions": "Membangun sistem ERP manufaktur terintegrasi dengan production tracking real-time, inventory management, dan quality control automation",
  "results": "Efisiensi produksi naik 55%, waste berkurang 40%, on-time delivery meningkat 85%, dan profit margin naik 30%",
  "beforeMetrics": {
    "traffic": "Manual tracking: 4-6 jam delay info",
    "conversions": "75% on-time delivery rate",
    "revenue": "Rp 2.8 miliar/bulan",
    "performance": "25% production waste"
  },
  "afterMetrics": {
    "traffic": "Real-time tracking: instant updates",
    "conversions": "95% on-time delivery rate",
    "revenue": "Rp 3.6 miliar/bulan",
    "performance": "8% production waste"
  },
  "roiPercentage": "280%",
  "clientTestimonial": "Sistem dari KOTACOM mengubah total cara kami mengelola produksi. Sekarang kami bisa track setiap tahap produksi real-time, waste berkurang drastis, dan customer satisfaction naik karena delivery selalu on-time. ROI tercapai dalam 10 bulan!",
  "clientName": "Bapak Suryo Hartono",
  "clientPosition": "Production Manager PT Maju Industri Plastik",
  "beforeImage": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "afterImage": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "additionalImages": ["https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"]
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
    "slug": "-production-planning--control",
    "text": "🏭 Production Planning & Control"
  }, {
    "depth": 4,
    "slug": "-real-time-production-dashboard",
    "text": "📊 Real-time Production Dashboard"
  }, {
    "depth": 4,
    "slug": "-integrated-inventory-management",
    "text": "📦 Integrated Inventory Management"
  }, {
    "depth": 4,
    "slug": "-quality-control-system",
    "text": "🔍 Quality Control System"
  }, {
    "depth": 4,
    "slug": "-order-management",
    "text": "📋 Order Management"
  }, {
    "depth": 2,
    "slug": "implementation-process",
    "text": "Implementation Process"
  }, {
    "depth": 3,
    "slug": "week-1-3-system-analysis--design",
    "text": "Week 1-3: System Analysis & Design"
  }, {
    "depth": 3,
    "slug": "week-4-8-core-development",
    "text": "Week 4-8: Core Development"
  }, {
    "depth": 3,
    "slug": "week-9-10-integration--testing",
    "text": "Week 9-10: Integration & Testing"
  }, {
    "depth": 3,
    "slug": "week-11-12-training--go-live",
    "text": "Week 11-12: Training & Go-Live"
  }, {
    "depth": 2,
    "slug": "results--impact",
    "text": "Results & Impact"
  }, {
    "depth": 3,
    "slug": "-production-efficiency-improvements",
    "text": "📈 Production Efficiency Improvements"
  }, {
    "depth": 3,
    "slug": "-financial-performance",
    "text": "💰 Financial Performance"
  }, {
    "depth": 3,
    "slug": "-operational-excellence",
    "text": "🏭 Operational Excellence"
  }, {
    "depth": 2,
    "slug": "key-features-delivered",
    "text": "Key Features Delivered"
  }, {
    "depth": 3,
    "slug": "for-production-floor",
    "text": "For Production Floor:"
  }, {
    "depth": 3,
    "slug": "for-production-planning",
    "text": "For Production Planning:"
  }, {
    "depth": 3,
    "slug": "for-quality-control",
    "text": "For Quality Control:"
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
    "slug": "technical-architecture",
    "text": "Technical Architecture"
  }, {
    "depth": 3,
    "slug": "industrial-iot-integration",
    "text": "Industrial IoT Integration"
  }, {
    "depth": 3,
    "slug": "manufacturing-specific-features",
    "text": "Manufacturing-Specific Features"
  }, {
    "depth": 3,
    "slug": "enterprise-integration",
    "text": "Enterprise Integration"
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
    "slug": "strategic-advantages",
    "text": "Strategic Advantages:"
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
    "slug": "future-roadmap",
    "text": "Future Roadmap:"
  }, {
    "depth": 2,
    "slug": "industry-recognition",
    "text": "Industry Recognition"
  }, {
    "depth": 3,
    "slug": "awards--certifications",
    "text": "Awards & Certifications:"
  }, {
    "depth": 2,
    "slug": "success-factors",
    "text": "Success Factors"
  }, {
    "depth": 3,
    "slug": "-manufacturing-expertise",
    "text": "🎯 Manufacturing Expertise"
  }, {
    "depth": 3,
    "slug": "-technology-excellence",
    "text": "💡 Technology Excellence"
  }, {
    "depth": 3,
    "slug": "-implementation-excellence",
    "text": "🤝 Implementation Excellence"
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
        children: "PT Maju Industri Plastik"
      }), " adalah perusahaan manufaktur yang memproduksi kemasan plastik untuk industri makanan dan minuman. Dengan 150 karyawan dan kapasitas produksi 500 ton/bulan, perusahaan menghadapi tantangan dalam mengelola proses produksi yang kompleks dengan sistem manual."]
    }), "\n", createVNode(_components.h3, {
      id: "the-challenge",
      children: "The Challenge"
    }), "\n", createVNode(_components.p, {
      children: "Perusahaan menghadapi berbagai masalah operasional yang menghambat efisiensi:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Manual Production Tracking"
        }), ": Pencatatan produksi masih menggunakan kertas, sulit tracking progress real-time"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Inventory Chaos"
        }), ": Stok raw material dan finished goods tidak akurat, sering stockout atau overstock"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Quality Control Issues"
        }), ": QC manual menyebabkan produk defect lolos ke customer"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Order Management Problems"
        }), ": Kesulitan tracking order status, sering delay delivery"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Resource Planning"
        }), ": Tidak ada planning optimal untuk machine utilization dan workforce"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "our-solution",
      children: "Our Solution"
    }), "\n", createVNode(_components.p, {
      children: ["Tim kotacom.id mengembangkan ", createVNode(_components.strong, {
        children: "Manufacturing ERP System"
      }), " yang comprehensive:"]
    }), "\n", createVNode(_components.h4, {
      id: "-production-planning--control",
      children: ["🏭 ", createVNode(_components.strong, {
        children: "Production Planning & Control"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Master production schedule dengan capacity planning"
      }), "\n", createVNode(_components.li, {
        children: "Work order management dengan real-time tracking"
      }), "\n", createVNode(_components.li, {
        children: "Machine utilization monitoring"
      }), "\n", createVNode(_components.li, {
        children: "Workforce scheduling optimization"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-real-time-production-dashboard",
      children: ["📊 ", createVNode(_components.strong, {
        children: "Real-time Production Dashboard"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Live production status dari setiap line produksi"
      }), "\n", createVNode(_components.li, {
        children: "OEE (Overall Equipment Effectiveness) monitoring"
      }), "\n", createVNode(_components.li, {
        children: "Bottleneck identification dan alert system"
      }), "\n", createVNode(_components.li, {
        children: "Production KPI dashboard untuk management"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-integrated-inventory-management",
      children: ["📦 ", createVNode(_components.strong, {
        children: "Integrated Inventory Management"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Raw material tracking dengan automatic reorder"
      }), "\n", createVNode(_components.li, {
        children: "Work-in-process (WIP) inventory monitoring"
      }), "\n", createVNode(_components.li, {
        children: "Finished goods management dengan FIFO system"
      }), "\n", createVNode(_components.li, {
        children: "Supplier integration untuk procurement automation"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-quality-control-system",
      children: ["🔍 ", createVNode(_components.strong, {
        children: "Quality Control System"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Digital quality checklist dengan photo documentation"
      }), "\n", createVNode(_components.li, {
        children: "Statistical process control (SPC) charts"
      }), "\n", createVNode(_components.li, {
        children: "Non-conformance reporting dan corrective action"
      }), "\n", createVNode(_components.li, {
        children: "Certificate of analysis (CoA) generation"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-order-management",
      children: ["📋 ", createVNode(_components.strong, {
        children: "Order Management"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Customer order tracking dari inquiry sampai delivery"
      }), "\n", createVNode(_components.li, {
        children: "Production scheduling based on order priority"
      }), "\n", createVNode(_components.li, {
        children: "Delivery planning dan logistics coordination"
      }), "\n", createVNode(_components.li, {
        children: "Customer portal untuk order status tracking"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "implementation-process",
      children: "Implementation Process"
    }), "\n", createVNode(_components.h3, {
      id: "week-1-3-system-analysis--design",
      children: "Week 1-3: System Analysis & Design"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Manufacturing process mapping dengan production team"
      }), "\n", createVNode(_components.li, {
        children: "Equipment integration planning (sensors, barcode scanners)"
      }), "\n", createVNode(_components.li, {
        children: "Database design untuk production data"
      }), "\n", createVNode(_components.li, {
        children: "User interface design untuk shop floor workers"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "week-4-8-core-development",
      children: "Week 4-8: Core Development"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Production planning module development"
      }), "\n", createVNode(_components.li, {
        children: "Real-time data collection system"
      }), "\n", createVNode(_components.li, {
        children: "Inventory management system"
      }), "\n", createVNode(_components.li, {
        children: "Quality control digital forms"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "week-9-10-integration--testing",
      children: "Week 9-10: Integration & Testing"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Machine integration dengan IoT sensors"
      }), "\n", createVNode(_components.li, {
        children: "Barcode system implementation"
      }), "\n", createVNode(_components.li, {
        children: "Third-party integration (accounting, CRM)"
      }), "\n", createVNode(_components.li, {
        children: "System testing dengan production data"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "week-11-12-training--go-live",
      children: "Week 11-12: Training & Go-Live"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Comprehensive training untuk all users"
      }), "\n", createVNode(_components.li, {
        children: "Data migration dari sistem lama"
      }), "\n", createVNode(_components.li, {
        children: "Parallel running untuk validation"
      }), "\n", createVNode(_components.li, {
        children: "Go-live dengan 24/7 monitoring support"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "results--impact",
      children: "Results & Impact"
    }), "\n", createVNode(_components.h3, {
      id: "-production-efficiency-improvements",
      children: ["📈 ", createVNode(_components.strong, {
        children: "Production Efficiency Improvements"
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
              children: "Production Lead Time"
            })
          }), createVNode(_components.td, {
            children: "12 days"
          }), createVNode(_components.td, {
            children: "7 days"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-42%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "On-Time Delivery"
            })
          }), createVNode(_components.td, {
            children: "75%"
          }), createVNode(_components.td, {
            children: "95%"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+27%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Machine Utilization"
            })
          }), createVNode(_components.td, {
            children: "65%"
          }), createVNode(_components.td, {
            children: "85%"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+31%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Production Waste"
            })
          }), createVNode(_components.td, {
            children: "25%"
          }), createVNode(_components.td, {
            children: "8%"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-68%"
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
            children: "Revenue Stream"
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
            children: "Rp 2.8 miliar"
          }), createVNode(_components.td, {
            children: "Rp 3.6 miliar"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+29%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Production Cost"
            })
          }), createVNode(_components.td, {
            children: "Rp 2.1 miliar"
          }), createVNode(_components.td, {
            children: "Rp 1.8 miliar"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-14%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Inventory Cost"
            })
          }), createVNode(_components.td, {
            children: "Rp 450 juta"
          }), createVNode(_components.td, {
            children: "Rp 280 juta"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-38%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Net Profit Margin"
            })
          }), createVNode(_components.td, {
            children: "18%"
          }), createVNode(_components.td, {
            children: "35%"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+94%"
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "-operational-excellence",
      children: ["🏭 ", createVNode(_components.strong, {
        children: "Operational Excellence"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Inventory Accuracy"
        }), ": 99.5% (vs 70% before)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Quality Defect Rate"
        }), ": 0.8% (vs 5.2% before)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Customer Complaints"
        }), ": 85% reduction"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Energy Efficiency"
        }), ": 20% reduction in power consumption"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "key-features-delivered",
      children: "Key Features Delivered"
    }), "\n", createVNode(_components.h3, {
      id: "for-production-floor",
      children: createVNode(_components.strong, {
        children: "For Production Floor:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Real-time production tracking dengan barcode"
      }), "\n", createVNode(_components.li, {
        children: "✅ Digital work instructions dan SOPs"
      }), "\n", createVNode(_components.li, {
        children: "✅ Quality control checklist digital"
      }), "\n", createVNode(_components.li, {
        children: "✅ Machine status monitoring dashboard"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "for-production-planning",
      children: createVNode(_components.strong, {
        children: "For Production Planning:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Master production schedule automation"
      }), "\n", createVNode(_components.li, {
        children: "✅ Capacity planning dengan constraint analysis"
      }), "\n", createVNode(_components.li, {
        children: "✅ Material requirement planning (MRP)"
      }), "\n", createVNode(_components.li, {
        children: "✅ Production cost calculation real-time"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "for-quality-control",
      children: createVNode(_components.strong, {
        children: "For Quality Control:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Statistical process control charts"
      }), "\n", createVNode(_components.li, {
        children: "✅ Non-conformance tracking system"
      }), "\n", createVNode(_components.li, {
        children: "✅ Supplier quality rating"
      }), "\n", createVNode(_components.li, {
        children: "✅ Customer complaint management"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "for-management",
      children: createVNode(_components.strong, {
        children: "For Management:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Executive dashboard dengan KPI"
      }), "\n", createVNode(_components.li, {
        children: "✅ Production performance analytics"
      }), "\n", createVNode(_components.li, {
        children: "✅ Cost analysis dan profitability"
      }), "\n", createVNode(_components.li, {
        children: "✅ Predictive maintenance alerts"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "client-testimonial",
      children: "Client Testimonial"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "“Sistem dari KOTACOM mengubah total cara kami mengelola produksi. Sekarang kami bisa track setiap tahap produksi real-time, waste berkurang drastis, dan customer satisfaction naik karena delivery selalu on-time. ROI tercapai dalam 10 bulan!”"
        })
      }), "\n", createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "— Bapak Suryo Hartono, Production Manager PT Maju Industri Plastik"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "technical-architecture",
      children: "Technical Architecture"
    }), "\n", createVNode(_components.h3, {
      id: "industrial-iot-integration",
      children: createVNode(_components.strong, {
        children: "Industrial IoT Integration"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Sensor Integration"
        }), ": Temperature, pressure, vibration monitoring"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Barcode/RFID"
        }), ": Product dan material tracking"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "PLC Integration"
        }), ": Machine data collection"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Real-time Data"
        }), ": MQTT protocol untuk data streaming"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "manufacturing-specific-features",
      children: createVNode(_components.strong, {
        children: "Manufacturing-Specific Features"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Bill of Materials (BOM)"
        }), ": Multi-level BOM management"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Routing"
        }), ": Production step sequencing"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Capacity Planning"
        }), ": Resource constraint optimization"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Shop Floor Control"
        }), ": Work order execution tracking"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "enterprise-integration",
      children: createVNode(_components.strong, {
        children: "Enterprise Integration"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "ERP Integration"
        }), ": SAP, Oracle connector ready"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Accounting"
        }), ": Automatic cost posting"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "CRM Integration"
        }), ": Customer order synchronization"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Supplier Portal"
        }), ": Purchase order automation"]
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
          children: "Production Efficiency"
        }), ": 55% improvement dalam throughput"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Quality Improvement"
        }), ": 85% reduction dalam defect rate"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Inventory Optimization"
        }), ": 40% reduction dalam carrying cost"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Customer Satisfaction"
        }), ": 92% satisfaction score"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "strategic-advantages",
      children: createVNode(_components.strong, {
        children: "Strategic Advantages:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Scalability"
        }), ": System ready untuk expansion ke plant baru"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Compliance"
        }), ": ISO 9001 documentation automation"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Data-Driven Decisions"
        }), ": Real-time analytics untuk optimization"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Competitive Edge"
        }), ": Faster response time untuk customer orders"]
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
          children: "Revenue Growth"
        }), ": Sustained 25-30% annual growth"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Market Expansion"
        }), ": 3 new major customers acquired"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Operational Excellence"
        }), ": 98% on-time delivery rate"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Team Productivity"
        }), ": 60% improvement dalam output per worker"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "future-roadmap",
      children: createVNode(_components.strong, {
        children: "Future Roadmap:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "AI Integration"
        }), ": Predictive quality control"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Advanced Analytics"
        }), ": Machine learning untuk demand forecasting"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Mobile Apps"
        }), ": Manager dashboard untuk remote monitoring"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Supply Chain"
        }), ": Supplier integration untuk just-in-time delivery"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "industry-recognition",
      children: "Industry Recognition"
    }), "\n", createVNode(_components.h3, {
      id: "awards--certifications",
      children: createVNode(_components.strong, {
        children: "Awards & Certifications:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Industry 4.0 Excellence Award"
        }), " - Jawa Timur Manufacturing Association"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Digital Transformation Champion"
        }), " - Indonesia Manufacturing Summit 2024"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "ISO 9001:2015 Compliance"
        }), " - Achieved through system documentation"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Customer Choice Award"
        }), " - 98% customer retention rate"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "success-factors",
      children: "Success Factors"
    }), "\n", createVNode(_components.h3, {
      id: "-manufacturing-expertise",
      children: ["🎯 ", createVNode(_components.strong, {
        children: "Manufacturing Expertise"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Deep understanding of production processes"
      }), "\n", createVNode(_components.li, {
        children: "Industry-specific compliance requirements"
      }), "\n", createVNode(_components.li, {
        children: "Integration dengan existing machinery"
      }), "\n", createVNode(_components.li, {
        children: "24/7 support untuk continuous operations"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "-technology-excellence",
      children: ["💡 ", createVNode(_components.strong, {
        children: "Technology Excellence"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Real-time data processing capabilities"
      }), "\n", createVNode(_components.li, {
        children: "Scalable architecture untuk multi-plant"
      }), "\n", createVNode(_components.li, {
        children: "Robust security untuk industrial data"
      }), "\n", createVNode(_components.li, {
        children: "Integration-ready dengan industry standards"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "-implementation-excellence",
      children: ["🤝 ", createVNode(_components.strong, {
        children: "Implementation Excellence"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Minimal disruption selama implementation"
      }), "\n", createVNode(_components.li, {
        children: "Comprehensive change management"
      }), "\n", createVNode(_components.li, {
        children: "Ongoing optimization dan support"
      }), "\n", createVNode(_components.li, {
        children: "Knowledge transfer ke internal team"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Transform your manufacturing operations like PT Maju Industri Plastik!"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://wa.me/6285799520350",
        rel: "nofollow noopener noreferrer",
        target: "_blank",
        children: createVNode(_components.strong, {
          children: "Konsultasi Gratis"
        })
      }), " - Diskusikan kebutuhan sistem manufaktur Anda dengan industrial technology experts kami!"]
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

const url = "/projects/manufacturing-production-system";
const file = "/workspace/src/pages/projects/manufacturing-production-system.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspace/src/pages/projects/manufacturing-production-system.mdx";
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
