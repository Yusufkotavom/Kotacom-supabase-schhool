# Service

Dokumentasi ini merinci seluruh field, mapping sumber data, komponen, dan aturan perubahan aman untuk entity Service.

## Sumber Data & Normalisasi
- MDX: `src/pages/services/*.mdx` (collection: `servicesMdx`)
- Supabase: tabel `services` (lihat `src/lib/supabase-direct.ts` → `getServicesDirectFromSupabase`)
- Normalisasi utama terjadi di:
  - Detail: `src/pages/services/[...slug].astro` → membentuk `layoutData` untuk `ServicePage.astro`
  - Listing kategori: `src/pages/services/[category]/[...page].astro`
  - Beranda (latest): `src/components/Homepage/LatestServices.astro`
  - Kartu: `src/components/ServiceCard.astro`
  - Layout: `src/layouts/ServicePage.astro`

## Skema Field

### MDX Frontmatter (contoh minimal)
Wajib: `title`, `slug`, `published`.

```
title: string
slug: string
published: Date | string
category?: string[]
imageUrl1?: string
imageUrl2?: string
imageUrl3?: string
wilayah?: string[]
provider?: string
type?: string[]
price?: string | number
url?: string
whatsappUrl?: string
mapsUrl?: string
verify?: string
review?: string
description?: string
body?: string
```

### Supabase (kolom umum)
- `imageUrl1` bisa berasal dari `cover_image`
- `category`, `wilayah`, `type` bisa berupa array; tabel relasi tags/categories juga tersedia untuk services
- Mapping ada di:
  - `getServicesDirectFromSupabase` (membersihkan markdown body, menambah tags/category)
  - `src/pages/services/[...slug].astro` (blok `source==='supabase'`)
  - `src/components/Homepage/LatestServices.astro` (normalizer)
  - `src/pages/services/[category]/[...page].astro` (normalizer)

## Komponen & Ketergantungan
- Layout detail: `src/layouts/ServicePage.astro`
  - Membaca `serviceData` (MDX) dan mengisi SchemaMarkup `type='service'`.
  - Menampilkan kategori, gambar, description/body, CTA WhatsApp, dan info harga/provider.
- Kartu: `src/components/ServiceCard.astro`
  - Membaca `service.data.properties` dengan prefix `sv*` (svTitle, svPrice, svSlug, dll.)
  - Memformat harga via `formatPrice` dari `utils/marketplaceUtils` (pastikan util tersedia/selaras)
- Daftar terbaru: `src/components/Homepage/LatestServices.astro`
  - Gabungkan MDX+Supabase dan sort `svPublished` desc.
- Listing kategori: `src/pages/services/[category]/[...page].astro`
  - Membentuk halaman paginasi per kategori dari gabungan MDX+Supabase.
- Dropdown kategori: `src/components/SCategoryDropdown.astro`
  - Saat ini hanya dari MDX. Untuk dukungan Supabase, ikuti guideline perubahan.
- SEO: `SchemaMarkup.astro` → `type='service'` dengan `price`, `category`, `wilayah`.

## Routing
- Detail: `/services/[slug]/` di `src/pages/services/[...slug].astro`
- Listing kategori: `/services/[category]/page/x` di `src/pages/services/[category]/[...page].astro`
- Index: `src/pages/services/index.astro` (bila ada)

## Schema SEO
- `SchemaMarkup` menerima `title`, `description`, `image`, `category`, `price`, serta `data` tambahan (`wilayah`, `provider`, `type`, `verify`).
- Pastikan pembersihan angka harga jika akan diinject ke `offers.price`.

## Checklist Perubahan Aman
1. Adapter Supabase
   - `getServicesDirectFromSupabase`: tambahkan mapping/normalisasi field baru (convert markdown → HTML bila konten panjang).
2. Normalizer Halaman
   - `src/pages/services/[...slug].astro`: pastikan `layoutData` menyuplai field baru ke `ServicePage.astro`.
   - `src/pages/services/[category]/[...page].astro`: update normalizer agar field baru tersedia di kartu/list.
3. Kartu
   - `src/components/ServiceCard.astro`: tambahkan pembacaan field (prefix `sv*`) dan presentasi UI yang diperlukan.
4. Latest
   - `src/components/Homepage/LatestServices.astro`: update normalizer dan sorting jika perlu.
5. Layout Detail
   - `src/layouts/ServicePage.astro`: tampilkan field baru (description/body/review) dan injeksikan ke `SchemaMarkup` bila relevan.
6. Dropdown (opsional)
   - `SCategoryDropdown.astro`: jika ingin dukung Supabase, gabungkan sumber data.
7. Pencarian
   - Pastikan artikel memiliki `data-pagefind-body` di layout agar terindeks.
8. Kompatibilitas
   - Jangan menghapus field lama sebelum semua rujukan diperbarui dan build hijau.

## Contoh Perubahan
- Menambah `description` kaya HTML dari Supabase:
  - Proses di `getServicesDirectFromSupabase` (markdown → HTML via `marked`).
  - Tampilkan di `ServicePage.astro` (bagian Description) dan `data` SchemaMarkup jika perlu.
  - Perbarui normalizer latest/listing jika ringkasan ingin ditampilkan di kartu.