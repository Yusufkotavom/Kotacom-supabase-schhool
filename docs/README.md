# MDX to Directus Converter

Script Python lengkap untuk mengkonversi file MDX menjadi JSON terstruktur dan mengupload ke Directus CMS.

## 🚀 Fitur

- ✅ Konversi semua file MDX dalam direktori dan subdirektori
- ✅ Ekstraksi frontmatter (metadata) dari setiap file
- ✅ Pengelompokan berdasarkan kategori (posts, services, projects, dll)
- ✅ Statistik lengkap (jumlah file, ukuran, tag, tanggal)
- ✅ Output JSON terstruktur dan mudah dibaca
- ✅ Support untuk array dan nilai kompleks dalam frontmatter
- ✅ **Upload otomatis ke Directus via API**
- ✅ **Pembuatan schema collection otomatis**
- ✅ **Workflow lengkap dari MDX ke Directus**

## 📋 Persyaratan

- Python 3.6 atau lebih baru
- Directus instance yang berjalan
- Dependensi Python: `requests>=2.28.0`

## 🛠️ Instalasi

1. Clone atau download script ini
2. Install dependensi:
   ```bash
   pip install -r requirements.txt
   ```
3. Pastikan Directus instance Anda berjalan

## 📖 Cara Penggunaan

### 🎯 Opsi 1: Workflow Lengkap (Recommended)

Script ini akan mengkonversi MDX dan langsung upload ke Directus:

```bash
python directus_full_uploader.py
```

