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
  "title": "Sistem Informasi Sekolah - SMA Harapan Bangsa",
  "category": ["Software Development", "Education"],
  "slug": "sistem-informasi-sekolah",
  "imageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "published": "2024-10-20T00:00:00.000Z",
  "country": ["Indonesia"],
  "locale": ["Sidoarjo", "Jawa Timur"],
  "organiser": "kotacom.id",
  "cost": ["15000000", "20000000"],
  "url": "https://sma-harapan-bangsa.sch.id",
  "verify": "Verified Project",
  "client": "SMA Harapan Bangsa",
  "clientIndustry": "Education",
  "projectDuration": "8 minggu",
  "teamSize": "4 orang",
  "technologies": ["Laravel", "MySQL", "Bootstrap", "Chart.js", "API Integration"],
  "challenges": "Sekolah masih menggunakan sistem manual untuk administrasi siswa, nilai, absensi, dan komunikasi dengan orang tua",
  "solutions": "Mengembangkan sistem informasi sekolah terintegrasi dengan modul akademik, administrasi, dan komunikasi",
  "results": "Efisiensi administrasi meningkat 80%, komunikasi orang tua-sekolah lebih baik, dan paperless administration",
  "beforeMetrics": {
    "traffic": "Manual paper-based system",
    "conversions": "5-7 hari proses rapor",
    "revenue": "Administrative cost: Rp 25 juta/semester",
    "performance": "Manual data entry & filing"
  },
  "afterMetrics": {
    "traffic": "Digital system 24/7 access",
    "conversions": "Real-time rapor generation",
    "revenue": "Administrative cost: Rp 8 juta/semester",
    "performance": "Automated processes"
  },
  "roiPercentage": "68%",
  "clientTestimonial": "Sistem dari KOTACOM sangat membantu administrasi sekolah kami. Orang tua bisa langsung lihat nilai dan absensi anak, guru lebih fokus mengajar karena tidak perlu input manual terus-menerus.",
  "clientName": "Drs. Ahmad Wijaya, M.Pd",
  "clientPosition": "Kepala Sekolah SMA Harapan Bangsa",
  "beforeImage": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "afterImage": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "additionalImages": ["https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"]
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
    "slug": "-student-management-system",
    "text": "👨‍🎓 Student Management System"
  }, {
    "depth": 4,
    "slug": "-academic-management",
    "text": "📊 Academic Management"
  }, {
    "depth": 4,
    "slug": "-communication-platform",
    "text": "💬 Communication Platform"
  }, {
    "depth": 4,
    "slug": "-analytics--reporting",
    "text": "📈 Analytics & Reporting"
  }, {
    "depth": 2,
    "slug": "implementation-process",
    "text": "Implementation Process"
  }, {
    "depth": 3,
    "slug": "week-1-2-system-analysis--design",
    "text": "Week 1-2: System Analysis & Design"
  }, {
    "depth": 3,
    "slug": "week-3-5-core-development",
    "text": "Week 3-5: Core Development"
  }, {
    "depth": 3,
    "slug": "week-6-7-integration--testing",
    "text": "Week 6-7: Integration & Testing"
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
    "slug": "-educational-benefits",
    "text": "🎯 Educational Benefits"
  }, {
    "depth": 3,
    "slug": "-user-satisfaction",
    "text": "🌟 User Satisfaction"
  }, {
    "depth": 2,
    "slug": "key-features-delivered",
    "text": "Key Features Delivered"
  }, {
    "depth": 3,
    "slug": "for-teachers",
    "text": "For Teachers:"
  }, {
    "depth": 3,
    "slug": "for-students",
    "text": "For Students:"
  }, {
    "depth": 3,
    "slug": "for-parents",
    "text": "For Parents:"
  }, {
    "depth": 3,
    "slug": "for-administration",
    "text": "For Administration:"
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
    "slug": "backend-technology",
    "text": "Backend Technology"
  }, {
    "depth": 3,
    "slug": "frontend-technology",
    "text": "Frontend Technology"
  }, {
    "depth": 3,
    "slug": "infrastructure",
    "text": "Infrastructure"
  }, {
    "depth": 2,
    "slug": "long-term-impact",
    "text": "Long-term Impact"
  }, {
    "depth": 2,
    "slug": "success-factors",
    "text": "Success Factors"
  }, {
    "depth": 3,
    "slug": "-user-centric-design",
    "text": "🎯 User-Centric Design"
  }, {
    "depth": 3,
    "slug": "-scalable-architecture",
    "text": "💡 Scalable Architecture"
  }, {
    "depth": 3,
    "slug": "-strong-partnership",
    "text": "🤝 Strong Partnership"
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
        children: "SMA Harapan Bangsa"
      }), " adalah sekolah menengah atas swasta di Sidoarjo dengan 850 siswa dan 65 guru. Sekolah ini menghadapi tantangan besar dalam mengelola administrasi akademik yang masih manual dan ingin meningkatkan kualitas layanan pendidikan melalui digitalisasi."]
    }), "\n", createVNode(_components.h3, {
      id: "the-challenge",
      children: "The Challenge"
    }), "\n", createVNode(_components.p, {
      children: "Sekolah menghadapi berbagai masalah operasional:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Manual Administration"
        }), ": Semua data siswa, nilai, dan absensi masih dicatat manual"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Slow Reporting"
        }), ": Pembuatan rapor membutuhkan waktu 1 minggu"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Poor Communication"
        }), ": Komunikasi dengan orang tua hanya via WhatsApp grup"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Data Inconsistency"
        }), ": Sering terjadi kesalahan data karena input manual"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Time Consuming"
        }), ": Guru menghabiskan banyak waktu untuk administrasi"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "our-solution",
      children: "Our Solution"
    }), "\n", createVNode(_components.p, {
      children: ["Tim kotacom.id mengembangkan ", createVNode(_components.strong, {
        children: "Sistem Informasi Sekolah Terintegrasi"
      }), " dengan fitur:"]
    }), "\n", createVNode(_components.h4, {
      id: "-student-management-system",
      children: ["👨‍🎓 ", createVNode(_components.strong, {
        children: "Student Management System"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Database siswa lengkap dengan foto dan biodata"
      }), "\n", createVNode(_components.li, {
        children: "Tracking academic progress dan prestasi"
      }), "\n", createVNode(_components.li, {
        children: "Sistem absensi digital dengan QR code"
      }), "\n", createVNode(_components.li, {
        children: "Parent portal untuk monitoring"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-academic-management",
      children: ["📊 ", createVNode(_components.strong, {
        children: "Academic Management"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Input nilai online oleh guru"
      }), "\n", createVNode(_components.li, {
        children: "Automatic grade calculation & ranking"
      }), "\n", createVNode(_components.li, {
        children: "Digital report card generation"
      }), "\n", createVNode(_components.li, {
        children: "Jadwal pelajaran dinamis"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-communication-platform",
      children: ["💬 ", createVNode(_components.strong, {
        children: "Communication Platform"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Announcement system untuk sekolah"
      }), "\n", createVNode(_components.li, {
        children: "Direct messaging guru-orang tua"
      }), "\n", createVNode(_components.li, {
        children: "Event calendar & notification"
      }), "\n", createVNode(_components.li, {
        children: "Emergency alert system"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "-analytics--reporting",
      children: ["📈 ", createVNode(_components.strong, {
        children: "Analytics & Reporting"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Real-time academic analytics"
      }), "\n", createVNode(_components.li, {
        children: "Attendance reports & statistics"
      }), "\n", createVNode(_components.li, {
        children: "Performance tracking dashboard"
      }), "\n", createVNode(_components.li, {
        children: "Custom report generator"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "implementation-process",
      children: "Implementation Process"
    }), "\n", createVNode(_components.h3, {
      id: "week-1-2-system-analysis--design",
      children: "Week 1-2: System Analysis & Design"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Requirements gathering dengan stakeholders"
      }), "\n", createVNode(_components.li, {
        children: "Database design & system architecture"
      }), "\n", createVNode(_components.li, {
        children: "UI/UX mockups untuk semua user roles"
      }), "\n", createVNode(_components.li, {
        children: "Security & access control planning"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "week-3-5-core-development",
      children: "Week 3-5: Core Development"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Backend API development dengan Laravel"
      }), "\n", createVNode(_components.li, {
        children: "Database implementation & optimization"
      }), "\n", createVNode(_components.li, {
        children: "Admin panel & teacher dashboard"
      }), "\n", createVNode(_components.li, {
        children: "Student & parent portal development"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "week-6-7-integration--testing",
      children: "Week 6-7: Integration & Testing"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Payment gateway integration (SPP)"
      }), "\n", createVNode(_components.li, {
        children: "SMS & email notification system"
      }), "\n", createVNode(_components.li, {
        children: "Mobile responsive optimization"
      }), "\n", createVNode(_components.li, {
        children: "Comprehensive system testing"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "week-8-training--go-live",
      children: "Week 8: Training & Go-Live"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Staff training & documentation"
      }), "\n", createVNode(_components.li, {
        children: "Data migration dari sistem lama"
      }), "\n", createVNode(_components.li, {
        children: "Soft launch & user feedback"
      }), "\n", createVNode(_components.li, {
        children: "Full deployment & monitoring"
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
              children: "Report Card Generation"
            })
          }), createVNode(_components.td, {
            children: "7 days"
          }), createVNode(_components.td, {
            children: "2 hours"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-97%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Data Entry Time"
            })
          }), createVNode(_components.td, {
            children: "4 hours/day"
          }), createVNode(_components.td, {
            children: "30 minutes/day"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-87%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Administrative Cost"
            })
          }), createVNode(_components.td, {
            children: "Rp 25 juta/semester"
          }), createVNode(_components.td, {
            children: "Rp 8 juta/semester"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-68%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Parent Communication"
            })
          }), createVNode(_components.td, {
            children: "Manual calls"
          }), createVNode(_components.td, {
            children: "Instant digital"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Real-time"
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "-educational-benefits",
      children: ["🎯 ", createVNode(_components.strong, {
        children: "Educational Benefits"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Teacher Productivity"
        }), ": 70% more time for actual teaching"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Student Engagement"
        }), ": Real-time access to grades & assignments"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Parent Involvement"
        }), ": 85% parents actively monitor via portal"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Data Accuracy"
        }), ": 99.5% accuracy vs 85% manual system"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "-user-satisfaction",
      children: ["🌟 ", createVNode(_components.strong, {
        children: "User Satisfaction"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Teachers"
        }), ": 92% satisfaction rate"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Parents"
        }), ": 88% find system helpful"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Students"
        }), ": 90% prefer digital system"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Administration"
        }), ": 95% efficiency improvement"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "key-features-delivered",
      children: "Key Features Delivered"
    }), "\n", createVNode(_components.h3, {
      id: "for-teachers",
      children: createVNode(_components.strong, {
        children: "For Teachers:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Digital gradebook & attendance"
      }), "\n", createVNode(_components.li, {
        children: "✅ Lesson plan management"
      }), "\n", createVNode(_components.li, {
        children: "✅ Student progress tracking"
      }), "\n", createVNode(_components.li, {
        children: "✅ Parent communication tools"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "for-students",
      children: createVNode(_components.strong, {
        children: "For Students:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Personal academic dashboard"
      }), "\n", createVNode(_components.li, {
        children: "✅ Assignment submission portal"
      }), "\n", createVNode(_components.li, {
        children: "✅ Grade & attendance history"
      }), "\n", createVNode(_components.li, {
        children: "✅ School announcements"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "for-parents",
      children: createVNode(_components.strong, {
        children: "For Parents:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Real-time student monitoring"
      }), "\n", createVNode(_components.li, {
        children: "✅ Direct teacher communication"
      }), "\n", createVNode(_components.li, {
        children: "✅ Payment tracking (SPP)"
      }), "\n", createVNode(_components.li, {
        children: "✅ Event & schedule updates"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "for-administration",
      children: createVNode(_components.strong, {
        children: "For Administration:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Complete school management"
      }), "\n", createVNode(_components.li, {
        children: "✅ Financial reporting"
      }), "\n", createVNode(_components.li, {
        children: "✅ Staff management system"
      }), "\n", createVNode(_components.li, {
        children: "✅ Analytics dashboard"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "client-testimonial",
      children: "Client Testimonial"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "“Sistem dari KOTACOM sangat membantu administrasi sekolah kami. Orang tua bisa langsung lihat nilai dan absensi anak, guru lebih fokus mengajar karena tidak perlu input manual terus-menerus. ROI-nya jelas terasa dalam 6 bulan pertama.”"
        })
      }), "\n", createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "— Drs. Ahmad Wijaya, M.Pd, Kepala Sekolah SMA Harapan Bangsa"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "technical-architecture",
      children: "Technical Architecture"
    }), "\n", createVNode(_components.h3, {
      id: "backend-technology",
      children: createVNode(_components.strong, {
        children: "Backend Technology"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Framework"
        }), ": Laravel 10 with PHP 8.2"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Database"
        }), ": MySQL 8.0 with optimized indexing"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "API"
        }), ": RESTful API with JWT authentication"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Security"
        }), ": Role-based access control, data encryption"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "frontend-technology",
      children: createVNode(_components.strong, {
        children: "Frontend Technology"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "UI Framework"
        }), ": Bootstrap 5 with custom CSS"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "JavaScript"
        }), ": Vanilla JS with Chart.js for analytics"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Responsive"
        }), ": Mobile-first design approach"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "PWA"
        }), ": Progressive Web App capabilities"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "infrastructure",
      children: createVNode(_components.strong, {
        children: "Infrastructure"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Hosting"
        }), ": Cloud VPS with daily backups"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Security"
        }), ": SSL certificate, firewall protection"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Performance"
        }), ": Redis caching, CDN integration"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Monitoring"
        }), ": 24/7 uptime monitoring"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "long-term-impact",
      children: "Long-term Impact"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "1 Year Later:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Paper Reduction"
        }), ": 90% less paper usage"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cost Savings"
        }), ": Rp 100+ juta saved annually"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Academic Performance"
        }), ": 15% improvement in average grades"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Parent Engagement"
        }), ": 3x increase in parent-teacher interactions"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "success-factors",
      children: "Success Factors"
    }), "\n", createVNode(_components.h3, {
      id: "-user-centric-design",
      children: ["🎯 ", createVNode(_components.strong, {
        children: "User-Centric Design"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Extensive stakeholder consultation"
      }), "\n", createVNode(_components.li, {
        children: "Intuitive interface for all user types"
      }), "\n", createVNode(_components.li, {
        children: "Comprehensive training program"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "-scalable-architecture",
      children: ["💡 ", createVNode(_components.strong, {
        children: "Scalable Architecture"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Built for future growth & features"
      }), "\n", createVNode(_components.li, {
        children: "API-first approach for integrations"
      }), "\n", createVNode(_components.li, {
        children: "Modular design for easy updates"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "-strong-partnership",
      children: ["🤝 ", createVNode(_components.strong, {
        children: "Strong Partnership"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Ongoing technical support"
      }), "\n", createVNode(_components.li, {
        children: "Regular feature updates"
      }), "\n", createVNode(_components.li, {
        children: "Performance optimization"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Transform your school’s administration like SMA Harapan Bangsa!"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://wa.me/6285799520350",
        rel: "nofollow noopener noreferrer",
        target: "_blank",
        children: createVNode(_components.strong, {
          children: "Konsultasi Gratis"
        })
      }), " - Diskusikan kebutuhan sistem informasi sekolah Anda dengan expert kami!"]
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

const url = "/projects/sistem-informasi-sekolah";
const file = "/workspace/src/pages/projects/sistem-informasi-sekolah.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspace/src/pages/projects/sistem-informasi-sekolah.mdx";
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
