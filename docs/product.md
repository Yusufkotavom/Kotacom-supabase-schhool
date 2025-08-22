# Product

Dokumentasi ini merinci seluruh field, mapping sumber data, komponen, dan aturan perubahan aman untuk entity Product.

## Sumber Data & Normalisasi
- MDX: `src/pages/products/*.mdx` (collection: `productsMdx`)
- Supabase: tabel `products` (lihat `src/lib/supabase-direct.ts` → `getProductsDirectFromSupabase`)
- Normalisasi utama terjadi di:
  - Halaman dinamis: `src/pages/products/[...slug].astro`
  - Listing: `src/pages/products/[...page].astro`
  - Beranda (latest): `src/components/Homepage/LatestProducts.astro`
  - Kartu: `src/components/ProductCard.astro`
  - Layout detail: `src/layouts/ProductPage.astro`

Semua tempat di atas harus tetap sinkron saat menambah/mengubah field.

## Skema Field

### MDX Frontmatter (contoh minimal)
Wajib: `title`, `slug`, `published`.
Opsional: lainnya.

```
title: string
slug: string
published: Date | string
imageUrl?: string
price?: string | number
description?: string
country?: string[]
locale?: string[]
category?: string[]
verify?: string
imageUrl2?: string
imageUrl3?: string
review?: string
features?: string[]
name?: string
type?: string[]
url?: string
otherUrl?: string
tokopediaUrl?: string
shopeeUrl?: string
blibliUrl?: string
bukalapakUrl?: string
lazadaUrl?: string
affiliateCode?: string
commissionRate?: string
affiliateProvider?: string
discountCode?: string
specialOffer?: string
ctaText?: string
priority?: 'featured'|'sponsored'|'bestseller'|'new'|'sale'|string
externalRating?: string | number
soldCount?: string | number
originalPrice?: string | number
isSponsored?: boolean
targetAudience?: string[]
brand?: string
model?: string
warranty?: string
condition?: string
weight?: string
dimensions?: string
color?: string
material?: string
availability?: string
stockQuantity?: string | number
minimumOrder?: string | number
shippingInfo?: string
returnPolicy?: string
tags?: string[]
seoTitle?: string
seoDescription?: string
metaKeywords?: string
```

### Supabase (kolom umum)
- Kolom mengikuti nama mirip MDX, beberapa memakai snake_case:
  - `image_url`, `image_url_2`, `image_url_3`, `cover_image`
  - `affiliate_code`, `commission_rate`, `cta_text`, `external_rating`, `sold_count`, `original_price`
  - `tokopedia_url`, `shopee_url`, `blibli_url`, `bukalapak_url`, `lazada_url`
- Mapping lengkap ada di:
  - `src/pages/products/[...slug].astro` → blok `source === 'supabase'`
  - `src/pages/products/[...page].astro` → `normalizedSupabaseProducts`

## Komponen & Ketergantungan
- Detail page: `src/layouts/ProductPage.astro`
  - Membaca `properties` dan membuat `productData` seragam untuk MDX dan Notion/Supabase.
  - Menghitung harga, diskon, badge priority, sponsored flag.
  - Menyuntik `SchemaMarkup` dengan type `product` dan field terkait.
  - Menampilkan galeri gambar, CTA marketplace, dan info tambahan.
- Kartu: `src/components/ProductCard.astro`
  - Mengubah bentuk MDX menjadi properti `properties.*` setara Notion.
  - Memakai `affiliateUtils.ts` untuk CTA, harga, badge, tracking click/view.
- Daftar terbaru: `src/components/Homepage/LatestProducts.astro`
  - Menggabungkan MDX + Supabase dan sort publikasi.
- Listing: `src/pages/products/[...page].astro`
  - Penggabungan MDX + Supabase, prioritas featured/sponsored, filter dropdown, pagination.
