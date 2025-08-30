// Mock Reviews Generator for Schema Markup
export interface MockReview {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}

// Generate random rating between 4.8-5.0
function generateRandomRating(): number {
  return Math.round((4.8 + Math.random() * 0.2) * 10) / 10;
}

// Generate random date within last 2 years
function generateRandomDate(): string {
  const now = new Date();
  const twoYearsAgo = new Date(now.getTime() - (365 * 24 * 60 * 60 * 1000 * 2));
  const randomTime = twoYearsAgo.getTime() + Math.random() * (now.getTime() - twoYearsAgo.getTime());
  return new Date(randomTime).toISOString().split('T')[0];
}

// Indonesian names for reviews
const indonesianNames = [
  "Ahmad Subandi", "Siti Nurhaliza", "Budi Santoso", "Maya Sari", "Dedi Kusuma",
  "Rina Wulandari", "Hendra Gunawan", "Dewi Anggraini", "Agus Setiawan", "Linda Sari",
  "Rudi Hartono", "Ani Lestari", "Joko Widodo", "Sari Dewi", "Bayu Pratama",
  "Dina Puspita", "Eko Susanto", "Fitri Handayani", "Gatot Subroto", "Heni Kusuma",
  "Iwan Setiawan", "Julianti Sari", "Kurniawan Adi", "Lestari Wati", "Maman Suraman",
  "Novi Indah", "Oka Prasetia", "Putri Lestari", "Qori Rahman", "Rina Sari",
  "Surya Pratama", "Tini Wulandari", "Udin Setiawan", "Vivi Anggraini", "Wawan Kusuma",
  "Yeni Sari", "Zainuddin Ahmad", "Aisyah Putri", "Bambang Suryo", "Citra Lestari",
  "Dani Ramadhan", "Eva Nurhaliza", "Fajar Setiawan", "Gina Sari", "Hadi Kusuma",
  "Indah Permata", "Joni Rahman", "Kartika Sari", "Lutfi Ahmad", "Mega Lestari"
];

// Positive review templates in Indonesian
const reviewTemplates = [
  "Sangat puas dengan layanan {service}. Hasilnya melebihi ekspektasi saya. Tim profesional dan responsif.",
  "Website yang dibuat sangat bagus dan user-friendly. {service} memberikan hasil yang memuaskan. Recommended!",
  "Pengalaman yang sangat baik dengan {service}. Tim ahli dan hasil akhir sesuai dengan permintaan. Terima kasih!",
  "Layanan {service} sangat membantu bisnis saya. Website yang dihasilkan modern dan fungsional. Worth every penny!",
  "Kualitas {service} luar biasa. Tim yang kompeten dan hasil yang memuaskan. Akan menggunakan lagi di masa depan.",
  "Website dari {service} sangat cepat loading dan responsive. Design yang elegan dan fungsionalitas yang lengkap.",
  "Pelayanan {service} sangat profesional. Dari konsultasi hingga selesai, semua berjalan lancar dan sesuai deadline.",
  "Hasil {service} melebihi ekspektasi. Website yang dibuat tidak hanya cantik tapi juga SEO-friendly. Perfect!",
  "Tim {service} sangat ahli dan berpengalaman. Mereka memahami kebutuhan bisnis saya dengan baik. Highly recommended!",
  "Website yang dihasilkan dari {service} sangat berkualitas. Loading cepat, design modern, dan mudah digunakan.",
  "Pengalaman yang menyenangkan dengan {service}. Tim yang ramah, komunikatif, dan hasil yang memuaskan.",
  "Layanan {service} memberikan value yang luar biasa. Website yang dibuat membantu meningkatkan penjualan saya.",
  "Kualitas kerja {service} sangat tinggi. Setiap detail diperhatikan dengan baik. Website yang dihasilkan profesional.",
  "Sangat terkesan dengan {service}. Mereka memberikan solusi yang tepat untuk kebutuhan bisnis saya.",
  "Website dari {service} tidak hanya bagus secara visual, tapi juga optimal untuk SEO. Hasil yang excellent!"
];

// Service types for review templates
const services = [
  "jasa pembuatan website", "tim development", "layanan website", "jasa digital",
  "tim IT", "layanan pengembangan", "jasa website", "tim profesional"
];

