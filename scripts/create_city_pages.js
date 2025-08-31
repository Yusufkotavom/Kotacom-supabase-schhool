const fs = require('fs');
const path = require('path');

// Read city data
const kotaData = JSON.parse(fs.readFileSync('src/data/kota-indonesia.json', 'utf8'));

// Cities that already have custom pages
const customCities = ['jakarta', 'surabaya'];

// Template for city-specific pages
const cityPageTemplate = (kota) => `---
import MainLayout from '../../../layouts/MainLayout.astro';
import CityWebsiteTemplate from '../../../components/CityWebsiteTemplate.astro';
import BaseHead from '../../../components/BaseHead.astro';

// ${kota.nama} specific data
const ${kota.slug}Data = {
  nama: "${kota.nama}",
  slug: "${kota.slug}",
  provinsi: "${kota.provinsi}",
  populasi: ${kota.populasi},
  bisnisUtama: ${JSON.stringify(kota.bisnisUtama)},
  keywords: ${JSON.stringify(kota.keywords)},
  metaTitle: "${kota.metaTitle}",
  metaDescription: "${kota.metaDescription}",
  localBusiness: {
    address: "${kota.localBusiness.address}",
    phone: "${kota.localBusiness.phone}",
    email: "${kota.localBusiness.email}"
  },
  areaCoverage: ${JSON.stringify(kota.areaCoverage)},
  competitors: ${JSON.stringify(kota.competitors)},
  marketSize: "${kota.marketSize}"
};

// Enhanced structured data for ${kota.nama}
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Kotacom - Jasa Website ${kota.nama}",
  "description": ${kota.slug}Data.metaDescription,
  "url": "https://kotacom.id/pembuatan-website/${kota.slug}",
  "telephone": ${kota.slug}Data.localBusiness.phone,
  "email": ${kota.slug}Data.localBusiness.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": ${kota.slug}Data.localBusiness.address,
    "addressLocality": "${kota.nama}",
    "addressRegion": "${kota.provinsi}",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-6.2088", // Default coordinates, should be updated per city
    "longitude": "106.8456"
  },
  "areaServed": {
    "@type": "City",
    "name": "${kota.nama}",
    "addressRegion": "${kota.provinsi}"
  },
  "serviceType": [
    "Website Development ${kota.nama}",
    "Web Design ${kota.nama}",
    "E-commerce ${kota.nama}",
    "Company Profile Website ${kota.nama}",
    "Toko Online ${kota.nama}",
    "Digital Marketing ${kota.nama}"
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "100"
  },
  "openingHours": "Mo-Fr 09:00-18:00"
};
---

<html lang="id">
  <head>
    <BaseHead
      title={${kota.slug}Data.metaTitle}
      description={${kota.slug}Data.metaDescription}
      keywords={${kota.slug}Data.keywords.join(', ')}
      canonicalUrl="/pembuatan-website/${kota.slug}"
      ogImage="/images/kotacom-${kota.slug}-og.jpg"
      structuredData={structuredData}
    />

    <!-- ${kota.nama}-specific meta tags -->
    <meta name="geo.region" content="ID-${kota.provinsi === 'DKI Jakarta' ? 'JK' : kota.provinsi.split(' ')[0].slice(0,2).toUpperCase()}" />
    <meta name="geo.placename" content="${kota.nama}, Indonesia" />
    <meta name="geo.position" content="-6.2088;106.8456" />
    <meta name="ICBM" content="-6.2088, 106.8456" />

    <!-- Local SEO -->
    <link rel="alternate" hreflang="id-id" href="https://kotacom.id/pembuatan-website/${kota.slug}" />
  </head>

  <body>
    <MainLayout>
      <CityWebsiteTemplate kota={${kota.slug}Data} client:load />

      <!-- ${kota.nama}-specific additional sections -->
      <section class="py-16 bg-gradient-to-r from-${getRandomColor()}-50 to-${getRandomColor()}-50">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ${getCityHeadline(kota)}
              </h2>
              <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                ${kota.marketSize} - ${kota.populasi.toLocaleString()} penduduk
              </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              ${getCityStats(kota).map(stat => `
              <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                <div class="w-16 h-16 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">${stat.icon}</span>
                </div>
                <h3 class="text-xl font-semibold mb-3">${stat.title}</h3>
                <p class="text-gray-600">
                  ${stat.description}
                </p>
              </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- ${kota.nama} Business Areas -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kawasan Bisnis ${kota.nama}
              </h2>
              <p class="text-lg text-gray-600">
                Layanan website untuk setiap area bisnis di ${kota.nama}
              </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${kota.areaCoverage.slice(0, 6).map((area, index) => {
                const colors = ['blue', 'green', 'purple', 'orange', 'red', 'teal'];
                const color = colors[index % colors.length];
                return `
              <div class="bg-gradient-to-br from-${color}-50 to-${color}-100 p-6 rounded-lg border-l-4 border-${color}-500">
                <h3 class="text-xl font-semibold mb-2">${area}</h3>
                <p class="text-gray-600 mb-3">Area bisnis strategis ${kota.nama}</p>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Website company profile</li>
                  <li>• Toko online lokal</li>
                  <li>• Landing page marketing</li>
                </ul>
              </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- ${kota.nama} Success Stories -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Portfolio Website ${kota.nama}
              </h2>
              <p class="text-lg text-gray-600">
                Website sukses yang telah kami kembangkan untuk klien di ${kota.nama}
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
              ${getSuccessStories(kota).map(story => `
              <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="w-12 h-12 bg-${story.color}-100 rounded-lg flex items-center justify-center mb-4">
                  <span class="text-xl">${story.icon}</span>
                </div>
                <h3 class="text-xl font-semibold mb-3">${story.title}</h3>
                <p class="text-gray-600 mb-4">
                  ${story.description}
                </p>
                <div class="flex items-center text-sm text-gray-500">
                  <span class="bg-green-100 text-green-800 px-2 py-1 rounded">${story.metric}</span>
                </div>
              </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  </body>
</html>`;

// Helper functions
function getRandomColor() {
  const colors = ['blue', 'green', 'purple', 'orange', 'red', 'teal', 'indigo', 'pink'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getCityHeadline(kota) {
  const headlines = {
    'Bandung': 'Kota Kreatif Butuh Website Modern',
    'Medan': 'Ibukota Sumatera Butuh Website Professional',
    'Semarang': 'Kota Pelabuhan Butuh Website Strategis',
    'Yogyakarta': 'Kota Pendidikan Butuh Website Inovatif',
    'Makassar': 'Ibukota Sulawesi Butuh Website Kompetitif',
    'Palembang': 'Kota Industri Butuh Website Modern',
    'Tangerang': 'Kota Logistik Butuh Website Efisien',
    'Depok': 'Kota Pendidikan Butuh Website Terpercaya',
    'Bekasi': 'Kota Industri Butuh Website Professional',
    'Bogor': 'Kota Wisata Butuh Website Menarik',
    'Malang': 'Kota Pendidikan Butuh Website Modern',
    'Solo': 'Kota Budaya Butuh Website Unik',
    'Padang': 'Kota Kuliner Butuh Website Menarik'
  };
  return headlines[kota.nama] || `${kota.nama} Butuh Website Modern`;
}

function getCityStats(kota) {
  const statsMap = {
    'Bandung': [
      { icon: '🎨', title: 'Kota Kreatif', description: 'Pusat fashion dan desain terbesar di Jawa Barat', color: 'purple' },
      { icon: '🎓', title: 'Pendidikan Unggul', description: 'Universitas terbaik berkontribusi pada inovasi', color: 'blue' },
      { icon: '🏢', title: 'Bisnis Modern', description: 'Startups dan UMKM berkembang pesat', color: 'green' },
      { icon: '📍', title: 'Lokasi Strategis', description: 'Akses mudah ke Jakarta dan Jawa Barat', color: 'orange' }
    ],
    'Medan': [
      { icon: '🏭', title: 'Industri Terbesar', description: 'Pusat perdagangan dan manufaktur Sumatera', color: 'blue' },
      { icon: '🌴', title: 'Kota Tropis', description: 'Kawasan wisata dan kuliner terkenal', color: 'green' },
      { icon: '🎓', title: 'Pendidikan Berkualitas', description: 'Universitas ternama di Sumatera Utara', color: 'purple' },
      { icon: '🚢', title: 'Pelabuhan Strategis', description: 'Gerbang ekspor impor Sumatera', color: 'orange' }
    ],
    'Semarang': [
      { icon: '🚢', title: 'Pelabuhan Utama', description: 'Pintu gerbang perdagangan Jawa Tengah', color: 'blue' },
      { icon: '🏭', title: 'Industri Maritim', description: 'Pusat industri dan logistik strategis', color: 'green' },
      { icon: '🎓', title: 'Kota Pendidikan', description: 'Universitas dan sekolah berkualitas', color: 'purple' },
      { icon: '🏛️', title: 'Sejarah Kaya', description: 'Kota tua dengan warisan budaya', color: 'orange' }
    ],
    'Yogyakarta': [
      { icon: '🎓', title: 'Kota Pelajar', description: 'Pusat pendidikan tertinggi di Indonesia', color: 'blue' },
      { icon: '🏛️', title: 'Warisan Budaya', description: 'Kota istimewa dengan sejarah kaya', color: 'green' },
      { icon: '🎨', title: 'Seni & Kerajinan', description: 'Pusat kreativitas dan seni tradisional', color: 'purple' },
      { icon: '🗻', title: 'Wisata Alam', description: 'Gunung Merapi dan keindahan alam', color: 'orange' }
    ],
    'Makassar': [
      { icon: '🚢', title: 'Pelabuhan Strategis', description: 'Gerbang Timur Indonesia', color: 'blue' },
      { icon: '🌴', title: 'Kota Tropis', description: 'Pantai dan wisata bahari', color: 'green' },
      { icon: '🎓', title: 'Pendidikan Unggul', description: 'Universitas Hasanuddin', color: 'purple' },
      { icon: '🏭', title: 'Industri Maritim', description: 'Pusat ekonomi Sulawesi Selatan', color: 'orange' }
    ],
    'Palembang': [
      { icon: '🏭', title: 'Industri Terbesar', description: 'Pusat manufaktur Sumatera Selatan', color: 'blue' },
      { icon: '🌊', title: 'Sungai Musi', description: 'Transportasi air strategis', color: 'green' },
      { icon: '🎓', title: 'Kota Pendidikan', description: 'Universitas Sriwijaya', color: 'purple' },
      { icon: '⚽', title: 'Olahraga', description: 'Pusat sepakbola profesional', color: 'orange' }
    ],
    'Tangerang': [
      { icon: '🏭', title: 'Industri Modern', description: 'Kawasan industri terbesar di Banten', color: 'blue' },
      { icon: '✈️', title: 'Bandara Internasional', description: 'Soekarno-Hatta Airport', color: 'green' },
      { icon: '🚛', title: 'Logistik Strategis', description: 'Pusat distribusi nasional', color: 'purple' },
      { icon: '🏢', title: 'Bisnis Modern', description: 'Perkantoran dan korporasi', color: 'orange' }
    ],
    'Depok': [
      { icon: '🎓', title: 'Kota Pendidikan', description: 'Pusat universitas terkemuka', color: 'blue' },
      { icon: '🏠', title: 'Perumahan Elite', description: 'Kawasan hunian premium', color: 'green' },
      { icon: '🛒', title: 'Retail Modern', description: 'Mall dan pusat perbelanjaan', color: 'purple' },
      { icon: '🚇', title: 'Transportasi Modern', description: 'Akses LRT dan commuter line', color: 'orange' }
    ],
    'Bekasi': [
      { icon: '🏭', title: 'Industri Terbesar', description: 'Pusat manufaktur Indonesia', color: 'blue' },
      { icon: '🚛', title: 'Logistik Nasional', description: 'Pusat distribusi terbesar', color: 'green' },
      { icon: '🏠', title: 'Perumahan Massal', description: 'Kawasan hunian terjangkau', color: 'purple' },
      { icon: '🛒', title: 'Retail Modern', description: 'Mall dan pusat belanja', color: 'orange' }
    ],
    'Bogor': [
      { icon: '🌳', title: 'Kota Hutan', description: 'Kebun raya dan hutan lindung', color: 'green' },
      { icon: '🎓', title: 'Pendidikan Unggul', description: 'IPB University', color: 'blue' },
      { icon: '🏠', title: 'Perumahan Elite', description: 'Kawasan hunian premium', color: 'purple' },
      { icon: '☕', title: 'Wisata Kuliner', description: 'Kopi dan makanan khas', color: 'orange' }
    ],
    'Malang': [
      { icon: '🎓', title: 'Kota Pendidikan', description: 'Universitas Brawijaya dan UM', color: 'blue' },
      { icon: '🏔️', title: 'Wisata Alam', description: 'Gunung dan danau indah', color: 'green' },
      { icon: '🍎', title: 'Kota Apel', description: 'Produksi buah terkenal', color: 'red' },
      { icon: '🏛️', title: 'Sejarah Kolonial', description: 'Bangunan bersejarah', color: 'orange' }
    ],
    'Solo': [
      { icon: '🏛️', title: 'Warisan Budaya', description: 'Keraton dan sejarah kaya', color: 'orange' },
      { icon: '🎭', title: 'Seni Tradisional', description: 'Wayang dan budaya Jawa', color: 'purple' },
      { icon: '🎓', title: 'Pendidikan Unggul', description: 'UNS dan sekolah berkualitas', color: 'blue' },
      { icon: '🛍️', title: 'Belanja Tradisional', description: 'Pasar dan toko batik', color: 'green' }
    ],
    'Padang': [
      { icon: '🍜', title: 'Kota Kuliner', description: 'Rendang dan masakan Padang', color: 'orange' },
      { icon: '🌊', title: 'Wisata Pantai', description: 'Pantai dan wisata bahari', color: 'blue' },
      { icon: '🎓', title: 'Pendidikan Unggul', description: 'Universitas Andalas', color: 'purple' },
      { icon: '🏔️', title: 'Wisata Alam', description: 'Bukittinggi dan Jam Gadang', color: 'green' }
    ]
  };

  return statsMap[kota.nama] || [
    { icon: '🏢', title: 'Bisnis Berkembang', description: 'Kota dengan pertumbuhan ekonomi pesat', color: 'blue' },
    { icon: '👥', title: 'Populasi Besar', description: `${kota.populasi.toLocaleString()} penduduk aktif`, color: 'green' },
    { icon: '💼', title: 'Berbagai Sektor', description: 'Bisnis ' + kota.bisnisUtama[0].toLowerCase() + ' terkemuka', color: 'purple' },
    { icon: '📈', title: 'Pertumbuhan Pesat', description: 'Kota dengan potensi besar', color: 'orange' }
  ];
}

function getSuccessStories(kota) {
  const storiesMap = {
    'Bandung': [
      { icon: '👕', title: 'Fashion Brand Bandung', description: 'Website e-commerce fashion dengan design modern', color: 'purple', metric: '+400% Sales' },
      { icon: '🎨', title: 'Design Studio Bandung', description: 'Portfolio website untuk studio desain kreatif', color: 'blue', metric: '+200% Projects' },
      { icon: '☕', title: 'Café Bandung', description: 'Website kafe dengan sistem pemesanan online', color: 'green', metric: '+150% Orders' }
    ],
    'Medan': [
      { icon: '🏭', title: 'Manufaktur Medan', description: 'Website B2B untuk perusahaan manufaktur', color: 'blue', metric: '+300% Inquiries' },
      { icon: '🏪', title: 'Retail Medan', description: 'Toko online dengan sistem inventory lengkap', color: 'green', metric: '+250% Orders' },
      { icon: '🍽️', title: 'Restoran Medan', description: 'Website restoran dengan menu digital', color: 'orange', metric: '+180% Reservations' }
    ],
    'Semarang': [
      { icon: '🚢', title: 'Shipping Semarang', description: 'Website logistik dengan tracking system', color: 'blue', metric: '+350% Shipments' },
      { icon: '🏭', title: 'Industri Semarang', description: 'Website company profile industri maritim', color: 'green', metric: '+220% Leads' },
      { icon: '🎓', title: 'Universitas Semarang', description: 'Website pendidikan dengan portal mahasiswa', color: 'purple', metric: '+400% Applications' }
    ],
    'Yogyakarta': [
      { icon: '🎓', title: 'Universitas Yogyakarta', description: 'Website universitas dengan sistem akademik', color: 'blue', metric: '+500% Applications' },
      { icon: '🏛️', title: 'Museum Yogyakarta', description: 'Website museum dengan virtual tour', color: 'green', metric: '+300% Visitors' },
      { icon: '🎨', title: 'Galeri Seni Yogyakarta', description: 'Website galeri dengan katalog digital', color: 'purple', metric: '+250% Sales' }
    ],
    'Makassar': [
      { icon: '🚢', title: 'Pelabuhan Makassar', description: 'Website logistik dengan booking system', color: 'blue', metric: '+280% Bookings' },
      { icon: '🏭', title: 'Industri Makassar', description: 'Website manufaktur dengan B2B portal', color: 'green', metric: '+200% Inquiries' },
      { icon: '🎓', title: 'Universitas Makassar', description: 'Website pendidikan Hasanuddin', color: 'purple', metric: '+350% Enrollments' }
    ],
    'Palembang': [
      { icon: '🏭', title: 'Industri Palembang', description: 'Website manufaktur dengan sistem ERP', color: 'blue', metric: '+320% Production' },
      { icon: '⚽', title: 'Klub Sepakbola', description: 'Website klub dengan ticket online', color: 'green', metric: '+250% Attendance' },
      { icon: '🎓', title: 'Universitas Palembang', description: 'Website UNSRI dengan e-learning', color: 'purple', metric: '+300% Students' }
    ],
    'Tangerang': [
      { icon: '🏭', title: 'Industri Tangerang', description: 'Website korporasi dengan intranet', color: 'blue', metric: '+240% Efficiency' },
      { icon: '✈️', title: 'Travel Agent', description: 'Website biro perjalanan online', color: 'green', metric: '+300% Bookings' },
      { icon: '🚛', title: 'Logistik Tangerang', description: 'Website distribusi dengan tracking', color: 'orange', metric: '+180% Deliveries' }
    ],
    'Depok': [
      { icon: '🎓', title: 'Universitas Depok', description: 'Website UI dengan portal akademik', color: 'blue', metric: '+450% Applications' },
      { icon: '🏠', title: 'Developer Property', description: 'Website properti dengan virtual tour', color: 'green', metric: '+200% Sales' },
      { icon: '🛒', title: 'Mall Depok', description: 'Website mall dengan directory tenant', color: 'purple', metric: '+150% Traffic' }
    ],
    'Bekasi': [
      { icon: '🏭', title: 'Industri Bekasi', description: 'Website manufaktur multinasional', color: 'blue', metric: '+260% Production' },
      { icon: '🚛', title: 'Distribusi Bekasi', description: 'Website logistik nasional', color: 'green', metric: '+220% Deliveries' },
      { icon: '🏠', title: 'Perumahan Bekasi', description: 'Website developer dengan simulasi KPR', color: 'purple', metric: '+300% Inquiries' }
    ],
    'Bogor': [
      { icon: '🌳', title: 'Kebun Raya Bogor', description: 'Website wisata dengan virtual tour', color: 'green', metric: '+400% Visitors' },
      { icon: '🎓', title: 'IPB University', description: 'Website universitas pertanian', color: 'blue', metric: '+350% Enrollments' },
      { icon: '☕', title: 'Café Bogor', description: 'Website kafe dengan delivery system', color: 'orange', metric: '+250% Orders' }
    ],
    'Malang': [
      { icon: '🎓', title: 'Universitas Malang', description: 'Website UB dengan sistem akademik', color: 'blue', metric: '+380% Applications' },
      { icon: '🏔️', title: 'Wisata Malang', description: 'Website destinasi dengan booking', color: 'green', metric: '+320% Bookings' },
      { icon: '🍎', title: 'Agribisnis Apel', description: 'Website petani dengan marketplace', color: 'red', metric: '+280% Sales' }
    ],
    'Solo': [
      { icon: '🏛️', title: 'Keraton Solo', description: 'Website budaya dengan virtual tour', color: 'orange', metric: '+350% Visitors' },
      { icon: '🎭', title: 'Wayang Kulit', description: 'Website kesenian dengan online shop', color: 'purple', metric: '+200% Sales' },
      { icon: '🎓', title: 'UNS Solo', description: 'Website universitas dengan e-learning', color: 'blue', metric: '+300% Students' }
    ],
    'Padang': [
      { icon: '🍜', title: 'Restoran Padang', description: 'Website kuliner dengan delivery', color: 'orange', metric: '+300% Orders' },
      { icon: '🌊', title: 'Wisata Pantai', description: 'Website destinasi dengan booking', color: 'blue', metric: '+250% Visitors' },
      { icon: '🎓', title: 'Unand Padang', description: 'Website universitas dengan portal', color: 'purple', metric: '+280% Applications' }
    ]
  };

  return storiesMap[kota.nama] || [
    { icon: '🏢', title: 'Company Profile', description: 'Website profesional untuk perusahaan ' + kota.nama, color: 'blue', metric: '+250% Leads' },
    { icon: '🛒', title: 'Toko Online', description: 'E-commerce platform untuk bisnis ' + kota.nama, color: 'green', metric: '+200% Sales' },
    { icon: '📄', title: 'Landing Page', description: 'Halaman konversi untuk marketing ' + kota.nama, color: 'purple', metric: '+180% Conversions' }
  ];
}

// Create city pages
kotaData.forEach(kota => {
  if (!customCities.includes(kota.slug)) {
    const dirPath = path.join('src/pages/pembuatan-website', kota.slug);
    const filePath = path.join(dirPath, 'index.astro');

    // Create directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Create the page file
    fs.writeFileSync(filePath, cityPageTemplate(kota));
    console.log(`Created page for ${kota.nama} (${kota.slug})`);
  }
});

console.log('All city pages created successfully!');
