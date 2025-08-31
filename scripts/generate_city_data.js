import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read base template and city data
const jakartaTemplate = JSON.parse(fs.readFileSync('src/data/kota_website/jakarta.json', 'utf8'));
const kotaData = JSON.parse(fs.readFileSync('src/data/kota-indonesia.json', 'utf8'));

// Cities to generate (exclude Jakarta since we already have it)
const citiesToGenerate = kotaData.filter(kota => kota.slug !== 'jakarta');

function generateCityData(baseTemplate, kota) {
  const template = JSON.parse(JSON.stringify(baseTemplate)); // Deep clone

  // Update hero section
  template.hero.badge_text = `Jasa Website ${kota.nama}`;
  template.hero.title = `Jasa Pembuatan Website ${kota.nama} Terpercaya - Professional & Modern`;
  template.hero.subtitle = `Jasa pembuatan website ${kota.nama} terbaik dengan design modern dan SEO friendly. Website company profile, toko online, landing page untuk bisnis di ${kota.nama}.`;
  template.hero.features = template.hero.features.map(feature => ({
    ...feature,
    title: feature.title.replace('Jakarta', kota.nama),
    description: feature.description.replace(/Jakarta/g, kota.nama),
    link: feature.link.replace('jakarta', kota.slug)
  }));

  // Update info section
  template.info.title = `Mengapa ${kota.nama} Butuh Website Modern?`;
  template.info.subtitle = `${kota.nama} sebagai ${kota.marketSize} membutuhkan website yang dapat bersaing secara kompetitif`;
  template.info.description = `Kotacom adalah penyedia jasa pembuatan website ${kota.nama} terpercaya dengan pengalaman lebih dari 5 tahun melayani berbagai jenis bisnis di ${kota.nama}. Kami menyediakan solusi website profesional yang dapat membantu bisnis Anda berkembang di era digital.`;
  template.info.content = [
    `${kota.nama} sebagai kota dengan populasi ${kota.populasi.toLocaleString()} penduduk merupakan pusat bisnis strategis di ${kota.provinsi}. Persaingan bisnis di ${kota.nama} sangat ketat, sehingga website yang profesional dan modern menjadi keharusan bagi setiap perusahaan.`,
    `Tim developer kami memahami karakteristik pasar ${kota.nama} dan kebutuhan bisnis di setiap area. Kami berkomitmen memberikan layanan yang lebih cepat dan responsif untuk klien di ${kota.nama}.`,
    `Dengan teknologi terkini dan pendekatan yang tepat, kami membantu bisnis ${kota.nama} mendapatkan keunggulan kompetitif di dunia digital.`
  ];

  // Update stats section
  template.stats.title = `Kotacom di ${kota.nama}`;
  template.stats.stats[0].label = `Proyek Website ${kota.nama}`;
  template.stats.stats[1].label = `Klien ${kota.nama}`;

  // Update features section
  template.features.title = `Mengapa Memilih Kotacom untuk Website ${kota.nama}?`;
  template.features.subtitle = `Keunggulan kompetitif untuk bisnis ${kota.nama}`;
  template.features.items = template.features.items.map(item => ({
    ...item,
    title: item.title.replace('Jakarta', kota.nama),
    description: item.description.replace(/Jakarta/g, kota.nama),
    benefits: item.benefits.map(benefit => benefit.replace(/Jakarta/g, kota.nama))
  }));

  // Update services section
  template.services.title = `Layanan Website ${kota.nama}`;
  template.services.subtitle = `Solusi digital lengkap untuk bisnis ${kota.nama}`;
  template.services.services = template.services.services.map(service => ({
    ...service,
    title: service.title.replace(/Jakarta/g, kota.nama),
    description: service.description.replace(/Jakarta/g, kota.nama),
    features: service.features.map(feature => feature.replace(/Jakarta/g, kota.nama)),
    link: service.link.replace('jakarta', kota.slug)
  }));

  // Update why_us section
  template.why_us.title = `Mengapa Kotacom ${kota.nama}?`;
  template.why_us.reasons = template.why_us.reasons.map(reason => ({
    ...reason,
    title: reason.title.replace('Jakarta', kota.nama),
    description: reason.description.replace(/Jakarta/g, kota.nama)
  }));

  // Update why_need section
  template.why_need.title = `Mengapa Bisnis ${kota.nama} Butuh Website?`;
  template.why_need.reasons = template.why_need.reasons.map(reason => ({
    ...reason,
    description: reason.description.replace(/Jakarta/g, kota.nama)
  }));

  // Update pricing section
  template.pricing.title = `Harga Website ${kota.nama}`;
  template.pricing.subtitle = `Paket website ${kota.nama} dengan harga kompetitif`;
  template.pricing.plans = template.pricing.plans.map(plan => ({
    ...plan,
    name: plan.name.replace(/Jakarta/g, kota.nama),
    description: plan.description.replace(/Jakarta/g, kota.nama),
    features: plan.features.map(feature => feature.replace(/Jakarta/g, kota.nama))
  }));

  // Update portfolio section
  template.portfolio.title = `Portfolio Website ${kota.nama}`;
  template.portfolio.subtitle = `Proyek website yang telah kami kerjakan untuk klien ${kota.nama}`;
  template.portfolio.projects = template.portfolio.projects.map(project => ({
    ...project,
    title: project.title.replace(/Jakarta/g, kota.nama),
    description: project.description.replace(/Jakarta/g, kota.nama)
  }));

  // Update testimonials section
  template.testimonials.title = `Testimonial Klien ${kota.nama}`;
  template.testimonials.subtitle = `Apa kata klien kami di ${kota.nama} tentang layanan Kotacom`;
  template.testimonials.testimonials = template.testimonials.testimonials.map(testimonial => ({
    ...testimonial,
    company: testimonial.company.replace(/Jakarta/g, kota.nama),
    content: testimonial.content.replace(/Jakarta/g, kota.nama)
  }));

  // Update FAQ section
  template.faq.title = `FAQ Website ${kota.nama}`;
  template.faq.subtitle = `Pertanyaan umum tentang jasa website di ${kota.nama}`;
  template.faq.questions = template.faq.questions.map(question => ({
    ...question,
    question: question.question.replace(/Jakarta/g, kota.nama),
    answer: question.answer.replace(/Jakarta/g, kota.nama)
  }));

  // Update content section
  template.content.title = `Proses Kerja Kotacom ${kota.nama}`;
  template.content.subtitle = `Bagaimana kami mengerjakan proyek website untuk klien ${kota.nama}`;
  template.content.sections = template.content.sections.map(section => ({
    ...section,
    image: section.image.replace('jakarta', kota.slug)
  }));

  // Update local section
  template.local.title = `Website untuk District ${kota.nama}`;
  template.local.subtitle = `Layanan website khusus untuk setiap district di ${kota.nama}`;
  template.local.districts = kota.areaCoverage.slice(0, 5).map((area, index) => {
    const districtTypes = [
      { types: ["Perbankan", "Konsultan", "Retail"], desc: "District bisnis strategis" },
      { types: ["Property", "Healthcare", "Pendidikan"], desc: "District premium" },
      { types: ["Manufaktur", "Logistik", "E-commerce"], desc: "District industri" },
      { types: ["Retail", "Jasa", "Pendidikan"], desc: "District pemukiman" },
      { types: ["Import/Export", "Logistik", "Maritim"], desc: "District pelabuhan" }
    ];
    const districtType = districtTypes[index % districtTypes.length];

    return {
      name: area,
      description: `${districtType.desc} ${kota.nama}`,
      business_types: districtType.types,
      image: `/images/districts/${kota.slug}-${area.toLowerCase().replace(/\s+/g, '-')}.jpg`
    };
  });

  // Update kabupaten_kota section
  template.kabupaten_kota.title = `Kota Lain di ${kota.provinsi}`;
  template.kabupaten_kota.subtitle = `Layanan website untuk kota-kota sekitar ${kota.nama}`;
  template.kabupaten_kota.cities = kotaData
    .filter(c => c.slug !== kota.slug && c.provinsi === kota.provinsi)
    .slice(0, 6)
    .map(relatedCity => ({
      name: relatedCity.nama,
      slug: relatedCity.slug,
      description: relatedCity.marketSize,
      distance: `±${Math.floor(Math.random() * 100) + 20} km dari ${kota.nama}`,
      image: `/images/cities/${relatedCity.slug}.jpg`
    }));

  // Update SEO meta
  template.seo_meta.seo_data.metadata = {
    meta_title: `Jasa Pembuatan Website ${kota.nama} Terpercaya - Professional & Modern | Kotacom`,
    meta_description: `Jasa pembuatan website ${kota.nama} terbaik dengan design modern dan SEO friendly. Website company profile, toko online, landing page untuk bisnis di ${kota.nama}. Harga terjangkau, kualitas premium.`,
    keywords: kota.keywords.join(', '),
    canonical_url: `https://kotacom.id/pembuatan-website/${kota.slug}`,
    og_title: `Jasa Pembuatan Website ${kota.nama} Terpercaya - Professional & Modern`,
    og_description: `Jasa pembuatan website ${kota.nama} terbaik dengan design modern dan SEO friendly. Website company profile, toko online, landing page untuk bisnis di ${kota.nama}.`,
    og_image: `/images/kotacom-${kota.slug}-og.jpg`,
    twitter_card: "summary_large_image"
  };

  template.seo_meta.seo_data.local_seo = {
    geo_region: `ID-${kota.provinsi === 'DKI Jakarta' ? 'JK' : kota.provinsi.split(' ')[0].slice(0,2).toUpperCase()}`,
    geo_placename: `${kota.nama}, Indonesia`,
    geo_position: "-6.2088;106.8456", // This should be updated with actual coordinates
    icbm: "-6.2088, 106.8456",
    local_keywords: kota.keywords
  };

  // Update final CTA
  template.final_cta.title = `Siap Buat Website untuk Bisnis ${kota.nama} Anda?`;
  template.final_cta.subtitle = `Konsultasi gratis dengan tim developer ${kota.nama}`;
  template.final_cta.description = `Dapatkan website profesional untuk bisnis Anda di ${kota.nama}. Konsultasi gratis, harga transparan, garansi kepuasan. Hubungi kami sekarang!`;
  template.final_cta.primary_cta.url = "/kontak";
  template.final_cta.secondary_cta.url = `/portfolio/${kota.slug}`;
  template.final_cta.contact_info = {
    phone: kota.localBusiness.phone,
    email: `${kota.slug}@kotacom.id`,
    whatsapp: `https://wa.me/${kota.localBusiness.phone.replace(/[^0-9]/g, '')}?text=Halo,%20saya%20mau%20konsultasi%20website%20untuk%20bisnis%20di%20${kota.nama}`
  };

  return template;
}

// Generate JSON files for all cities
citiesToGenerate.forEach(kota => {
  const cityData = generateCityData(jakartaTemplate, kota);
  const filePath = path.join('src/data/kota_website', `${kota.slug}.json`);

  fs.writeFileSync(filePath, JSON.stringify(cityData, null, 2));
  console.log(`✅ Generated ${kota.nama} (${kota.slug})`);
});

console.log(`\n🎉 Successfully generated ${citiesToGenerate.length} city data files!`);
console.log('Cities generated:', citiesToGenerate.map(k => k.nama).join(', '));
