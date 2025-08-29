# 🎓 SD Muhammadiyah 20 Surabaya - School Section

## 📁 Struktur File

### Layout & Pages
- **`src/layouts/SchoolLayout.astro`** - Layout khusus untuk halaman school
- **`src/pages/school.astro`** - Halaman utama school
- **`src/pages/school/contact.astro`** - Halaman contact us
- **`src/pages/school/index.astro`** - Redirect ke halaman utama

### Komponen School
- **`src/components/School/SchoolHeader.astro`** - Header khusus school dengan navigasi
- **`src/components/School/SchoolFooter.astro`** - Footer khusus school dengan informasi lengkap
- **`src/components/School/SchoolLottieSeparator.astro`** - Separator animasi untuk school

### Komponen Homepage (School-themed)
- **`src/components/Homepage/SchoolHero.astro`** - Hero section untuk school
- **`src/components/Homepage/WhyChooseUs.astro`** - Kenapa memilih sekolah kami
- **`src/components/Homepage/SwipeGallery.astro`** - Galeri dengan swipe functionality
- **`src/components/Homepage/ServicesHighlight.astro`** - Highlight program unggulan
- **`src/components/Homepage/SchoolInfo.astro`** - Informasi sekolah lengkap
- **`src/components/Homepage/SchoolFAQ.astro`** - FAQ sekolah
- **`src/components/Homepage/ClientTestimonials.astro`** - Testimoni siswa/orangtua

## 🌐 URL Structure

- **`/school`** - Halaman utama school
- **`/school/contact`** - Halaman contact us
- **`/school/`** - Redirect ke `/school`

## ✨ Fitur Utama

### 🎨 Design System
- **Color Scheme**: Blue (#3b82f6), Red (#ef4444), Yellow (#fbbf24)
- **Dark/Light Mode**: Toggle theme dengan localStorage
- **Responsive Design**: Mobile-first approach
- **Custom Animations**: Bounce, ping, pulse, float

### 🧭 Navigation
- **Sticky Header**: Navigasi yang tetap di atas
- **Mobile Menu**: Hamburger menu untuk mobile
- **Smooth Scrolling**: Scroll halus ke anchor links
- **Active States**: Hover dan focus states

### 📱 Responsive Features
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid Systems**: Responsive grid layouts
- **Typography**: Responsive font sizes
- **Spacing**: Responsive padding dan margin

### 🎭 Animations
- **Scroll Reveal**: Animasi saat scroll
- **Hover Effects**: Transform dan scale effects
- **Loading States**: Skeleton dan loading animations
- **Micro-interactions**: Button hover, form focus

## 🚀 Cara Penggunaan

### 1. Menambahkan Halaman Baru
```astro
---
import SchoolLayout from "../../layouts/SchoolLayout.astro";

const title = "Judul Halaman";
const description = "Deskripsi halaman";
---

<SchoolLayout title={title} description={description}>
  <!-- Konten halaman -->
</SchoolLayout>
```

### 2. Menggunakan Komponen School
```astro
---
import SchoolHeader from "../components/School/SchoolHeader.astro";
import SchoolFooter from "../components/School/SchoolFooter.astro";
---

<SchoolHeader />
<!-- Konten -->
<SchoolFooter />
```

### 3. Menambahkan Separator
```astro
---
import SchoolLottieSeparator from "../components/School/SchoolLottieSeparator.astro";
---

<SchoolLottieSeparator animation="school" height="h-20" />
```

## 🎯 Komponen yang Tersedia

### Header
- Logo sekolah dengan gradient
- Navigasi utama (Beranda, Program, Fasilitas, Galeri, Tentang Kami, Kontak)
- Theme toggle (Dark/Light mode)
- CTA button "Daftar Sekarang"
- Mobile responsive menu

### Footer
- Informasi sekolah lengkap
- Quick links ke semua section
- Contact information (alamat, telepon, email, WhatsApp)
- Social media links
- Back to top button

### Separator
- Animasi school icon dengan bounce
- Floating particles (ping, pulse, bounce)
- Decorative lines dan shapes
- Wave pattern di bagian bawah

## 🔧 Customization

### Mengubah Warna
```css
/* Di SchoolLayout.astro */
colors: {
  'school-blue': '#3b82f6',
  'school-red': '#ef4444',
  'school-yellow': '#fbbf24',
}
```

### Mengubah Animasi
```css
/* Custom keyframes */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

### Mengubah Font
```html
<!-- Preload fonts di SchoolLayout.astro -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

## 📱 Mobile Optimization

- **Touch-friendly**: Button sizes minimal 44px
- **Swipe gestures**: Gallery dengan swipe functionality
- **Responsive images**: Optimized untuk berbagai screen size
- **Mobile menu**: Collapsible navigation untuk mobile

## 🌙 Dark Mode Support

- **System preference**: Mengikuti preferensi sistem
- **Manual toggle**: Button toggle di header
- **Persistent**: Disimpan di localStorage
- **Smooth transitions**: Transisi halus antar mode

## 🚀 Performance Features

- **Lazy loading**: Images dengan loading="lazy"
- **Optimized CSS**: Tailwind CSS dari CDN
- **Minimal JavaScript**: Vanilla JS tanpa dependencies
- **Efficient animations**: CSS animations yang smooth

## 📞 Contact Information

- **WhatsApp**: +62 857-9952-0350
- **Telepon**: (031) 123-4567, (031) 123-4568
- **Email**: info@muhammadiyah20.sch.id
- **Alamat**: Jl. Contoh No. 123, Surabaya, Jawa Timur
- **Jam Operasional**: Senin-Jumat 07:00-15:00, Sabtu 07:00-12:00

## 🔄 Update & Maintenance

### Menambah Section Baru
1. Buat komponen di `src/components/Homepage/`
2. Import dan gunakan di `src/pages/school.astro`
3. Tambahkan link navigasi di `SchoolHeader.astro`

### Mengubah Styling
1. Edit CSS di `SchoolLayout.astro`
2. Update Tailwind config jika diperlukan
3. Test di berbagai device dan browser

### Menambah Halaman Baru
1. Buat file `.astro` di `src/pages/school/`
2. Gunakan `SchoolLayout` sebagai wrapper
3. Update navigasi di header dan footer

---

**Dibuat dengan ❤️ untuk SD Muhammadiyah 20 Surabaya**