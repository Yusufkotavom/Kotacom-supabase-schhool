## SUPABASE INTEGRATION GUIDE (REKAP LENGKAP)

Dokumentasi ini merangkum seluruh integrasi Supabase di project, pola query, struktur data, normalisasi ke layer Astro/Frontend, serta panduan step-by-step untuk menambah field atau relasi baru. Ditulis dalam konteks kode yang ada di folder `v2-cursor-strip-and-rebuild-local-schema-with-sanity-2ecb` terutama file util `src/lib/supabase-direct.ts`.

---
## 1. RINGKASAN ARSITEKTUR

Alur data (Posts/Products/Services/Projects):

1. Supabase (Postgres) menyimpan tabel utama + tabel junction (tags/categories).
2. Aplikasi membangun static pages (Astro) dengan memanggil fungsi util: 
   - `getPostsDirectFromSupabase`
   - `getProductsDirectFromSupabase`
   - `getServicesDirectFromSupabase`
   - `getProjectsDirectFromSupabase`
3. Data diperkaya (menempelkan tags & categories, mapping nama field, konversi markdown -> HTML).
4. Layer halaman melakukan normalisasi agar bentuknya seragam dengan sumber lain (MDX / Payload lama) sebelum dirender komponen kartu atau layout konten.

---
## 2. LOKASI KODE UTAMA

File pusat: `src/lib/supabase-direct.ts`

Halaman / komponen yang menggunakan:
| Entity | Contoh File Konsumsi | Catatan |
|--------|----------------------|---------|
| Posts | `src/pages/[...slug].astro` | Menggabungkan MDX + Supabase posts |
| Services | `src/pages/services/index.astro`, `Homepage/LatestServices.astro` | Normalisasi ke struktur `sv*` |
| Products | `Homepage/LatestProducts.astro`, `pages/products/...` | Normalisasi ke struktur `p*` |
| Projects | `pages/projects/[...page].astro`, `Homepage/LatestProjects.astro` | Pagination + normalisasi |

---
## 3. KONFIGURASI SUPABASE

Saat ini key hard-coded:
```ts
const SUPABASE_URL = 'https://...supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOi...';
```

### Rekomendasi Perbaikan
Pindahkan ke `.env` / environment:
```
SUPABASE_URL=... 
SUPABASE_ANON_KEY=... 
SUPABASE_SERVICE_ROLE_KEY=...(jika perlu server-side mutasi)
```
Kemudian di kode:
```ts
const SUPABASE_URL = import.meta.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY;
```

> Gunakan Service Role Key HANYA di lingkungan server (build/pipeline / server runtime) untuk operasi tulis atau bypass RLS.

---
## 4. STRUKTUR TABEL & RELASI (DISARANKAN)

### 4.1 Posts
Tabel: `posts`
Kolom umum (disarankan):
| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | bigint / uuid | PK |
| title | text | Judul |
| slug | text (unique) | Slug URL |
| description | text | Deskripsi ringkas |
| body | text | Konten markdown |
| cover_image | text | URL cover |
| published | timestamptz | Tanggal terbit |
| updated_at | timestamptz | Otomatis via trigger/now() |
| created_at | timestamptz | Default now() |
| status | text | (draft/published) |
| author | text | Nama penulis |

Tags & Categories (Many-to-many):
| Tabel | Kolom | Catatan |
|-------|-------|---------|
| posts_tags | _parent_id (fk -> posts.id), value (text), _order (int) | Order optional |
| posts_categories | _parent_id, value, _order | Mirip tags |

### 4.2 Services
Tabel: `services`
Kolom tambahan umum: `provider`, `price`, `wilayah` (array text), `type` (array text), `review` (text), `verify` (text), `imageUrl1/2/3` (text), `slug`, `published`.
Junction:
| services_tags | _parent_id, value, _order |
| services_categories | _parent_id, value, _order |

### 4.3 Products
Tabel: `products`
Kolom inti: `title, slug, price, description, imageUrl, published, country (array), locale (array), category (array)`.

### 4.4 Projects
Tabel: `projects`
Kolom inti: `title, slug, organiser, body (markdown), description, review, get_involved, image_url, published, updated_at, created_at, url, gyg_url, maps_url, verify`.

> Semua kolom array bisa berupa `text[]`. Jika ingin fleksibilitas JSON kompleks gunakan `jsonb`.

### 4.5 Index & Optimisasi
Disarankan index:
```sql
create unique index on posts (slug);
create index on posts (published desc);
create index on services (published desc);
create unique index on products (slug);
create unique index on services (slug);
create unique index on projects (slug);
```
Jika sering filter tag/category spesifik:
```sql
create index on posts_tags (value);
create index on posts_categories (value);
```

---
## 5. FUNGSI UTIL & POLA QUERY

Semua fungsi menggunakan `@supabase/supabase-js`:

