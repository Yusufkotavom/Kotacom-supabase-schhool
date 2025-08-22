# Dokumentasi Domain Konten

Dokumen ini menjadi acuan tunggal untuk seluruh perubahan terkait domain:
- Product
- Service
- Post (Blog/Artikel)
- Project (Portfolio/Case Study)

Dokumen ini WAJIB diikuti oleh AI/developer saat menambah, mengubah, atau menghapus field, komponen, dan data terkait. Perubahan harus aman (tidak merusak kode yang sudah bekerja) dan konsisten lintas sumber data (MDX dan Supabase) serta lintas komponen.

## Navigasi
- [Product](./product.md)
- [Service](./service.md)
- [Post](./post.md)
- [Project](./project.md)
- [Guideline Perubahan Aman](./change-guidelines.md)
- [Redirects (Netlify & Vercel)](./redirects.md)

## Sumber Data Utama
- MDX Collections:
  - `src/pages/products/*.mdx` (collection: `productsMdx`)
  - `src/pages/services/*.mdx` (collection: `servicesMdx`)
  - `src/pages/projects/*.mdx` (collection: `projectsMdx`)
  - `src/pages/posts/*.md*` (collection: `postsMdx`)
- Supabase Tables:
  - `products`, `services`, `projects`, `posts` (+ tabel relasi tags/categories untuk posts dan services)

## Arsitektur dan Relasi Utama
- Layout per entitas:
  - Product → `src/layouts/ProductPage.astro`
  - Service → `src/layouts/ServicePage.astro`
  - Post → `src/layouts/PostLayout.astro`
  - Project → `src/layouts/ProjectPage.astro`
- Komponen kartu (list/grid):
  - Product → `src/components/ProductCard.astro`
  - Service → `src/components/ServiceCard.astro`
  - Post → `src/components/PostCard.astro`
  - Project → `src/components/ProjectCard.astro`
- Daftar beranda (latest):
  - `src/components/Homepage/LatestProducts.astro`
  - `src/components/Homepage/LatestServices.astro`
  - `src/components/Homepage/LatestPosts.astro`
  - `src/components/Homepage/LatestProjects.astro`
- Dropdown/filter kategori:
  - Product → `ProductCategoryDropdown.astro` (kategori gabungan MDX+Supabase, dipass via props dari halaman listing)
  - Service → `SCategoryDropdown.astro`
  - Project → `PCategoryDropdown.astro`
- Schema SEO: `src/components/SchemaMarkup.astro` (dipakai di semua layout)
- Pencarian: `src/pages/search.astro` (Pagefind) bergantung pada atribut di layout (data-pagefind-body, data-pagefind-meta)
- Supabase adapter: `src/lib/supabase-direct.ts` (mapping field Supabase → bentuk yang dipakai layout/komponen)

Catatan dropdown Product: kategori dihitung sekali pada build di `getStaticPaths` (MDX+Supabase) dan diteruskan ke `ProductCategoryDropdown` sebagai props `categoryCounts`. Hindari fetch per komponen untuk performa build yang lebih baik.

## Prinsip Umum
- Semua perubahan field WAJIB dimapping di:
  - Normalizer per halaman dinamis (`src/pages/{entity}/[...] .astro`)
  - Komponen kartu terkait (`*Card.astro`)
  - Komponen daftar beranda (`Latest*.astro`)
  - Layout entitas (untuk SchemaMarkup dan tampilan detail)
  - Utility terkait (mis. `affiliateUtils.ts` untuk product)
  - Adapter Supabase (`supabase-direct.ts`) bila field berasal dari Supabase
- Gunakan slug ramah URL: huruf kecil dan ganti spasi dengan `-`.
- Pastikan field yang bertipe array selalu dinormalisasi menjadi array sebelum dipakai komponen.
- Jangan menghapus field lama sebelum migrasi selesai dan semua referensi diperbarui.

Lanjutkan membaca detail per entitas dan guideline perubahan aman.