- Dropdown filter:
  - `PCountryDropdown.astro` → mengelompokkan berdasarkan `country` (saat ini dari MDX)
  - `PLocaleDropdown.astro` → `locale` dalam suatu `country` (MDX)
  - `ProductCategoryDropdown.astro` → mengelompokkan berdasarkan `category` (MDX)
  - Jika ingin mendukung Supabase di dropdown, ikuti Guideline Perubahan.
- SEO & Breadcrumbs: `src/components/SchemaMarkup.astro`

## Routing
- Detail: `/products/[slug]/` ditetapkan di `src/pages/products/[...slug].astro`
- Listing: `/products/` dengan pagination di `src/pages/products/[...page].astro`
- Listing per kategori/negara/lokasi: tersedia halaman folder lain (country/locale/category) jika dipakai.

## Schema SEO
- `SchemaMarkup.astro` dengan `type="product"` menerima:
  - `title`, `description`, `image`, `price`, `category`
  - `data` tambahan: `brand`, `sku`, `originalPrice`, `discountPercentage`, `isSponsored`, `externalRating`, `soldCount`, `commissionRate`, `specialOffer`, dll.
- Pastikan nilai angka harga dibersihkan (`price.replace(/[^\d]/g,'')`).

## Affiliate & Marketplace
- Utility: `src/utils/affiliateUtils.ts`
  - Tipe `AffiliateProduct` harus sinkron dengan field yang Anda pakai di kartu/halaman.
  - Fungsi utama: `getAffiliateMarketplaces`, `generateAffiliateUrl`, `getCTAText`, `formatAffiliatePrice`, `calculateDiscountPercentage`, `isSponsored`.
- Saat menambah marketplace baru, tambahkan config di `MARKETPLACE_AFFILIATE_CONFIG` dan mapping URL pada pemanggil utility.

## Checklist Perubahan Aman
Saat menambah/mengubah/menghapus field product, lakukan ini berurutan:
1. Adapter Supabase
   - Update getter di `src/lib/supabase-direct.ts` jika field berasal/dipakai dari Supabase.
2. Normalizer Halaman Dinamis
   - `src/pages/products/[...slug].astro`: tambah field ke objek `layoutData`/`properties`.
3. Listing & Latest
   - `src/pages/products/[...page].astro`: perbarui `normalizedMdxProducts` dan `normalizedSupabaseProducts`.
   - `src/components/Homepage/LatestProducts.astro`: perbarui normalizer MDX/Supabase jika tampil di beranda.
4. Kartu
   - `src/components/ProductCard.astro`: pastikan properti `properties.*` yang dipakai kartu tersedia.
5. Layout Detail
   - `src/layouts/ProductPage.astro`: tambahkan field pada `productData` dan bagian UI terkait (harga, fitur, CTA, dsb), serta `SchemaMarkup`.
6. Schema SEO
   - `src/components/SchemaMarkup.astro`: tambahkan ke `data` bila relevan untuk SEO.
7. Dropdown (opsional)
   - Jika field mempengaruhi filter (mis. category baru): pastikan dropdown relevant membaca data terbaru. Saat ini dropdown hanya MDX.
8. Pencarian
   - Pastikan atribut `data-pagefind-body` dan `data-pagefind-meta` tetap konsisten di layout.
9. Backward Compatibility
   - Jangan menghapus field lama sebelum memastikan semua referensi diperbarui dan build berjalan hijau.

## Contoh Dampak Perubahan Field
- Menambah `originalPrice` untuk diskon:
  - Tambah di MDX/Supabase, update normalizer `products/[...page].astro` dan `products/[...slug].astro`.
  - Pastikan `ProductCard.astro` dan `ProductPage.astro` menghitung `discountPercentage` dan menampilkan harga coret.
  - Tambahkan ke `SchemaMarkup` melalui `data.originalPrice` dan `discountPercentage`.

Ikuti checklist di atas setiap kali ada perubahan agar tidak merusak bagian lain yang sudah bekerja.