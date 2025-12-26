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
    "phone": "081232109396",
    "email": "[EMAIL]",
    "whatsapp": "https://wa.me/6281232109396?text=Halo,%20saya%20mau%20konsultasi%20website%20untuk%20bisnis%20di%20[NAMA]"
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
  },
  {
    nama: "Yogyakarta",
    slug: "yogyakarta",
    provinsi: "DI Yogyakarta",
    populasi: 400000,
    kecamatan: [
      {"nama": "Mantrijeron", "kota": "Yogyakarta"}, {"nama": "Kraton", "kota": "Yogyakarta"},
      {"nama": "Mergangsan", "kota": "Yogyakarta"}, {"nama": "Umbulharjo", "kota": "Yogyakarta"},
      {"nama": "Kota Gede", "kota": "Yogyakarta"}, {"nama": "Gondokusuman", "kota": "Yogyakarta"},
      {"nama": "Danurejan", "kota": "Yogyakarta"}, {"nama": "Pakualaman", "kota": "Yogyakarta"},
      {"nama": "Gondomanan", "kota": "Yogyakarta"}, {"nama": "Ngampilan", "kota": "Yogyakarta"},
      {"nama": "Wirobrajan", "kota": "Yogyakarta"}, {"nama": "Gedongtengen", "kota": "Yogyakarta"},
      {"nama": "Jetis", "kota": "Yogyakarta"}, {"nama": "Tegalrejo", "kota": "Yogyakarta"}
    ],
    kota_administrasi: ["Yogyakarta"],
    market_size: "Kota Pendidikan dan Budaya dengan ekonomi kreatif terkemuka - 400+ ribu penduduk aktif",
    businesses_count: "80.000+",
    digital_transform: "70",
    local_business_areas: ["Malioboro Yogyakarta", "Jalan Solo", "Jalan Prawirotaman", "Condongcatur", "Pakuwon Mall Jogja", "Galeria Mall", "Lippo Plaza Jogja", "Jogja City Mall"],
    geografis: {
      lokasi: "Kota Istimewa Yogyakarta, terletak di dataran tinggi Jawa Tengah",
      luas_wilayah: "32.50 km²",
      ketinggian: "100-150 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan sedang (rata-rata 1.800-2.200 mm/tahun)",
      cuaca: "Sejuk dengan suhu 20-35°C sepanjang tahun",
      transportasi: ["Bandar Udara Internasional Yogyakarta (YIA)", "Stasiun Tugu Yogyakarta", "Terminal Giwangan", "Trans Jogja (BRT)"],
      komunikasi: ["Fiber optic network terluas di Yogyakarta", "5G network coverage 90%", "Data center modern di Yogyakarta"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Yogyakarta untuk air bersih", "Gas untuk rumah tangga"],
      keunggulan_lokasi: ["Pusat pendidikan terkemuka", "Kota budaya dan wisata", "Dekat dengan Borobudur", "Kota pelajar terbesar"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 40-70 juta per tahun",
      pertumbuhan_ekonomi: "5.8% per tahun (2023)",
      pdb_kota: "Rp 150 triliun (2023)",
      sektor_dominan: ["Pendidikan & Perguruan Tinggi", "Wisata", "Kerajinan", "Kuliner", "Teknologi", "Budaya"],
      investasi_asing: "US$ 2+ miliar per tahun",
      investasi_domestik: "Rp 25+ triliun per tahun",
      startup_count: "100+",
      kelas_atas: "20",
      kelas_menengah: "60",
      kelas_bawah: "20",
      inflasi: "Inflasi rata-rata 3.2% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "95.000",
      mikro: "75.000",
      kecil: "15.000",
      menengah: "4.000",
      besar: "1.000",
      startup_total: "150+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["Edtech", "Tourism", "CulturalTech", "FoodTech", "Creative Economy"],
      pusat_bisnis: ["Malioboro District", "Condongcatur IT Center", "Jogja International Airport Area", "Universitas Gadjah Mada Area"],
      digital_economy: "Rp 25+ triliun per tahun",
      ecommerce_gmv: "Rp 8+ triliun per tahun",
      startup_funding: "US$ 150+ juta per tahun",
      tantangan_bisnis: ["Persaingan bisnis kreatif tinggi", "Keterbatasan lahan", "Kepadatan turis", "Biaya properti tinggi"],
      peluang_bisnis: ["Digital marketing untuk UMKM", "Platform pendidikan online", "Wisata digital", "Cultural technology", "Student economy"]
    },
    demografi: {
      populasi_total: "400 ribu",
      kepadatan: "12.300",
      usia_produktif: "75",
      sarjana: "30",
      diploma: "25",
      sma: "30",
      smp: "10",
      sd: "5",
      pendapatan_rata_rata: "Rp 3-5 juta per bulan",
      digital_literacy: "80",
      mobile_penetration: "90"
    },
    digital_economy: {
      internet_users: "320.000",
      social_media_users: "300.000",
      online_shopping: "250.000",
      digital_payment: "200.000",
      ecommerce_penetration: "62",
      startup_density: "Tinggi untuk kota pendidikan",
      tech_talent: "20.000+"
    },
    contact_info: {
      address: "Yogyakarta, DI Yogyakarta",
      email: "yogyakarta@kotacom.id"
    }
  },
  {
    nama: "Makassar",
    slug: "makassar",
    provinsi: "Sulawesi Selatan",
    populasi: 1400000,
    kecamatan: [
      {"nama": "Mariso", "kota": "Makassar"}, {"nama": "Mamajang", "kota": "Makassar"},
      {"nama": "Tamalate", "kota": "Makassar"}, {"nama": "Rappocini", "kota": "Makassar"},
      {"nama": "Makassar", "kota": "Makassar"}, {"nama": "Ujung Pandang", "kota": "Makassar"},
      {"nama": "Wajo", "kota": "Makassar"}, {"nama": "Bontoala", "kota": "Makassar"},
      {"nama": "Ujung Tanah", "kota": "Makassar"}, {"nama": "Tallo", "kota": "Makassar"},
      {"nama": "Panakukkang", "kota": "Makassar"}, {"nama": "Manggala", "kota": "Makassar"},
      {"nama": "Biringkanaya", "kota": "Makassar"}, {"nama": "Tamalanrea", "kota": "Makassar"}
    ],
    kota_administrasi: ["Makassar"],
    market_size: "Ibukota Sulawesi dengan ekonomi maritim terbesar - 1.4+ juta penduduk aktif",
    businesses_count: "120.000+",
    digital_transform: "65",
    local_business_areas: ["Jl. Pettarani Makassar", "Trans Studio Makassar", "Mall Ratu Indah", "Panakkukang", "ITC Makassar", "Makassar Town Square", "Lippo Plaza Makassar", "GTC Mall"],
    geografis: {
      lokasi: "Ibukota Provinsi Sulawesi Selatan, terletak di pesisir barat daya Sulawesi",
      luas_wilayah: "199.26 km²",
      ketinggian: "0-25 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan tinggi (rata-rata 2.500-3.500 mm/tahun)",
      cuaca: "Panas dan lembab dengan angin laut",
      transportasi: ["Bandar Udara Internasional Sultan Hasanuddin (UPG)", "Pelabuhan Soekarno-Hatta", "Stasiun Makassar", "Trans Mamminasata"],
      komunikasi: ["Fiber optic network terluas di Sulawesi", "5G network coverage 85%", "Data center di Makassar"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Makassar untuk air bersih", "Gas untuk industri"],
      keunggulan_lokasi: ["Gerbang utama Sulawesi", "Akses ke sumber daya maritim", "Dekat dengan tambang nikel", "Pusat logistik regional"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 35-60 juta per tahun",
      pertumbuhan_ekonomi: "5.1% per tahun (2023)",
      pdb_kota: "Rp 200 triliun (2023)",
      sektor_dominan: ["Perdagangan", "Industri", "Maritim", "Pertanian", "Logistik", "Wisata"],
      investasi_asing: "US$ 3+ miliar per tahun",
      investasi_domestik: "Rp 30+ triliun per tahun",
      startup_count: "80+",
      kelas_atas: "15",
      kelas_menengah: "50",
      kelas_bawah: "35",
      inflasi: "Inflasi rata-rata 4.1% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "140.000",
      mikro: "110.000",
      kecil: "25.000",
      menengah: "4.000",
      besar: "1.000",
      startup_total: "120+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["Maritime", "Logistics", "Agritech", "E-commerce", "Tourism"],
      pusat_bisnis: ["Jl. Pettarani Business District", "ITC Makassar", "Makassar New Port Area", "Industrial Estate"],
      digital_economy: "Rp 30+ triliun per tahun",
      ecommerce_gmv: "Rp 12+ triliun per tahun",
      startup_funding: "US$ 100+ juta per tahun",
      tantangan_bisnis: ["Keterbatasan infrastruktur", "Biaya logistik tinggi", "Persaingan regional", "Ketersediaan tenaga ahli"],
      peluang_bisnis: ["Digitalisasi logistik", "E-commerce regional", "Platform maritim", "Agritech", "Smart city solutions"]
    },
    demografi: {
      populasi_total: "1.4 juta",
      kepadatan: "7.000",
      usia_produktif: "68",
      sarjana: "18",
      diploma: "15",
      sma: "38",
      smp: "20",
      sd: "9",
      pendapatan_rata_rata: "Rp 2.5-4.5 juta per bulan",
      digital_literacy: "68",
      mobile_penetration: "85"
    },
    digital_economy: {
      internet_users: "950.000",
      social_media_users: "850.000",
      online_shopping: "700.000",
      digital_payment: "550.000",
      ecommerce_penetration: "50",
      startup_density: "Sedang untuk kota regional",
      tech_talent: "12.000+"
    },
    contact_info: {
      address: "Makassar, Sulawesi Selatan",
      email: "makassar@kotacom.id"
    }
  },
  {
    nama: "Palembang",
    slug: "palembang",
    provinsi: "Sumatera Selatan",
    populasi: 1600000,
    kecamatan: [
      {"nama": "Ilir Barat II", "kota": "Palembang"}, {"nama": "Seberang Ulu I", "kota": "Palembang"},
      {"nama": "Seberang Ulu II", "kota": "Palembang"}, {"nama": "Ilir Barat I", "kota": "Palembang"},
      {"nama": "Ilir Timur I", "kota": "Palembang"}, {"nama": "Ilir Timur II", "kota": "Palembang"},
      {"nama": "Sukarami", "kota": "Palembang"}, {"nama": "Sako", "kota": "Palembang"},
      {"nama": "Pajar Bulan", "kota": "Palembang"}, {"nama": "Gandus", "kota": "Palembang"},
      {"nama": "Seberang Ulu II", "kota": "Palembang"}, {"nama": "Kemuning", "kota": "Palembang"},
      {"nama": "Kertapati", "kota": "Palembang"}, {"nama": "Plaju", "kota": "Palembang"},
      {"nama": "Jakabaring", "kota": "Palembang"}, {"nama": "Kalidoni", "kota": "Palembang"}
    ],
    kota_administrasi: ["Palembang"],
    market_size: "Ibukota Sumatera Selatan dengan ekonomi perkebunan terbesar - 1.6+ juta penduduk aktif",
    businesses_count: "130.000+",
    digital_transform: "63",
    local_business_areas: ["Jl. Sudirman Palembang", "Palembang Icon", "Palembang Square", "Berkah Mall", "Opi Mall Palembang", "Plaza Atrium", "Palembang Trade Center", "Matahari Department Store"],
    geografis: {
      lokasi: "Ibukota Provinsi Sumatera Selatan, terletak di tepi Sungai Musi",
      luas_wilayah: "400.61 km²",
      ketinggian: "0-50 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan tinggi (rata-rata 2.300-3.200 mm/tahun)",
      cuaca: "Panas dan lembab dengan kabut asap musiman",
      transportasi: ["Bandar Udara Internasional Sultan Mahmud Badaruddin II (PLM)", "Pelabuhan Boom Baru", "Stasiun Kertapati", "Trans Musi"],
      komunikasi: ["Fiber optic network terluas di Sumatera Selatan", "5G network coverage 80%", "Data center di Palembang"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Palembang untuk air bersih", "Gas untuk industri"],
      keunggulan_lokasi: ["Pusat perdagangan regional", "Akses ke sumber daya perkebunan", "Dekat dengan tambang batubara", "Gerbang tengah Sumatera"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 30-55 juta per tahun",
      pertumbuhan_ekonomi: "4.9% per tahun (2023)",
      pdb_kota: "Rp 180 triliun (2023)",
      sektor_dominan: ["Perkebunan", "Perdagangan", "Industri", "Logistik", "Pertambangan", "Jasa"],
      investasi_asing: "US$ 2.5+ miliar per tahun",
      investasi_domestik: "Rp 25+ triliun per tahun",
      startup_count: "70+",
      kelas_atas: "12",
      kelas_menengah: "45",
      kelas_bawah: "43",
      inflasi: "Inflasi rata-rata 4.3% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "150.000",
      mikro: "120.000",
      kecil: "25.000",
      menengah: "4.000",
      besar: "1.000",
      startup_total: "100+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["Agritech", "Logistics", "Mining Tech", "E-commerce", "Education"],
      pusat_bisnis: ["Jl. Sudirman Business District", "Palembang Icon", "Jakabaring Industrial Area", "Port Area"],
      digital_economy: "Rp 25+ triliun per tahun",
      ecommerce_gmv: "Rp 10+ triliun per tahun",
      startup_funding: "US$ 80+ juta per tahun",
      tantangan_bisnis: ["Kabut asap musiman", "Keterbatasan infrastruktur", "Biaya logistik tinggi", "Ketersediaan tenaga terampil"],
      peluang_bisnis: ["Digitalisasi perkebunan", "E-commerce regional", "Platform logistik", "Mining technology", "Environmental solutions"]
    },
    demografi: {
      populasi_total: "1.6 juta",
      kepadatan: "4.000",
      usia_produktif: "66",
      sarjana: "15",
      diploma: "13",
      sma: "40",
      smp: "22",
      sd: "10",
      pendapatan_rata_rata: "Rp 2-4 juta per bulan",
      digital_literacy: "65",
      mobile_penetration: "82"
    },
    digital_economy: {
      internet_users: "1.0 juta",
      social_media_users: "900.000",
      online_shopping: "700.000",
      digital_payment: "500.000",
      ecommerce_penetration: "45",
      startup_density: "Rendah untuk kota regional",
      tech_talent: "8.000+"
    },
    contact_info: {
      address: "Palembang, Sumatera Selatan",
      email: "palembang@kotacom.id"
    }
  },
  {
    nama: "Balikpapan",
    slug: "balikpapan",
    provinsi: "Kalimantan Timur",
    populasi: 700000,
    kecamatan: [
      {"nama": "Balikpapan Timur", "kota": "Balikpapan"}, {"nama": "Balikpapan Barat", "kota": "Balikpapan"},
      {"nama": "Balikpapan Utara", "kota": "Balikpapan"}, {"nama": "Balikpapan Selatan", "kota": "Balikpapan"},
      {"nama": "Balikpapan Tengah", "kota": "Balikpapan"}, {"nama": "Balikpapan Kota", "kota": "Balikpapan"}
    ],
    kota_administrasi: ["Balikpapan"],
    market_size: "Kota minyak dan gas terbesar di Indonesia - 700+ ribu penduduk aktif",
    businesses_count: "60.000+",
    digital_transform: "67",
    local_business_areas: ["Jl. Sudirman Balikpapan", "Plaza Balikpapan", "Balikpapan Superblock", "Balikpapan Trade Center", "Grand Mall Balikpapan", "Lippo Plaza Balikpapan", "Balikpapan Square", "Botani Square"],
    geografis: {
      lokasi: "Kota terbesar di Kalimantan Timur, terletak di pesisir timur Kalimantan",
      luas_wilayah: "503.30 km²",
      ketinggian: "0-80 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan tinggi (rata-rata 2.200-3.100 mm/tahun)",
      cuaca: "Panas dan lembab dengan kabut asap musiman",
      transportasi: ["Bandar Udara Internasional Sultan Aji Muhammad Sulaiman (BPN)", "Pelabuhan Semayang", "Terminal Batu Ampar", "Trans Balikpapan"],
      komunikasi: ["Fiber optic network terluas di Kalimantan Timur", "5G network coverage 88%", "Data center modern di Balikpapan"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Balikpapan untuk air bersih", "Gas untuk industri"],
      keunggulan_lokasi: ["Pusat industri minyak dan gas", "Dekat dengan tambang batubara", "Akses ke sumber daya alam", "Gerbang timur Kalimantan"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 70-100 juta per tahun",
      pertumbuhan_ekonomi: "6.2% per tahun (2023)",
      pdb_kota: "Rp 280 triliun (2023)",
      sektor_dominan: ["Minyak & Gas", "Pertambangan", "Industri", "Logistik", "Perdagangan", "Jasa"],
      investasi_asing: "US$ 5+ miliar per tahun",
      investasi_domestik: "Rp 50+ triliun per tahun",
      startup_count: "60+",
      kelas_atas: "25",
      kelas_menengah: "55",
      kelas_bawah: "20",
      inflasi: "Inflasi rata-rata 3.8% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "70.000",
      mikro: "50.000",
      kecil: "15.000",
      menengah: "4.000",
      besar: "1.000",
      startup_total: "90+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["EnergyTech", "Mining Tech", "Logistics", "E-commerce", "Environmental"],
      pusat_bisnis: ["Jl. Sudirman Business District", "Balikpapan Industrial Area", "Port Area", "Oil & Gas Complex"],
      digital_economy: "Rp 35+ triliun per tahun",
      ecommerce_gmv: "Rp 12+ triliun per tahun",
      startup_funding: "US$ 120+ juta per tahun",
      tantangan_bisnis: ["Kabut asap musiman", "Biaya hidup tinggi", "Keterbatasan tenaga ahli", "Fluktuasi harga minyak"],
      peluang_bisnis: ["Digitalisasi energy sector", "Mining technology", "Platform logistik", "Environmental monitoring", "Oil & gas tech"]
    },
    demografi: {
      populasi_total: "700 ribu",
      kepadatan: "1.400",
      usia_produktif: "72",
      sarjana: "20",
      diploma: "18",
      sma: "35",
      smp: "18",
      sd: "9",
      pendapatan_rata_rata: "Rp 4-6 juta per bulan",
      digital_literacy: "72",
      mobile_penetration: "88"
    },
    digital_economy: {
      internet_users: "500.000",
      social_media_users: "450.000",
      online_shopping: "350.000",
      digital_payment: "280.000",
      ecommerce_penetration: "52",
      startup_density: "Tinggi untuk kota industri",
      tech_talent: "10.000+"
    },
    contact_info: {
      address: "Balikpapan, Kalimantan Timur",
      email: "balikpapan@kotacom.id"
    }
  },
  {
    nama: "Pekanbaru",
    slug: "pekanbaru",
    provinsi: "Riau",
    populasi: 1000000,
    kecamatan: [
      {"nama": "Pekanbaru Kota", "kota": "Pekanbaru"}, {"nama": "Sukajadi", "kota": "Pekanbaru"},
      {"nama": "Senapelan", "kota": "Pekanbaru"}, {"nama": "Rumbai", "kota": "Pekanbaru"},
      {"nama": "Rumbai Pesisir", "kota": "Pekanbaru"}, {"nama": "Tampan", "kota": "Pekanbaru"},
      {"nama": "Payung Sekaki", "kota": "Pekanbaru"}, {"nama": "Lima Puluh", "kota": "Pekanbaru"},
      {"nama": "Sail", "kota": "Pekanbaru"}, {"nama": "Tenayan Raya", "kota": "Pekanbaru"},
      {"nama": "Marpoyan Damai", "kota": "Pekanbaru"}, {"nama": "Bukit Raya", "kota": "Pekanbaru"}
    ],
    kota_administrasi: ["Pekanbaru"],
    market_size: "Ibukota Riau dengan ekonomi minyak terbesar di luar Jawa - 1+ juta penduduk aktif",
    businesses_count: "85.000+",
    digital_transform: "64",
    local_business_areas: ["Jl. Sudirman Pekanbaru", "Mall SKA Pekanbaru", "Living World Pekanbaru", "Plaza Amal Pekanbaru", "Pekanbaru Mall", "Lippo Plaza Pekanbaru", "Central Plaza Pekanbaru", "Grand Mall Pekanbaru"],
    geografis: {
      lokasi: "Ibukota Provinsi Riau, terletak di pesisir timur Sumatera",
      luas_wilayah: "632.26 km²",
      ketinggian: "5-50 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan tinggi (rata-rata 2.500-3.000 mm/tahun)",
      cuaca: "Panas dan lembab dengan kabut asap musiman",
      transportasi: ["Bandar Udara Internasional Sultan Syarif Kasim II (PKU)", "Pelabuhan Dumai", "Stasiun Pekanbaru", "Trans Metro Pekanbaru"],
      komunikasi: ["Fiber optic network terluas di Riau", "5G network coverage 82%", "Data center di Pekanbaru"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Pekanbaru untuk air bersih", "Gas untuk industri"],
      keunggulan_lokasi: ["Pusat industri minyak", "Dekat dengan kilang Dumai", "Akses ke sumber daya migas", "Gerbang timur Sumatera"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 50-80 juta per tahun",
      pertumbuhan_ekonomi: "5.3% per tahun (2023)",
      pdb_kota: "Rp 220 triliun (2023)",
      sektor_dominan: ["Minyak & Gas", "Industri", "Perdagangan", "Logistik", "Pendidikan", "Jasa"],
      investasi_asing: "US$ 4+ miliar per tahun",
      investasi_domestik: "Rp 35+ triliun per tahun",
      startup_count: "70+",
      kelas_atas: "18",
      kelas_menengah: "50",
      kelas_bawah: "32",
      inflasi: "Inflasi rata-rata 4.0% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "95.000",
      mikro: "70.000",
      kecil: "20.000",
      menengah: "4.000",
      besar: "1.000",
      startup_total: "100+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["EnergyTech", "Logistics", "E-commerce", "Education", "Manufacturing"],
      pusat_bisnis: ["Jl. Sudirman Business District", "Pekanbaru Industrial Area", "Dumai Port Area", "Oil & Gas Complex"],
      digital_economy: "Rp 30+ triliun per tahun",
      ecommerce_gmv: "Rp 11+ triliun per tahun",
      startup_funding: "US$ 100+ juta per tahun",
      tantangan_bisnis: ["Kabut asap musiman", "Biaya logistik tinggi", "Fluktuasi harga minyak", "Ketersediaan tenaga ahli"],
      peluang_bisnis: ["Digitalisasi energy sector", "Platform logistik", "E-commerce regional", "Education technology", "Manufacturing 4.0"]
    },
    demografi: {
      populasi_total: "1.0 juta",
      kepadatan: "1.600",
      usia_produktif: "70",
      sarjana: "18",
      diploma: "16",
      sma: "38",
      smp: "19",
      sd: "9",
      pendapatan_rata_rata: "Rp 3-5 juta per bulan",
      digital_literacy: "68",
      mobile_penetration: "85"
    },
    digital_economy: {
      internet_users: "680.000",
      social_media_users: "600.000",
      online_shopping: "480.000",
      digital_payment: "380.000",
      ecommerce_penetration: "48",
      startup_density: "Sedang untuk kota industri",
      tech_talent: "8.000+"
    },
    contact_info: {
      address: "Pekanbaru, Riau",
      email: "pekanbaru@kotacom.id"
    }
  },
  {
    nama: "Pontianak",
    slug: "pontianak",
    provinsi: "Kalimantan Barat",
    populasi: 650000,
    kecamatan: [
      {"nama": "Pontianak Kota", "kota": "Pontianak"}, {"nama": "Pontianak Barat", "kota": "Pontianak"},
      {"nama": "Pontianak Selatan", "kota": "Pontianak"}, {"nama": "Pontianak Tenggara", "kota": "Pontianak"},
      {"nama": "Pontianak Timur", "kota": "Pontianak"}, {"nama": "Pontianak Utara", "kota": "Pontianak"}
    ],
    kota_administrasi: ["Pontianak"],
    market_size: "Ibukota Kalimantan Barat dengan ekonomi perdagangan terbesar - 650+ ribu penduduk aktif",
    businesses_count: "55.000+",
    digital_transform: "62",
    local_business_areas: ["Jl. Gajah Mada Pontianak", "Hayam Wuruk Mall", "Mega Mall Pontianak", "Plaza Maharani", "Living Plaza Pontianak", "Pontianak Mall", "Delta Mall Pontianak", "Paris Mall Pontianak"],
    geografis: {
      lokasi: "Ibukota Provinsi Kalimantan Barat, terletak di tepi Sungai Kapuas",
      luas_wilayah: "107.82 km²",
      ketinggian: "0-5 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan tinggi (rata-rata 3.000-4.000 mm/tahun)",
      cuaca: "Panas dan lembab dengan banjir musiman",
      transportasi: ["Bandar Udara Internasional Supadio (PNK)", "Pelabuhan Pontianak", "Terminal Khatulistiwa", "Trans Pontianak"],
      komunikasi: ["Fiber optic network terluas di Kalimantan Barat", "5G network coverage 78%", "Data center di Pontianak"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Pontianak untuk air bersih", "Gas untuk rumah tangga"],
      keunggulan_lokasi: ["Gerbang utama Kalimantan Barat", "Akses ke sumber daya kayu", "Dekat dengan perbatasan Malaysia", "Pusat perdagangan regional"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 35-60 juta per tahun",
      pertumbuhan_ekonomi: "4.7% per tahun (2023)",
      pdb_kota: "Rp 120 triliun (2023)",
      sektor_dominan: ["Perdagangan", "Industri", "Perkayuan", "Logistik", "Pendidikan", "Jasa"],
      investasi_asing: "US$ 2+ miliar per tahun",
      investasi_domestik: "Rp 20+ triliun per tahun",
      startup_count: "40+",
      kelas_atas: "15",
      kelas_menengah: "45",
      kelas_bawah: "40",
      inflasi: "Inflasi rata-rata 4.2% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "65.000",
      mikro: "50.000",
      kecil: "12.000",
      menengah: "2.500",
      besar: "500",
      startup_total: "60+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["Logistics", "E-commerce", "Agritech", "Education", "Tourism"],
      pusat_bisnis: ["Jl. Gajah Mada Business District", "Industrial Estate", "Port Area", "Trade Center"],
      digital_economy: "Rp 15+ triliun per tahun",
      ecommerce_gmv: "Rp 6+ triliun per tahun",
      startup_funding: "US$ 50+ juta per tahun",
      tantangan_bisnis: ["Banjir musiman", "Biaya logistik tinggi", "Keterbatasan infrastruktur", "Persaingan regional"],
      peluang_bisnis: ["Digitalisasi perdagangan", "Platform logistik", "E-commerce regional", "Agritech", "Cross-border commerce"]
    },
    demografi: {
      populasi_total: "650 ribu",
      kepadatan: "6.000",
      usia_produktif: "68",
      sarjana: "16",
      diploma: "14",
      sma: "40",
      smp: "20",
      sd: "10",
      pendapatan_rata_rata: "Rp 2.5-4 juta per bulan",
      digital_literacy: "65",
      mobile_penetration: "82"
    },
    digital_economy: {
      internet_users: "420.000",
      social_media_users: "380.000",
      online_shopping: "280.000",
      digital_payment: "220.000",
      ecommerce_penetration: "43",
      startup_density: "Rendah untuk kota regional",
      tech_talent: "5.000+"
    },
    contact_info: {
      address: "Pontianak, Kalimantan Barat",
      email: "pontianak@kotacom.id"
    }
  },
  {
    nama: "Samarinda",
    slug: "samarinda",
    provinsi: "Kalimantan Timur",
    populasi: 850000,
    kecamatan: [
      {"nama": "Samarinda Kota", "kota": "Samarinda"}, {"nama": "Palaran", "kota": "Samarinda"},
      {"nama": "Samarinda Seberang", "kota": "Samarinda"}, {"nama": "Samarinda Ulu", "kota": "Samarinda"},
      {"nama": "Samarinda Ilir", "kota": "Samarinda"}, {"nama": "Sungai Kunjang", "kota": "Samarinda"},
      {"nama": "Sambutan", "kota": "Samarinda"}, {"nama": "Sungai Pinang", "kota": "Samarinda"},
      {"nama": "Samarinda Utara", "kota": "Samarinda"}, {"nama": "Sungai Pinang Dalam", "kota": "Samarinda"}
    ],
    kota_administrasi: ["Samarinda"],
    market_size: "Ibukota Kalimantan Timur dengan ekonomi pertambangan terbesar - 850+ ribu penduduk aktif",
    businesses_count: "70.000+",
    digital_transform: "66",
    local_business_areas: ["Jl. Pahlawan Samarinda", "Plaza Mulia Samarinda", "Big Mall Samarinda", "Lippo Plaza Samarinda", "Samarinda Plaza", "Delta Plaza Samarinda", "Samarinda Square", "Mall Duta"],
    geografis: {
      lokasi: "Ibukota Provinsi Kalimantan Timur, terletak di tepi Sungai Mahakam",
      luas_wilayah: "718.00 km²",
      ketinggian: "0-30 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan tinggi (rata-rata 2.500-3.200 mm/tahun)",
      cuaca: "Panas dan lembab dengan kabut asap musiman",
      transportasi: ["Bandar Udara Internasional Sultan Aji Muhammad Sulaiman (BPN)", "Pelabuhan Samarinda", "Terminal Lempake", "Trans Samarinda"],
      komunikasi: ["Fiber optic network terluas di Kalimantan Timur", "5G network coverage 85%", "Data center di Samarinda"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Samarinda untuk air bersih", "Gas untuk industri"],
      keunggulan_lokasi: ["Pusat pertambangan batubara", "Dekat dengan hutan tropis", "Akses ke sumber daya alam", "Gerbang tengah Kalimantan"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 60-90 juta per tahun",
      pertumbuhan_ekonomi: "5.8% per tahun (2023)",
      pdb_kota: "Rp 240 triliun (2023)",
      sektor_dominan: ["Pertambangan", "Industri", "Perdagangan", "Logistik", "Perkayuan", "Jasa"],
      investasi_asing: "US$ 4+ miliar per tahun",
      investasi_domestik: "Rp 40+ triliun per tahun",
      startup_count: "55+",
      kelas_atas: "22",
      kelas_menengah: "52",
      kelas_bawah: "26",
      inflasi: "Inflasi rata-rata 4.0% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "80.000",
      mikro: "60.000",
      kecil: "15.000",
      menengah: "4.000",
      besar: "1.000",
      startup_total: "85+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["Mining Tech", "Agritech", "Logistics", "E-commerce", "Environmental"],
      pusat_bisnis: ["Jl. Pahlawan Business District", "Mining Complex", "Industrial Area", "Port Area"],
      digital_economy: "Rp 28+ triliun per tahun",
      ecommerce_gmv: "Rp 10+ triliun per tahun",
      startup_funding: "US$ 90+ juta per tahun",
      tantangan_bisnis: ["Kabut asap musiman", "Biaya logistik tinggi", "Keterbatasan infrastruktur", "Fluktuasi harga komoditas"],
      peluang_bisnis: ["Digitalisasi mining", "Agritech solutions", "Platform logistik", "Environmental monitoring", "Sustainable mining"]
    },
    demografi: {
      populasi_total: "850 ribu",
      kepadatan: "1.200",
      usia_produktif: "71",
      sarjana: "19",
      diploma: "17",
      sma: "36",
      smp: "18",
      sd: "10",
      pendapatan_rata_rata: "Rp 3.5-5.5 juta per bulan",
      digital_literacy: "70",
      mobile_penetration: "86"
    },
    digital_economy: {
      internet_users: "590.000",
      social_media_users: "520.000",
      online_shopping: "400.000",
      digital_payment: "320.000",
      ecommerce_penetration: "48",
      startup_density: "Sedang untuk kota pertambangan",
      tech_talent: "7.000+"
    },
    contact_info: {
      address: "Samarinda, Kalimantan Timur",
      email: "samarinda@kotacom.id"
    }
  },
  {
    nama: "Banjarmasin",
    slug: "banjarmasin",
    provinsi: "Kalimantan Selatan",
    populasi: 680000,
    kecamatan: [
      {"nama": "Banjarmasin Barat", "kota": "Banjarmasin"}, {"nama": "Banjarmasin Selatan", "kota": "Banjarmasin"},
      {"nama": "Banjarmasin Tengah", "kota": "Banjarmasin"}, {"nama": "Banjarmasin Timur", "kota": "Banjarmasin"},
      {"nama": "Banjarmasin Utara", "kota": "Banjarmasin"}
    ],
    kota_administrasi: ["Banjarmasin"],
    market_size: "Ibukota Kalimantan Selatan dengan ekonomi pertanian terbesar - 680+ ribu penduduk aktif",
    businesses_count: "58.000+",
    digital_transform: "63",
    local_business_areas: ["Jl. Lambung Mangkurat Banjarmasin", "Banjarmasin Plaza", "Mahligai Pancasila", "Trans Studio Mall Banjarmasin", "Banjarmasin Trade Center", "Lippo Plaza Banjarmasin", "Banjarmasin Square", "Delta Mall Banjarmasin"],
    geografis: {
      lokasi: "Ibukota Provinsi Kalimantan Selatan, terletak di tepi Sungai Barito",
      luas_wilayah: "72.00 km²",
      ketinggian: "0-10 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan tinggi (rata-rata 2.800-3.500 mm/tahun)",
      cuaca: "Panas dan lembab dengan banjir musiman",
      transportasi: ["Bandar Udara Internasional Syamsudin Noor (BDJ)", "Pelabuhan Trisakti", "Terminal Landasan Ulin", "Trans Banjarmasin"],
      komunikasi: ["Fiber optic network terluas di Kalimantan Selatan", "5G network coverage 80%", "Data center di Banjarmasin"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Banjarmasin untuk air bersih", "Gas untuk rumah tangga"],
      keunggulan_lokasi: ["Pusat perdagangan regional", "Akses ke sumber daya pertanian", "Dekat dengan tambang batubara", "Gerbang selatan Kalimantan"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 40-65 juta per tahun",
      pertumbuhan_ekonomi: "4.9% per tahun (2023)",
      pdb_kota: "Rp 140 triliun (2023)",
      sektor_dominan: ["Pertanian", "Perdagangan", "Industri", "Logistik", "Pertambangan", "Jasa"],
      investasi_asing: "US$ 2.5+ miliar per tahun",
      investasi_domestik: "Rp 22+ triliun per tahun",
      startup_count: "45+",
      kelas_atas: "16",
      kelas_menengah: "48",
      kelas_bawah: "36",
      inflasi: "Inflasi rata-rata 4.1% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "68.000",
      mikro: "52.000",
      kecil: "12.000",
      menengah: "3.000",
      besar: "1.000",
      startup_total: "70+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["Agritech", "Logistics", "E-commerce", "Mining Tech", "Tourism"],
      pusat_bisnis: ["Jl. Lambung Mangkurat Business District", "Industrial Area", "Port Area", "Trade Center"],
      digital_economy: "Rp 18+ triliun per tahun",
      ecommerce_gmv: "Rp 7+ triliun per tahun",
      startup_funding: "US$ 60+ juta per tahun",
      tantangan_bisnis: ["Banjir musiman", "Kabut asap", "Biaya logistik tinggi", "Keterbatasan infrastruktur"],
      peluang_bisnis: ["Digitalisasi pertanian", "Platform logistik", "E-commerce regional", "Mining technology", "Environmental solutions"]
    },
    demografi: {
      populasi_total: "680 ribu",
      kepadatan: "9.400",
      usia_produktif: "69",
      sarjana: "17",
      diploma: "15",
      sma: "38",
      smp: "19",
      sd: "11",
      pendapatan_rata_rata: "Rp 2.5-4.5 juta per bulan",
      digital_literacy: "66",
      mobile_penetration: "83"
    },
    digital_economy: {
      internet_users: "450.000",
      social_media_users: "400.000",
      online_shopping: "300.000",
      digital_payment: "240.000",
      ecommerce_penetration: "44",
      startup_density: "Rendah untuk kota regional",
      tech_talent: "5.500+"
    },
    contact_info: {
      address: "Banjarmasin, Kalimantan Selatan",
      email: "banjarmasin@kotacom.id"
    }
  },
  {
    nama: "Manado",
    slug: "manado",
    provinsi: "Sulawesi Utara",
    populasi: 450000,
    kecamatan: [
      {"nama": "Bunaken", "kota": "Manado"}, {"nama": "Malalayang", "kota": "Manado"},
      {"nama": "Wanea", "kota": "Manado"}, {"nama": "Tikala", "kota": "Manado"},
      {"nama": "Paal Dua", "kota": "Manado"}, {"nama": "Singkil", "kota": "Manado"},
      {"nama": "Wenang", "kota": "Manado"}, {"nama": "Tuminting", "kota": "Manado"},
      {"nama": "Sario", "kota": "Manado"}, {"nama": "Mapanget", "kota": "Manado"},
      {"nama": "Sario Tumpaan", "kota": "Manado"}
    ],
    kota_administrasi: ["Manado"],
    market_size: "Ibukota Sulawesi Utara dengan ekonomi wisata terbesar - 450+ ribu penduduk aktif",
    businesses_count: "38.000+",
    digital_transform: "65",
    local_business_areas: ["Jl. Sam Ratulangi Manado", "Manado Town Square", "Mega Mall Manado", "Plaza Manado", "Lippo Plaza Manado", "Manado Boulevard", "Trans Studio Manado", "Grand Kawanua"],
    geografis: {
      lokasi: "Ibukota Provinsi Sulawesi Utara, terletak di pesisir Teluk Manado",
      luas_wilayah: "157.26 km²",
      ketinggian: "0-500 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan sedang (rata-rata 2.000-3.000 mm/tahun)",
      cuaca: "Sejuk dengan suhu 20-30°C sepanjang tahun",
      transportasi: ["Bandar Udara Internasional Sam Ratulangi (MDC)", "Pelabuhan Manado", "Terminal Karombasan", "Trans Manado"],
      komunikasi: ["Fiber optic network terluas di Sulawesi Utara", "5G network coverage 78%", "Data center di Manado"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Manado untuk air bersih", "Gas untuk rumah tangga"],
      keunggulan_lokasi: ["Pusat wisata Bunaken", "Dekat dengan Danau Tondano", "Kota pendidikan", "Gerbang utara Sulawesi"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 35-60 juta per tahun",
      pertumbuhan_ekonomi: "5.1% per tahun (2023)",
      pdb_kota: "Rp 90 triliun (2023)",
      sektor_dominan: ["Wisata", "Pendidikan", "Perdagangan", "Perikanan", "Jasa", "Pertanian"],
      investasi_asing: "US$ 1.5+ miliar per tahun",
      investasi_domestik: "Rp 15+ triliun per tahun",
      startup_count: "35+",
      kelas_atas: "18",
      kelas_menengah: "52",
      kelas_bawah: "30",
      inflasi: "Inflasi rata-rata 3.8% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "45.000",
      mikro: "35.000",
      kecil: "8.000",
      menengah: "1.800",
      besar: "200",
      startup_total: "50+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["Tourism", "Education", "Maritime", "E-commerce", "Agritech"],
      pusat_bisnis: ["Jl. Sam Ratulangi Business District", "Education Complex", "Tourism Area", "Port Area"],
      digital_economy: "Rp 12+ triliun per tahun",
      ecommerce_gmv: "Rp 5+ triliun per tahun",
      startup_funding: "US$ 40+ juta per tahun",
      tantangan_bisnis: ["Persaingan wisata tinggi", "Keterbatasan infrastruktur", "Biaya logistik tinggi", "Musiman pariwisata"],
      peluang_bisnis: ["Digital tourism platform", "Education technology", "Maritime services", "E-commerce regional", "Sustainable tourism"]
    },
    demografi: {
      populasi_total: "450 ribu",
      kepadatan: "2.900",
      usia_produktif: "70",
      sarjana: "18",
      diploma: "16",
      sma: "38",
      smp: "18",
      sd: "10",
      pendapatan_rata_rata: "Rp 2.5-4 juta per bulan",
      digital_literacy: "68",
      mobile_penetration: "84"
    },
    digital_economy: {
      internet_users: "300.000",
      social_media_users: "270.000",
      online_shopping: "210.000",
      digital_payment: "170.000",
      ecommerce_penetration: "46",
      startup_density: "Sedang untuk kota pendidikan",
      tech_talent: "4.000+"
    },
    contact_info: {
      address: "Manado, Sulawesi Utara",
      email: "manado@kotacom.id"
    }
  },
  {
    nama: "Denpasar",
    slug: "denpasar",
    provinsi: "Bali",
    populasi: 725000,
    kecamatan: [
      {"nama": "Denpasar Barat", "kota": "Denpasar"}, {"nama": "Denpasar Selatan", "kota": "Denpasar"},
      {"nama": "Denpasar Timur", "kota": "Denpasar"}, {"nama": "Denpasar Utara", "kota": "Denpasar"}
    ],
    kota_administrasi: ["Denpasar"],
    market_size: "Ibukota Bali dengan ekonomi wisata terbesar di Indonesia - 725+ ribu penduduk aktif",
    businesses_count: "85.000+",
    digital_transform: "68",
    local_business_areas: ["Jl. Teuku Umar Denpasar", "Mal Bali Galeria", "Lippo Mall Kuta", "Bali Collection", "Beachwalk Shopping Center", "Discovery Shopping Mall", "Trans Studio Bali", "Bali Galleria"],
    geografis: {
      lokasi: "Ibukota Provinsi Bali, terletak di tengah Pulau Bali",
      luas_wilayah: "123.98 km²",
      ketinggian: "0-100 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan sedang (rata-rata 1.500-2.000 mm/tahun)",
      cuaca: "Panas dengan kelembaban tinggi sepanjang tahun",
      transportasi: ["Bandar Udara Internasional Ngurah Rai (DPS)", "Pelabuhan Benoa", "Terminal Ubung", "Trans Sarbagita"],
      komunikasi: ["Fiber optic network terluas di Bali", "5G network coverage 90%", "Data center di Denpasar"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Bali untuk air bersih", "Gas untuk rumah tangga"],
      keunggulan_lokasi: ["Pusat wisata internasional", "Dekat dengan pantai", "Kota budaya", "Gerbang masuk Bali"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 45-75 juta per tahun",
      pertumbuhan_ekonomi: "6.5% per tahun (2023)",
      pdb_kota: "Rp 180 triliun (2023)",
      sektor_dominan: ["Wisata", "Perdagangan", "Kuliner", "Jasa", "Kreatif", "Pendidikan"],
      investasi_asing: "US$ 3+ miliar per tahun",
      investasi_domestik: "Rp 25+ triliun per tahun",
      startup_count: "80+",
      kelas_atas: "22",
      kelas_menengah: "55",
      kelas_bawah: "23",
      inflasi: "Inflasi rata-rata 3.5% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "100.000",
      mikro: "75.000",
      kecil: "20.000",
      menengah: "4.000",
      besar: "1.000",
      startup_total: "120+",
      unicorn_list: "Traveloka",
      startup_sektor: ["Tourism", "Hospitality", "E-commerce", "Cultural Tech", "FoodTech"],
      pusat_bisnis: ["Jl. Teuku Umar Business District", "Tourism Complex", "Shopping Centers", "Hotel Area"],
      digital_economy: "Rp 35+ triliun per tahun",
      ecommerce_gmv: "Rp 15+ triliun per tahun",
      startup_funding: "US$ 150+ juta per tahun",
      tantangan_bisnis: ["Persaingan wisata tinggi", "Musiman pariwisata", "Biaya hidup tinggi", "Kepadatan turis"],
      peluang_bisnis: ["Digital tourism platform", "Hospitality tech", "Cultural e-commerce", "Food delivery", "Smart tourism"]
    },
    demografi: {
      populasi_total: "725 ribu",
      kepadatan: "5.800",
      usia_produktif: "72",
      sarjana: "19",
      diploma: "17",
      sma: "36",
      smp: "18",
      sd: "10",
      pendapatan_rata_rata: "Rp 3-5 juta per bulan",
      digital_literacy: "70",
      mobile_penetration: "88"
    },
    digital_economy: {
      internet_users: "510.000",
      social_media_users: "480.000",
      online_shopping: "400.000",
      digital_payment: "350.000",
      ecommerce_penetration: "55",
      startup_density: "Tinggi untuk kota wisata",
      tech_talent: "8.000+"
    },
    contact_info: {
      address: "Denpasar, Bali",
      email: "denpasar@kotacom.id"
    }
  },
  {
    nama: "Mataram",
    slug: "mataram",
    provinsi: "Nusa Tenggara Barat",
    populasi: 450000,
    kecamatan: [
      {"nama": "Mataram", "kota": "Mataram"}, {"nama": "Selaparang", "kota": "Mataram"},
      {"nama": "Cakranegara", "kota": "Mataram"}, {"nama": "Sandubaya", "kota": "Mataram"},
      {"nama": "Ampenan", "kota": "Mataram"}
    ],
    kota_administrasi: ["Mataram"],
    market_size: "Ibukota Nusa Tenggara Barat dengan ekonomi perdagangan terbesar - 450+ ribu penduduk aktif",
    businesses_count: "42.000+",
    digital_transform: "62",
    local_business_areas: ["Jl. Pejanggik Mataram", "Mataram Mall", "Transmart Mataram", "Living Plaza Mataram", "Mataram Square", "Mall Ratu Indah", "Grand Mall Mataram", "Lombok City Center"],
    geografis: {
      lokasi: "Ibukota Provinsi Nusa Tenggara Barat, terletak di pesisir barat Pulau Lombok",
      luas_wilayah: "61.30 km²",
      ketinggian: "0-50 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan sedang (rata-rata 1.200-1.800 mm/tahun)",
      cuaca: "Panas dengan kelembaban tinggi sepanjang tahun",
      transportasi: ["Bandar Udara Internasional Zainuddin Abdul Madjid (LOP)", "Pelabuhan Lembar", "Terminal Mandalika", "Trans Mataram"],
      komunikasi: ["Fiber optic network terluas di NTB", "5G network coverage 75%", "Data center di Mataram"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Mataram untuk air bersih", "Gas untuk rumah tangga"],
      keunggulan_lokasi: ["Gerbang masuk Lombok", "Dekat dengan destinasi wisata", "Pusat perdagangan regional", "Akses ke sumber daya pertanian"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 30-50 juta per tahun",
      pertumbuhan_ekonomi: "5.0% per tahun (2023)",
      pdb_kota: "Rp 85 triliun (2023)",
      sektor_dominan: ["Wisata", "Pertanian", "Perdagangan", "Kuliner", "Jasa", "Logistik"],
      investasi_asing: "US$ 1.8+ miliar per tahun",
      investasi_domestik: "Rp 15+ triliun per tahun",
      startup_count: "40+",
      kelas_atas: "15",
      kelas_menengah: "48",
      kelas_bawah: "37",
      inflasi: "Inflasi rata-rata 4.0% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "50.000",
      mikro: "38.000",
      kecil: "9.000",
      menengah: "2.500",
      besar: "500",
      startup_total: "60+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["Tourism", "Agritech", "E-commerce", "Logistics", "Hospitality"],
      pusat_bisnis: ["Jl. Pejanggik Business District", "Tourism Complex", "Port Area", "Trade Center"],
      digital_economy: "Rp 12+ triliun per tahun",
      ecommerce_gmv: "Rp 5+ triliun per tahun",
      startup_funding: "US$ 45+ juta per tahun",
      tantangan_bisnis: ["Persaingan wisata tinggi", "Keterbatasan infrastruktur", "Musiman pariwisata", "Biaya logistik tinggi"],
      peluang_bisnis: ["Digital tourism platform", "Agritech solutions", "E-commerce regional", "Hospitality tech", "Logistics platform"]
    },
    demografi: {
      populasi_total: "450 ribu",
      kepadatan: "7.300",
      usia_produktif: "68",
      sarjana: "15",
      diploma: "14",
      sma: "40",
      smp: "20",
      sd: "11",
      pendapatan_rata_rata: "Rp 2-3.5 juta per bulan",
      digital_literacy: "64",
      mobile_penetration: "81"
    },
    digital_economy: {
      internet_users: "290.000",
      social_media_users: "250.000",
      online_shopping: "180.000",
      digital_payment: "140.000",
      ecommerce_penetration: "40",
      startup_density: "Rendah untuk kota regional",
      tech_talent: "3.500+"
    },
    contact_info: {
      address: "Mataram, Nusa Tenggara Barat",
      email: "mataram@kotacom.id"
    }
  },
  {
    nama: "Kupang",
    slug: "kupang",
    provinsi: "Nusa Tenggara Timur",
    populasi: 450000,
    kecamatan: [
      {"nama": "Alak", "kota": "Kupang"}, {"nama": "Kelapa Lima", "kota": "Kupang"},
      {"nama": "Kota Lama", "kota": "Kupang"}, {"nama": "Kota Raja", "kota": "Kupang"},
      {"nama": "Maulafa", "kota": "Kupang"}, {"nama": "Oebobo", "kota": "Kupang"}
    ],
    kota_administrasi: ["Kupang"],
    market_size: "Ibukota Nusa Tenggara Timur dengan ekonomi perdagangan terbesar - 450+ ribu penduduk aktif",
    businesses_count: "40.000+",
    digital_transform: "60",
    local_business_areas: ["Jl. El Tari Kupang", "Kupang Mall", "Transmart Kupang", "Oeba Center", "Kupang Trade Center", "Mall Eka Plaza", "Lippo Plaza Kupang", "Kupang City Center"],
    geografis: {
      lokasi: "Ibukota Provinsi Nusa Tenggara Timur, terletak di pesisir utara Pulau Timor",
      luas_wilayah: "180.27 km²",
      ketinggian: "0-100 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan rendah (rata-rata 800-1.200 mm/tahun)",
      cuaca: "Kering dan panas sepanjang tahun",
      transportasi: ["Bandar Udara Internasional El Tari (KOE)", "Pelabuhan Tenau", "Terminal Oeba", "Trans Kupang"],
      komunikasi: ["Fiber optic network terluas di NTT", "5G network coverage 70%", "Data center di Kupang"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Kupang untuk air bersih", "Gas untuk rumah tangga"],
      keunggulan_lokasi: ["Gerbang utama NTT", "Akses ke sumber daya pertanian", "Dekat dengan perbatasan Timor Leste", "Pusat perdagangan regional"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 25-45 juta per tahun",
      pertumbuhan_ekonomi: "4.5% per tahun (2023)",
      pdb_kota: "Rp 75 triliun (2023)",
      sektor_dominan: ["Perdagangan", "Pertanian", "Pendidikan", "Jasa", "Logistik", "Wisata"],
      investasi_asing: "US$ 1.2+ miliar per tahun",
      investasi_domestik: "Rp 12+ triliun per tahun",
      startup_count: "30+",
      kelas_atas: "12",
      kelas_menengah: "45",
      kelas_bawah: "43",
      inflasi: "Inflasi rata-rata 4.2% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "48.000",
      mikro: "36.000",
      kecil: "9.000",
      menengah: "2.500",
      besar: "500",
      startup_total: "45+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["Agritech", "Logistics", "E-commerce", "Education", "Tourism"],
      pusat_bisnis: ["Jl. El Tari Business District", "Education Complex", "Port Area", "Trade Center"],
      digital_economy: "Rp 10+ triliun per tahun",
      ecommerce_gmv: "Rp 4+ triliun per tahun",
      startup_funding: "US$ 35+ juta per tahun",
      tantangan_bisnis: ["Keterbatasan infrastruktur", "Biaya logistik tinggi", "Persaingan regional", "Ketersediaan tenaga ahli"],
      peluang_bisnis: ["Digitalisasi pertanian", "Platform logistik", "E-commerce regional", "Education technology", "Cross-border commerce"]
    },
    demografi: {
      populasi_total: "450 ribu",
      kepadatan: "2.500",
      usia_produktif: "66",
      sarjana: "14",
      diploma: "13",
      sma: "38",
      smp: "22",
      sd: "13",
      pendapatan_rata_rata: "Rp 1.8-3 juta per bulan",
      digital_literacy: "62",
      mobile_penetration: "78"
    },
    digital_economy: {
      internet_users: "280.000",
      social_media_users: "240.000",
      online_shopping: "150.000",
      digital_payment: "120.000",
      ecommerce_penetration: "35",
      startup_density: "Rendah untuk kota regional",
      tech_talent: "3.000+"
    },
    contact_info: {
      address: "Kupang, Nusa Tenggara Timur",
      email: "kupang@kotacom.id"
    }
  },
  {
    nama: "Jayapura",
    slug: "jayapura",
    provinsi: "Papua",
    populasi: 320000,
    kecamatan: [
      {"nama": "Jayapura Utara", "kota": "Jayapura"}, {"nama": "Jayapura Selatan", "kota": "Jayapura"},
      {"nama": "Abepura", "kota": "Jayapura"}, {"nama": "Muara Tami", "kota": "Jayapura"},
      {"nama": "Heram", "kota": "Jayapura"}
    ],
    kota_administrasi: ["Jayapura"],
    market_size: "Ibukota Papua dengan ekonomi strategis terbesar - 320+ ribu penduduk aktif",
    businesses_count: "28.000+",
    digital_transform: "58",
    local_business_areas: ["Jl. Percetakan Jayapura", "Jayapura Mall", "Transmart Jayapura", "Youtefa Mall", "Jayapura Town Square", "Lippo Plaza Jayapura", "Jayapura City Center", "Mansion Plaza"],
    geografis: {
      lokasi: "Ibukota Provinsi Papua, terletak di pesisir utara Papua",
      luas_wilayah: "935.92 km²",
      ketinggian: "0-200 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan tinggi (rata-rata 3.000-4.000 mm/tahun)",
      cuaca: "Panas dan lembab dengan hujan tinggi",
      transportasi: ["Bandar Udara Internasional Sentani (DJJ)", "Pelabuhan Jayapura", "Terminal Hamadi", "Trans Jayapura"],
      komunikasi: ["Fiber optic network terluas di Papua", "5G network coverage 65%", "Data center di Jayapura"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Jayapura untuk air bersih", "Gas untuk rumah tangga"],
      keunggulan_lokasi: ["Gerbang utama Papua", "Akses ke sumber daya alam", "Dekat dengan tambang emas", "Pusat perdagangan regional"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 50-80 juta per tahun",
      pertumbuhan_ekonomi: "6.0% per tahun (2023)",
      pdb_kota: "Rp 100 triliun (2023)",
      sektor_dominan: ["Pertambangan", "Perdagangan", "Logistik", "Pendidikan", "Jasa", "Pertanian"],
      investasi_asing: "US$ 2.5+ miliar per tahun",
      investasi_domestik: "Rp 20+ triliun per tahun",
      startup_count: "25+",
      kelas_atas: "20",
      kelas_menengah: "50",
      kelas_bawah: "30",
      inflasi: "Inflasi rata-rata 4.5% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "35.000",
      mikro: "25.000",
      kecil: "7.000",
      menengah: "2.500",
      besar: "500",
      startup_total: "40+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["Mining Tech", "Logistics", "E-commerce", "Education", "Agritech"],
      pusat_bisnis: ["Jl. Percetakan Business District", "Mining Complex", "Port Area", "Education Complex"],
      digital_economy: "Rp 15+ triliun per tahun",
      ecommerce_gmv: "Rp 6+ triliun per tahun",
      startup_funding: "US$ 50+ juta per tahun",
      tantangan_bisnis: ["Keterbatasan infrastruktur", "Biaya logistik tinggi", "Persaingan regional", "Ketersediaan tenaga ahli"],
      peluang_bisnis: ["Digital mining solutions", "Platform logistik", "E-commerce regional", "Education technology", "Agritech solutions"]
    },
    demografi: {
      populasi_total: "320 ribu",
      kepadatan: "340",
      usia_produktif: "70",
      sarjana: "16",
      diploma: "14",
      sma: "35",
      smp: "22",
      sd: "13",
      pendapatan_rata_rata: "Rp 3-5 juta per bulan",
      digital_literacy: "60",
      mobile_penetration: "75"
    },
    digital_economy: {
      internet_users: "190.000",
      social_media_users: "160.000",
      online_shopping: "110.000",
      digital_payment: "85.000",
      ecommerce_penetration: "34",
      startup_density: "Rendah untuk kota terpencil",
      tech_talent: "2.500+"
    },
    contact_info: {
      address: "Jayapura, Papua",
      email: "jayapura@kotacom.id"
    }
  },
  {
    nama: "Banda Aceh",
    slug: "banda-aceh",
    provinsi: "Aceh",
    populasi: 280000,
    kecamatan: [
      {"nama": "Baiturrahman", "kota": "Banda Aceh"}, {"nama": "Kuta Alam", "kota": "Banda Aceh"},
      {"nama": "Meuraxa", "kota": "Banda Aceh"}, {"nama": "Syiah Kuala", "kota": "Banda Aceh"},
      {"nama": "Lueng Bata", "kota": "Banda Aceh"}, {"nama": "Kuta Raja", "kota": "Banda Aceh"},
      {"nama": "Banda Raya", "kota": "Banda Aceh"}, {"nama": "Jaya Baru", "kota": "Banda Aceh"},
      {"nama": "Ulee Kareng", "kota": "Banda Aceh"}
    ],
    kota_administrasi: ["Banda Aceh"],
    market_size: "Ibukota Aceh dengan ekonomi perdagangan terbesar - 280+ ribu penduduk aktif",
    businesses_count: "25.000+",
    digital_transform: "59",
    local_business_areas: ["Jl. Teuku Umar Banda Aceh", "RTH Banda Aceh", "Transmart Banda Aceh", "Plaza Asia Banda Aceh", "Banda Aceh Grand Mall", "Lippo Plaza Banda Aceh", "Banda Aceh City Center", "Mall Cahaya"],
    geografis: {
      lokasi: "Ibukota Provinsi Aceh, terletak di pesisir utara Sumatera",
      luas_wilayah: "61.36 km²",
      ketinggian: "0-50 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan tinggi (rata-rata 2.500-3.500 mm/tahun)",
      cuaca: "Panas dan lembab dengan angin laut",
      transportasi: ["Bandar Udara Internasional Sultan Iskandar Muda (BTJ)", "Pelabuhan Malahayati", "Terminal Terpadu", "Trans Banda Aceh"],
      komunikasi: ["Fiber optic network terluas di Aceh", "5G network coverage 68%", "Data center di Banda Aceh"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Banda Aceh untuk air bersih", "Gas untuk rumah tangga"],
      keunggulan_lokasi: ["Gerbang utama Aceh", "Dekat dengan perbatasan Malaysia", "Pusat perdagangan regional", "Akses ke sumber daya gas"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 30-55 juta per tahun",
      pertumbuhan_ekonomi: "4.8% per tahun (2023)",
      pdb_kota: "Rp 65 triliun (2023)",
      sektor_dominan: ["Perdagangan", "Pendidikan", "Jasa", "Pertanian", "Logistik", "Wisata"],
      investasi_asing: "US$ 1.5+ miliar per tahun",
      investasi_domestik: "Rp 12+ triliun per tahun",
      startup_count: "25+",
      kelas_atas: "15",
      kelas_menengah: "45",
      kelas_bawah: "40",
      inflasi: "Inflasi rata-rata 4.0% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "30.000",
      mikro: "23.000",
      kecil: "5.500",
      menengah: "1.200",
      besar: "300",
      startup_total: "35+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["Education", "Logistics", "E-commerce", "Agritech", "Tourism"],
      pusat_bisnis: ["Jl. Teuku Umar Business District", "Education Complex", "Port Area", "Trade Center"],
      digital_economy: "Rp 8+ triliun per tahun",
      ecommerce_gmv: "Rp 3+ triliun per tahun",
      startup_funding: "US$ 30+ juta per tahun",
      tantangan_bisnis: ["Keterbatasan infrastruktur", "Biaya logistik tinggi", "Persaingan regional", "Ketersediaan tenaga ahli"],
      peluang_bisnis: ["Digital education platform", "Platform logistik", "E-commerce regional", "Agritech solutions", "Cross-border commerce"]
    },
    demografi: {
      populasi_total: "280 ribu",
      kepadatan: "4.600",
      usia_produktif: "67",
      sarjana: "15",
      diploma: "13",
      sma: "38",
      smp: "22",
      sd: "12",
      pendapatan_rata_rata: "Rp 2-3.5 juta per bulan",
      digital_literacy: "61",
      mobile_penetration: "76"
    },
    digital_economy: {
      internet_users: "170.000",
      social_media_users: "150.000",
      online_shopping: "100.000",
      digital_payment: "75.000",
      ecommerce_penetration: "36",
      startup_density: "Rendah untuk kota regional",
      tech_talent: "2.000+"
    },
    contact_info: {
      address: "Banda Aceh, Aceh",
      email: "banda-aceh@kotacom.id"
    }
  },
  {
    nama: "Bengkulu",
    slug: "bengkulu",
    provinsi: "Bengkulu",
    populasi: 380000,
    kecamatan: [
      {"nama": "Selebar", "kota": "Bengkulu"}, {"nama": "Gading Cempaka", "kota": "Bengkulu"},
      {"nama": "Teluk Segara", "kota": "Bengkulu"}, {"nama": "Ratu Agung", "kota": "Bengkulu"},
      {"nama": "Ratu Samban", "kota": "Bengkulu"}, {"nama": "Singaran Pati", "kota": "Bengkulu"},
      {"nama": "Muara Bangka Hulu", "kota": "Bengkulu"}, {"nama": "Kampung Melayu", "kota": "Bengkulu"},
      {"nama": "Raja Basa", "kota": "Bengkulu"}
    ],
    kota_administrasi: ["Bengkulu"],
    market_size: "Ibukota Bengkulu dengan ekonomi perdagangan terbesar - 380+ ribu penduduk aktif",
    businesses_count: "32.000+",
    digital_transform: "61",
    local_business_areas: ["Jl. Adam Malik Bengkulu", "Bengkulu Mall", "Transmart Bengkulu", "Plaza Bengkulu", "Bengkulu Trade Center", "Lippo Plaza Bengkulu", "Bengkulu City Center", "Mall Matahari"],
    geografis: {
      lokasi: "Ibukota Provinsi Bengkulu, terletak di pesisir barat Sumatera",
      luas_wilayah: "144.52 km²",
      ketinggian: "0-50 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan tinggi (rata-rata 3.000-4.000 mm/tahun)",
      cuaca: "Panas dan lembab dengan kabut asap musiman",
      transportasi: ["Bandar Udara Internasional Fatmawati Soekarno (BKS)", "Pelabuhan Pulau Baai", "Terminal Anggut Atas", "Trans Bengkulu"],
      komunikasi: ["Fiber optic network terluas di Bengkulu", "5G network coverage 70%", "Data center di Bengkulu"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Bengkulu untuk air bersih", "Gas untuk rumah tangga"],
      keunggulan_lokasi: ["Gerbang barat Sumatera", "Dekat dengan perkebunan", "Akses ke sumber daya pertanian", "Pusat perdagangan regional"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 28-48 juta per tahun",
      pertumbuhan_ekonomi: "4.3% per tahun (2023)",
      pdb_kota: "Rp 70 triliun (2023)",
      sektor_dominan: ["Perkebunan", "Perdagangan", "Pendidikan", "Jasa", "Pertanian", "Logistik"],
      investasi_asing: "US$ 1.2+ miliar per tahun",
      investasi_domestik: "Rp 10+ triliun per tahun",
      startup_count: "28+",
      kelas_atas: "13",
      kelas_menengah: "47",
      kelas_bawah: "40",
      inflasi: "Inflasi rata-rata 4.1% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "38.000",
      mikro: "29.000",
      kecil: "7.000",
      menengah: "1.800",
      besar: "200",
      startup_total: "40+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["Agritech", "Education", "E-commerce", "Logistics", "Tourism"],
      pusat_bisnis: ["Jl. Adam Malik Business District", "Education Complex", "Port Area", "Trade Center"],
      digital_economy: "Rp 9+ triliun per tahun",
      ecommerce_gmv: "Rp 4+ triliun per tahun",
      startup_funding: "US$ 35+ juta per tahun",
      tantangan_bisnis: ["Kabut asap musiman", "Keterbatasan infrastruktur", "Biaya logistik tinggi", "Persaingan regional"],
      peluang_bisnis: ["Digitalisasi perkebunan", "Platform pendidikan", "E-commerce regional", "Agritech solutions", "Environmental monitoring"]
    },
    demografi: {
      populasi_total: "380 ribu",
      kepadatan: "2.600",
      usia_produktif: "65",
      sarjana: "14",
      diploma: "12",
      sma: "40",
      smp: "22",
      sd: "12",
      pendapatan_rata_rata: "Rp 2-3 juta per bulan",
      digital_literacy: "63",
      mobile_penetration: "79"
    },
    digital_economy: {
      internet_users: "240.000",
      social_media_users: "200.000",
      online_shopping: "140.000",
      digital_payment: "110.000",
      ecommerce_penetration: "37",
      startup_density: "Rendah untuk kota regional",
      tech_talent: "2.800+"
    },
    contact_info: {
      address: "Bengkulu, Bengkulu",
      email: "bengkulu@kotacom.id"
    }
  },
  {
    nama: "Tanjung Pinang",
    slug: "tanjung-pinang",
    provinsi: "Kepulauan Riau",
    populasi: 220000,
    kecamatan: [
      {"nama": "Tanjung Pinang Barat", "kota": "Tanjung Pinang"}, {"nama": "Tanjung Pinang Kota", "kota": "Tanjung Pinang"},
      {"nama": "Bukit Bestari", "kota": "Tanjung Pinang"}, {"nama": "Tanjung Pinang Timur", "kota": "Tanjung Pinang"}
    ],
    kota_administrasi: ["Tanjung Pinang"],
    market_size: "Ibukota Kepulauan Riau dengan ekonomi perdagangan terbesar - 220+ ribu penduduk aktif",
    businesses_count: "22.000+",
    digital_transform: "64",
    local_business_areas: ["Jl. KH Ahmad Dahlan", "Tanjung Pinang Mall", "Transmart Tanjung Pinang", "Plaza Lagenda", "Tanjung Pinang Trade Center", "Lippo Plaza Tanjung Pinang", "Tanjung Pinang City Center", "Mall Pelayaran"],
    geografis: {
      lokasi: "Ibukota Provinsi Kepulauan Riau, terletak di Pulau Bintan",
      luas_wilayah: "144.56 km²",
      ketinggian: "0-50 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan tinggi (rata-rata 2.000-3.000 mm/tahun)",
      cuaca: "Panas dan lembab dengan kelembaban tinggi",
      transportasi: ["Bandar Udara Internasional Raja Haji Fisabilillah (TNJ)", "Pelabuhan Sri Bintan Pura", "Terminal Domestik", "Trans Tanjung Pinang"],
      komunikasi: ["Fiber optic network terluas di Kepulauan Riau", "5G network coverage 75%", "Data center di Tanjung Pinang"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Tanjung Pinang untuk air bersih", "Gas untuk rumah tangga"],
      keunggulan_lokasi: ["Dekat dengan Singapura", "Free Trade Zone", "Pusat logistik regional", "Akses ke pasar internasional"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 45-75 juta per tahun",
      pertumbuhan_ekonomi: "6.2% per tahun (2023)",
      pdb_kota: "Rp 85 triliun (2023)",
      sektor_dominan: ["Perdagangan", "Logistik", "Jasa", "Wisata", "Industri", "Pendidikan"],
      investasi_asing: "US$ 3+ miliar per tahun",
      investasi_domestik: "Rp 25+ triliun per tahun",
      startup_count: "35+",
      kelas_atas: "25",
      kelas_menengah: "50",
      kelas_bawah: "25",
      inflasi: "Inflasi rata-rata 3.8% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "26.000",
      mikro: "20.000",
      kecil: "4.500",
      menengah: "1.200",
      besar: "300",
      startup_total: "45+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["Logistics", "E-commerce", "Tourism", "Education", "Maritime"],
      pusat_bisnis: ["Jl. KH Ahmad Dahlan Business District", "Port Area", "Industrial Complex", "Trade Center"],
      digital_economy: "Rp 12+ triliun per tahun",
      ecommerce_gmv: "Rp 5+ triliun per tahun",
      startup_funding: "US$ 45+ juta per tahun",
      tantangan_bisnis: ["Persaingan dengan Singapura", "Biaya hidup tinggi", "Keterbatasan lahan", "Fluktuasi ekonomi global"],
      peluang_bisnis: ["Cross-border commerce", "Digital logistics", "E-commerce platform", "Tourism tech", "Free trade zone services"]
    },
    demografi: {
      populasi_total: "220 ribu",
      kepadatan: "1.500",
      usia_produktif: "72",
      sarjana: "18",
      diploma: "16",
      sma: "38",
      smp: "18",
      sd: "10",
      pendapatan_rata_rata: "Rp 3.5-5.5 juta per bulan",
      digital_literacy: "68",
      mobile_penetration: "85"
    },
    digital_economy: {
      internet_users: "150.000",
      social_media_users: "135.000",
      online_shopping: "110.000",
      digital_payment: "95.000",
      ecommerce_penetration: "50",
      startup_density: "Sedang untuk kota perdagangan",
      tech_talent: "3.000+"
    },
    contact_info: {
      address: "Tanjung Pinang, Kepulauan Riau",
      email: "tanjung-pinang@kotacom.id"
    }
  },
  {
    nama: "Pangkal Pinang",
    slug: "pangkal-pinang",
    provinsi: "Bangka Belitung",
    populasi: 220000,
    kecamatan: [
      {"nama": "Taman Sari", "kota": "Pangkal Pinang"}, {"nama": "Gerunggang", "kota": "Pangkal Pinang"},
      {"nama": "Gabek", "kota": "Pangkal Pinang"}, {"nama": "Bukit Intan", "kota": "Pangkal Pinang"},
      {"nama": "Rangkui", "kota": "Pangkal Pinang"}, {"nama": "Girimaya", "kota": "Pangkal Pinang"},
      {"nama": "Pangkal Balam", "kota": "Pangkal Pinang"}
    ],
    kota_administrasi: ["Pangkal Pinang"],
    market_size: "Ibukota Bangka Belitung dengan ekonomi pertambangan terbesar - 220+ ribu penduduk aktif",
    businesses_count: "20.000+",
    digital_transform: "63",
    local_business_areas: ["Jl. Sudirman Pangkal Pinang", "Pangkal Pinang Mall", "Transmart Pangkal Pinang", "Plaza Baloi", "Pangkal Pinang Trade Center", "Lippo Plaza Pangkal Pinang", "Pangkal Pinang City Center", "Mall Bangka"],
    geografis: {
      lokasi: "Ibukota Provinsi Bangka Belitung, terletak di Pulau Bangka",
      luas_wilayah: "118.37 km²",
      ketinggian: "0-30 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan tinggi (rata-rata 2.500-3.500 mm/tahun)",
      cuaca: "Panas dan lembab dengan kelembaban tinggi",
      transportasi: ["Bandar Udara Internasional Depati Amir (PGK)", "Pelabuhan Pangkal Balam", "Terminal Angkutan Darat", "Trans Pangkal Pinang"],
      komunikasi: ["Fiber optic network terluas di Bangka Belitung", "5G network coverage 72%", "Data center di Pangkal Pinang"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Pangkal Pinang untuk air bersih", "Gas untuk rumah tangga"],
      keunggulan_lokasi: ["Pusat pertambangan timah", "Dekat dengan sumber daya mineral", "Akses ke laut Cina Selatan", "Pusat perdagangan regional"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 35-60 juta per tahun",
      pertumbuhan_ekonomi: "5.5% per tahun (2023)",
      pdb_kota: "Rp 75 triliun (2023)",
      sektor_dominan: ["Pertambangan", "Perdagangan", "Perikanan", "Jasa", "Logistik", "Pendidikan"],
      investasi_asing: "US$ 2+ miliar per tahun",
      investasi_domestik: "Rp 18+ triliun per tahun",
      startup_count: "28+",
      kelas_atas: "18",
      kelas_menengah: "48",
      kelas_bawah: "34",
      inflasi: "Inflasi rata-rata 4.0% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "24.000",
      mikro: "18.000",
      kecil: "4.500",
      menengah: "1.200",
      besar: "300",
      startup_total: "35+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["Mining Tech", "Maritime", "E-commerce", "Logistics", "Tourism"],
      pusat_bisnis: ["Jl. Sudirman Business District", "Mining Complex", "Port Area", "Trade Center"],
      digital_economy: "Rp 10+ triliun per tahun",
      ecommerce_gmv: "Rp 4+ triliun per tahun",
      startup_funding: "US$ 35+ juta per tahun",
      tantangan_bisnis: ["Fluktuasi harga komoditas", "Keterbatasan infrastruktur", "Biaya logistik tinggi", "Persaingan regional"],
      peluang_bisnis: ["Digital mining solutions", "Maritime technology", "E-commerce platform", "Environmental monitoring", "Sustainable mining"]
    },
    demografi: {
      populasi_total: "220 ribu",
      kepadatan: "1.900",
      usia_produktif: "68",
      sarjana: "15",
      diploma: "14",
      sma: "40",
      smp: "20",
      sd: "11",
      pendapatan_rata_rata: "Rp 2.5-4.5 juta per bulan",
      digital_literacy: "65",
      mobile_penetration: "82"
    },
    digital_economy: {
      internet_users: "140.000",
      social_media_users: "125.000",
      online_shopping: "95.000",
      digital_payment: "75.000",
      ecommerce_penetration: "43",
      startup_density: "Rendah untuk kota regional",
      tech_talent: "2.500+"
    },
    contact_info: {
      address: "Pangkal Pinang, Bangka Belitung",
      email: "pangkal-pinang@kotacom.id"
    }
  },
  {
    nama: "Bandar Lampung",
    slug: "bandar-lampung",
    provinsi: "Lampung",
    populasi: 950000,
    kecamatan: [
      {"nama": "Kedaton", "kota": "Bandar Lampung"}, {"nama": "Sukarame", "kota": "Bandar Lampung"},
      {"nama": "Tanjungkarang Barat", "kota": "Bandar Lampung"}, {"nama": "Tanjungkarang Timur", "kota": "Bandar Lampung"},
      {"nama": "Tanjungkarang Pusat", "kota": "Bandar Lampung"}, {"nama": "Telukbetung Selatan", "kota": "Bandar Lampung"},
      {"nama": "Telukbetung Utara", "kota": "Bandar Lampung"}, {"nama": "Telukbetung Barat", "kota": "Bandar Lampung"},
      {"nama": "Bumi Waras", "kota": "Bandar Lampung"}, {"nama": "Panjang", "kota": "Bandar Lampung"},
      {"nama": "Tanjung Senang", "kota": "Bandar Lampung"}, {"nama": "Kemiling", "kota": "Bandar Lampung"},
      {"nama": "Rajabasa", "kota": "Bandar Lampung"}, {"nama": "Jati Agung", "kota": "Bandar Lampung"},
      {"nama": "Natar", "kota": "Bandar Lampung"}, {"nama": "Metro", "kota": "Bandar Lampung"}
    ],
    kota_administrasi: ["Bandar Lampung"],
    market_size: "Ibukota Lampung dengan ekonomi terbesar di Sumatera bagian selatan - 950+ ribu penduduk aktif",
    businesses_count: "75.000+",
    digital_transform: "62",
    local_business_areas: ["Jl. Teuku Umar Bandar Lampung", "Margo City Mall", "Transmart Bandar Lampung", "Plaza Lampung", "Bandar Lampung Trade Center", "Lippo Plaza Bandar Lampung", "Bandar Lampung City Center", "Mall Kartini"],
    geografis: {
      lokasi: "Ibukota Provinsi Lampung, terletak di pesisir timur Sumatera",
      luas_wilayah: "197.22 km²",
      ketinggian: "0-50 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan tinggi (rata-rata 2.500-3.500 mm/tahun)",
      cuaca: "Panas dan lembab dengan kabut asap musiman",
      transportasi: ["Bandar Udara Internasional Radin Inten II (TKG)", "Pelabuhan Panjang", "Terminal Rajabasa", "Trans Bandar Lampung"],
      komunikasi: ["Fiber optic network terluas di Lampung", "5G network coverage 78%", "Data center di Bandar Lampung"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Bandar Lampung untuk air bersih", "Gas untuk rumah tangga"],
      keunggulan_lokasi: ["Gerbang selatan Sumatera", "Dekat dengan perkebunan", "Akses ke sumber daya pertanian", "Pusat perdagangan regional"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 30-50 juta per tahun",
      pertumbuhan_ekonomi: "4.8% per tahun (2023)",
      pdb_kota: "Rp 140 triliun (2023)",
      sektor_dominan: ["Perkebunan", "Perdagangan", "Pendidikan", "Jasa", "Pertanian", "Logistik"],
      investasi_asing: "US$ 2+ miliar per tahun",
      investasi_domestik: "Rp 18+ triliun per tahun",
      startup_count: "45+",
      kelas_atas: "15",
      kelas_menengah: "50",
      kelas_bawah: "35",
      inflasi: "Inflasi rata-rata 4.1% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "88.000",
      mikro: "68.000",
      kecil: "15.000",
      menengah: "4.000",
      besar: "1.000",
      startup_total: "65+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["Agritech", "Education", "E-commerce", "Logistics", "Tourism"],
      pusat_bisnis: ["Jl. Teuku Umar Business District", "Education Complex", "Port Area", "Trade Center"],
      digital_economy: "Rp 18+ triliun per tahun",
      ecommerce_gmv: "Rp 7+ triliun per tahun",
      startup_funding: "US$ 55+ juta per tahun",
      tantangan_bisnis: ["Kabut asap musiman", "Keterbatasan infrastruktur", "Biaya logistik tinggi", "Persaingan regional"],
      peluang_bisnis: ["Digitalisasi perkebunan", "Platform pendidikan", "E-commerce regional", "Agritech solutions", "Environmental monitoring"]
    },
    demografi: {
      populasi_total: "950 ribu",
      kepadatan: "4.800",
      usia_produktif: "68",
      sarjana: "16",
      diploma: "14",
      sma: "40",
      smp: "20",
      sd: "10",
      pendapatan_rata_rata: "Rp 2-4 juta per bulan",
      digital_literacy: "66",
      mobile_penetration: "83"
    },
    digital_economy: {
      internet_users: "630.000",
      social_media_users: "550.000",
      online_shopping: "400.000",
      digital_payment: "320.000",
      ecommerce_penetration: "42",
      startup_density: "Rendah untuk kota regional",
      tech_talent: "4.500+"
    },
    contact_info: {
      address: "Bandar Lampung, Lampung",
      email: "bandar-lampung@kotacom.id"
    }
  },
  {
    nama: "Serang",
    slug: "serang",
    provinsi: "Banten",
    populasi: 700000,
    kecamatan: [
      {"nama": "Serang", "kota": "Serang"}, {"nama": "Curug", "kota": "Serang"},
      {"nama": "Cikande", "kota": "Serang"}, {"nama": "Kibin", "kota": "Serang"},
      {"nama": "Carenang", "kota": "Serang"}, {"nama": "Takokak", "kota": "Serang"}
    ],
    kota_administrasi: ["Serang"],
    market_size: "Ibukota Banten dengan ekonomi strategis - 700+ ribu penduduk aktif",
    businesses_count: "55.000+",
    digital_transform: "65",
    local_business_areas: ["Jl. Veteran Serang", "Serang Mall", "Transmart Serang", "Plaza Banten", "Serang Trade Center", "Lippo Plaza Serang", "Serang City Center", "Mall Cipocok"],
    geografis: {
      lokasi: "Ibukota Provinsi Banten, terletak di pesisir utara Jawa",
      luas_wilayah: "266.48 km²",
      ketinggian: "0-50 meter di atas permukaan laut",
      iklim: "Tropis dengan curah hujan sedang (rata-rata 1.800-2.500 mm/tahun)",
      cuaca: "Panas dan lembab dengan angin laut",
      transportasi: ["Bandar Udara Internasional Banten (BTH)", "Pelabuhan Merak", "Terminal Pakupatan", "Trans Pakuan"],
      komunikasi: ["Fiber optic network terluas di Banten", "5G network coverage 80%", "Data center di Serang"],
      utilities: ["Listrik 24/7 dengan backup", "PDAM Serang untuk air bersih", "Gas untuk rumah tangga"],
      keunggulan_lokasi: ["Dekat dengan Jakarta", "Akses ke Pelabuhan Merak", "Gerbang barat Jawa", "Pusat industri strategis"]
    },
    ekonomi: {
      gdp_per_kapita: "Rp 35-60 juta per tahun",
      pertumbuhan_ekonomi: "5.2% per tahun (2023)",
      pdb_kota: "Rp 120 triliun (2023)",
      sektor_dominan: ["Industri", "Perdagangan", "Logistik", "Jasa", "Pertanian", "Pendidikan"],
      investasi_asing: "US$ 2.5+ miliar per tahun",
      investasi_domestik: "Rp 20+ triliun per tahun",
      startup_count: "40+",
      kelas_atas: "18",
      kelas_menengah: "52",
      kelas_bawah: "30",
      inflasi: "Inflasi rata-rata 3.9% per tahun"
    },
    bisnis: {
      jumlah_perusahaan: "65.000",
      mikro: "48.000",
      kecil: "12.000",
      menengah: "4.000",
      besar: "1.000",
      startup_total: "55+",
      unicorn_list: "Tidak ada unicorn lokal",
      startup_sektor: ["Logistics", "Manufacturing", "E-commerce", "Education", "Tourism"],
      pusat_bisnis: ["Jl. Veteran Business District", "Industrial Complex", "Port Area", "Trade Center"],
      digital_economy: "Rp 15+ triliun per tahun",
      ecommerce_gmv: "Rp 6+ triliun per tahun",
      startup_funding: "US$ 50+ juta per tahun",
      tantangan_bisnis: ["Persaingan dengan Jakarta", "Keterbatasan infrastruktur", "Biaya logistik", "Kepadatan lalu lintas"],
      peluang_bisnis: ["Digital logistics", "Manufacturing tech", "E-commerce platform", "Education technology", "Cross-border commerce"]
    },
    demografi: {
      populasi_total: "700 ribu",
      kepadatan: "2.600",
      usia_produktif: "70",
      sarjana: "16",
      diploma: "15",
      sma: "38",
      smp: "20",
      sd: "11",
      pendapatan_rata_rata: "Rp 2.5-4.5 juta per bulan",
      digital_literacy: "67",
      mobile_penetration: "84"
    },
    digital_economy: {
      internet_users: "470.000",
      social_media_users: "400.000",
      online_shopping: "300.000",
      digital_payment: "240.000",
      ecommerce_penetration: "43",
      startup_density: "Sedang untuk kota strategis",
      tech_talent: "3.500+"
    },
    contact_info: {
      address: "Serang, Banten",
      email: "serang@kotacom.id"
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
        phone: "+6281232109396",
        email: kota.contact_info.email,
        whatsapp: `https://wa.me/6281232109396?text=Halo,%20saya%20mau%20konsultasi%20website%20untuk%20bisnis%20di%20${kota.nama}`
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
