# Post

Dokumentasi ini mengatur field, mapping sumber data, komponen, dan aturan perubahan aman untuk Post (Blog/Artikel).

## Perubahan Terbaru
- Layout single post minimalis (Flowbite): header sederhana, featured image, konten di kiri, sidebar di kanan.
- Table of Contents (TOC) H2-only: otomatis disisipkan setelah paragraf pertama konten; rapat (leading-tight), teks kecil (text-xs).
- Sidebar sticky di desktop (lg:sticky lg:top-24), mobile tetap di bawah konten.
- Kategori Populer: dihitung dari gabungan MDX + Supabase (published) sekali saat build, dipass ke layout melalui props.
- Hindari fetch per-halaman: agregasi data dilakukan di `getStaticPaths`, bukan di layout.

## Sumber Data & Normalisasi
- MD/MDX: `src/pages/posts/*.md*` (collection: `postsMdx`)
- Supabase: tabel `posts` + relasi `posts_tags`, `posts_categories`
- Adapter: `src/lib/supabase-direct.ts`
- Layout: `src/layouts/PostLayout.astro` (menerima `popularCategories` via props)
- Routing: `src/pages/[...slug].astro`
  - Render konten:
    - Supabase: `processedContent` (HTML langsung atau markdown yang diparse `marked`) dimasukkan ke slot.
    - MDX: `Content` komponen dimasukkan ke slot.
- Listing: `src/pages/[...page].astro`

## TOC (Daftar Isi)
- Target heading: H2 saja (`article.querySelectorAll('h2')`).
- Gaya: `space-y-1`, `text-xs`, `leading-tight`.
- Posisi: disisipkan setelah paragraf pertama konten (`firstP.nextSibling`).

## Popular Categories
- Dihitung sekali di `getStaticPaths` `src/pages/[...slug].astro` dari:
  - `postsMdx`: `data.category` + `data.tags`
  - Supabase: `category` + `tags` (published)
- Dibatasi top 10, di-pass ke layout sebagai `popularCategories`.
- Layout hanya membaca `popularCategories` (tidak fetch sendiri).

## Checklist Perubahan Aman (Post)
1. Jika ubah struktur konten Supabase (markdown vs HTML), pastikan `src/pages/[...slug].astro` masih mendeteksi dengan regex sederhana sebelum parsing `marked`.
2. Jika mengubah lokasi TOC, perbarui script DOM di layout.
3. Jika mengubah sumber kategori, lakukan agregasi di `getStaticPaths` (bukan di layout).
4. Pastikan slot `PostLayout` terus meng-render konten (MDX atau Supabase) agar tidak blank.