### 5.1 `getPostsDirectFromSupabase(limit = 10000)`
Langkah internal:
1. `select * from posts order by published desc limit {limit}`
2. Ambil semua `id` → batched fetch junction tables:
   - `posts_tags`: `.from('posts_tags').select('_parent_id, value').in('_parent_id', postIds)`
   - `posts_categories`: sama.
3. Merge hasil ke objek post.
4. Konversi body markdown → HTML bila mendeteksi karakter `#` (heading) via `marked`.
5. Mapping field tambahan: `coverImage`, `imageUrl`, `publishedAt`, `updatedAt`, `createdAt`.

### 5.2 `getProductsDirectFromSupabase(limit)`
Query langsung tabel `products`, order `published desc` tanpa saat ini enrichment.

### 5.3 `getServicesDirectFromSupabase(limit)`
Mirip posts: fetch utama + junction `services_tags` & `services_categories`, konversi markdown body, mapping `imageUrl1`, normalisasi array.

### 5.4 `getProjectsDirectFromSupabase(limit)`
Fetch projects, konversi beberapa field markdown: `body`, `description`, `review`, `get_involved`.

### 5.5 Helper:
| Fungsi | Tujuan |
|--------|--------|
| `getTagsForPosts` | Load tags posts batch |
| `getCategoriesForPosts` | Load categories posts batch |
| `getTagsForServices` | Sama untuk services |
| `getCategoriesForServices` | Sama untuk services |
| `processPayloadField` | Normalisasi input (string/JSON/array) → array objek/value |
| `convertSupabasePost` | Ubah `SupabasePost` → format konsumsi Astro sebelumnya |

### 5.6 Contoh Pattern Query
```ts
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .eq('status', 'published')
  .ilike('title', '%cetak%')
  .order('published', { ascending: false })
  .range(0, 19); // pagination manual
```

---
## 6. NORMALISASI DATA DI HALAMAN

Halaman menyesuaikan field ke prefiks khusus agar seragam antara sumber MDX & Supabase:

| Entity | Prefiks | Contoh Field Normalisasi |
|--------|---------|--------------------------|
| Services | `sv` | `svTitle`, `svCategory`, `svSlug`, `svImageURL1`, ... |
| Products | `p` | `pTitle`, `pPrice`, `pCountry`, `pSlug`, ... |
| Projects | `p` (beda konteks) | `pTitle`, `pCategory`, `pSlug`, ... |
| Posts (konten utama) | Langsung dipakai di layout | `title`, `description`, `image`, `tags`, ... |

Keuntungan: komponen tidak perlu tahu sumber data.

---
## 7. KONVERSI MARKDOWN KE HTML

Dipakai di util menggunakan dynamic import:
```ts
const { marked } = await import('marked');
processedBody = marked(post.body);
```
Jika Anda menambah field markdown lain, ulangi pattern di fungsi terkait.

---
## 8. TAGS & CATEGORIES (MANY-TO-MANY)

Strategi sekarang: junction table sederhana dengan kolom `_parent_id`, `value`, `_order`.

Kelebihan: 
- Query sederhana (1 select + `.in()` untuk batch).
- Bisa mempertahankan urutan tampilan.

Alternatif: gunakan array `text[]` langsung di tabel utama jika tidak perlu metadata order per item.

---
## 9. LANGKAH: MENAMBAH FIELD BARU (CONTOH: `excerpt` DI POSTS)

### 9.1 Alter Tabel
```sql
alter table posts add column excerpt text;
update posts set excerpt = left(coalesce(description, ''), 160) where excerpt is null;
```

### 9.2 (Opsional) Index / FTS jika ingin pencarian:
```sql
create index on posts (excerpt);
```

### 9.3 Update Interface TypeScript
`SupabasePost` di `supabase-direct.ts`:
```ts
export interface SupabasePost { 
  // ...existing
  excerpt?: string; 
}
```

### 9.4 Mapping di `getPostsDirectFromSupabase`
Tambahkan ke object return (bagian `postsWithMetadata`):
```ts
return { 
  ...post,
  excerpt: post.excerpt || post.description?.slice(0,160) || ''
};
```

### 9.5 Konsumsi di Halaman
Di `pages/[...slug].astro` gunakan `layoutData.description = post.description || post.excerpt || ''` (atau sebaliknya) jika ingin fallback.

### 9.6 Regenerasi Build
Jalankan build Astro untuk memastikan halaman statis diperbarui.

---
## 10. LANGKAH: MENAMBAH RELASI BARU (CONTOH AUTHORS MULTI)

Misal ingin banyak penulis per post:
1. Buat tabel baru:
   ```sql
   create table authors (
     id bigserial primary key,
     name text not null,
     slug text unique
   );
   create table posts_authors (
     post_id bigint references posts(id) on delete cascade,
     author_id bigint references authors(id) on delete cascade,
     primary key (post_id, author_id)
   );
   ```
2. Isi data awal.
3. Tambahkan helper mirip `getTagsForPosts`:
   ```ts
   async function getAuthorsForPosts(ids:number[]):Promise<Map<number,string[]>> { /* select join */ }
   ```
