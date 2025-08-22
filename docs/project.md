# Project

Dokumentasi ini merinci field, mapping sumber data, komponen, dan aturan perubahan aman untuk Project (portfolio/case study).

## Sumber Data & Normalisasi
- MDX: `src/pages/projects/*.mdx` (collection: `projectsMdx`)
- Supabase: tabel `projects` (lihat `src/lib/supabase-direct.ts` → `getProjectsDirectFromSupabase`)
- Normalisasi utama terjadi di:
  - Detail: `src/pages/projects/[...slug].astro` → `layoutData` untuk `ProjectPage.astro`
  - Listing kategori: `src/pages/projects/[category]/[...page].astro`
  - Beranda (latest): `src/components/Homepage/LatestProjects.astro`
  - Kartu: `src/components/ProjectCard.astro`
  - Layout: `src/layouts/ProjectPage.astro`

## Skema Field

### MDX Frontmatter (contoh minimal)
Wajib: `title`, `slug`, `published`.

```
title: string
slug: string
published: Date | string
imageUrl?: string
country?: string[]
locale?: string[]
category?: string[]
organiser?: string
cost?: [string, string] | string[]
url?: string
gygUrl?: string
mapsUrl?: string
verify?: string
review?: string
getInvolved?: string
description?: string
body?: string
client?: string
clientIndustry?: string
projectDuration?: string
teamSize?: string
technologies?: string[]
challenges?: string
solutions?: string
results?: string
beforeMetrics?: { traffic?: string; conversions?: string; revenue?: string; performance?: string; other?: string }
afterMetrics?: { traffic?: string; conversions?: string; revenue?: string; performance?: string; other?: string }
roiPercentage?: string
clientTestimonial?: string
clientName?: string
clientPosition?: string
beforeImage?: string
afterImage?: string
additionalImages?: string[]
```

### Supabase Fields (umum)
- `image_url`, `published`, `format`, `updated_at`, `created_at`, `url`, `gyg_url`, `maps_url`, `verify`, `review`, `get_involved`
- Mapping ada di:
  - `getProjectsDirectFromSupabase` (proses markdown → HTML untuk body/description/review/get_involved + mapping image_url → imageUrl)
  - `src/pages/projects/[...slug].astro` (blok `source==='supabase'`)
  - `src/components/Homepage/LatestProjects.astro` (normalizer)
  - `src/pages/projects/[category]/[...page].astro` (normalizer)

## Komponen & Ketergantungan
- Layout detail: `src/layouts/ProjectPage.astro`
  - Menampilkan header project (title, client, organiser, cost, verify, categories) dan gambar utama.
  - Menyajikan detail section: Client/Industry, Duration, Team Size, Technologies, ROI, Metrics Before/After, Testimonial, Additional content (body/description/review/get involved).
  - Injeksi `SchemaMarkup` type `project` (CreativeWork) dengan `client`, `technologies`, `category`, `tags`.
- Kartu: `src/components/ProjectCard.astro`
  - Membaca `project.data.properties` dengan prefix `p*` untuk kompatibilitas.
- Latest: `src/components/Homepage/LatestProjects.astro`
  - Gabungan MDX+Supabase, sort `pPublished` desc, dropdown kategori project dari MDX (`PCategoryDropdown`).
- Listing kategori: `src/pages/projects/[category]/[...page].astro`
  - Paginasi per kategori dari gabungan MDX+Supabase, sort tanggal.
- Dropdown kategori: `src/components/PCategoryDropdown.astro`
  - Saat ini dari MDX. Untuk dukungan Supabase, ikuti guideline perubahan.

## Routing
- Detail: `/projects/[slug]/` di `src/pages/projects/[...slug].astro`
- Listing kategori: `/projects/[category]/page/x` di `src/pages/projects/[category]/[...page].astro`

## Schema SEO
- `SchemaMarkup` type `project` (CreativeWork) menerima `title`, `description`, `image`, `datePublished`, `dateModified`, `category`, `tags`, dan `data` tambahan (`client`, `technologies`, `roiPercentage`, dll.).

## Checklist Perubahan Aman
1. Adapter Supabase
   - `getProjectsDirectFromSupabase`: tambahkan mapping untuk field baru dan proses markdown (body/description/review/get_involved) bila perlu.
2. Normalizer Halaman
   - `src/pages/projects/[...slug].astro`: pastikan `layoutData` menyuplai field baru ke `ProjectPage.astro` (termasuk `properties` agar schema & UI konsisten).
3. Latest & Listing
   - `src/components/Homepage/LatestProjects.astro`: update normalizer MDX/Supabase.
   - `src/pages/projects/[category]/[...page].astro`: update normalizer untuk kategori dan presentasi kartu.
4. Kartu
   - `src/components/ProjectCard.astro`: tambahkan field yang dibutuhkan kartu (title, image, organiser, country/locale) bila ada perubahan.
5. Layout Detail
   - `src/layouts/ProjectPage.astro`: tampilkan field baru (metrics/technologies/testimonial) dan injeksikan ke `SchemaMarkup` jika relevan.
6. Dropdown (opsional)
   - `PCategoryDropdown.astro`: bila perlu, gabungkan data Supabase untuk daftar kategori.
7. Pencarian
   - Pastikan konten berada di dalam `data-pagefind-body` untuk terindeks.
8. Kompatibilitas
   - Pertahankan field lama sampai semua referensi diperbarui dan build hijau.

## Contoh Perubahan
- Menambah `technologies` pada project Supabase:
  - Tambahkan kolom/relasi di Supabase, perbarui `getProjectsDirectFromSupabase` untuk memetakan ke array string.
  - Tampilkan pada `ProjectPage.astro` bagian `Technologies` dan tambahkan ke `SchemaMarkup` sebagai `tags`/`material` per implementasi.