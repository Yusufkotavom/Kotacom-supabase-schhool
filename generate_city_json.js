import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Template universal untuk semua kota dengan data komprehensif
const universalTemplate = {
  "nama": "[NAMA]",
  "slug": "[SLUG]",
  "provinsi": "[PROVINSI]",
  "populasi": "[POPULASI]",

  "area": {
    "kecamatan": [], // Akan diisi per kota
    "kota_administrasi": [] // Akan diisi per kota
  },

  "seo": {
    "meta_title": "Jasa Pembuatan Website [NAMA] Terpercaya - Professional & Modern | Kotacom",
    "meta_description": "Jasa pembuatan website [NAMA] terbaik dengan design modern dan SEO friendly. Website company profile, toko online, landing page untuk bisnis di [NAMA]. Harga terjangkau, kualitas premium.",
    "keywords": ["jasa website [SLUG]", "pembuatan web [SLUG]", "developer [SLUG]", "web design [SLUG]", "website [SLUG]", "toko online [SLUG]"]
  },

  "hero": {
    "title": "Jasa Pembuatan Website [NAMA]",
    "subtitle_highlight": "Profesional [NAMA]",
    "badge": "200+ Website Sukses Dibuat"
  },

  "local_content": {
    "market_size": "[MARKET_SIZE]",
    "area_coverage": [], // Akan diisi per kota
    "unique_value_props": [
      "Tim developer [NAMA] dengan pengalaman 5+ tahun",
      "Support lokal 24/7 di [NAMA]",
      "SEO khusus untuk pencarian lokal [NAMA]",
      "Integrasi dengan Google My Business [NAMA]"
    ],
    "local_stats": {
      "businesses": "[BUSINESSES_COUNT] bisnis di [NAMA]",
      "digital_transformation": "[DIGITAL_TRANSFORM]% bisnis [NAMA] butuh website"
    },
    "local_business_areas": [], // Akan diisi per kota

    "geografis": {
      "lokasi": "[LOKASI]",
      "luas_wilayah": "[LUAS_WILAYAH]",
      "ketinggian": "[KETINGGIAN]",
      "iklim": "[IKLIM]",
      "cuaca": "[CUACA]",
      "infrastruktur": {
        "transportasi": [], // Akan diisi per kota
        "komunikasi": [], // Akan diisi per kota
        "utilities": [] // Akan diisi per kota
      },
      "keunggulan_lokasi": [] // Akan diisi per kota
    },

    "ekonomi": {
      "gdp_per_kapita": "[GDP_PER_KAPITA]",
      "pertumbuhan_ekonomi": "[PERTUMBUHAN_EKONOMI]",
      "pdb_kota": "[PDB_KOTA]",
      "sektor_dominan": [], // Akan diisi per kota
      "investasi": {
        "asing": "[INVESTASI_ASING]",
        "domestik": "[INVESTASI_DOMESTIK]",
        "startup_ecosystem": "[STARTUP_COUNT] startup aktif"
      },
      "daya_beli": {
        "kelas_atas": "[KELAS_ATAS]% populasi",
        "kelas_menengah": "[KELAS_MENENGAH]% populasi",
        "kelas_bawah": "[KELAS_BAWAH]% populasi"
      },
      "indeks_harga": "[INFLASI]"
    },

    "bisnis": {
      "jumlah_perusahaan": "[JUMLAH_PERUSAHAAN] unit usaha",
      "sektor_usaha": {
        "mikro": "[MIKRO] unit",
        "kecil": "[KECIL] unit",
        "menengah": "[MENENGAH] unit",
        "besar": "[BESAR] unit"
      },
      "startup": {
        "total": "[STARTUP_TOTAL] startup",
        "unicorn": "[UNICORN_LIST]",
        "sektor": [] // Akan diisi per kota
      },
      "pusat_bisnis": [], // Akan diisi per kota
      "pasar_potential": {
        "digital_economy": "[DIGITAL_ECONOMY]",
        "ecommerce_gmv": "[ECOMMERCE_GMV]",
        "startup_funding": "[STARTUP_FUNDING]"
      },
      "tantangan_bisnis": [], // Akan diisi per kota
      "peluang_bisnis": [] // Akan diisi per kota
    },

    "demografi": {
      "populasi_total": "[POPULASI_TOTAL] jiwa",
      "kepadatan_penduduk": "[KEPADATAN] jiwa/km²",
      "usia_produktif": "[USIA_PRODUKTIF]% (usia 15-64 tahun)",
      "pendidikan": {
        "sarjana": "[SARJANA]%",
        "diploma": "[DIPLOMA]%",
        "sma": "[SMA]%",
        "smp": "[SMP]%",
        "sd": "[SD]%"
      },
      "pendapatan_rata_rata": "[PENDAPATAN_RATA_RATA]",
      "digital_literacy": "[DIGITAL_LITERACY]% populasi aktif online",
      "mobile_penetration": "[MOBILE_PENETRATION]% populasi"
    },

    "digital_economy": {
      "internet_users": "[INTERNET_USERS] orang",
      "social_media_users": "[SOCIAL_MEDIA_USERS] orang",
      "online_shopping": "[ONLINE_SHOPPING] orang",
      "digital_payment": "[DIGITAL_PAYMENT] orang",
      "ecommerce_penetration": "[ECOMMERCE_PENETRATION]% populasi",
      "startup_density": "[STARTUP_DENSITY]",
      "tech_talent_pool": "[TECH_TALENT] developer dan IT specialist"
    }
  },

  "contact": {
    "address": "[ADDRESS]",
    "phone": "085799520350",
    "email": "[EMAIL]",
    "whatsapp": "https://wa.me/6285799520350?text=Halo,%20saya%20mau%20konsultasi%20website%20untuk%20bisnis%20di%20[NAMA]"
  }
};

