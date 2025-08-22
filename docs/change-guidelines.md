# Guideline Perubahan Aman (AI/Developer)

Dokumen ini adalah pedoman WAJIB saat menambah, mengubah, atau menghapus field/komponen terkait Product, Service, Post, Project. Tujuan: menjaga kompatibilitas, mencegah regresi, dan memastikan semua komponen terkait ikut diperbarui.

## Prinsip Utama
- Jangan merusak kode yang bekerja: perubahan harus backward compatible atau disertai migrasi menyeluruh.
- Satu sumber kebenaran: mapping di normalizer harus konsisten di semua tempat (detail, listing, latest, kartu, SEO schema, dropdown, pencarian).
- Selalu normalisasi array: perlakukan field multi-nilai sebagai array agar UI stabil.
- Hindari null/undefined di UI: sediakan default aman pada mapping (string kosong atau array kosong).
- Jangan hard-delete field lama sebelum semua referensi diperbarui dan build/test lulus.

## Best Practice Build Performance
- Hindari fetch data per-halaman di layout. Lakukan agregasi (mis. popular categories/tags) sekali di `getStaticPaths` dan pass via props.
- Jika konten Supabase bisa berupa HTML atau Markdown, deteksi sederhana (regex tag HTML) sebelum mem-parsing `marked` untuk menghindari double parse.
- Kurangi pekerjaaan runtime di komponen/slot; gunakan normalisasi di static generation.

## Proses Umum Perubahan Field
1. Definisikan Perubahan
   - Nama field baru/diubah/dihapus.
   - Tipe data dan penggunaan di UI/SEO/tracking.
2. Update Sumber Data
   - MDX: tambahkan di frontmatter contoh.
   - Supabase: tambahkan kolom/relasi. Dokumentasikan perbedaan snake_case vs camelCase.
3. Update Adapter/Fetcher
   - Products/Services/Projects/Posts: perbarui fungsi `get*DirectFromSupabase` dan/atau converter.
   - Jika konten rich text/markdown, proses menjadi HTML (gunakan `marked` konfigurasi yang sama).
4. Update Normalizer Halaman
   - Detail: `src/pages/{entity}/[...slug].astro`: `layoutData`/`properties` harus memuat field baru.
   - Listing/Latest: normalizer MDX dan Supabase harus memetakan field baru agar kartu & sort/filter berfungsi.
5. Update Komponen UI
   - Kartu (`*Card.astro`) dan layout (`*Page.astro`/`PostLayout.astro`).
   - SchemaMarkup: injeksikan atribut relevan.
   - Dropdown: pastikan sumber data dan counting mencakup field baru (atau nonaktifkan bila tak dipakai lagi).
6. Pencarian
   - Pastikan konten tetap berada dalam `data-pagefind-body` dan meta `data-pagefind-meta`.
7. Uji Lokal
   - Jalankan build dan validasi halaman: detail, listing, homepage latest, dan search.
8. Dokumentasi
   - Perbarui `docs/{entity}.md` dan catatan migrasi.

## Strategi Kompatibilitas Belakang
- Tambahkan field baru sebagai opsional, beri default aman saat tidak tersedia.
- Saat rename field, pertahankan pembacaan lama dan baru sampai migrasi konten selesai:
  - Contoh: `originalPrice` (baru) dan `original_price` (lama) → mapping keduanya.
- Hindari memaksa UI membaca hanya satu skema sampai semua normalizer siap.

## Panduan Khusus per Entitas
- Product: update `affiliateUtils.ts` bila field memengaruhi CTA/affiliate/discount. Validasi format harga (`formatAffiliatePrice`).
- Service: validasi `formatPrice` util (pastikan tersedia) dan tampilkan `wilayah`, `provider`, `type` konsisten.
- Post: gunakan `convertSupabasePost` untuk konsistensi, jaga root-level routing `/${slug}/` di kartu.
- Project: ketika menambah metrics/technologies/testimonial, perbarui tampilan di `ProjectPage.astro` dan `SchemaMarkup`.

## Checklist Final (Sebelum Merge)
- [ ] Adapter Supabase diperbarui dan tidak error saat fetch.
- [ ] Agregasi (jika ada) dihitung di `getStaticPaths` dan dipass via props.
- [ ] Komponen kartu & layout menampilkan field baru tanpa error ketika kosong.
- [ ] SchemaMarkup valid.
- [ ] Dropdown relevan atau disembunyikan jika tidak dipakai.
- [ ] Pencarian berfungsi.
- [ ] Build hijau.
- [ ] `docs/*.md` diperbarui.

Ikuti urutan ini untuk menghindari regresi dan menjaga konsistensi lintas komponen.