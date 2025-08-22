# SEO Guide

Dokumen ini menjelaskan praktik SEO yang diterapkan di proyek ini dan bagaimana melakukan manajemen SEO secara terpusat.

## Komponen & Struktur
- Base Head: `src/components/BaseHead.astro`
  - Set global meta: title, description, canonical, hreflang, favicon, sitemap, RSS.
  - Open Graph dan Twitter Cards (image fallback via OG generator).
  - Robots default, author, locale, GSC token, GA4 (via env PUBLIC_GA_MEASUREMENT_ID).
- Schema Markup: `src/components/SchemaMarkup.astro`
  - JSON-LD untuk `article`, `product`, `service`, `project`, `homepage`.
  - Dipanggil di layout entitas: `PostLayout.astro`, `ProductPage.astro`, `ServicePage.astro`, `ProjectPage.astro`, `src/pages/index.astro`.
- Main Layout: `src/layouts/MainLayout.astro`
  - Menginjek `BaseHead` berdasarkan props halaman: `title`, `description`, `image`, `type`, `published`, `modified`, `section`, `tags`.
  - Slot `head` untuk meta tambahan per halaman.
- Pagination SEO Head: `src/components/partials/SeoPaginationHead.astro`
  - Menambah `<link rel="prev/next">` dan meta `robots noindex,follow` untuk halaman paginasi sesuai konfigurasi.

## Konfigurasi Terpusat
- Direktori: `src/data/seo`
  - `config.ts`:
    - `SEO_DEFAULTS`: template title, nama situs, deskripsi, default type, locale.
    - `SEO_SECTIONS`: konfigurasi per bagian (`/posts`, `/products`, `/services`, `/projects`) termasuk `robotsIndexPaginated`.
    - Helper: `formatTitle`, `getSectionConfigByPath`.
- Penggunaan:
  - Untuk halaman paginasi, gunakan `<SeoPaginationHead currentPage={} lastPage={} />` dalam `<fragment slot="head">`.
  - Untuk title/desc default, cukup isi props ke `MainLayout` dan `BaseHead` akan mengkonstruksi title final mengikuti template.

## Praktik Diterapkan
- Canonical otomatis dari `Astro.url` di `BaseHead`.
- Hreflang `id` dan `x-default`.
- OG/Twitter image fallback dari title bila tidak ada `image`.
- Robots `noindex,follow` untuk halaman paginasi > 1 (melalui `SeoPaginationHead` dan `SEO_SECTIONS.*.robotsIndexPaginated=false`).
- JSON-LD terstruktur per entitas melalui `SchemaMarkup` dengan field: title, description, image, datePublished/Modified, category/tags, dsb.

## Checklist Menambah Halaman/Listing Baru
1. Gunakan `MainLayout` dan berikan `title`, `description`, `type` yang tepat.
2. Jika listing dengan paginasi, panggil `<SeoPaginationHead currentPage={page.currentPage} lastPage={page.lastPage} />` pada slot `head`.
3. Jika halaman detail entitas, panggil `SchemaMarkup` dengan `type` sesuai.
4. Sediakan `image` bila ada; jika tidak, biarkan fallback bekerja.
5. Pastikan canonical benar (default dari BaseHead) atau override di slot `head` jika perlu.

## Env & Integrasi
- Google Site Verification: set `PUBLIC_GOOGLE_SITE_VERIFICATION`.
- Google Analytics 4: set `PUBLIC_GA_MEASUREMENT_ID` (dimuat hanya di production).

## Contoh Integrasi
- Blog Index: `src/pages/[...page].astro`
  - Head slot menggunakan `SeoPaginationHead`.
- Produk Kategori: `src/pages/products/[category]/[...page].astro`
  - Head slot menggunakan `SeoPaginationHead`.

## Manajemen Perubahan SEO
- Ubah default dan kebijakan paginasi di `src/data/seo/config.ts`.
- Jika menambah section baru, tambahkan entri `SEO_SECTIONS` dan gunakan `SeoPaginationHead` pada halaman listingnya.
- Jangan menaruh fetch di komponen head; semua informasi untuk head harus ditentukan saat build untuk performa.