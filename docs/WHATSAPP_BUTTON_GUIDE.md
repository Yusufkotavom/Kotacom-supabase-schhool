# Contact Buttons Component Guide

## Overview
Komponen tombol kontak floating yang sticky di pojok kanan bawah website. Tersedia dalam 2 versi: dengan animasi dan tanpa animasi. Setiap komponen berisi tombol telepon dan WhatsApp.

## Komponen yang Tersedia

### 1. ContactButtons.astro (Dengan Animasi)
- Tombol telepon (biru) dan WhatsApp (hijau) dengan efek pulse animation
- Hover effect dengan scale transform
- Warna resmi: Telepon (#007bff), WhatsApp (#25d366)

### 2. ContactButtonsSimple.astro (Tanpa Animasi)
- Tombol minimalis tanpa animasi
- Hover effect sederhana (translateY)
- Lebih ringan dan cepat

### 3. WhatsAppButton.astro (Hanya WhatsApp - Dengan Animasi)
- Tombol WhatsApp tunggal dengan efek pulse animation
- Hover effect dengan scale transform

### 4. WhatsAppButtonSimple.astro (Hanya WhatsApp - Tanpa Animasi)
- Tombol WhatsApp tunggal minimalis tanpa animasi
- Hover effect sederhana (translateY)

## Fitur

### ✅ Fitur Utama
- **Sticky Position**: Selalu berada di pojok kanan bawah
- **Responsive**: Menyesuaikan ukuran di mobile
- **Auto URL**: Otomatis menambahkan URL halaman saat ini
- **Customizable Message**: Pesan dapat dikustomisasi
- **Accessibility**: Dilengkapi aria-label untuk screen reader
- **Dual Contact**: Telepon dan WhatsApp dalam satu komponen

### 📱 Responsive Design
- Desktop: 50x50px (ContactButtons), 48x48px (ContactButtonsSimple)
- Mobile: 45x45px (ContactButtons), 44x44px (ContactButtonsSimple)
- Posisi: 20px dari tepi (desktop), 15px (mobile)
- Gap antar tombol: 12px (desktop), 10px (mobile)

## Penggunaan

### Basic Usage (Contact Buttons)
```astro
---
import ContactButtons from "../components/ContactButtons.astro";
---

<ContactButtons />
```

### Custom Message
```astro
<ContactButtons 
  phoneNumber="085799520350"
  whatsappMessage="Halo! Saya tertarik dengan produk di {url}. Mohon informasi lebih lanjut."
/>
```

### Simple Version (No Animation)
```astro
---
import ContactButtonsSimple from "../components/ContactButtonsSimple.astro";
---

<ContactButtonsSimple />
```

### WhatsApp Only (Legacy)
```astro
---
import WhatsAppButton from "../components/WhatsAppButton.astro";
---

<WhatsAppButton />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `phoneNumber` | string | "085799520350" | Nomor telepon/WhatsApp (format: 085799520350) |
| `whatsappMessage` | string | "Hallo kak saya melihat {url}. Nama: jelaskan kebutuhan" | Pesan WhatsApp yang akan dikirim |
| `className` | string | "" | CSS class tambahan |

## Message Template

### Default Message
```
Hallo kak saya melihat {url}. Nama: jelaskan kebutuhan
```

### Custom Templates
```astro
<!-- Untuk produk -->
<ContactButtons 
  whatsappMessage="Halo! Saya tertarik dengan produk di {url}. Mohon informasi harga dan stok."
/>

<!-- Untuk layanan -->
<ContactButtons 
  whatsappMessage="Halo! Saya ingin konsultasi tentang layanan di {url}. Kapan bisa bertemu?"
/>

<!-- Untuk informasi umum -->
<ContactButtons 
  whatsappMessage="Halo! Saya melihat informasi di {url}. Bisa tolong jelaskan lebih detail?"
/>
```

## Styling

### CSS Variables (Opsional)
Anda dapat mengkustomisasi dengan menambahkan CSS variables:

```css
:root {
  --contact-button-size: 50px;
  --phone-button-color: #007bff;
  --whatsapp-button-color: #25d366;
  --contact-button-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
```

### Custom Styling
```astro
<ContactButtons className="custom-contact-buttons" />

<style>
  .custom-contact-buttons {
    bottom: 30px !important;
    right: 30px !important;
  }
  
  .custom-contact-buttons .phone-button {
    background-color: #your-phone-color !important;
  }
  
  .custom-contact-buttons .whatsapp-button {
    background-color: #your-whatsapp-color !important;
  }
</style>
```

## Integrasi

### Di Layout Utama
Sudah terintegrasi di `MainLayout.astro` sehingga muncul di semua halaman:

```astro
---
import ContactButtons from "../components/ContactButtons.astro";
---

<ContactButtons />
```

### Di Halaman Tertentu
```astro
---
import ContactButtons from "../components/ContactButtons.astro";
---

<!-- Konten halaman -->
<main>
  <!-- Your content -->
</main>

<!-- Contact Buttons -->
<ContactButtons 
  whatsappMessage="Halo! Saya melihat halaman {url}. Bisa tolong bantu?"
/>
```

## Testing

### Test URL Generation
1. Buka halaman website
2. Klik tombol WhatsApp
3. Pastikan URL halaman muncul di pesan
4. Pastikan nomor telepon benar

### Test Phone Call
1. Buka di mobile device
2. Klik tombol telepon
3. Pastikan aplikasi telepon terbuka
4. Pastikan nomor telepon benar

### Test Responsive
1. Buka di mobile device
2. Pastikan ukuran tombol menyesuaikan
3. Pastikan posisi tetap di pojok kanan bawah
4. Pastikan gap antar tombol sesuai

## Troubleshooting

### Tombol Tidak Muncul
- Pastikan komponen diimport dengan benar
- Cek console untuk error
- Pastikan z-index tidak tertutup elemen lain

### Pesan Tidak Terformat
- Pastikan format nomor telepon benar (tanpa +62)
- Pastikan URL placeholder {url} ada di pesan
- Cek encoding URL

### Phone Call Tidak Berfungsi
- Pastikan format nomor telepon benar
- Test di device yang memiliki aplikasi telepon
- Pastikan tidak ada konflik dengan JavaScript

### Styling Issues
- Pastikan CSS tidak konflik dengan style lain
- Gunakan `!important` jika perlu override
- Cek responsive breakpoints

## Best Practices

### ✅ Do's
- Gunakan pesan yang jelas dan sopan
- Test di berbagai device
- Pastikan nomor telepon aktif
- Gunakan aria-label untuk accessibility
- Test fungsi telepon di mobile device

### ❌ Don'ts
- Jangan spam dengan pesan terlalu panjang
- Jangan gunakan nomor yang tidak aktif
- Jangan letakkan di posisi yang mengganggu UX
- Jangan gunakan animasi berlebihan
- Jangan lupa test fungsi telepon

## Performance

### Optimizations
- Komponen menggunakan CSS murni (tidak ada JavaScript)
- SVG icon inline (tidak ada request eksternal)
- Minimal CSS untuk performa optimal
- Responsive tanpa JavaScript

### Bundle Size
- ContactButtons.astro: ~3KB
- ContactButtonsSimple.astro: ~2.5KB
- WhatsAppButton.astro: ~2KB
- WhatsAppButtonSimple.astro: ~1.5KB
- Tidak ada dependencies eksternal

## Migration dari WhatsApp Button

Jika sebelumnya menggunakan `WhatsAppButton`, Anda dapat dengan mudah migrasi ke `ContactButtons`:

### Sebelum
```astro
<WhatsAppButton />
```

### Sesudah
```astro
<ContactButtons />
```

Semua props dan fungsionalitas WhatsApp tetap sama, hanya ditambahkan tombol telepon di atasnya.