// Data kota-kota utama Indonesia dengan detail lengkap
const kotaData = [
  {
    nama: "Jakarta",
    slug: "jakarta",
    provinsi: "DKI Jakarta",
    populasi: 10800000,
    kecamatan: [
      {"nama": "Menteng", "kota": "Jakarta Pusat"}, {"nama": "Tanah Abang", "kota": "Jakarta Pusat"},
      {"nama": "Johar Baru", "kota": "Jakarta Pusat"}, {"nama": "Cempaka Putih", "kota": "Jakarta Pusat"},
      {"nama": "Gambir", "kota": "Jakarta Pusat"}, {"nama": "Sawah Besar", "kota": "Jakarta Pusat"},
      {"nama": "Kemayoran", "kota": "Jakarta Pusat"}, {"nama": "Senen", "kota": "Jakarta Pusat"},
      {"nama": "Cilandak", "kota": "Jakarta Selatan"}, {"nama": "Kebayoran Baru", "kota": "Jakarta Selatan"},
      {"nama": "Kebayoran Lama", "kota": "Jakarta Selatan"}, {"nama": "Pancoran", "kota": "Jakarta Selatan"},
      {"nama": "Jagakarsa", "kota": "Jakarta Selatan"}, {"nama": "Pesanggrahan", "kota": "Jakarta Selatan"},
      {"nama": "Tebet", "kota": "Jakarta Selatan"}, {"nama": "Setia Budi", "kota": "Jakarta Selatan"},
      {"nama": "Mampang Prapatan", "kota": "Jakarta Selatan"}, {"nama": "Pasar Minggu", "kota": "Jakarta Selatan"},
      {"nama": "Penjaringan", "kota": "Jakarta Pusat"}, {"nama": "Tanjung Priok", "kota": "Jakarta Utara"},
      {"nama": "Koja", "kota": "Jakarta Utara"}, {"nama": "Kelapa Gading", "kota": "Jakarta Utara"},
      {"nama": "Cilincing", "kota": "Jakarta Utara"}, {"nama": "Pademangan", "kota": "Jakarta Utara"},
      {"nama": "Tambora", "kota": "Jakarta Barat"}, {"nama": "Grogol Petamburan", "kota": "Jakarta Barat"},
      {"nama": "Palmerah", "kota": "Jakarta Barat"}, {"nama": "Kembangan", "kota": "Jakarta Barat"},
      {"nama": "Kebon Jeruk", "kota": "Jakarta Barat"}, {"nama": "Cengkareng", "kota": "Jakarta Barat"},
      {"nama": "Kalideres", "kota": "Jakarta Barat"}, {"nama": "Jatinegara", "kota": "Jakarta Timur"},
      {"nama": "Matraman", "kota": "Jakarta Timur"}, {"nama": "Pulogadung", "kota": "Jakarta Timur"},
      {"nama": "Cakung", "kota": "Jakarta Timur"}, {"nama": "Duren Sawit", "kota": "Jakarta Timur"},
      {"nama": "Kramat Jati", "kota": "Jakarta Timur"}, {"nama": "Makasar", "kota": "Jakarta Timur"},
      {"nama": "Ciracas", "kota": "Jakarta Timur"}, {"nama": "Cipayung", "kota": "Jakarta Timur"},
      {"nama": "Pasar Rebo", "kota": "Jakarta Timur"}
    ],
    kota_administrasi: ["Jakarta Pusat", "Jakarta Utara", "Jakarta Barat", "Jakarta Selatan", "Jakarta Timur"],
    market_size: "Ibukota Indonesia dengan ekonomi terbesar - 10+ juta penduduk aktif",
    businesses_count: "500.000+",
    digital_transform: "75",
    local_business_areas: ["SCBD Jakarta", "Grand Indonesia Mall", "PIK Jakarta", "Kebayoran Baru", "Sudirman Central Business District", "Plaza Indonesia", "Senayan City", "Lippo Mall Puri"],
    geografis: {
      lokasi: "Ibukota Negara Republik Indonesia, terletak di ujung barat laut Pulau Jawa",
      luas_wilayah: "661.52 km²",
      ketinggian: "0-50 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan tinggi (rata-rata 2.000-3.000 mm/tahun)",
      cuaca: "Panas dan lembab sepanjang tahun dengan musim kemarau dan penghujan",
      transportasi: ["Bandar Udara Internasional Soekarno-Hatta (CGK)", "Pelabuhan Tanjung Priok (terbesar di Indonesia)", "Stasiun Jakarta Kota dan Gambir", "MRT Jakarta, LRT Jabodebek, TransJakarta"],
      komunikasi: ["Fiber optic backbone terluas di Indonesia", "5G network coverage 100%", "Data center tier-3 di Jakarta"],
      utilities: ["Listrik 24/7 dengan backup generator", "PDAM Jakarta untuk air bersih", "Gas alam untuk industri"],
      keunggulan_lokasi: ["Akses langsung ke Pelabuhan Tanjung Priok", "Dekat dengan Bandara Soekarno-Hatta", "Pusat distribusi logistik nasional", "Konektivitas tol dan kereta api"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 150-200 juta per tahun",
      pertumbuhan_ekonomi: "5.2% per tahun (2023)",
      pdb_kota: "Rp 2.500 triliun (2023)",
      sektor_dominan: ["Perbankan & Keuangan", "Teknologi & Startup", "Properti & Konstruksi", "Retail & E-commerce", "Logistik & Transportasi", "Jasa Konsultasi"],
      investasi_asing: "US$ 20+ miliar per tahun",
      investasi_domestik: "Rp 150+ triliun per tahun",
      startup_count: "500+",
      kelas_atas: "35",
      kelas_menengah: "45",
      kelas_bawah: "20",
      inflasi: "Inflasi rata-rata 3.5% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "1.2 juta",
      mikro: "850.000",
      kecil: "250.000",
      menengah: "80.000",
      besar: "20.000",
      startup_total: "1.500+",
      unicorn_list: "Gojek, Tokopedia, Traveloka",
      startup_sektor: ["Fintech", "E-commerce", "Logistics", "Healthtech", "Edtech"],
      pusat_bisnis: ["SCBD (Sudirman Central Business District)", "Jakarta CBD (Jakarta Central Business District)", "PIK (Pantai Indah Kapuk)", "Kuningan Business District"],
      digital_economy: "Rp 500+ triliun per tahun",
      ecommerce_gmv: "Rp 150+ triliun per tahun",
      startup_funding: "US$ 2+ miliar per tahun",
      tantangan_bisnis: ["Kepadatan lalu lintas tinggi", "Biaya operasional tinggi", "Persaingan ketat", "Ketersediaan lahan terbatas"],
      peluang_bisnis: ["Digitalisasi UMKM", "Startup ecosystem", "E-commerce platform", "Fintech innovation", "Smart city solutions"]
    },
    demografi: {
      populasi_total: "10.8 juta",
      kepadatan: "16.000",
      usia_produktif: "65",
      sarjana: "25",
      diploma: "20",
      sma: "35",
      smp: "15",
      sd: "5",
      pendapatan_rata_rata: "Rp 5-8 juta per bulan",
      digital_literacy: "85",
      mobile_penetration: "95"
    },
    digital_economy: {
      internet_users: "9.2 juta",
      social_media_users: "8.5 juta",
      online_shopping: "7.8 juta",
      digital_payment: "6.2 juta",
      ecommerce_penetration: "72",
      startup_density: "Tertinggi di Indonesia",
      tech_talent: "100.000+"
    },
    contact_info: {
      address: "Jakarta Pusat, DKI Jakarta",
      email: "jakarta@kotacom.id"
    }
  },
  {
    nama: "Surabaya",
    slug: "surabaya",
    provinsi: "Jawa Timur",
    populasi: 3000000,
    kecamatan: [
      {"nama": "Bubutan", "kota": "Surabaya"}, {"nama": "Genteng", "kota": "Surabaya"},
      {"nama": "Gubeng", "kota": "Surabaya"}, {"nama": "Gununganyar", "kota": "Surabaya"},
      {"nama": "Jambangan", "kota": "Surabaya"}, {"nama": "Karangpilang", "kota": "Surabaya"},
      {"nama": "Krembangan", "kota": "Surabaya"}, {"nama": "Lakarsantri", "kota": "Surabaya"},
      {"nama": "Mulyorejo", "kota": "Surabaya"}, {"nama": "Pabean Cantian", "kota": "Surabaya"},
      {"nama": "Pakal", "kota": "Surabaya"}, {"nama": "Rungkut", "kota": "Surabaya"},
      {"nama": "Sambikerep", "kota": "Surabaya"}, {"nama": "Sawahan", "kota": "Surabaya"},
      {"nama": "Semampir", "kota": "Surabaya"}, {"nama": "Simokerto", "kota": "Surabaya"},
      {"nama": "Sukolilo", "kota": "Surabaya"}, {"nama": "Sukomanunggal", "kota": "Surabaya"},
      {"nama": "Tambaksari", "kota": "Surabaya"}, {"nama": "Tandes", "kota": "Surabaya"},
      {"nama": "Tegalsari", "kota": "Surabaya"}, {"nama": "Tenggilis Mejoyo", "kota": "Surabaya"},
      {"nama": "Wiyung", "kota": "Surabaya"}, {"nama": "Wonocolo", "kota": "Surabaya"},
      {"nama": "Wonokromo", "kota": "Surabaya"}
    ],
    kota_administrasi: ["Surabaya"],
    market_size: "Kota terbesar kedua di Indonesia - 3+ juta penduduk aktif",
    businesses_count: "250.000+",
    digital_transform: "70",
    local_business_areas: ["Tunjungan Plaza Surabaya", "Grand City Surabaya", "Pakuwon Mall Surabaya", "Galaxy Mall Surabaya", "Supermal Pakuwon Indah", "Ciputra World Surabaya", "Lenmarc Mall Surabaya", "BG Junction Surabaya"],
    geografis: {
      lokasi: "Kota terbesar kedua di Indonesia, terletak di pesisir utara Pulau Jawa",
      luas_wilayah: "350.54 km²",
      ketinggian: "0-10 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan sedang (rata-rata 1.500-2.000 mm/tahun)",
      cuaca: "Panas dan lembab dengan musim kemarau dan penghujan",
      transportasi: ["Bandar Udara Internasional Juanda (SUB)", "Pelabuhan Tanjung Perak", "Stasiun Surabaya Kota dan Gubeng", "Trans Surabaya (Bus Rapid Transit)"],
      komunikasi: ["Fiber optic network terluas di Jawa Timur", "5G network coverage 95%", "Data center tier-2 di Surabaya"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Surabaya untuk air bersih", "Gas alam untuk industri"],
      keunggulan_lokasi: ["Akses ke Pelabuhan Tanjung Perak", "Dekat dengan Bandara Juanda", "Pusat industri dan perdagangan", "Gerbang timur Indonesia"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 80-120 juta per tahun",
      pertumbuhan_ekonomi: "6.8% per tahun (2023)",
      pdb_kota: "Rp 800 triliun (2023)",
      sektor_dominan: ["Industri & Manufaktur", "Perdagangan", "Jasa Keuangan", "Logistik & Transportasi", "Teknologi", "Pendidikan"],
      investasi_asing: "US$ 8+ miliar per tahun",
      investasi_domestik: "Rp 80+ triliun per tahun",
      startup_count: "200+",
      kelas_atas: "25",
      kelas_menengah: "50",
      kelas_bawah: "25",
      inflasi: "Inflasi rata-rata 4.2% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "350.000",
      mikro: "280.000",
      kecil: "60.000",
      menengah: "8.000",
      besar: "2.000",
      startup_total: "300+",
      unicorn_list: "Bukalapak, Halodoc",
      startup_sektor: ["Fintech", "Healthtech", "E-commerce", "Logistics", "AgriTech"],
      pusat_bisnis: ["Tunjungan Plaza Area", "Grand City Mall Area", "Pakuwon Trade Center", "Surabaya Town Square"],
      digital_economy: "Rp 150+ triliun per tahun",
      ecommerce_gmv: "Rp 50+ triliun per tahun",
      startup_funding: "US$ 500+ juta per tahun",
      tantangan_bisnis: ["Kepadatan lalu lintas di pusat kota", "Biaya operasional tinggi", "Persaingan dengan Jakarta", "Ketersediaan lahan industri"],
      peluang_bisnis: ["Digitalisasi UMKM", "E-commerce platform", "Logistics technology", "Manufacturing 4.0", "Smart city solutions"]
    },
    demografi: {
      populasi_total: "3.0 juta",
      kepadatan: "8.500",
      usia_produktif: "68",
      sarjana: "20",
      diploma: "18",
      sma: "38",
      smp: "18",
      sd: "6",
      pendapatan_rata_rata: "Rp 4-6 juta per bulan",
      digital_literacy: "78",
      mobile_penetration: "92"
    },
    digital_economy: {
      internet_users: "2.3 juta",
      social_media_users: "2.1 juta",
      online_shopping: "1.9 juta",
      digital_payment: "1.6 juta",
      ecommerce_penetration: "65",
      startup_density: "Kedua terbesar setelah Jakarta",
      tech_talent: "25.000+"
    },
    contact_info: {
      address: "Surabaya, Jawa Timur",
      email: "surabaya@kotacom.id"
    }
  },
  {
    nama: "Bandung",
    slug: "bandung",
    provinsi: "Jawa Barat",
    populasi: 2500000,
    kecamatan: [
      {"nama": "Andir", "kota": "Bandung"}, {"nama": "Antapani", "kota": "Bandung"},
      {"nama": "Arcamanik", "kota": "Bandung"}, {"nama": "Astana Anyar", "kota": "Bandung"},
      {"nama": "Babakan Ciparay", "kota": "Bandung"}, {"nama": "Bandung Kidul", "kota": "Bandung"},
      {"nama": "Bandung Kulon", "kota": "Bandung"}, {"nama": "Bandung Wetan", "kota": "Bandung"},
      {"nama": "Batununggal", "kota": "Bandung"}, {"nama": "Bojongloa Kaler", "kota": "Bandung"},
      {"nama": "Bojongloa Kidul", "kota": "Bandung"}, {"nama": "Buahbatu", "kota": "Bandung"},
      {"nama": "Cibeunying Kaler", "kota": "Bandung"}, {"nama": "Cibeunying Kidul", "kota": "Bandung"},
      {"nama": "Cibiru", "kota": "Bandung"}, {"nama": "Cicendo", "kota": "Bandung"},
      {"nama": "Cidadap", "kota": "Bandung"}, {"nama": "Cinambo", "kota": "Bandung"},
      {"nama": "Coblong", "kota": "Bandung"}, {"nama": "Gedebage", "kota": "Bandung"},
      {"nama": "Kiaracondong", "kota": "Bandung"}, {"nama": "Lengkong", "kota": "Bandung"},
      {"nama": "Mandalajati", "kota": "Bandung"}, {"nama": "Panyileukan", "kota": "Bandung"},
      {"nama": "Rancasari", "kota": "Bandung"}, {"nama": "Regol", "kota": "Bandung"},
      {"nama": "Sukajadi", "kota": "Bandung"}, {"nama": "Sukasari", "kota": "Bandung"},
      {"nama": "Sumur Bandung", "kota": "Bandung"}, {"nama": "Ujungberung", "kota": "Bandung"}
    ],
    kota_administrasi: ["Bandung"],
    market_size: "Ibukota Jawa Barat dengan ekonomi kreatif terbesar - 2.5+ juta penduduk aktif",
    businesses_count: "180.000+",
    digital_transform: "68",
    local_business_areas: ["Dago Bandung", "Braga Bandung", "Paris Van Java", "Bandung Indah Plaza", "Cihampelas Walk", "Trans Studio Bandung", "Istana Plaza Bandung", "BEC Bandung"],
    geografis: {
      lokasi: "Ibukota Provinsi Jawa Barat, terletak di dataran tinggi",
      luas_wilayah: "167.31 km²",
      ketinggian: "600-1.050 meter di atas permukaan laut",
      iklim: "Sejuk dengan curah hujan sedang (rata-rata 1.500-2.500 mm/tahun)",
      cuaca: "Sejuk sepanjang tahun dengan suhu 20-30°C",
      transportasi: ["Bandar Udara Internasional Husein Sastranegara (BDO)", "Stasiun Bandung dan Cimahi", "Light Rail Transit (LRT)", "Trans Metro Bandung"],
      komunikasi: ["Fiber optic network terluas di Jawa Barat", "5G network coverage 90%", "Data center modern di Bandung"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Bandung untuk air bersih", "Gas alam untuk rumah tangga"],
      keunggulan_lokasi: ["Kota kreatif dan pendidikan", "Akses ke Bandara Husein Sastranegara", "Pusat fashion dan kuliner", "Kota wisata terkemuka"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 60-90 juta per tahun",
      pertumbuhan_ekonomi: "5.5% per tahun (2023)",
      pdb_kota: "Rp 450 triliun (2023)",
      sektor_dominan: ["Tekstil & Fashion", "Pendidikan", "Kuliner", "Kreatif", "Teknologi", "Wisata"],
      investasi_asing: "US$ 5+ miliar per tahun",
      investasi_domestik: "Rp 50+ triliun per tahun",
      startup_count: "150+",
      kelas_atas: "20",
      kelas_menengah: "55",
      kelas_bawah: "25",
      inflasi: "Inflasi rata-rata 3.8% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "220.000",
      mikro: "170.000",
      kecil: "40.000",
      menengah: "8.000",
      besar: "2.000",
      startup_total: "200+",
      unicorn_list: "Traveloka",
      startup_sektor: ["FashionTech", "Edtech", "FoodTech", "Tourism", "Creative Economy"],
      pusat_bisnis: ["Dago District", "Braga Creative City", "Paris Van Java", "BEC (Bandung Electronic Center)"],
      digital_economy: "Rp 80+ triliun per tahun",
      ecommerce_gmv: "Rp 30+ triliun per tahun",
      startup_funding: "US$ 300+ juta per tahun",
      tantangan_bisnis: ["Persaingan bisnis kreatif tinggi", "Biaya sewa properti tinggi", "Kepadatan turis", "Keterbatasan lahan"],
      peluang_bisnis: ["Digital marketing untuk UMKM", "E-commerce fashion", "Platform pendidikan online", "Wisata digital", "Creative technology"]
    },
    demografi: {
      populasi_total: "2.5 juta",
      kepadatan: "14.800",
      usia_produktif: "70",
      sarjana: "22",
      diploma: "19",
      sma: "35",
      smp: "17",
      sd: "7",
      pendapatan_rata_rata: "Rp 3.5-5.5 juta per bulan",
      digital_literacy: "75",
      mobile_penetration: "90"
    },
    digital_economy: {
      internet_users: "1.9 juta",
      social_media_users: "1.7 juta",
      online_shopping: "1.5 juta",
      digital_payment: "1.3 juta",
      ecommerce_penetration: "60",
      startup_density: "Tinggi untuk kota kreatif",
      tech_talent: "15.000+"
    },
    contact_info: {
      address: "Bandung, Jawa Barat",
      email: "bandung@kotacom.id"
    }
  },
  {
    nama: "Medan",
    slug: "medan",
    provinsi: "Sumatera Utara",
    populasi: 2200000,
    kecamatan: [
      {"nama": "Medan Amplas", "kota": "Medan"}, {"nama": "Medan Area", "kota": "Medan"},
      {"nama": "Medan Barat", "kota": "Medan"}, {"nama": "Medan Baru", "kota": "Medan"},
      {"nama": "Medan Belawan", "kota": "Medan"}, {"nama": "Medan Deli", "kota": "Medan"},
      {"nama": "Medan Denai", "kota": "Medan"}, {"nama": "Medan Helvetia", "kota": "Medan"},
      {"nama": "Medan Johor", "kota": "Medan"}, {"nama": "Medan Kota", "kota": "Medan"},
      {"nama": "Medan Labuhan", "kota": "Medan"}, {"nama": "Medan Maimun", "kota": "Medan"},
      {"nama": "Medan Marelan", "kota": "Medan"}, {"nama": "Medan Perjuangan", "kota": "Medan"},
      {"nama": "Medan Petisah", "kota": "Medan"}, {"nama": "Medan Polonia", "kota": "Medan"},
      {"nama": "Medan Selayang", "kota": "Medan"}, {"nama": "Medan Sunggal", "kota": "Medan"},
      {"nama": "Medan Tembung", "kota": "Medan"}, {"nama": "Medan Timur", "kota": "Medan"},
      {"nama": "Medan Tuntungan", "kota": "Medan"}
    ],
    kota_administrasi: ["Medan"],
    market_size: "Ibukota Sumatera dengan ekonomi terbesar di luar Jawa - 2.2+ juta penduduk aktif",
    businesses_count: "160.000+",
    digital_transform: "65",
    local_business_areas: ["Merdeka Walk Medan", "Grand Palladium Medan", "Sun Plaza Medan", "Thamrin Plaza Medan", "Cambridge City Square", "Medan Fair Plaza", "Paris Plaza Medan", "Medan Mall"],
    geografis: {
      lokasi: "Ibukota Provinsi Sumatera Utara, terletak di pesisir timur Sumatera",
      luas_wilayah: "265.10 km²",
      ketinggian: "2-50 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan tinggi (rata-rata 2.000-3.000 mm/tahun)",
      cuaca: "Panas dan lembab dengan curah hujan tinggi",
      transportasi: ["Bandar Udara Internasional Kualanamu (KNO)", "Pelabuhan Belawan", "Stasiun Medan", "Trans Mebidang (Bus Rapid Transit)"],
      komunikasi: ["Fiber optic network terluas di Sumatera", "5G network coverage 85%", "Data center di Medan"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Tirtanadi untuk air bersih", "Gas alam untuk industri"],
      keunggulan_lokasi: ["Gerbang utama Sumatera", "Dekat dengan Pelabuhan Belawan", "Pusat perdagangan regional", "Akses ke sumber daya alam"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 50-80 juta per tahun",
      pertumbuhan_ekonomi: "4.8% per tahun (2023)",
      pdb_kota: "Rp 320 triliun (2023)",
      sektor_dominan: ["Perdagangan", "Perkebunan", "Industri", "Jasa Keuangan", "Pendidikan", "Wisata"],
      investasi_asing: "US$ 4+ miliar per tahun",
      investasi_domestik: "Rp 40+ triliun per tahun",
      startup_count: "80+",
      kelas_atas: "18",
      kelas_menengah: "48",
      kelas_bawah: "34",
      inflasi: "Inflasi rata-rata 4.5% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "180.000",
      mikro: "140.000",
      kecil: "30.000",
      menengah: "8.000",
      besar: "2.000",
      startup_total: "100+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["AgriTech", "Fintech", "E-commerce", "Education", "Tourism"],
      pusat_bisnis: ["Merdeka Walk Area", "Grand Palladium", "Sun Plaza", "Thamrin Plaza"],
      digital_economy: "Rp 60+ triliun per tahun",
      ecommerce_gmv: "Rp 20+ triliun per tahun",
      startup_funding: "US$ 150+ juta per tahun",
      tantangan_bisnis: ["Persaingan dengan kota besar", "Keterbatasan infrastruktur", "Biaya logistik tinggi", "Ketersediaan tenaga ahli"],
      peluang_bisnis: ["Digitalisasi perkebunan", "E-commerce regional", "Platform pendidikan", "Wisata digital", "Financial technology"]
    },
    demografi: {
      populasi_total: "2.2 juta",
      kepadatan: "8.300",
      usia_produktif: "66",
      sarjana: "18",
      diploma: "16",
      sma: "40",
      smp: "18",
      sd: "8",
      pendapatan_rata_rata: "Rp 3-5 juta per bulan",
      digital_literacy: "70",
      mobile_penetration: "88"
    },
    digital_economy: {
      internet_users: "1.5 juta",
      social_media_users: "1.4 juta",
      online_shopping: "1.2 juta",
      digital_payment: "1.0 juta",
      ecommerce_penetration: "55",
      startup_density: "Sedang untuk kota regional",
      tech_talent: "10.000+"
    },
    contact_info: {
      address: "Medan, Sumatera Utara",
      email: "medan@kotacom.id"
    }
  },
  {
    nama: "Semarang",
    slug: "semarang",
    provinsi: "Jawa Tengah",
    populasi: 1600000,
    kecamatan: [
      {"nama": "Banyumanik", "kota": "Semarang"}, {"nama": "Candisari", "kota": "Semarang"},
      {"nama": "Gajahmungkur", "kota": "Semarang"}, {"nama": "Gayamsari", "kota": "Semarang"},
      {"nama": "Genuk", "kota": "Semarang"}, {"nama": "Gunungpati", "kota": "Semarang"},
      {"nama": "Mijen", "kota": "Semarang"}, {"nama": "Ngaliyan", "kota": "Semarang"},
      {"nama": "Pedurungan", "kota": "Semarang"}, {"nama": "Semarang Barat", "kota": "Semarang"},
      {"nama": "Semarang Selatan", "kota": "Semarang"}, {"nama": "Semarang Tengah", "kota": "Semarang"},
      {"nama": "Semarang Timur", "kota": "Semarang"}, {"nama": "Semarang Utara", "kota": "Semarang"},
      {"nama": "Tembalang", "kota": "Semarang"}, {"nama": "Tugu", "kota": "Semarang"}
    ],
    kota_administrasi: ["Semarang"],
    market_size: "Ibukota Jawa Tengah dengan ekonomi strategis - 1.6+ juta penduduk aktif",
    businesses_count: "120.000+",
    digital_transform: "62",
    local_business_areas: ["Grand Marina Semarang", "Paragon City Mall", "DP Mall Semarang", "Java Mall Semarang", "Citimall Semarang", "Simpang Lima", "Simpang Enam", "Lawang Sewu Area"],
    geografis: {
      lokasi: "Ibukota Provinsi Jawa Tengah, terletak di pesisir utara Pulau Jawa",
      luas_wilayah: "373.70 km²",
      ketinggian: "0-20 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan sedang (rata-rata 1.800-2.500 mm/tahun)",
      cuaca: "Panas dan lembab dengan angin laut",
      transportasi: ["Bandar Udara Internasional Ahmad Yani (SRG)", "Pelabuhan Tanjung Emas", "Stasiun Semarang Tawang", "Trans Semarang (BRT)"],
      komunikasi: ["Fiber optic network terluas di Jawa Tengah", "5G network coverage 82%", "Data center di Semarang"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Semarang untuk air bersih", "Gas alam untuk industri"],
      keunggulan_lokasi: ["Akses ke Pelabuhan Tanjung Emas", "Dekat dengan Bandara Ahmad Yani", "Pusat logistik strategis", "Gerbang tengah Indonesia"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 45-70 juta per tahun",
      pertumbuhan_ekonomi: "5.2% per tahun (2023)",
      pdb_kota: "Rp 220 triliun (2023)",
      sektor_dominan: ["Industri", "Perdagangan", "Pendidikan", "Jasa", "Logistik", "Wisata"],
      investasi_asing: "US$ 3+ miliar per tahun",
      investasi_domestik: "Rp 30+ triliun per tahun",
      startup_count: "60+",
      kelas_atas: "15",
      kelas_menengah: "52",
      kelas_bawah: "33",
      inflasi: "Inflasi rata-rata 4.0% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "140.000",
      mikro: "110.000",
      kecil: "25.000",
      menengah: "4.000",
      besar: "1.000",
      startup_total: "80+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["Logistics", "Education", "E-commerce", "Manufacturing", "Tourism"],
      pusat_bisnis: ["Simpang Lima Area", "Grand Marina", "Paragon City", "DP Mall"],
      digital_economy: "Rp 40+ triliun per tahun",
      ecommerce_gmv: "Rp 15+ triliun per tahun",
      startup_funding: "US$ 100+ juta per tahun",
      tantangan_bisnis: ["Persaingan dengan kota besar", "Keterbatasan infrastruktur", "Biaya logistik", "Ketersediaan tenaga terampil"],
      peluang_bisnis: ["Digitalisasi logistik", "E-commerce regional", "Platform pendidikan", "Wisata digital", "Manufacturing tech"]
    },
    demografi: {
      populasi_total: "1.6 juta",
      kepadatan: "4.300",
      usia_produktif: "67",
      sarjana: "16",
      diploma: "15",
      sma: "42",
      smp: "19",
      sd: "8",
      pendapatan_rata_rata: "Rp 2.5-4.5 juta per bulan",
      digital_literacy: "68",
      mobile_penetration: "86"
    },
    digital_economy: {
      internet_users: "1.1 juta",
      social_media_users: "1.0 juta",
      online_shopping: "900.000",
      digital_payment: "750.000",
      ecommerce_penetration: "52",
      startup_density: "Rendah untuk kota regional",
      tech_talent: "8.000+"
    },
    contact_info: {
      address: "Semarang, Jawa Tengah",
      email: "semarang@kotacom.id"
    }
  }
];

// Template base untuk semua kota
const baseTemplate = {
  "hero": {
    "title": "Jasa Pembuatan Website [KOTA]",
    "subtitle_highlight": "Profesional [KOTA]",
    "badge": "200+ Website Sukses Dibuat"
  },
  "local_content": {
    "market_size": "[MARKET_SIZE]",
    "area_coverage": ["[AREA_COVERAGE]"],
    "unique_value_props": [
      "Tim developer [KOTA] dengan pengalaman 5+ tahun",
      "Support lokal 24/7 di [KOTA]",
      "SEO khusus untuk pencarian lokal [KOTA]",
      "Integrasi dengan Google My Business [KOTA]"
    ],
    "local_stats": {
      "businesses": "500.000+ bisnis di [KOTA]",
      "digital_transformation": "75% bisnis [KOTA] butuh website"
    },
    "local_business_areas": [
      "[AREA1]",
      "[AREA2]",
      "[AREA3]",
      "[AREA4]",
      "[AREA5]",
      "[AREA6]",
      "[AREA7]",
      "[AREA8]"
    ]
  }
};

// Market size dan area coverage untuk setiap kota
const kotaSpecificData = {
  "Jakarta": {
    market_size: "Ibukota Indonesia dengan ekonomi terbesar - 10+ juta penduduk aktif",
    area_coverage: ["Jakarta Pusat", "Jakarta Utara", "Jakarta Barat", "Jakarta Selatan", "Jakarta Timur"],
    local_business_areas: [
      "SCBD Jakarta",
      "Grand Indonesia Mall",
      "PIK Jakarta",
      "Kebayoran Baru",
      "Sudirman Central Business District",
      "Plaza Indonesia",
      "Senayan City",
      "Lippo Mall Puri"
    ]
  },
  "Surabaya": {
    market_size: "Kota terbesar kedua di Indonesia - 3+ juta penduduk aktif",
    area_coverage: ["Surabaya"],
    local_business_areas: [
      "Tunjungan Plaza Surabaya",
      "Grand City Surabaya",
      "Pakuwon Mall Surabaya",
      "Galaxy Mall Surabaya",
      "Supermal Pakuwon Indah",
      "Ciputra World Surabaya",
      "Lenmarc Mall Surabaya",
      "BG Junction Surabaya"
    ]
  },
  "Bandung": {
    market_size: "Ibukota Jawa Barat dengan ekonomi kreatif terbesar - 2.5+ juta penduduk aktif",
    area_coverage: ["Bandung"],
    local_business_areas: [
      "Dago Bandung",
      "Braga Bandung",
      "Paris Van Java",
      "Bandung Indah Plaza",
      "Cihampelas Walk",
      "Trans Studio Bandung",
      "Istana Plaza Bandung",
      "BEC Bandung"
    ]
  },
  "Medan": {
    market_size: "Ibukota Sumatera dengan ekonomi terbesar di luar Jawa - 2.2+ juta penduduk aktif",
    area_coverage: ["Medan"],
    local_business_areas: [
      "Merdeka Walk Medan",
      "Grand Palladium Medan",
      "Sun Plaza Medan",
      "Thamrin Plaza Medan",
      "Cambridge City Square",
      "Medan Fair Plaza",
      "Paris Plaza Medan",
      "Medan Mall"
    ]
  },
  "Semarang": {
    market_size: "Ibukota Jawa Tengah dengan ekonomi strategis - 1.6+ juta penduduk aktif",
    area_coverage: ["Semarang"],
    local_business_areas: [
      "Grand Marina Semarang",
      "Paragon City Mall",
      "DP Mall Semarang",
      "Java Mall Semarang",
      "Citimall Semarang",
      "Simpang Lima",
      "Simpang Enam",
      "Lawang Sewu Area"
    ]
  }
};

// Generate JSON files untuk setiap kota
function generateCityJSON() {
  kotaData.forEach(kota => {
    const kotaSpecific = kotaSpecificData[kota.nama] || kotaSpecificData["Jakarta"];

    // Build complete JSON structure dengan semua data komprehensif
    const jsonData = {
      nama: kota.nama,
      slug: kota.slug,
      provinsi: kota.provinsi,
      populasi: kota.populasi,
      area: {
        kecamatan: kota.kecamatan,
        kota_administrasi: kota.kota_administrasi
      },
      seo: {
        meta_title: `Jasa Pembuatan Website ${kota.nama} Terpercaya - Professional & Modern | Kotacom`,
        meta_description: `Jasa pembuatan website ${kota.nama} terbaik dengan design modern dan SEO friendly. Website company profile, toko online, landing page untuk bisnis di ${kota.nama}. Harga terjangkau, kualitas premium.`,
        keywords: [`jasa website ${kota.slug}`, `pembuatan web ${kota.slug}`, `developer ${kota.slug}`, `web design ${kota.slug}`, `website ${kota.slug}`, `toko online ${kota.slug}`]
      },
      hero: {
        title: `Jasa Pembuatan Website ${kota.nama}`,
        subtitle_highlight: `Profesional ${kota.nama}`,
        badge: "200+ Website Sukses Dibuat"
      },
      local_content: {
        market_size: kota.market_size,
        area_coverage: kotaSpecific.area_coverage,
        unique_value_props: [
          `Tim developer ${kota.nama} dengan pengalaman 5+ tahun`,
          `Support lokal 24/7 di ${kota.nama}`,
          `SEO khusus untuk pencarian lokal ${kota.nama}`,
          `Integrasi dengan Google My Business ${kota.nama}`
        ],
        local_stats: {
          businesses: `${kota.businesses_count} bisnis di ${kota.nama}`,
          digital_transformation: `${kota.digital_transform}% bisnis ${kota.nama} butuh website`
        },
        local_business_areas: kota.local_business_areas,
        geografis: kota.geografis,
        ekonomi: {
          gdp_per_kapita: kota.ekonomi.gdp_per_kapita,
          pertumbuhan_ekonomi: kota.ekonomi.pertumbuhan_ekonomi,
          pdb_kota: kota.ekonomi.pdb_kota,
          sektor_dominan: kota.ekonomi.sektor_dominan,
          investasi: {
            asing: kota.ekonomi.investasi_asing,
            domestik: kota.ekonomi.investasi_domestik,
            startup_ecosystem: kota.ekonomi.startup_count + " startup aktif"
          },
          daya_beli: {
            kelas_atas: kota.ekonomi.kelas_atas + "% populasi",
            kelas_menengah: kota.ekonomi.kelas_menengah + "% populasi",
            kelas_bawah: kota.ekonomi.kelas_bawah + "% populasi"
          },
          indeks_harga: kota.ekonomi.inflasi
        },
        bisnis: {
          jumlah_perusahaan: kota.bisnis.jumlah_perusahaan,
          sektor_usaha: {
            mikro: kota.bisnis.mikro,
            kecil: kota.bisnis.kecil,
            menengah: kota.bisnis.menengah,
            besar: kota.bisnis.besar
          },
          startup: {
            total: kota.bisnis.startup_total,
            unicorn: kota.bisnis.unicorn_list,
            sektor: kota.bisnis.startup_sektor
          },
          pusat_bisnis: kota.bisnis.pusat_bisnis,
          pasar_potential: {
            digital_economy: kota.bisnis.digital_economy,
            ecommerce_gmv: kota.bisnis.ecommerce_gmv,
            startup_funding: kota.bisnis.startup_funding
          },
          tantangan_bisnis: kota.bisnis.tantangan_bisnis,
          peluang_bisnis: kota.bisnis.peluang_bisnis
        },
        demografi: {
          populasi_total: kota.demografi.populasi_total,
          kepadatan_penduduk: kota.demografi.kepadatan + " jiwa/km²",
          usia_produktif: kota.demografi.usia_produktif + "% (usia 15-64 tahun)",
          pendidikan: {
            sarjana: kota.demografi.sarjana + "%",
            diploma: kota.demografi.diploma + "%",
            sma: kota.demografi.sma + "%",
            smp: kota.demografi.smp + "%",
            sd: kota.demografi.sd + "%"
          },
          pendapatan_rata_rata: kota.demografi.pendapatan_rata_rata,
          digital_literacy: kota.demografi.digital_literacy + "% populasi aktif online",
          mobile_penetration: kota.demografi.mobile_penetration + "% populasi"
        },
        digital_economy: {
          internet_users: kota.digital_economy.internet_users,
          social_media_users: kota.digital_economy.social_media_users,
          online_shopping: kota.digital_economy.online_shopping,
          digital_payment: kota.digital_economy.digital_payment,
          ecommerce_penetration: kota.digital_economy.ecommerce_penetration + "% populasi",
          startup_density: kota.digital_economy.startup_density,
          tech_talent_pool: kota.digital_economy.tech_talent + " developer dan IT specialist"
        }
      },
      contact: {
        address: kota.contact_info.address,
        phone: "085799520350",
        email: kota.contact_info.email,
        whatsapp: `https://wa.me/6285799520350?text=Halo,%20saya%20mau%20konsultasi%20website%20untuk%20bisnis%20di%20${kota.nama}`
      }
    };

    // Write JSON file
    const filePath = path.join(__dirname, 'src', 'data', 'kota_website', `${kota.slug}.json`);
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

    console.log(`✅ Generated ${kota.slug}.json with comprehensive data`);
  });

  console.log('\n🎉 All city JSON files generated successfully!');
  console.log('📁 Files saved to: src/data/kota_website/');
  console.log('📊 Each file contains comprehensive geographical, economic, business, demographic, and digital economy data');
}

// Run generator
generateCityJSON();
