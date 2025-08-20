# Integrasi Directus dengan Astro

Dokumentasi ini menjelaskan bagaimana mengintegrasikan Directus CMS dengan project Astro untuk menampilkan post di root URL (www.kotacom.id/slug-post).

## Fitur yang Tersedia

1. **Post di Root URL**: Post dari Directus ditampilkan langsung di root URL (www.kotacom.id/slug-post)
2. **Static/ISR**: Menggunakan Astro's static generation dengan caching
3. **Konflik Prevention**: Sistem mencegah konflik dengan halaman yang sudah ada
4. **Fallback**: Jika Directus tidak tersedia, sistem akan menggunakan post dari koleksi yang sudah ada

## Konfigurasi

### 1. Environment Variables

Buat file `.env` dengan konfigurasi berikut:

```env
# Directus Configuration
DIRECTUS_URL=https://your-directus-instance.com
DIRECTUS_TOKEN=your-directus-static-token

# Site Configuration
SITE_URL=https://kotacom.id
```

### 2. Struktur Collection di Directus

Pastikan collection `posts` di Directus memiliki field berikut:

- `id` (Primary Key)
- `title` (String)
- `slug` (String, unique)
- `content` (Text/HTML)
- `excerpt` (Text, optional)
- `featured_image` (File, optional)
- `tags` (JSON Array, optional)
- `published_date` (DateTime)
- `status` (String, dengan value 'published')
- `meta_title` (String, optional)
- `meta_description` (Text, optional)

## Cara Kerja

### 1. URL Structure

- **Post Directus**: `www.kotacom.id/slug-post/`
- **Post Existing**: `www.kotacom.id/blog/slug-post/`
- **Halaman Posts**: `www.kotacom.id/posts/`

### 2. Pengecekan Konflik

Sistem akan mengecek slug yang sudah ada untuk mencegah konflik:
- Halaman statis yang sudah ada
- Post dari koleksi Notion
- Post dari koleksi MDX

### 3. Caching

- Cache data post selama 5 menit
- Menggunakan memory cache untuk performa
- Fallback ke cache lama jika Directus tidak tersedia

## File yang Dibuat/Dimodifikasi

### File Baru
- `src/lib/directus.ts` - Konfigurasi Directus client
- `src/lib/directus-service.ts` - Service untuk mengambil data
- `src/pages/[...slug].astro` - Halaman dinamis untuk post Directus
- `src/pages/posts.astro` - Halaman untuk menampilkan semua post
- `env.example` - Contoh konfigurasi environment

### File yang Dimodifikasi
- `src/components/Homepage/LatestPosts.astro` - Menambahkan post Directus
- `src/components/PostCard.astro` - Menangani URL berbeda untuk post Directus

## Penggunaan

### Development

```bash
# Install dependencies
npm install

# Set environment variables
cp env.example .env
# Edit .env dengan konfigurasi Directus Anda

# Run development server
npm run dev
```

### Build

```bash
# Build untuk production
npm run build

# Preview build
npm run preview
```

## Troubleshooting

### 1. Directus Connection Error

- Periksa `DIRECTUS_URL` dan `DIRECTUS_TOKEN`
- Pastikan Directus instance berjalan
- Periksa network connectivity

### 2. Slug Conflict

- Sistem akan otomatis skip post dengan slug yang konflik
- Periksa console untuk log konflik
- Gunakan slug yang unik di Directus

### 3. Content Not Rendering

- Pastikan field `content` berisi HTML yang valid
- Periksa struktur data di Directus
- Gunakan field `excerpt` untuk preview

## SEO Considerations

- Post Directus akan otomatis di-generate sebagai static pages
- Meta tags dari Directus akan digunakan
- Sitemap akan include semua post
- Structured data akan di-generate otomatis

## Performance

- Caching 5 menit untuk mengurangi API calls
- Static generation untuk fast loading
- Lazy loading untuk images
- Optimized bundle size