Script akan meminta:
- Directus base URL (e.g., http://localhost:8055)
- Admin email
- Admin password

### 📝 Opsi 2: Konversi MDX Saja

Jika Anda hanya ingin mengkonversi MDX ke JSON:

```bash
python mdx_to_directus_converter.py
```

### 🔧 Opsi 3: Upload Schema Saja

Jika Anda sudah punya file JSON dan hanya ingin upload schema:

```bash
python directus_schema_uploader.py
```

### 📤 Opsi 4: Upload Data Saja

Jika schema sudah ada dan Anda hanya ingin upload data:

```bash
python directus_data_uploader.py
```

## 📁 Struktur Output JSON

File JSON yang dihasilkan memiliki struktur berikut:

```json
[
  {
    "id": null,
    "status": "published",
    "title": "Sistem Backup dan Disaster Recovery...",
    "subtitle": "Panduan lengkap implementasi...",
    "description": "Panduan lengkap implementasi sistem backup...",
    "slug": "backup-recovery-sistem-surabaya",
    "content": "# Sistem Backup dan Disaster Recovery...",
    "content_type": "posts",
    "tags": ["backup", "disaster-recovery", "data-protection"],
    "cover_image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
    "published_date": "2024-12-20",
    "created_at": "2024-12-20T08:00:00",
    "updated_at": "2024-12-20T10:30:00",
    "author": "",
    "organiser": "kotacom.id",
    "provider": "Kotacom.id",
    "country": ["Indonesia"],
    "locale": ["Surabaya", "Jawa Timur"],
    "wilayah": ["Surabaya", "Sidoarjo"],
    "price": "Mulai dari Rp 150.000",
    "cost": ["20000000", "28000000"],
    "whatsapp_url": "https://wa.me/085799520350",
    "verify": "Verified",
    "review": "Layanan IT Support profesional...",
    "client": "Koperasi Maju Bersama",
    "client_industry": "Financial Services & Cooperative",
    "project_duration": "8 minggu",
    "team_size": "4 orang",
    "technologies": ["Laravel", "MySQL", "Vue.js"],
    "challenges": "Koperasi menggunakan sistem manual...",
    "solutions": "Membangun sistem manajemen koperasi digital...",
    "results": "Efisiensi operasional naik 70%...",
    "before_metrics": {
      "traffic": "Manual loan processing: 2-3 hari",
      "conversions": "850 anggota aktif",
      "revenue": "Rp 2.5 miliar aset",
      "performance": "75% akurasi pembukuan"
    },
    "after_metrics": {
      "traffic": "Digital loan processing: 4-6 jam",
      "conversions": "1.200 anggota aktif",
      "revenue": "Rp 3.8 miliar aset",
      "performance": "99% akurasi pembukuan"
    },
    "roi_percentage": "210%",
    "client_testimonial": "Sistem koperasi dari KOTACOM sangat membantu...",
    "client_name": "Bapak Sutoyo, S.E.",
    "client_position": "Ketua Koperasi Maju Bersama",
    "before_image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    "after_image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    "additional_images": [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e"
    ],
    "url": "https://koperasi-maju-demo.kotacom.id",
    "external_url": "",
    "language": "id",
    "featured": false,
    "pinned": false,
    "draft": false,
    "file_path": "projects/cooperative-management-system.mdx",
    "file_name": "cooperative-management-system.mdx",
    "file_size": 45000,
    "file_created": "2024-12-20T08:00:00",
    "file_modified": "2024-12-20T10:30:00",
    "summary": "Koperasi Maju Bersama adalah koperasi simpan pinjam...",
    "body_content": "# Sistem Manajemen Koperasi Digital...",
    "images": [
      {
        "alt": "Koperasi Management System",
        "url": "https://images.unsplash.com/photo-1554224155-6726b3ff858f"
      }
    ],
    "code_blocks": [
      {
        "language": "sql",
        "code": "BACKUP DATABASE CompanyDB..."
      }
    ],
    "links": [
      {
        "text": "Konsultasi Gratis",
        "url": "https://wa.me/6285799520350"
      }
    ],
    "categories": ["Software Development", "Financial Services"],
    "meta_title": "Sistem Manajemen Koperasi Digital - Koperasi Maju Bersama",
    "meta_description": "Panduan lengkap implementasi sistem backup...",
    "last_updated": "2024-12-20",
    "custom_fields": {}
  }
]
```

## 📊 Informasi yang Diekstrak

### Frontmatter
- `title` - Judul artikel
- `description` - Deskripsi artikel
- `tags` - Tag/kategori
- `published` - Tanggal publikasi
- `slug` - URL slug
- `category` - Kategori artikel
- Dan semua metadata lainnya

### Content Sections
- `content` - Konten MDX lengkap
- `summary` - Ringkasan otomatis
- `body_content` - Konten tanpa frontmatter
- `images` - Gambar yang ditemukan dalam konten
- `code_blocks` - Blok kode dengan bahasa
- `links` - Link yang ditemukan dalam konten

### Business Fields
- `price` - Harga layanan
- `cost` - Biaya proyek
- `whatsapp_url` - Link WhatsApp
- `verify` - Status verifikasi
- `review` - Review layanan

### Project Fields
- `client` - Nama klien
- `client_industry` - Industri klien
- `project_duration` - Durasi proyek
- `team_size` - Ukuran tim
- `technologies` - Teknologi yang digunakan
- `challenges` - Tantangan proyek
- `solutions` - Solusi yang diberikan
- `results` - Hasil proyek
- `before_metrics` - Metrik sebelum
- `after_metrics` - Metrik setelah
- `roi_percentage` - Persentase ROI

### Testimonials
- `client_testimonial` - Testimoni klien
- `client_name` - Nama klien
- `client_position` - Posisi klien

## 🎯 Contoh Penggunaan

### 1. Workflow Lengkap untuk Directus
```bash
# Jalankan script lengkap
python directus_full_uploader.py

# Masukkan informasi Directus:
# URL: http://localhost:8055
# Email: admin@example.com
# Password: your_password
```

### 2. Konversi untuk CMS Lain
```python
from mdx_to_directus_converter import convert_all_mdx_to_directus

# Konversi semua konten MDX untuk import ke CMS lain
result = convert_all_mdx_to_directus('cms_content.json')
```

### 3. Analisis Konten
```python
# Analisis tag dan kategori
result = convert_all_mdx_to_directus('content_analysis.json')
# Buka file JSON untuk analisis lebih lanjut
```

## 🔧 Kustomisasi

### Mengubah Output Format
```python
def custom_convert():
    result = convert_all_mdx_to_directus()
    
    # Kustomisasi output
    custom_output = {
        'articles': [r for r in result if r['content_type'] == 'posts'],
        'services': [r for r in result if r['content_type'] == 'services'],
        'projects': [r for r in result if r['content_type'] == 'projects']
    }
    
    with open('custom_output.json', 'w') as f:
        json.dump(custom_output, f, indent=2)
```

### Filter Berdasarkan Kategori
```python
# Hanya ambil posts
posts_only = [r for r in result if r['content_type'] == 'posts']

# Filter berdasarkan tag
surabaya_posts = [
    r for r in result 
    if r['content_type'] == 'posts' and 'surabaya' in r.get('tags', [])
]
```

## 🚨 Troubleshooting

### Error: "No MDX files found"
- Pastikan ada file `.mdx` di direktori saat ini
- Periksa apakah script dijalankan dari direktori yang benar

### Error: "Authentication failed"
- Periksa URL Directus Anda
- Pastikan email dan password admin benar
- Pastikan Directus instance berjalan

### Error: "Collection already exists"
- Ini normal jika collection sudah ada
- Script akan melanjutkan ke langkah berikutnya

### Error: "Field already exists"
- Ini normal jika field sudah ada
- Script akan melanjutkan ke field berikutnya

## 📝 Contoh Output

Setelah menjalankan script lengkap, Anda akan melihat output seperti ini:

```
🚀 Directus Full Uploader
Complete MDX to Directus workflow
============================================================
Enter Directus base URL (e.g., http://localhost:8055): http://localhost:8055
Enter admin email: admin@example.com
Enter admin password: ********

🚀 Starting complete Directus upload process...
============================================================
📝 Step 1: Converting MDX files to Directus format...
🚀 Starting MDX to Directus conversion...
📁 Found 37 MDX files
🔄 Processing: backup-recovery-sistem-surabaya.mdx
🔄 Processing: software-development-surabaya-terbaik.mdx
...
✅ Successfully converted 37 MDX files to directus_content.json

🏗️  Step 2: Creating Directus schema...
📄 Loading schema from directus_schema.json

🔐 Step 3: Authenticating with Directus...
✅ Authenticated successfully with Directus at http://localhost:8055

📋 Step 4: Creating collection...
✅ Collection 'content' created successfully

🔧 Step 5: Creating fields...
✅ Field 'id' created successfully
✅ Field 'status' created successfully
✅ Field 'title' created successfully
...
📊 Fields created: 15/15

📤 Step 6: Uploading content data...
✅ Successfully uploaded 37 items to collection 'content'

🎉 Complete upload process finished successfully!

🎉 All done! Your MDX content is now in Directus!
📋 What's next:
   1. Check your Directus admin panel
   2. Verify the 'content' collection and data
   3. Test your API endpoints
   4. Start building your frontend!
```

## 🤝 Kontribusi

Jika Anda ingin menambahkan fitur atau memperbaiki bug:

1. Fork repository ini
2. Buat branch untuk fitur baru
3. Commit perubahan Anda
4. Push ke branch
5. Buat Pull Request

## 📄 Lisensi

MIT License - bebas digunakan untuk keperluan komersial maupun non-komersial.

---

**Dibuat dengan ❤️ oleh Kotacom.id**
