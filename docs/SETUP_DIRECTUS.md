# Setup Directus Integration

## Langkah 1: Buat File Environment

Buat file `.env` di root project dengan konfigurasi berikut:

```env
# Directus Configuration
DIRECTUS_URL=https://your-directus-instance.com
DIRECTUS_TOKEN=your-directus-static-token

# Site Configuration
SITE_URL=https://kotacom.id
```

## Langkah 2: Konfigurasi Directus

### Struktur Collection di Directus

Berdasarkan field yang tersedia di Directus Anda, pastikan collection `posts` memiliki field berikut:

**Field Wajib:**
- `id` (Primary Key)
- `title` (String, required)
- `slug` (String, required, unique)
- `content` (Text/HTML)
- `status` (String, dengan value 'published')

**Field yang Digunakan:**
- `summary` (Text, sebagai excerpt)
- `featured_images` (File, untuk gambar utama)
- `wp_cat` (String/Array, WordPress category sebagai tags)
- `date_published` (DateTime, tanggal publikasi)
- `date_created` (DateTime, tanggal pembuatan)
- `date_updated` (DateTime, tanggal update)
- `category` (Relational field)
- `author` (Relational field)

**Field Tambahan (Opsional):**
- `type` (String)
- `links` (Any)
- `video_url` (String)
- `image` (File)

### Setup Token

1. Buka Directus Admin Panel
2. Pergi ke Settings > API Tokens
3. Buat Static Token baru
4. Copy token dan paste ke `DIRECTUS_TOKEN` di file `.env`

## Langkah 3: Test Integration

```bash
# Install dependencies (jika belum)
npm install

# Run development server
npm run dev
```

## Langkah 4: Verifikasi

1. Buka `http://localhost:4321/` - Post Directus akan muncul di homepage
2. Buka `http://localhost:4321/posts/` - Halaman semua post
3. Buka `http://localhost:4321/slug-post/` - Post individual (ganti dengan slug yang ada)
4. **Debug Page**: `http://localhost:4321/debug-directus` - Halaman debug untuk troubleshooting

## Troubleshooting

### Debug Page

Buka `http://localhost:4321/debug-directus` untuk melihat:
- Konfigurasi Directus
- Status koneksi
- Cache information
- Daftar slug yang tersedia (diorganisir berdasarkan huruf)
- Statistics pagination
- Sample post data

### Pagination System

Sistem menggunakan pagination otomatis:
- **Batch Size**: 100 post per request
- **Auto-fetch**: Semua post akan diambil secara otomatis
- **Cache**: Data di-cache selama 5 menit
- **Debug Logs**: Menampilkan progress pagination di console

### Error: "You don't have permission to access fields"

- Pastikan token memiliki permission untuk mengakses semua field yang diperlukan
- Periksa field permissions di Directus Admin Panel
- Pastikan field names sesuai dengan yang ada di Directus

### Error: "Cannot connect to Directus"

- Periksa `DIRECTUS_URL` dan `DIRECTUS_TOKEN`
- Pastikan Directus instance berjalan
- Periksa network connectivity

### Post tidak muncul atau kurang dari yang diharapkan

- Pastikan post memiliki status 'published'
- Periksa console untuk error messages
- Pastikan collection name adalah 'posts'
- Clear cache dengan mengklik tombol "Clear Cache" di debug page
- Periksa debug page untuk melihat total post yang diambil

### Error 404 untuk slug tertentu

- Periksa apakah slug ada di Directus
- Pastikan post memiliki status 'published'
- Periksa debug page untuk melihat daftar slug yang tersedia
- Clear cache jika ada perubahan data

### MDX/MD Rendering Issues

- Sistem memiliki error handling untuk MDX yang bermasalah
- Jika ada error rendering, akan ditampilkan pesan error dan raw content
- Periksa console untuk error details
- Pastikan format MDX valid

### Debug Logging

Dalam development mode, sistem akan menampilkan debug logs di console:
- `[Directus Debug] Fetching posts from Directus...`
- `[Directus Debug] Fetching page 1...`
- `[Directus Debug] Successfully fetched all posts`
- `[Directus Debug] Found post`
- `[Directus Debug] Post not found`

## Field Mapping

| Astro Field | Directus Field | Keterangan |
|-------------|----------------|------------|
| title | title | Judul post |
| slug | slug | URL slug |
| content | content | Konten HTML |
| excerpt | summary | Ringkasan post |
| featured_image | featured_images[0] | Gambar utama |
| tags | wp_cat | Kategori/tags |
| published_date | date_published | Tanggal publikasi |
| author | author | Penulis (relational) |
| category | category | Kategori (relational) |

## URL Structure

- **Post Directus**: `www.kotacom.id/slug-post/`
- **Post Existing**: `www.kotacom.id/blog/slug-post/`
- **Halaman Posts**: `www.kotacom.id/posts/`
- **Debug Page**: `www.kotacom.id/debug-directus`

## Performance Considerations

### Pagination
- Sistem mengambil 100 post per request
- Untuk 600+ post, akan memerlukan 6+ requests
- Cache 5 menit untuk mengurangi API calls
- Debug logs menampilkan progress pagination

### Memory Usage
- Semua post disimpan di memory cache
- Untuk 600+ post, perkirakan ~10-50MB memory usage
- Cache otomatis expire setelah 5 menit

### Build Time
- Static generation untuk semua post
- Build time akan meningkat dengan jumlah post
- Pertimbangkan ISR untuk production

## Features

✅ **Static/ISR**: Menggunakan Astro's static generation
✅ **Caching**: Cache 5 menit untuk performa
✅ **Conflict Prevention**: Mencegah konflik dengan halaman yang sudah ada
✅ **Fallback**: Menggunakan post existing jika Directus tidak tersedia
✅ **SEO Ready**: Meta tags dan structured data otomatis
✅ **WordPress Compatible**: Mendukung field dari WordPress import
✅ **Debug Tools**: Halaman debug dan logging untuk troubleshooting
✅ **Cache Management**: API endpoint untuk clear cache
✅ **Pagination**: Otomatis mengambil semua post dengan pagination
✅ **Error Handling**: Robust error handling untuk MDX dan API calls
✅ **Statistics**: Debug page dengan statistics lengkap
