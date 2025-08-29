import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, g as renderScript, a as renderTemplate } from './astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { $ as $$SchoolLottieSeparator } from './SchoolLottieSeparator_asC9N0FI.mjs';
/* empty css                         */

const $$Astro$3 = createAstro("https://example.com");
const $$ServicesHighlight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ServicesHighlight;
  const { className = "" } = Astro2.props;
  const programs = [
    {
      icon: "\u{1F4DA}",
      title: "Program Akademik",
      description: "Kurikulum nasional yang diperkaya dengan pendekatan pembelajaran inovatif dan teknologi modern.",
      features: ["Matematika Kreatif", "Sains Eksperimen", "Bahasa Indonesia", "Bahasa Inggris", "IPS & IPA"]
    },
    {
      icon: "\u{1F54C}",
      title: "Program Keagamaan",
      description: "Pendidikan Islam yang mengintegrasikan nilai-nilai akhlak mulia dalam setiap aspek pembelajaran.",
      features: ["Tahfidz Al-Qur'an", "Aqidah & Akhlak", "Fiqih", "Sejarah Islam", "Praktik Ibadah"]
    },
    {
      icon: "\u{1F3A8}",
      title: "Program Seni & Budaya",
      description: "Mengembangkan kreativitas dan apresiasi seni melalui berbagai kegiatan seni dan budaya.",
      features: ["Seni Tari", "Seni Musik", "Seni Rupa", "Teater", "Kebudayaan Nusantara"]
    },
    {
      icon: "\u{1F3C3}",
      title: "Program Olahraga",
      description: "Mengembangkan kebugaran jasmani dan sportivitas melalui berbagai cabang olahraga.",
      features: ["Futsal", "Basket", "Voli", "Atletik", "Senam"]
    },
    {
      icon: "\u{1F52C}",
      title: "Program Sains & Teknologi",
      description: "Mengenalkan sains dan teknologi melalui eksperimen dan proyek-proyek menarik.",
      features: ["Laboratorium Sains", "Komputer & IT", "Robotik", "Eksperimen", "Proyek Sains"]
    },
    {
      icon: "\u{1F30D}",
      title: "Program Internasional",
      description: "Mempersiapkan siswa untuk menghadapi tantangan global dengan program bahasa dan budaya.",
      features: ["English Club", "Bahasa Mandarin", "Budaya Global", "Pen Pal Program", "International Day"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ${className} section-bg-light dark:section-bg-dark relative overflow-hidden`, "class")}> <!-- Lightweight Floating Elements - Only on larger screens --> <div class="floating-elements"> <div class="floating-shape"></div> <div class="floating-shape"></div> <div class="floating-shape"></div> </div> <div class="max-w-7xl mx-auto relative z-10"> <!-- Section Header --> <div class="text-center mb-12 sm:mb-16" data-reveal="fade-up"> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"> <span class="bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
Program Unggulan Sekolah
</span> </h2> <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
Berbagai program unggulan yang dirancang untuk mengembangkan potensi akademik, spiritual, dan kreativitas siswa
</p> </div> <!-- Programs Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-reveal="fade-up" data-reveal-delay="200"> ${programs.map((program, index) => renderTemplate`<div class="group relative overflow-hidden rounded-2xl p-6 sm:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 hover:scale-105" data-reveal="fade-up"${addAttribute(300 + index * 100, "data-reveal-delay")}> <!-- Icon --> <div class="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"> ${program.icon} </div> <!-- Content --> <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"> ${program.title} </h3> <p class="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6"> ${program.description} </p> <!-- Features List --> <ul class="space-y-2"> ${program.features.map((feature, featureIndex) => renderTemplate`<li class="flex items-center text-sm text-gray-600 dark:text-gray-400"${addAttribute(featureIndex, "key")}> <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> ${feature} </li>`)} </ul> <!-- Hover effect overlay --> <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div> <!-- Decorative elements --> <div class="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping"></div> <div class="absolute bottom-4 left-4 w-1.5 h-1.5 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse" style="transition-delay: 0.2s;"></div> </div>`)} </div> <!-- Additional Programs Info --> <div class="mt-16 sm:mt-20" data-reveal="fade-up" data-reveal-delay="800"> <div class="bg-gradient-to-r from-blue-50/80 to-yellow-50/80 dark:from-blue-900/20 dark:to-yellow-900/20 rounded-2xl p-8 sm:p-12 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"> <div> <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
Program Ekstrakurikuler
</h3> <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
Selain program akademik, kami juga menyediakan berbagai ekstrakurikuler yang dapat dipilih siswa sesuai minat dan bakat mereka.
</p> <div class="grid grid-cols-2 gap-4"> <div class="flex items-center space-x-3"> <div class="w-3 h-3 bg-blue-500 rounded-full"></div> <span class="text-sm text-gray-700 dark:text-gray-300">Pramuka</span> </div> <div class="flex items-center space-x-3"> <div class="w-3 h-3 bg-red-500 rounded-full"></div> <span class="text-sm text-gray-700 dark:text-gray-300">PMR</span> </div> <div class="flex items-center space-x-3"> <div class="w-3 h-3 bg-yellow-500 rounded-full"></div> <span class="text-sm text-gray-700 dark:text-gray-300">Paskibra</span> </div> <div class="flex items-center space-x-3"> <div class="w-3 h-3 bg-green-500 rounded-full"></div> <span class="text-sm text-gray-700 dark:text-gray-300">Klub Sains</span> </div> </div> </div> <div class="text-center lg:text-right"> <div class="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 rounded-lg hover:from-blue-700 hover:via-red-700 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
Lihat Semua Program
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg> </div> </div> </div> </div> </div> </div> <!-- Lottie Separator --> ${renderComponent($$result, "SchoolLottieSeparator", $$SchoolLottieSeparator, { "animation": "school", "height": "h-16 sm:h-20", "className": "mt-12 sm:mt-16" })} </section> ${renderScript($$result, "/workspace/src/components/Homepage/ServicesHighlight.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspace/src/components/Homepage/ServicesHighlight.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$SchoolInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SchoolInfo;
  const { className = "" } = Astro2.props;
  const schoolInfo = [
    {
      icon: "\u{1F393}",
      title: "Visi",
      description: "Menjadi sekolah unggulan yang menghasilkan generasi berakhlak mulia, berprestasi, dan siap menghadapi tantangan global.",
      bgColor: "from-blue-50/80 to-blue-100/80",
      darkBgColor: "from-blue-900/20 to-blue-800/20"
    },
    {
      icon: "\u{1F3AF}",
      title: "Misi",
      description: "Menyelenggarakan pendidikan berkualitas dengan mengintegrasikan nilai-nilai Islam, kurikulum nasional, dan teknologi modern.",
      bgColor: "from-red-50/80 to-red-100/80",
      darkBgColor: "from-red-900/20 to-red-800/20"
    },
    {
      icon: "\u{1F31F}",
      title: "Program Unggulan",
      description: "Tahfidz Al-Qur'an, English Club, Matematika Kreatif, Sains Eksperimen, dan Seni Budaya.",
      bgColor: "from-yellow-50/80 to-yellow-100/80",
      darkBgColor: "from-yellow-900/20 to-yellow-800/20"
    },
    {
      icon: "\u{1F3C6}",
      title: "Prestasi",
      description: "Juara berbagai kompetisi akademik dan non-akademik tingkat kota, provinsi, dan nasional.",
      bgColor: "from-green-50/80 to-green-100/80",
      darkBgColor: "from-green-900/20 to-green-800/20"
    },
    {
      icon: "\u{1F465}",
      title: "Ekstrakurikuler",
      description: "Pramuka, PMR, Paskibra, Seni Tari, Seni Musik, Olahraga, dan Klub Sains.",
      bgColor: "from-purple-50/80 to-purple-100/80",
      darkBgColor: "from-purple-900/20 to-purple-800/20"
    },
    {
      icon: "\u{1F3EB}",
      title: "Fasilitas",
      description: "Ruang kelas modern, laboratorium, perpustakaan, musholla, UKS, kantin sehat, dan area bermain.",
      bgColor: "from-indigo-50/80 to-indigo-100/80",
      darkBgColor: "from-indigo-900/20 to-indigo-800/20"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ${className} section-bg-light dark:section-bg-dark relative overflow-hidden`, "class")}> <!-- Lightweight Floating Elements - Only on larger screens --> <div class="floating-elements"> <div class="floating-shape"></div> <div class="floating-shape"></div> <div class="floating-shape"></div> </div> <div class="max-w-7xl mx-auto relative z-10"> <!-- Section Header --> <div class="text-center mb-12 sm:mb-16" data-reveal="fade-up"> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"> <span class="bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
Informasi Sekolah
</span> </h2> <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
Kenali lebih dekat SD Muhammadiyah 20 Surabaya melalui visi, misi, dan program unggulan kami
</p> </div> <!-- School Info Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-reveal="fade-up" data-reveal-delay="200"> ${schoolInfo.map((info, index) => renderTemplate`<div class="group relative overflow-hidden rounded-2xl p-6 sm:p-8 bg-gradient-to-br \${info.bgColor} dark:\${info.darkBgColor} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 hover:scale-105" data-reveal="fade-up"${addAttribute(200 + index * 100, "data-reveal-delay")}> <!-- Icon --> <div class="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"> ${info.icon} </div> <!-- Content --> <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"> ${info.title} </h3> <p class="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed"> ${info.description} </p> <!-- Hover effect overlay --> <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div> <!-- Decorative elements --> <div class="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping"></div> <div class="absolute bottom-4 left-4 w-1.5 h-1.5 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse" style="transition-delay: 0.2s;"></div> </div>`)} </div> <!-- Statistics Section --> <div class="mt-16 sm:mt-20" data-reveal="fade-up" data-reveal-delay="600"> <div class="bg-gradient-to-r from-blue-600/90 via-red-600/90 to-yellow-600/90 rounded-2xl p-8 sm:p-12 text-center text-white backdrop-blur-sm"> <h3 class="text-2xl sm:text-3xl font-bold mb-8">Statistik Sekolah</h3> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"> <div class="text-center"> <div class="text-3xl sm:text-4xl font-bold mb-2">25+</div> <div class="text-sm sm:text-base opacity-90">Tahun Berdiri</div> </div> <div class="text-center"> <div class="text-3xl sm:text-4xl font-bold mb-2">500+</div> <div class="text-sm sm:text-base opacity-90">Siswa Aktif</div> </div> <div class="text-center"> <div class="text-3xl sm:text-4xl font-bold mb-2">30+</div> <div class="text-sm sm:text-base opacity-90">Guru & Staff</div> </div> <div class="text-center"> <div class="text-3xl sm:text-4xl font-bold mb-2">15+</div> <div class="text-sm sm:text-base opacity-90">Program Unggulan</div> </div> </div> <!-- CTA Button --> <div class="mt-8 sm:mt-12"> <a href="/contact" class="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
Hubungi Kami
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg> </a> </div> </div> </div> </div> <!-- Lottie Separator --> ${renderComponent($$result, "SchoolLottieSeparator", $$SchoolLottieSeparator, { "animation": "school", "height": "h-16 sm:h-20", "className": "mt-12 sm:mt-16" })} </section> ${renderScript($$result, "/workspace/src/components/Homepage/SchoolInfo.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspace/src/components/Homepage/SchoolInfo.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$SchoolFAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SchoolFAQ;
  const { className = "" } = Astro2.props;
  const faqData = [
    {
      question: "Apa saja persyaratan untuk mendaftar di SD Muhammadiyah 20 Surabaya?",
      answer: "Persyaratan meliputi: fotokopi akta kelahiran, KK, ijazah TK/RA, surat keterangan sehat, dan mengikuti tes kemampuan dasar. Pendaftaran dibuka untuk anak usia 6-7 tahun."
    },
    {
      question: "Bagaimana dengan biaya pendidikan dan pembayaran?",
      answer: "Biaya pendidikan mencakup uang gedung, SPP bulanan, dan biaya ekstrakurikuler. Pembayaran dapat dilakukan secara bertahap dan tersedia program beasiswa untuk siswa berprestasi."
    },
    {
      question: "Apa saja program unggulan yang ditawarkan?",
      answer: "Program unggulan meliputi: Tahfidz Al-Qur'an, English Club, Matematika Kreatif, Sains Eksperimen, Seni Budaya, dan berbagai ekstrakurikuler lainnya."
    },
    {
      question: "Bagaimana dengan keamanan dan kenyamanan siswa?",
      answer: "Sekolah dilengkapi dengan sistem keamanan 24 jam, UKS yang lengkap, dan lingkungan yang nyaman. Semua kegiatan diawasi oleh guru dan staff yang berpengalaman."
    },
    {
      question: "Apakah ada program khusus untuk siswa berkebutuhan khusus?",
      answer: "Ya, sekolah menyediakan program inklusi dengan pendampingan khusus dan kurikulum yang disesuaikan untuk siswa berkebutuhan khusus."
    },
    {
      question: "Bagaimana dengan prestasi akademik dan non-akademik?",
      answer: "Siswa kami telah meraih berbagai prestasi di tingkat kota, provinsi, dan nasional dalam bidang akademik, olahraga, seni, dan sains."
    },
    {
      question: "Apa saja fasilitas yang tersedia di sekolah?",
      answer: "Fasilitas meliputi: ruang kelas modern, laboratorium sains dan komputer, perpustakaan, musholla, UKS, kantin sehat, area bermain, dan lapangan olahraga."
    },
    {
      question: "Bagaimana dengan program ekstrakurikuler?",
      answer: "Tersedia berbagai ekstrakurikuler seperti: Pramuka, PMR, Paskibra, Seni Tari, Seni Musik, Olahraga, Klub Sains, dan English Club."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ${className} section-bg-light dark:section-bg-dark relative overflow-hidden`, "class")} data-astro-cid-qy5f7jwx> <!-- Lightweight Floating Elements - Only on larger screens --> <div class="floating-elements" data-astro-cid-qy5f7jwx> <div class="floating-shape" data-astro-cid-qy5f7jwx></div> <div class="floating-shape" data-astro-cid-qy5f7jwx></div> <div class="floating-shape" data-astro-cid-qy5f7jwx></div> </div> <div class="max-w-4xl mx-auto relative z-10" data-astro-cid-qy5f7jwx> <!-- Section Header --> <div class="text-center mb-12 sm:mb-16" data-reveal="fade-up" data-astro-cid-qy5f7jwx> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" data-astro-cid-qy5f7jwx> <span class="bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 bg-clip-text text-transparent" data-astro-cid-qy5f7jwx>
Pertanyaan yang Sering Diajukan
</span> </h2> <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4" data-astro-cid-qy5f7jwx>
Temukan jawaban untuk pertanyaan umum seputar SD Muhammadiyah 20 Surabaya
</p> </div> <!-- FAQ Accordion --> <div class="space-y-4" data-reveal="fade-up" data-reveal-delay="200" data-astro-cid-qy5f7jwx> ${faqData.map((faq, index) => renderTemplate`<div class="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden backdrop-blur-sm" data-reveal="fade-up"${addAttribute(300 + index * 100, "data-reveal-delay")} data-astro-cid-qy5f7jwx> <button class="faq-toggle w-full px-6 sm:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors duration-200" aria-expanded="false"${addAttribute(`faq-answer-${index}`, "aria-controls")} data-astro-cid-qy5f7jwx> <span class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white pr-4" data-astro-cid-qy5f7jwx> ${faq.question} </span> <svg class="faq-icon w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qy5f7jwx> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-qy5f7jwx></path> </svg> </button> <div${addAttribute(`faq-answer-${index}`, "id")} class="faq-answer hidden px-6 sm:px-8 pb-4 sm:pb-6" aria-hidden="true" data-astro-cid-qy5f7jwx> <div class="pt-2 border-t border-gray-200/50 dark:border-gray-700/50" data-astro-cid-qy5f7jwx> <p class="text-gray-600 dark:text-gray-300 leading-relaxed" data-astro-cid-qy5f7jwx> ${faq.answer} </p> </div> </div> </div>`)} </div> <!-- Additional Help Section --> <div class="mt-12 sm:mt-16 text-center" data-reveal="fade-up" data-reveal-delay="800" data-astro-cid-qy5f7jwx> <div class="bg-gradient-to-r from-blue-50/80 to-yellow-50/80 dark:from-blue-900/20 dark:to-yellow-900/20 rounded-2xl p-8 sm:p-12 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50" data-astro-cid-qy5f7jwx> <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4" data-astro-cid-qy5f7jwx>
Masih Ada Pertanyaan?
</h3> <p class="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8" data-astro-cid-qy5f7jwx>
Tim kami siap membantu menjawab semua pertanyaan Anda
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-qy5f7jwx> <a href="/contact" class="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg" data-astro-cid-qy5f7jwx> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qy5f7jwx> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" data-astro-cid-qy5f7jwx></path> </svg>
Hubungi Kami
</a> <a href="https://wa.me/085799520350" class="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg" data-astro-cid-qy5f7jwx> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-qy5f7jwx> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" data-astro-cid-qy5f7jwx></path> </svg>
WhatsApp
</a> </div> </div> </div> </div> <!-- Lottie Separator --> ${renderComponent($$result, "SchoolLottieSeparator", $$SchoolLottieSeparator, { "animation": "school", "height": "h-16 sm:h-20", "className": "mt-12 sm:mt-16", "data-astro-cid-qy5f7jwx": true })} </section> ${renderScript($$result, "/workspace/src/components/Homepage/SchoolFAQ.astro?astro&type=script&index=0&lang.ts")} `;
}, "/workspace/src/components/Homepage/SchoolFAQ.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$ClientTestimonials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientTestimonials;
  const { className = "" } = Astro2.props;
  const testimonials = [
    {
      name: "Ahmad Rizki",
      role: "Orang Tua Siswa Kelas 4",
      content: "SD Muhammadiyah 20 Surabaya benar-benar memberikan pendidikan berkualitas. Anak saya sangat senang belajar di sini dan prestasinya meningkat drastis. Guru-gurunya sangat perhatian dan profesional.",
      avatar: "\u{1F468}\u200D\u{1F466}",
      rating: 5
    },
    {
      name: "Siti Nurhaliza",
      role: "Orang Tua Siswa Kelas 2",
      content: "Program Tahfidz Al-Qur'an sangat bagus. Anak saya sudah hafal beberapa juz dan nilai-nilai Islam tertanam dengan baik. Fasilitas sekolah juga lengkap dan nyaman.",
      avatar: "\u{1F469}\u200D\u{1F467}",
      rating: 5
    },
    {
      name: "Budi Santoso",
      role: "Orang Tua Siswa Kelas 6",
      content: "Saya sangat puas dengan pendidikan yang diberikan. Anak saya berhasil diterima di SMP favorit dan memiliki karakter yang baik. Terima kasih SD Muhammadiyah 20!",
      avatar: "\u{1F468}\u200D\u{1F466}",
      rating: 5
    },
    {
      name: "Dewi Sartika",
      role: "Orang Tua Siswa Kelas 1",
      content: "Baru 1 tahun anak saya sekolah di sini, tapi sudah terlihat kemajuan yang signifikan. Metode pembelajaran yang menyenangkan dan guru yang sabar membuat anak semangat belajar.",
      avatar: "\u{1F469}\u200D\u{1F467}",
      rating: 5
    },
    {
      name: "Rudi Hartono",
      role: "Orang Tua Siswa Kelas 3",
      content: "Ekstrakurikuler yang beragam membantu anak mengembangkan bakat dan minatnya. Anak saya suka sekali dengan klub sains dan sudah beberapa kali juara lomba.",
      avatar: "\u{1F468}\u200D\u{1F466}",
      rating: 5
    },
    {
      name: "Maya Indah",
      role: "Orang Tua Siswa Kelas 5",
      content: "Keamanan dan kebersihan sekolah sangat terjaga. Saya tenang meninggalkan anak di sini. Program English Club juga membantu anak lebih percaya diri berbahasa Inggris.",
      avatar: "\u{1F469}\u200D\u{1F467}",
      rating: 5
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ${className} section-bg-light dark:section-bg-dark relative overflow-hidden`, "class")}> <!-- Lightweight Floating Elements - Only on larger screens --> <div class="floating-elements"> <div class="floating-shape"></div> <div class="floating-shape"></div> <div class="floating-shape"></div> </div> <div class="max-w-7xl mx-auto relative z-10"> <!-- Section Header --> <div class="text-center mb-12 sm:mb-16" data-reveal="fade-up"> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"> <span class="bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
Testimoni Orang Tua
</span> </h2> <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
Dengarkan langsung pengalaman orang tua yang telah mempercayakan pendidikan anaknya kepada kami
</p> </div> <!-- Testimonials Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-reveal="fade-up" data-reveal-delay="200"> ${testimonials.map((testimonial, index) => renderTemplate`<div class="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 group" data-reveal="fade-up"${addAttribute(300 + index * 100, "data-reveal-delay")}> <!-- Quote Icon --> <div class="text-4xl text-blue-400 dark:text-blue-300 mb-4 group-hover:scale-110 transition-transform duration-300">
💬
</div> <!-- Content --> <p class="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6 italic">
"${testimonial.content}"
</p> <!-- Rating --> <div class="flex items-center mb-4"> ${[...Array(testimonial.rating)].map((_, i) => renderTemplate`<svg${addAttribute(i, "key")} class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <!-- Author --> <div class="flex items-center"> <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4 group-hover:scale-110 transition-transform duration-300"> ${testimonial.avatar} </div> <div> <div class="font-semibold text-gray-900 dark:text-white">${testimonial.name}</div> <div class="text-sm text-gray-500 dark:text-gray-400">${testimonial.role}</div> </div> </div> <!-- Decorative elements --> <div class="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping"></div> <div class="absolute bottom-4 left-4 w-1.5 h-1.5 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse" style="transition-delay: 0.2s;"></div> </div>`)} </div> <!-- CTA Section --> <div class="mt-16 sm:mt-20 text-center" data-reveal="fade-up" data-reveal-delay="800"> <div class="bg-gradient-to-r from-blue-600/90 via-red-600/90 to-yellow-600/90 rounded-2xl p-8 sm:p-12 text-white backdrop-blur-sm"> <h3 class="text-2xl sm:text-3xl font-bold mb-4">
Bergabunglah dengan Keluarga Besar Kami
</h3> <p class="text-lg sm:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
Daftarkan anak Anda sekarang dan berikan pendidikan terbaik untuk masa depan yang cemerlang
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/contact" class="bg-white/90 text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:scale-105 transition-all duration-200 shadow-lg backdrop-blur-sm">
Daftar Sekarang
</a> <a href="https://wa.me/085799520350" class="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/30 transition-all duration-200 shadow-lg">
Konsultasi WhatsApp
</a> </div> </div> </div> </div> <!-- Lottie Separator --> ${renderComponent($$result, "SchoolLottieSeparator", $$SchoolLottieSeparator, { "animation": "school", "height": "h-16 sm:h-20", "className": "mt-12 sm:mt-16" })} </section> ${renderScript($$result, "/workspace/src/components/Homepage/ClientTestimonials.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspace/src/components/Homepage/ClientTestimonials.astro", void 0);

export { $$ServicesHighlight as $, $$SchoolInfo as a, $$SchoolFAQ as b, $$ClientTestimonials as c };