4. Panggil helper itu di `Promise.all` bersamaan dengan tags/categories.
5. Tambahkan `authors` ke object final.
6. Update layout & komponen untuk menampilkan.

---
## 11. CONTOH QUERY LANJUTAN

### Filtering by Category
```ts
await supabase.from('posts')
  .select('*')
  .contains('category', ['Percetakan']); // jika pakai array kolom langsung
```

### Full Text Search (FTS)
Aktifkan extension:
```sql
create extension if not exists pg_trgm;
create index posts_title_trgm on posts using gin (title gin_trgm_ops);
```
Lalu query (server side):
```sql
select * from posts where title ilike '%jilid%';
```
Atau supabase-js: `.ilike('title', '%jilid%')`.

### Pagination Efisien
Gunakan `.range(offset, offset+pageSize-1)` atau keyset pagination:
```ts
const { data } = await supabase
  .from('posts')
  .select('*')
  .lt('published', lastPublishedISO)
  .order('published', { ascending: false })
  .limit(pageSize);
```

### Hanya Kolom Dibutuhkan (Kurangi Bandwidth)
```ts
.select('id, title, slug, published')
```

---
## 12. OPTIMISASI & BEST PRACTICES

| Area | Tips |
|------|------|
| Network | Pilih kolom spesifik di `.select()` |
| Markdown | Pre-render & cache hasil HTML jika konten jarang berubah |
| Batch | Gunakan `.in()` seperti sekarang untuk junction tables |
| Build Time | Limit awal bisa dikurangi (misal 2000 bukan 10000) jika data besar |
| Index | Tambah index untuk kolom sering di-order/filter |

---
## 13. KEAMANAN (RLS)

Aktifkan Row Level Security pada tabel publik:
```sql
alter table posts enable row level security;
create policy "Public posts" on posts for select using (status = 'published');
```

Jika butuh preview draft, gunakan service role key di proses build (server) – JANGAN expose ke client.

### Hindari Hard-coded Keys
Pindahkan ke environment & gunakan `.env` + variable prefix sesuai bundler (misal `PUBLIC_` hanya untuk yang aman).

---
## 14. TROUBLESHOOTING

| Masalah | Penyebab Umum | Solusi |
|---------|---------------|--------|
| Data kosong | Policy RLS menolak | Cek policies & role (anon vs service) |
| Tags/cats tidak muncul | ID tidak cocok tipe (uuid vs int) | Samakan tipe, periksa mapping `_parent_id` |
| Markdown tidak terkonversi | Konten tidak berisi tanda markdown | Pastikan ada heading / jalankan convert tetap |
| Build lambat | Limit terlalu besar | Kurangi limit, tambahkan pagination |
| 429/Rate limit | Terlalu banyak request kecil | Batch `.in()` (sudah), atau cache hasil |

---
## 15. CHECKLIST CEPAT TAMBAH FIELD

1. Alter table / tambah kolom.
2. Perbarui policy RLS bila diperlukan.
3. Tambah ke interface TS.
4. Tambah ke mapping di fungsi fetch.
5. Tambah normalisasi di halaman/komponen.
6. Tambah rendering di UI.
7. Jalankan build & verifikasi.

---
## 16. ROADMAP IMPROVEMENT (OPSIONAL)

- Extract konfigurasi Supabase ke modul terpisah + caching.
- Tambah layer repository agar halaman tidak tahu detail tabel.
- Implement incremental static regeneration / on-demand revalidate (jika berpindah ke framework yang mendukung).
- Tambah test unit untuk util (mock supabase client).
- Tambah logging terstruktur (contoh: pino) dan guard error.

---
## 17. CONTOH IMPLEMENTASI RINGKAS (POST LIST CUSTOM FILTER)

```ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);

export async function listPublishedPosts({ search, tag, limit = 20 }) {
  let q = supabase.from('posts').select('id,title,slug,description,published').eq('status','published');
  if (search) q = q.ilike('title', `%${search}%`);
  if (tag) {
    // Opsional: jika gunakan junction, ambil id posting yg punya tag tertentu dulu
    const { data: tagRows } = await supabase.from('posts_tags').select('_parent_id').eq('value', tag);
    const ids = [...new Set((tagRows||[]).map(r=>r._parent_id))];
    if (ids.length) q = q.in('id', ids); else return [];
  }
  const { data, error } = await q.order('published', { ascending: false }).limit(limit);
  if (error) throw error;
  return data;
}
```

---
## 18. PENUTUP

Dokumen ini menjadi referensi tunggal untuk semua hal terkait Supabase di project. Perbarui setiap kali menambah entitas besar, relasi baru, atau mengubah pola normalisasi.

Jika ada bagian yang perlu diperdalam (misal migrasi otomatis atau penulisan data balik ke Supabase), tambahkan sub-bab lanjutan.

---
Happy building! 🚀
