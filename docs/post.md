# Post

Dokumentasi ini mengatur field, mapping sumber data, komponen, dan aturan perubahan aman untuk Post (Blog/Artikel).

## Sumber Data & Normalisasi
- MD/MDX: `src/pages/posts/*.md*` (collection: `postsMdx`)
- Supabase: tabel `posts` + tabel relasi `posts_tags`, `posts_categories`
- Adapter: `src/lib/supabase-direct.ts`
  - `getPostsDirectFromSupabase(limit, status)`
  - `convertSupabasePost(post)` → memetakan kolom ke bentuk yang ramah layout
- Layout utama: `src/layouts/PostLayout.astro` (mendukung beberapa skema: payload/directus/sanity/notion/mdx)
- Listing/komponen beranda: `src/components/Homepage/LatestPosts.astro`
- Kartu: `src/components/PostCard.astro`

## Skema Field

### MDX Frontmatter (contoh minimal)
Wajib: `title`, `slug`, `published`.

```
title: string
slug: string
published: Date | string
tags?: string[] | { value: string }[]
category?: string[] | { value: string }[]
coverImage?: string
imageUrl?: string
description?: string
lastUpdated?: Date | string
```

### Supabase Fields (umum)
- `cover_image`, `imageUrl`, `published`, `updated_at`, `created_at`, `status`
- Relasi:
  - `posts_tags` → kolom: `_parent_id`, `value`, `_order`
  - `posts_categories` → kolom: `_parent_id`, `value`, `_order`
- Pipeline adapter:
  - Ambil posts + join relasi tags/categories (via helper)
  - Proses `body` markdown → HTML (`marked`) untuk PostLayout
  - `convertSupabasePost` menormalkan ke field: `title`, `slug`, `description`, `imageUrl`, `coverImage`, `published`, `updated`, `tags`, `category`, `body`, `author`, `source`

## Komponen & Ketergantungan
- Layout: `src/layouts/PostLayout.astro`
  - Menyuntik `SchemaMarkup` type `article`, breadcrumbs, reading time opsional, tag ke link kategori.
  - Mendukung beberapa skema props; gunakan jalur payload/supabase modern bila memungkinkan.
- Kartu: `src/components/PostCard.astro`
  - Fungsi `getPostData()` memetakan input modern (title, slug, imageUrl, tags, description, published) dan skema lama (properties.b*) menjadi bentuk seragam.
  - URL modern: `/${slug}/` (root-level post routes).
- Latest: `src/components/Homepage/LatestPosts.astro`
  - Gabungkan `postsMdx` + `getPostsDirectFromSupabase` (melalui `convertSupabasePost`) dan sort tanggal.
- Routing Supabase: `src/pages/posts/[...slug].astro` → static paths dibangun dari Supabase langsung.

## Routing
- Modern: root-level post `/${slug}/` untuk kartu dan layout.
- Legacy: beberapa file MDX berada di `/posts/`; PostLayout menangani breadcrumb ke `/blog` namun URL modern root-level.

## Schema SEO
- `SchemaMarkup` type `article` menerima `title`, `description`, `image`, `author`, `datePublished`, `dateModified`, `tags`.
- Pastikan `published` dan `updated` valid ISO string.

## Checklist Perubahan Aman
1. Adapter Supabase
   - `getPostsDirectFromSupabase`: jika ada field baru (mis. `summary`, `reading_time`), tambahkan pemetaan dan proses markdown jika perlu.
   - `convertSupabasePost`: tambahkan field baru agar tersedia di PostLayout/PostCard.
2. Normalizer Komponen
   - `LatestPosts.astro`: pastikan normalisasi ke `properties.b*` tetap konsisten.
   - `PostCard.astro`: pastikan `getPostData()` mengenali field baru untuk tampilan ringkas.
3. Layout
   - `PostLayout.astro`: tampilkan field baru, injeksikan ke `SchemaMarkup` sesuai kebutuhan.
4. Pencarian
   - Pastikan content berada dalam elemen beratribut `data-pagefind-body` dan meta `data-pagefind-meta` untuk indeks Pagefind.
5. Kompatibilitas
   - Jangan menghapus skema lama (`properties.b*`) sebelum seluruh konten bermigrasi ke skema modern.

## Contoh Perubahan
- Menambah `readingTimeMinutes` berbasis `wordCount`:
  - Hitung di tempat konten dibuat (opsional) atau gunakan logika eksisting di `PostLayout.astro`.
  - Tambahkan rendering di bagian meta hero bila diperlukan.
- Menambah `author` per post:
  - Tambahkan di MDX/Supabase, paskan `convertSupabasePost` mengisi `author`.
  - Tampilkan di `PostLayout.astro` pada footer/hero meta.