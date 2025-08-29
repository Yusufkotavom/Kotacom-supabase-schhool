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
  "title": "IT Infrastructure Upgrade - CV Maju Bersama",
  "category": ["IT Support", "Infrastructure"],
  "slug": "it-infrastructure-upgrade",
  "imageUrl": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "published": "2024-12-01T00:00:00.000Z",
  "country": ["Indonesia"],
  "locale": ["Surabaya", "Jawa Timur"],
  "organiser": "kotacom.id",
  "cost": ["25000000", "35000000"],
  "url": "https://cvmajubersama.com",
  "verify": "Verified Project",
  "client": "CV Maju Bersama",
  "clientIndustry": "Trading & Distribution",
  "projectDuration": "4 minggu",
  "teamSize": "3 orang",
  "technologies": ["Windows Server 2022", "Mikrotik", "Ubiquiti", "Office 365", "Backup Solutions"],
  "challenges": "Infrastruktur IT yang sudah berusia 8 tahun sering down, keamanan data lemah, dan produktivitas karyawan terhambat",
  "solutions": "Complete IT infrastructure overhaul dengan server baru, network upgrade, security enhancement, dan cloud migration",
  "results": "99.8% uptime, produktivitas meningkat 60%, keamanan data terjamin, dan biaya maintenance turun 40%",
  "beforeMetrics": {
    "traffic": "Network downtime: 15-20 jam/bulan",
    "conversions": "Data loss incidents: 3-5/tahun",
    "revenue": "IT maintenance: Rp 12 juta/bulan",
    "performance": "System response: 5-8 detik"
  },
  "afterMetrics": {
    "traffic": "Network downtime: 2-3 jam/bulan",
    "conversions": "Data loss incidents: 0/tahun",
    "revenue": "IT maintenance: Rp 7 juta/bulan",
    "performance": "System response: 1-2 detik"
  },
  "roiPercentage": "180%",
  "clientTestimonial": "Upgrade IT dari KOTACOM benar-benar game changer untuk perusahaan kami. Sistem jarang down, karyawan lebih produktif, dan kami tidak khawatir lagi soal kehilangan data penting.",
  "clientName": "Bapak Suryanto",
  "clientPosition": "Direktur CV Maju Bersama",
  "beforeImage": "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "afterImage": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "additionalImages": ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"]
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
    "slug": "️-server-infrastructure-upgrade",
    "text": "🖥️ Server Infrastructure Upgrade"
  }, {
    "depth": 4,
    "slug": "-network-infrastructure-overhaul",
    "text": "🌐 Network Infrastructure Overhaul"
  }, {
    "depth": 4,
    "slug": "-security-enhancement",
    "text": "🔒 Security Enhancement"
  }, {
    "depth": 4,
    "slug": "️-cloud-integration--backup",
    "text": "☁️ Cloud Integration & Backup"
  }, {
    "depth": 2,
    "slug": "implementation-timeline",
    "text": "Implementation Timeline"
  }, {
    "depth": 3,
    "slug": "week-1-infrastructure-assessment--procurement",
    "text": "Week 1: Infrastructure Assessment & Procurement"
  }, {
    "depth": 3,
    "slug": "week-2-core-infrastructure-setup",
    "text": "Week 2: Core Infrastructure Setup"
  }, {
    "depth": 3,
    "slug": "week-3-migration--integration",
    "text": "Week 3: Migration & Integration"
  }, {
    "depth": 3,
    "slug": "week-4-testing--go-live",
    "text": "Week 4: Testing & Go-Live"
  }, {
    "depth": 2,
    "slug": "results--impact",
    "text": "Results & Impact"
  }, {
    "depth": 3,
    "slug": "-system-performance-improvements",
    "text": "📈 System Performance Improvements"
  }, {
    "depth": 3,
    "slug": "-cost-savings--roi",
    "text": "💰 Cost Savings & ROI"
  }, {
    "depth": 3,
    "slug": "-business-benefits",
    "text": "🎯 Business Benefits"
  }, {
    "depth": 2,
    "slug": "key-features-implemented",
    "text": "Key Features Implemented"
  }, {
    "depth": 3,
    "slug": "server--infrastructure",
    "text": "Server & Infrastructure:"
  }, {
    "depth": 3,
    "slug": "network--connectivity",
    "text": "Network & Connectivity:"
  }, {
    "depth": 3,
    "slug": "security--backup",
    "text": "Security & Backup:"
  }, {
    "depth": 3,
    "slug": "software--productivity",
    "text": "Software & Productivity:"
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
    "slug": "hardware-deployed",
    "text": "Hardware Deployed"
  }, {
    "depth": 3,
    "slug": "software-stack",
    "text": "Software Stack"
  }, {
    "depth": 3,
    "slug": "network-infrastructure",
    "text": "Network Infrastructure"
  }, {
    "depth": 2,
    "slug": "long-term-partnership",
    "text": "Long-term Partnership"
  }, {
    "depth": 3,
    "slug": "ongoing-support-services",
    "text": "Ongoing Support Services:"
  }, {
    "depth": 3,
    "slug": "future-roadmap",
    "text": "Future Roadmap:"
  }, {
    "depth": 2,
    "slug": "success-metrics-6-months-later",
    "text": "Success Metrics (6 Months Later)"
  }, {
    "depth": 3,
    "slug": "operational-excellence",
    "text": "Operational Excellence:"
  }, {
    "depth": 3,
    "slug": "business-growth",
    "text": "Business Growth:"
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
        children: "CV Maju Bersama"
      }), " adalah perusahaan trading dan distribusi dengan 45 karyawan yang telah beroperasi selama 12 tahun. Mereka menghadapi masalah serius dengan infrastruktur IT yang sudah ketinggalan zaman dan sering mengalami gangguan yang menghambat operasional bisnis."]
    }), "\n", createVNode(_components.h3, {
      id: "the-challenge",
      children: "The Challenge"
    }), "\n", createVNode(_components.p, {
      children: "Perusahaan menghadapi berbagai masalah IT kritis:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Frequent System Downtime"
        }), ": Server sering down 15-20 jam per bulan"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Outdated Infrastructure"
        }), ": Hardware berusia 8+ tahun, OS Windows Server 2012"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Security Vulnerabilities"
        }), ": Tidak ada proper firewall dan antivirus enterprise"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Data Loss Risk"
        }), ": Backup system tidak reliable, pernah kehilangan data"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Poor Network Performance"
        }), ": Internet lambat, file sharing bermasalah"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "High Maintenance Cost"
        }), ": Biaya perbaikan tinggi karena hardware tua"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "our-solution",
      children: "Our Solution"
    }), "\n", createVNode(_components.p, {
      children: ["Tim kotacom.id merancang ", createVNode(_components.strong, {
        children: "Complete IT Infrastructure Transformation"
      }), ":"]
    }), "\n", createVNode(_components.h4, {
      id: "️-server-infrastructure-upgrade",
      children: ["🖥️ ", createVNode(_components.strong, {
        children: "Server Infrastructure Upgrade"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "New Windows Server 2022 dengan SSD storage"
      }), "\n", createVNode(_components.li, {
        children: "Virtualization dengan Hyper-V untuk efficiency"
      }), "\n", createVNode(_components.li, {
        children: "Active Directory implementation"
      }), "\n", createVNode(_components.li, {
        children: "SQL Server 2022 untuk database management"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-network-infrastructure-overhaul",
      children: ["🌐 ", createVNode(_components.strong, {
        children: "Network Infrastructure Overhaul"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Fiber optic internet upgrade (100 Mbps dedicated)"
      }), "\n", createVNode(_components.li, {
        children: "Mikrotik router dengan load balancing"
      }), "\n", createVNode(_components.li, {
        children: "Ubiquiti access points untuk WiFi coverage"
      }), "\n", createVNode(_components.li, {
        children: "Structured cabling dengan Cat6 cables"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-security-enhancement",
      children: ["🔒 ", createVNode(_components.strong, {
        children: "Security Enhancement"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Enterprise firewall dengan intrusion detection"
      }), "\n", createVNode(_components.li, {
        children: "Endpoint protection untuk semua workstations"
      }), "\n", createVNode(_components.li, {
        children: "VPN setup untuk remote access"
      }), "\n", createVNode(_components.li, {
        children: "Regular security updates & patches"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "️-cloud-integration--backup",
      children: ["☁️ ", createVNode(_components.strong, {
        children: "Cloud Integration & Backup"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Office 365 migration untuk email & collaboration"
      }), "\n", createVNode(_components.li, {
        children: "Automated daily backup to cloud storage"
      }), "\n", createVNode(_components.li, {
        children: "Disaster recovery planning"
      }), "\n", createVNode(_components.li, {
        children: "File synchronization across devices"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "implementation-timeline",
      children: "Implementation Timeline"
    }), "\n", createVNode(_components.h3, {
      id: "week-1-infrastructure-assessment--procurement",
      children: "Week 1: Infrastructure Assessment & Procurement"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Day 1-2"
        }), ": Complete IT audit & documentation"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Day 3-5"
        }), ": Hardware procurement & delivery"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Day 6-7"
        }), ": Network design & cable preparation"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "week-2-core-infrastructure-setup",
      children: "Week 2: Core Infrastructure Setup"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Day 8-10"
        }), ": Server installation & configuration"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Day 11-12"
        }), ": Network equipment deployment"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Day 13-14"
        }), ": Initial testing & optimization"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "week-3-migration--integration",
      children: "Week 3: Migration & Integration"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Day 15-17"
        }), ": Data migration from old systems"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Day 18-19"
        }), ": Office 365 setup & email migration"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Day 20-21"
        }), ": User account creation & permissions"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "week-4-testing--go-live",
      children: "Week 4: Testing & Go-Live"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Day 22-24"
        }), ": Comprehensive system testing"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Day 25-26"
        }), ": Staff training & documentation"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Day 27-28"
        }), ": Final deployment & monitoring"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "results--impact",
      children: "Results & Impact"
    }), "\n", createVNode(_components.h3, {
      id: "-system-performance-improvements",
      children: ["📈 ", createVNode(_components.strong, {
        children: "System Performance Improvements"
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
              children: "Network Uptime"
            })
          }), createVNode(_components.td, {
            children: "85%"
          }), createVNode(_components.td, {
            children: "99.8%"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+17%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "System Response Time"
            })
          }), createVNode(_components.td, {
            children: "5-8 seconds"
          }), createVNode(_components.td, {
            children: "1-2 seconds"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-75%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Data Loss Incidents"
            })
          }), createVNode(_components.td, {
            children: "3-5/year"
          }), createVNode(_components.td, {
            children: "0/year"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-100%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Monthly Downtime"
            })
          }), createVNode(_components.td, {
            children: "15-20 hours"
          }), createVNode(_components.td, {
            children: "2-3 hours"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-85%"
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "-cost-savings--roi",
      children: ["💰 ", createVNode(_components.strong, {
        children: "Cost Savings & ROI"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Cost Category"
          }), createVNode(_components.th, {
            children: "Before"
          }), createVNode(_components.th, {
            children: "After"
          }), createVNode(_components.th, {
            children: "Savings"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Monthly IT Maintenance"
            })
          }), createVNode(_components.td, {
            children: "Rp 12 juta"
          }), createVNode(_components.td, {
            children: "Rp 7 juta"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Rp 5 juta"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Downtime Cost"
            })
          }), createVNode(_components.td, {
            children: "Rp 8 juta/bulan"
          }), createVNode(_components.td, {
            children: "Rp 1 juta/bulan"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Rp 7 juta"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Data Recovery"
            })
          }), createVNode(_components.td, {
            children: "Rp 15 juta/year"
          }), createVNode(_components.td, {
            children: "Rp 0"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Rp 15 juta"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Total Annual Savings"
            })
          }), createVNode(_components.td, {
            children: "-"
          }), createVNode(_components.td, {
            children: "-"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Rp 159 juta"
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "-business-benefits",
      children: ["🎯 ", createVNode(_components.strong, {
        children: "Business Benefits"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Employee Productivity"
        }), ": 60% increase in work efficiency"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Customer Service"
        }), ": Faster response times, better reliability"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Business Continuity"
        }), ": 99.8% system availability"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Scalability"
        }), ": Infrastructure ready for business growth"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "key-features-implemented",
      children: "Key Features Implemented"
    }), "\n", createVNode(_components.h3, {
      id: "server--infrastructure",
      children: createVNode(_components.strong, {
        children: "Server & Infrastructure:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Windows Server 2022 with latest security patches"
      }), "\n", createVNode(_components.li, {
        children: "✅ SSD storage arrays for faster performance"
      }), "\n", createVNode(_components.li, {
        children: "✅ Virtualization for resource optimization"
      }), "\n", createVNode(_components.li, {
        children: "✅ UPS systems for power protection"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "network--connectivity",
      children: createVNode(_components.strong, {
        children: "Network & Connectivity:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Fiber optic internet with failover backup"
      }), "\n", createVNode(_components.li, {
        children: "✅ Enterprise-grade WiFi coverage"
      }), "\n", createVNode(_components.li, {
        children: "✅ VPN for secure remote access"
      }), "\n", createVNode(_components.li, {
        children: "✅ Network monitoring & management"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "security--backup",
      children: createVNode(_components.strong, {
        children: "Security & Backup:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Multi-layered security protection"
      }), "\n", createVNode(_components.li, {
        children: "✅ Automated daily cloud backups"
      }), "\n", createVNode(_components.li, {
        children: "✅ Disaster recovery procedures"
      }), "\n", createVNode(_components.li, {
        children: "✅ Employee security training"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "software--productivity",
      children: createVNode(_components.strong, {
        children: "Software & Productivity:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Office 365 Business Premium"
      }), "\n", createVNode(_components.li, {
        children: "✅ Enterprise antivirus & endpoint protection"
      }), "\n", createVNode(_components.li, {
        children: "✅ File sharing & collaboration tools"
      }), "\n", createVNode(_components.li, {
        children: "✅ Remote desktop solutions"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "client-testimonial",
      children: "Client Testimonial"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "“Upgrade IT dari KOTACOM benar-benar game changer untuk perusahaan kami. Sistem jarang down, karyawan lebih produktif, dan kami tidak khawatir lagi soal kehilangan data penting. Investment yang sangat worth it!”"
        })
      }), "\n", createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "— Bapak Suryanto, Direktur CV Maju Bersama"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "technical-specifications",
      children: "Technical Specifications"
    }), "\n", createVNode(_components.h3, {
      id: "hardware-deployed",
      children: createVNode(_components.strong, {
        children: "Hardware Deployed"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Server"
        }), ": Dell PowerEdge T340 with Intel Xeon processor"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Storage"
        }), ": 2TB SSD RAID configuration"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Network"
        }), ": Mikrotik RB4011 + Ubiquiti UniFi access points"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Security"
        }), ": SonicWall firewall with advanced threat protection"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "software-stack",
      children: createVNode(_components.strong, {
        children: "Software Stack"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "OS"
        }), ": Windows Server 2022 Standard"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Virtualization"
        }), ": Hyper-V with backup solutions"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Productivity"
        }), ": Office 365 Business Premium"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Security"
        }), ": Kaspersky Endpoint Security + SonicWall"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "network-infrastructure",
      children: createVNode(_components.strong, {
        children: "Network Infrastructure"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Internet"
        }), ": Fiber optic 100/100 Mbps dedicated"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Internal"
        }), ": Gigabit Ethernet with Cat6 cabling"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "WiFi"
        }), ": Enterprise-grade with guest network separation"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Backup"
        }), ": 4G LTE failover connection"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "long-term-partnership",
      children: "Long-term Partnership"
    }), "\n", createVNode(_components.h3, {
      id: "ongoing-support-services",
      children: createVNode(_components.strong, {
        children: "Ongoing Support Services:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "24/7 remote monitoring & support"
      }), "\n", createVNode(_components.li, {
        children: "Monthly maintenance & optimization visits"
      }), "\n", createVNode(_components.li, {
        children: "Quarterly security assessments"
      }), "\n", createVNode(_components.li, {
        children: "Annual infrastructure health checks"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "future-roadmap",
      children: createVNode(_components.strong, {
        children: "Future Roadmap:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Cloud server migration planning"
      }), "\n", createVNode(_components.li, {
        children: "Additional branch office connectivity"
      }), "\n", createVNode(_components.li, {
        children: "Advanced analytics & reporting tools"
      }), "\n", createVNode(_components.li, {
        children: "Cybersecurity training programs"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "success-metrics-6-months-later",
      children: "Success Metrics (6 Months Later)"
    }), "\n", createVNode(_components.h3, {
      id: "operational-excellence",
      children: createVNode(_components.strong, {
        children: "Operational Excellence:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Zero"
        }), " unplanned downtime incidents"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "95%"
        }), " employee satisfaction with IT systems"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "40%"
        }), " reduction in IT support tickets"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "100%"
        }), " successful backup recovery tests"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "business-growth",
      children: createVNode(_components.strong, {
        children: "Business Growth:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "25%"
        }), " increase in operational efficiency"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "15%"
        }), " faster customer response times"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "30%"
        }), " improvement in data accuracy"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Ready"
        }), " for business expansion"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Transform your business IT infrastructure like CV Maju Bersama!"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://wa.me/6285799520350",
        rel: "nofollow noopener noreferrer",
        target: "_blank",
        children: createVNode(_components.strong, {
          children: "Konsultasi Gratis"
        })
      }), " - Audit IT infrastructure Anda dan dapatkan solusi upgrade terbaik!"]
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

const url = "/projects/it-infrastructure-upgrade";
const file = "/workspace/src/pages/projects/it-infrastructure-upgrade.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspace/src/pages/projects/it-infrastructure-upgrade.mdx";
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
