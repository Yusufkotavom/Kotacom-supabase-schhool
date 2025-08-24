# Redirects Management (Netlify & Vercel)

Sistem redirect dikelola terpusat via file data: `src/data/redirects.json`.

## Format Data
```
{
  "redirects": [
    {
      "from": "/posts/*",
      "to": "/:splat",
      "type": "permanent", // atau "temporary"
      "description": "Redirect legacy /posts/* to root"
    }
  ]
}
```
- `from`: path lama. Boleh without leading slash, akan dinormalisasi. Dukung wildcard `*`.
- `to`: path baru atau URL absolut.
- `type`: `permanent` (301) atau `temporary` (302).
- `description`: opsional, catatan manusia.
- `force`: opsional boolean. (Hanya untuk Netlify, tambahkan `!` di rule)

## Netlify
- Endpoint build: `src/pages/_redirects.js` membangkitkan file `_redirects` di output berdasarkan `src/data/redirects.json`.
- Tidak perlu konfigurasi tambahan di `netlify.toml`.
- Tambah aturan baru cukup edit `src/data/redirects.json` lalu build/deploy.

## Vercel
- Generator: `scripts/generate-vercel-redirects.js` membaca `src/data/redirects.json` dan menulis `vercel.json` dengan `redirects`.
- Hook: perintah build telah menjalankan generator sebelum `astro build`.
- Jika deploy di Vercel, pastikan file `vercel.json` ikut tercommit atau dibangkitkan otomatis selama build.

## Alur Kerja
1. Tambah/ubah rule di `src/data/redirects.json`.
2. Jalankan: `npm run build` (akan menghasilkan `_redirects` untuk Netlify dan `vercel.json` untuk Vercel).
3. Commit dan push perubahan.

## Contoh Aturan Umum
- Pindah rute blog lama `/posts/*` ke root-level posts:
```
{
  "from": "/posts/*",
  "to": "/:splat",
  "type": "permanent",
  "description": "Legacy blog route to new root-level"
}
```
- Ganti slug konten:
```
{
  "from": "old-slug",
  "to": "/new-slug",
  "type": "permanent"
}
```
- Redirect sementara ke kampanye:
```
{
  "from": "/promo",
  "to": "https://example.com/campaign",
  "type": "temporary"
}
```

Ikuti pedoman ini agar redirect konsisten lintas platform. Gunakan review PR untuk memverifikasi rule baru sebelum deploy.