// Generate mock reviews
export function generateMockReviews(count: number = 250): MockReview[] {
  const reviews: MockReview[] = [];

  for (let i = 0; i < count; i++) {
    const randomName = indonesianNames[Math.floor(Math.random() * indonesianNames.length)];
    const randomService = services[Math.floor(Math.random() * services.length)];
    const randomTemplate = reviewTemplates[Math.floor(Math.random() * reviewTemplates.length)];

    const review: MockReview = {
      author: randomName,
      rating: generateRandomRating(),
      reviewBody: randomTemplate.replace('{service}', randomService),
      datePublished: generateRandomDate()
    };

    reviews.push(review);
  }

  return reviews;
}

// Generate reviews for specific service types
export function generateServiceReviews(serviceType: string, count: number = 50): MockReview[] {
  const serviceSpecificTemplates = [
    `Layanan ${serviceType} sangat memuaskan. Hasilnya sesuai dengan yang dijanjikan.`,
    `${serviceType} memberikan kualitas terbaik. Tim yang profesional dan hasil yang maksimal.`,
    `Pengalaman dengan ${serviceType} sangat baik. Mereka memahami kebutuhan saya dengan baik.`,
    `Hasil dari ${serviceType} melebihi ekspektasi. Website yang dibuat sangat berkualitas.`,
    `${serviceType} adalah pilihan terbaik untuk kebutuhan website bisnis saya.`,
    `Tim ${serviceType} sangat ahli dan berpengalaman. Layanan yang recommended.`,
    `Website dari ${serviceType} sangat modern dan fungsional. Sangat puas dengan hasilnya.`,
    `${serviceType} memberikan layanan yang cepat dan berkualitas. Highly recommended!`
  ];

  const reviews: MockReview[] = [];

  for (let i = 0; i < count; i++) {
    const randomName = indonesianNames[Math.floor(Math.random() * indonesianNames.length)];
    const randomTemplate = serviceSpecificTemplates[Math.floor(Math.random() * serviceSpecificTemplates.length)];

    const review: MockReview = {
      author: randomName,
      rating: generateRandomRating(),
      reviewBody: randomTemplate,
      datePublished: generateRandomDate()
    };

    reviews.push(review);
  }

  return reviews;
}

// Get reviews for specific pages
export const homepageReviews = generateMockReviews(300);
export const websiteServiceReviews = generateServiceReviews("Pembuatan Website", 200);
export const softwareServiceReviews = generateServiceReviews("Pengembangan Software", 150);
export const seoServiceReviews = generateServiceReviews("Jasa SEO", 120);
export const digitalMarketingReviews = generateServiceReviews("Digital Marketing", 100);

// Function to get reviews by service type
export function getReviewsForService(service: 'website' | 'software' | 'seo' | 'marketing' | 'homepage'): MockReview[] {
  switch (service) {
    case 'website':
      return websiteServiceReviews;
    case 'software':
      return softwareServiceReviews;
    case 'seo':
      return seoServiceReviews;
    case 'marketing':
      return digitalMarketingReviews;
    case 'homepage':
    default:
      return homepageReviews;
  }
}

// Utility function to get random subset of reviews
export function getRandomReviews(reviews: MockReview[], count: number): MockReview[] {
  const shuffled = [...reviews].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Generate reviews with specific rating range
export function generateReviewsWithRating(minRating: number = 4.8, maxRating: number = 5.0, count: number = 100): MockReview[] {
  const reviews: MockReview[] = [];

  for (let i = 0; i < count; i++) {
    const randomName = indonesianNames[Math.floor(Math.random() * indonesianNames.length)];
    const randomService = services[Math.floor(Math.random() * services.length)];
    const randomTemplate = reviewTemplates[Math.floor(Math.random() * reviewTemplates.length)];

    // Generate rating within specified range
    const rating = Math.round((minRating + Math.random() * (maxRating - minRating)) * 10) / 10;

    const review: MockReview = {
      author: randomName,
      rating: rating,
      reviewBody: randomTemplate.replace('{service}', randomService),
      datePublished: generateRandomDate()
    };

    reviews.push(review);
  }

  return reviews;
}

// Export default reviews for general use
export const defaultReviews = generateMockReviews(250);
