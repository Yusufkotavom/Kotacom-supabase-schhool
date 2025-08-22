# 🚀 KOTACOM.ID - IT Service & Publications Website

[![Astro](https://img.shields.io/badge/Astro-5.10.0-FF5D01?logo=astro&logoColor=white)](https://astro.build/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Website perusahaan IT Service & Publications yang dibangun dengan Astro sebagai static site generator dan Supabase sebagai database backend. Mendukung multi-source content (MDX + Database) dengan performa optimal dan SEO-friendly.

## 📋 Fitur Utama

- ✨ **Static Site Generation** - Performa optimal dengan Astro
- 🗄️ **Multi-source Content** - MDX files + Supabase database
- 📱 **Responsive Design** - Mobile-first dengan Tailwind CSS
- 🔍 **SEO Optimized** - Schema markup, sitemap, meta tags
- 🌙 **Dark Mode** - Theme switcher dengan persistence
- 🔎 **Full-text Search** - Pagefind integration
- 📊 **Analytics** - Vercel Analytics & Speed Insights
- 🚀 **Performance** - Image optimization, lazy loading, code splitting

## 🏗️ Arsitektur Project

```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│   Supabase  │    │     Astro    │    │   Static    │
│ (PostgreSQL)├───►│ (Build Time) ├───►│    Site     │
└─────────────┘    └──────────────┘    └─────────────┘
       │                    │                   │
       ▼                    ▼                   ▼
   Database             Data Fetch         Optimized
   Junction Tables      Normalization      HTML/CSS/JS
   RLS Policies         Component Render   CDN Ready
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ dan npm/pnpm
- Supabase account dan project
- Git

### Installation

```bash
# Clone repository
git clone <repository-url>
cd kotacom-site

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env dengan Supabase credentials Anda

# Start development server
npm run dev
```

### Environment Variables

```env
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Site Configuration  
SITE_URL=https://kotacom.id
```

## 📚 Dokumentasi Lengkap

### 📖 Dokumentasi Utama
- **[PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)** - Panduan lengkap project untuk AI
- **[AI_DEVELOPMENT_GUIDE.md](./AI_DEVELOPMENT_GUIDE.md)** - Panduan khusus untuk AI assistant
- **[COMPONENT_RELATIONSHIPS.md](./COMPONENT_RELATIONSHIPS.md)** - Relasi dan interaksi komponen
- **[ROUTING_GUIDE.md](./ROUTING_GUIDE.md)** - Sistem routing dan navigasi
- **[SUPABASE_INTEGRATION.md](./SUPABASE_INTEGRATION.md)** - Integrasi database Supabase

### 🎯 Untuk AI Assistant
Jika Anda adalah AI assistant yang akan membantu development project ini:

1. **Mulai dengan**: `PROJECT_DOCUMENTATION.md` untuk overview lengkap
2. **Lanjut ke**: `AI_DEVELOPMENT_GUIDE.md` untuk workflow dan patterns
3. **Referensi**: File dokumentasi lainnya sesuai kebutuhan task

### 🧑‍💻 Untuk Developer
Jika Anda developer yang akan bekerja dengan project ini:

1. **Setup**: Ikuti instruksi Quick Start di atas
2. **Arsitektur**: Baca `PROJECT_DOCUMENTATION.md` bagian 2-3
3. **Development**: Ikuti `AI_DEVELOPMENT_GUIDE.md` bagian workflow
4. **Troubleshooting**: Gunakan panduan debugging di dokumentasi

## 🛠️ Scripts Available

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview build locally

# Optimization
npm run build:optimized # Build dengan image optimization
npm run optimize-images # Optimize images saja

# Quality Assurance
npm run lint            # Check code quality
npm run lint:fix        # Fix linting issues
npm run analyze         # Bundle size analysis
npm run performance     # Lighthouse audit
```

## 🏛️ Struktur Project

```
src/
├── assets/              # Static assets (images, logos)
├── components/          # Reusable UI components
│   ├── Homepage/       # Homepage-specific components
│   ├── Popups/         # Modal dan drawer components
│   └── *.astro         # General components
├── data/               # Configuration files
├── layouts/            # Page layout templates
├── lib/                # Utility functions
│   └── supabase-direct.ts  # Supabase integration
├── pages/              # File-based routing
│   ├── posts/         # Blog posts (MDX)
│   ├── services/      # Service pages
│   ├── products/      # Product pages
│   └── projects/      # Project pages
└── styles/             # Global styles
```

## 🗄️ Entitas Data

### Entitas Utama
- **Posts** - Artikel dan blog posts
- **Services** - Layanan IT yang ditawarkan  
- **Products** - Produk digital dan software
- **Projects** - Portfolio dan case studies

### Database Schema (Supabase)
```sql
-- Main tables
posts (id, title, slug, body, published, status, author)
services (id, title, slug, provider, price, wilayah, status)
products (id, title, slug, price, country, locale, status)
projects (id, title, slug, organiser, body, image_url, published)

-- Junction tables (Many-to-Many)
posts_tags (_parent_id, value, _order)
posts_categories (_parent_id, value, _order)
services_tags (_parent_id, value, _order)
services_categories (_parent_id, value, _order)
```

## 🔧 Teknologi & Dependencies

### Core Framework
- **Astro 5.10.0** - Static site generator
- **TypeScript** - Type safety
- **Tailwind CSS 4.1.3** - Styling framework

### Database & Content
- **Supabase** - PostgreSQL database
- **MDX** - Markdown dengan JSX
- **Zod** - Schema validation

### UI & UX
- **Flowbite** - UI components
- **Lucide Icons** - Icon system
- **Pagefind** - Client-side search

### Performance & SEO
- **Sharp** - Image optimization
- **Marked.js** - Markdown processing
- **Vercel Analytics** - Performance tracking

## 🔄 Development Workflow

### 1. Menambah Konten Baru
```bash
# Untuk konten statis (jarang berubah)
1. Buat file MDX di pages/entity/
2. Update content.config.ts jika perlu schema baru
3. Test dengan npm run dev

# Untuk konten dinamis (sering berubah)
1. Tambah data di Supabase dashboard
2. Update TypeScript interface jika perlu field baru
3. Test dengan npm run dev
```

### 2. Menambah Komponen Baru
```bash
1. Buat file .astro di src/components/
2. Define Props interface dengan TypeScript
3. Import di parent component
4. Test responsive design dan dark mode
5. Update dokumentasi jika perlu
```

### 3. Deploy ke Production
```bash
1. npm run build          # Build static site
2. npm run preview        # Test build locally
3. git push origin main   # Deploy via Netlify/Vercel
```

## 🎯 Use Cases & Target Audience

### Business Use Cases
- **IT Service Company** - Showcase layanan IT profesional
- **Digital Agency** - Portfolio website development
- **Content Publishing** - Blog dan artikel teknologi
- **Lead Generation** - WhatsApp integration untuk inquiry

### Technical Use Cases
- **Multi-source CMS** - MDX + Database content management
- **SEO-focused Website** - Optimal search engine visibility
- **Performance-critical Site** - Fast loading untuk user experience
- **Scalable Architecture** - Easy content addition dan modification

## 🤝 Contributing

### Untuk AI Assistant
1. Baca `AI_DEVELOPMENT_GUIDE.md` terlebih dahulu
2. Ikuti patterns dan workflows yang sudah ada
3. Update dokumentasi jika menambah fitur baru
4. Test thoroughly sebelum commit

### Untuk Human Developer
1. Fork repository
2. Create feature branch
3. Follow existing code patterns
4. Update documentation
5. Test changes
6. Submit pull request

## 📊 Performance Metrics

### Core Web Vitals Target
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms  
- **CLS (Cumulative Layout Shift)**: < 0.1

### Current Performance
- **Homepage**: ~1.2s load time
- **Blog Posts**: ~0.8s load time
- **Service Pages**: ~1.0s load time
- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)

## 🔐 Security & Privacy

### Data Security
- **Row Level Security (RLS)** enabled di Supabase
- **Environment variables** untuk sensitive data
- **Content sanitization** untuk user input
- **HTTPS enforcement** di production

### Privacy Compliance
- **Cookie consent** untuk analytics
- **Privacy policy** tersedia di `/privacy`
- **Data minimization** - hanya collect data yang diperlukan
- **User control** - opt-out options tersedia

## 🚨 Troubleshooting

### Common Issues

| Issue | Quick Fix |
|-------|-----------|
| Data tidak muncul | Check Supabase RLS policies |
| Build gagal | Run `npm run lint:fix` |
| Images tidak load | Check image URLs dan CDN |
| Navigation error | Verify mega-menu-config.ts |
| Performance issues | Run `npm run analyze` |

### Debug Commands
```bash
# Check environment
echo $SUPABASE_URL

# Test Supabase connection
curl -H "apikey: $SUPABASE_ANON_KEY" "$SUPABASE_URL/rest/v1/posts?select=id&limit=1"

# Check TypeScript errors
npx tsc --noEmit

# Performance audit
npm run performance
```

## 📞 Support & Contact

### Technical Support
- **Documentation**: Lihat file dokumentasi di repository
- **Issues**: Create GitHub issue untuk bug reports
- **Questions**: Gunakan GitHub Discussions

### Business Contact
- **Website**: [kotacom.id](https://kotacom.id)
- **WhatsApp**: +62 857-9952-0350
- **Email**: info@kotacom.id
- **Location**: Surabaya - Sidoarjo

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Astro Team** - Amazing static site generator
- **Supabase Team** - Excellent BaaS platform
- **Tailwind CSS** - Utility-first CSS framework
- **Flowbite** - Beautiful UI components
- **Open Source Community** - All the amazing tools and libraries

---

**Happy coding! 🎉**

*Dokumentasi ini selalu diupdate. Untuk informasi terbaru, check commit history dan file dokumentasi individual.*