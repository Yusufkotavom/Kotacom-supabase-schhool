# Proyek Website (Astro)

Repo ini menggunakan Astro, MDX, dan Supabase untuk mengelola konten Product, Service, Post, dan Project.

## Dokumentasi Domain (WAJIB BACA)
- `docs/README.md` (index dokumentasi)
- `docs/product.md`
- `docs/service.md`
- `docs/post.md`
- `docs/project.md`
- `docs/change-guidelines.md`

Semua perubahan pada field/data/komponen HARUS mengikuti pedoman pada dokumentasi di atas agar tidak merusak bagian lain yang sudah bekerja.

## Menjalankan Lokal
1. Install deps: `npm install` atau `pnpm install`
2. Jalankan dev: `npm run dev`
3. Build produksi: `npm run build`

Pastikan variabel lingkungan Supabase tersedia: `SUPABASE_URL`, `SUPABASE_ANON_KEY`.

## Kontribusi
- Sebelum implementasi, cek dokumen entitas terkait di `docs/*.md` dan `docs/change-guidelines.md`.
- Jika menambah/ubah field:
  - Perbarui adapter Supabase (jika relevan), normalizer halaman, komponen kartu, layout, dan SchemaMarkup.
  - Jalankan build dan cek halaman: detail, listing, latest, dan search.
  - Update dokumentasi di `docs/*.md`.
- Buat PR dengan ringkasan perubahan + checklist hijau (lihat guideline).