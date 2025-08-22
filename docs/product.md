# Product

Dokumentasi ini merinci seluruh field, mapping sumber data, komponen, dan aturan perubahan aman untuk entity Product.

## Perubahan UI
- Filter negara di UI produk tidak digunakan lagi. Hilangkan komponen terkait dari listing/beranda.
- Fokus filter pada kategori dan urutan (priority/date/price) saja.

## Sumber Data & Normalisasi
- MDX: `src/pages/products/*.mdx` (collection: `productsMdx`)
- Supabase: tabel `products`
- Normalisasi utama terjadi di:
  - Detail: `src/pages/products/[...slug].astro`
  - Listing: `src/pages/products/[...page].astro`
  - Beranda (latest): `src/components/Homepage/LatestProducts.astro`
  - Kartu: `src/components/ProductCard.astro`
  - Layout detail: `src/layouts/ProductPage.astro`

## Komponen & Ketergantungan (Disederhanakan)
- Daftar terbaru: `src/components/Homepage/LatestProducts.astro`
  - Hapus penggunaan filter negara (dropdown negara/lokasi tidak diperlukan).
- Listing: `src/pages/products/[...page].astro`
  - Pertahankan sorting dan filter kategori.
- Dropdown yang tetap dipakai:
  - `ProductCategoryDropdown.astro` (kategori saja).
- Dropdown yang tidak dipakai lagi:
  - `PCountryDropdown.astro`, `PLocaleDropdown.astro` (negara/lokasi) — jangan ditampilkan di UI.

## Checklist Perubahan Aman (Product)
1. Hapus rendering komponen negara/lokasi dari UI (beranda & listing).
2. Jangan hapus file secara fisik bila masih dipakai di tempat lain; cukup tidak dirender.
3. Uji listing & homepage untuk memastikan tidak ada import/JS error terkait dropdown yang dihapus.
4. Perbarui dokumentasi dan contoh jika ada screenshot/README terkait UI filter.