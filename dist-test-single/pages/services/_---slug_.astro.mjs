import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, f as renderSlot, d as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_BamDxgSk.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_Ki2xGb0a.mjs';
import { $ as $$ResponsiveImage } from '../../chunks/ResponsiveImage_CQAk96ME.mjs';
import { $ as $$SchemaMarkup } from '../../chunks/SchemaMarkup_CmQj82KU.mjs';
import { $ as $$WhatsAppButton } from '../../chunks/WhatsAppButton_BTurfMmZ.mjs';
import { C as COMPANY_NAME } from '../../chunks/consts_BQzPd2gi.mjs';
/* empty css                                     */
import { d as getServicesDirectFromSupabase } from '../../chunks/supabase-direct_CBgP8j8M.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$ServicePage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServicePage;
  const props = Astro2.props;
  const serviceData = {
    title: props.title,
    category: Array.isArray(props.category) ? props.category.filter(Boolean) : props.category ? [props.category] : [],
    slug: props.slug,
    imageUrl: props.imageUrl1,
    published: { start: props.published },
    lastUpdated: { start: props.published },
    wilayah: props.wilayah,
    provider: props.provider,
    type: props.type,
    price: props.price,
    url: props.url,
    whatsappUrl: props.whatsappUrl,
    mapsUrl: props.mapsUrl,
    verify: props.verify,
    imageUrl2: props.imageUrl2,
    imageUrl3: props.imageUrl3,
    review: props.review,
    body: props.body,
    description: props.description
  };
  const title = serviceData.title + " - Services";
  const description = serviceData.review || `Layanan ${serviceData.title} profesional dari ${COMPANY_NAME}`;
  const DEFAULT_IMAGE = "https://res.cloudinary.com/dxyjku3eh/image/upload/v1754820661/Tanpa_judul_Presentasi__20250810_170926_0000_vdiibn.png";
  const image = serviceData.imageUrl || DEFAULT_IMAGE;
  const publishedDate = serviceData.published?.start ? serviceData.published.start instanceof Date ? serviceData.published.start.toISOString() : new Date(serviceData.published.start).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
  const modifiedDate = serviceData.lastUpdated?.start ? serviceData.lastUpdated.start instanceof Date ? serviceData.lastUpdated.start.toISOString() : new Date(serviceData.lastUpdated.start).toISOString() : publishedDate;
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: serviceData.title, url: Astro2.url.toString() }
  ];
  const reviews = [
    {
      author: "Client Satisfied",
      rating: 5,
      reviewBody: `Layanan ${serviceData.title} sangat memuaskan dan profesional. Tim kotacom.id sangat responsif dan hasil kerja berkualitas tinggi.`,
      datePublished: publishedDate.split("T")[0]
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description, "image": image, "data-astro-cid-gvdqv5o6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SchemaMarkup", $$SchemaMarkup, { "type": "service", "title": serviceData.title, "description": description, "image": image, "breadcrumbs": breadcrumbs, "datePublished": publishedDate, "dateModified": modifiedDate, "category": serviceData.category, "price": serviceData.price, "reviews": reviews, "data": {
    wilayah: serviceData.wilayah,
    provider: serviceData.provider,
    type: serviceData.type,
    verify: serviceData.verify
  }, "data-astro-cid-gvdqv5o6": true })}  ${maybeRenderHead()}<section class="bg-gray-50 dark:bg-gray-800 py-4" data-astro-cid-gvdqv5o6> <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-gvdqv5o6> <nav class="flex" aria-label="Breadcrumb" data-astro-cid-gvdqv5o6> <ol class="inline-flex items-center space-x-1 md:space-x-3" data-astro-cid-gvdqv5o6> <li class="inline-flex items-center" data-astro-cid-gvdqv5o6> <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white" data-astro-cid-gvdqv5o6> <svg class="w-3 h-3 mr-2.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-gvdqv5o6> <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" data-astro-cid-gvdqv5o6></path> </svg>
Home
</a> </li> <li data-astro-cid-gvdqv5o6> <div class="flex items-center" data-astro-cid-gvdqv5o6> <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" fill="none" viewBox="0 0 6 10" data-astro-cid-gvdqv5o6> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" data-astro-cid-gvdqv5o6></path> </svg> <a href="/services" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white" data-astro-cid-gvdqv5o6>Services</a> </div> </li> <li aria-current="page" data-astro-cid-gvdqv5o6> <div class="flex items-center" data-astro-cid-gvdqv5o6> <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" fill="none" viewBox="0 0 6 10" data-astro-cid-gvdqv5o6> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" data-astro-cid-gvdqv5o6></path> </svg> <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" data-astro-cid-gvdqv5o6>${serviceData.title}</span> </div> </li> </ol> </nav> </div> </section>  <section class="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" data-astro-cid-gvdqv5o6> <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" data-astro-cid-gvdqv5o6> <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center" data-astro-cid-gvdqv5o6> <!-- Left Column: Content --> <div class="space-y-6 sm:space-y-8 order-2 lg:order-1" data-astro-cid-gvdqv5o6> <!-- Category Badge --> ${serviceData.category && serviceData.category.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2" data-astro-cid-gvdqv5o6> ${serviceData.category.map((cat) => renderTemplate`<a${addAttribute(`/services/${cat.toLowerCase().replace(/\s+/g, "-")}/`, "href")} class="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800 transition-colors duration-200 cursor-pointer" data-astro-cid-gvdqv5o6> <svg class="w-2 h-2 sm:w-3 sm:h-3 mr-1 sm:mr-1.5" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-gvdqv5o6> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-gvdqv5o6></path> </svg> ${cat} </a>`)} </div>`} <!-- Main Title --> <div data-astro-cid-gvdqv5o6> <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight" data-pagefind-meta="title" data-astro-cid-gvdqv5o6> ${serviceData.title} </h1> <div class="mt-2 sm:mt-4 h-1 w-16 sm:w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" data-astro-cid-gvdqv5o6></div> </div> <!-- Description --> <div class="prose prose-sm sm:prose-base lg:prose-lg max-w-none" data-astro-cid-gvdqv5o6> <p class="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed" data-astro-cid-gvdqv5o6> ${description} </p> </div> <!-- CTA Buttons --> <div class="flex flex-col sm:flex-row gap-3 max-w-xs sm:max-w-sm lg:max-w-none" data-astro-cid-gvdqv5o6> ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "placement": "hero_section", "whatsappMessage": `Halo! Saya tertarik dengan layanan ${serviceData.title}. Bisa tolong jelaskan lebih detail tentang layanan ini?`, "className": "text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 justify-center", "data-astro-cid-gvdqv5o6": true })} ${serviceData.url && renderTemplate`<a${addAttribute(serviceData.url, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition-all duration-200" data-astro-cid-gvdqv5o6> <svg class="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-gvdqv5o6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-gvdqv5o6></path> </svg>
Kunjungi Website
</a>`} </div> <!-- Simple Service Details (Text Only) --> <div class="pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700" data-astro-cid-gvdqv5o6> <div class="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400" data-astro-cid-gvdqv5o6> ${serviceData.price && renderTemplate`<span data-astro-cid-gvdqv5o6>Harga: <span class="font-semibold text-gray-900 dark:text-white" data-astro-cid-gvdqv5o6>${serviceData.price}</span></span>`} ${serviceData.provider && renderTemplate`<span data-astro-cid-gvdqv5o6>Provider: <span class="font-semibold text-gray-900 dark:text-white" data-astro-cid-gvdqv5o6>${serviceData.provider}</span></span>`} </div> </div> <!-- Trust Indicators --> <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700" data-astro-cid-gvdqv5o6> <div class="flex items-center" data-astro-cid-gvdqv5o6> <svg class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-gvdqv5o6> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-gvdqv5o6></path> </svg> <span class="text-xs sm:text-sm text-gray-600 dark:text-gray-400" data-astro-cid-gvdqv5o6>Konsultasi Gratis</span> </div> <div class="flex items-center" data-astro-cid-gvdqv5o6> <svg class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-gvdqv5o6> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-gvdqv5o6></path> </svg> <span class="text-xs sm:text-sm text-gray-600 dark:text-gray-400" data-astro-cid-gvdqv5o6>Garansi 100%</span> </div> <div class="flex items-center" data-astro-cid-gvdqv5o6> <svg class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-gvdqv5o6> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-gvdqv5o6></path> </svg> <span class="text-xs sm:text-sm text-gray-600 dark:text-gray-400" data-astro-cid-gvdqv5o6>Support 24/7</span> </div> </div> </div> <!-- Right Column: Image --> <div class="relative order-1 lg:order-2 mb-6 lg:mb-0" data-astro-cid-gvdqv5o6> <div class="relative z-10" data-astro-cid-gvdqv5o6> ${renderComponent($$result2, "ResponsiveImage", $$ResponsiveImage, { "src": image, "alt": serviceData.title, "class": "rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl lg:shadow-2xl w-full", "loading": "eager", "fetchpriority": "high", "data-pagefind-meta": "image[src], image_alt[alt]", "data-astro-cid-gvdqv5o6": true })} </div> <!-- Decorative Elements (Hidden on mobile) --> <div class="hidden lg:block absolute -top-4 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" data-astro-cid-gvdqv5o6></div> <div class="hidden lg:block absolute -bottom-8 -left-8 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000" data-astro-cid-gvdqv5o6></div> </div> </div> </div> </section>  <section class="bg-gray-50 dark:bg-gray-800" data-astro-cid-gvdqv5o6> <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-astro-cid-gvdqv5o6> <article class="prose prose-sm max-w-none" data-pagefind-body data-pagefind-filter="type:service" data-astro-cid-gvdqv5o6> ${renderSlot($$result2, $$slots["default"])} <!-- Display description if available --> ${serviceData.description && renderTemplate`<div class="mb-6" data-astro-cid-gvdqv5o6> <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-3" data-astro-cid-gvdqv5o6>Description</h2> <div class="text-sm text-gray-700 dark:text-gray-300" data-astro-cid-gvdqv5o6>${unescapeHTML(serviceData.description)}</div> </div>`} <!-- Display body content if available --> ${serviceData.body && renderTemplate`<div class="mb-6" data-astro-cid-gvdqv5o6> <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-3" data-astro-cid-gvdqv5o6>Service Details</h2> <div class="text-sm text-gray-700 dark:text-gray-300" data-astro-cid-gvdqv5o6>${unescapeHTML(serviceData.body)}</div> </div>`} <!-- Display review if available --> ${serviceData.review && renderTemplate`<div class="mb-6" data-astro-cid-gvdqv5o6> <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-3" data-astro-cid-gvdqv5o6>Review</h2> <div class="text-sm text-gray-700 dark:text-gray-300" data-astro-cid-gvdqv5o6>${unescapeHTML(serviceData.review)}</div> </div>`} ${serviceData.category && serviceData.category.length > 0 && renderTemplate`<span class="hidden" data-pagefind-meta="categories" data-astro-cid-gvdqv5o6>${serviceData.category.join(", ")}</span>`} </article> </div> </section>  <section class="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900" data-astro-cid-gvdqv5o6> <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16" data-astro-cid-gvdqv5o6> <div class="text-center" data-astro-cid-gvdqv5o6> <h2 class="text-2xl md:text-3xl font-bold text-white mb-6" data-astro-cid-gvdqv5o6>
Siap untuk memulai project Anda?
</h2> <p class="text-lg text-blue-100 mb-8 max-w-2xl mx-auto" data-astro-cid-gvdqv5o6>
Dapatkan konsultasi gratis dan penawaran terbaik untuk layanan ${serviceData.title}. Tim kami siap membantu mewujudkan ide Anda menjadi kenyataan.
</p> <div class="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-sm sm:max-w-md mx-auto" data-astro-cid-gvdqv5o6> ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "placement": "bottom_cta", "whatsappMessage": `Halo! Saya ingin konsultasi tentang layanan ${serviceData.title}. Bisa tolong kirimkan penawaran dan informasi lengkapnya?`, "className": "text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-600 hover:bg-gray-50 justify-center", "data-astro-cid-gvdqv5o6": true })} <a href="tel:+6285799520350" class="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-blue-600 bg-white rounded-lg hover:bg-gray-50 focus:ring-4 focus:ring-white/20 transition-all duration-200" data-astro-cid-gvdqv5o6> <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-gvdqv5o6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-gvdqv5o6></path> </svg>
Hubungi via Telepon
</a> </div> <div class="mt-8 flex justify-center space-x-8 text-blue-100" data-astro-cid-gvdqv5o6> <div class="text-center" data-astro-cid-gvdqv5o6> <div class="text-xl font-bold" data-astro-cid-gvdqv5o6>500+</div> <div class="text-sm" data-astro-cid-gvdqv5o6>Project Selesai</div> </div> <div class="text-center" data-astro-cid-gvdqv5o6> <div class="text-xl font-bold" data-astro-cid-gvdqv5o6>98%</div> <div class="text-sm" data-astro-cid-gvdqv5o6>Client Puas</div> </div> <div class="text-center" data-astro-cid-gvdqv5o6> <div class="text-xl font-bold" data-astro-cid-gvdqv5o6>24/7</div> <div class="text-sm" data-astro-cid-gvdqv5o6>Support</div> </div> </div> </div> </div> </section> ` })} `;
}, "/workspace/src/layouts/ServicePage.astro", void 0);

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const mdxServices = await getCollection("servicesMdx");
  const supabaseServices = await getServicesDirectFromSupabase(1e4, "published");
  console.log(`\uFFFD Building static paths for ${supabaseServices?.length || 0} services (direct from Supabase)`);
  const mdxPaths = mdxServices.map((service) => ({
    params: { slug: service.data.slug },
    props: { service, source: "mdx" }
  }));
  const supabasePaths = (supabaseServices || []).filter((service) => service.slug && typeof service.slug === "string").map((service) => ({
    params: { slug: service.slug },
    props: { service, source: "supabase" }
  }));
  return [...mdxPaths, ...supabasePaths];
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { service, source } = Astro2.props;
  let layoutData = {};
  let Content;
  if (source === "mdx") {
    const { Content: C } = await renderEntry(service);
    Content = C;
    layoutData = {
      ...service.data,
      title: service.data.title,
      category: service.data.category,
      slug: service.data.slug,
      imageUrl1: service.data.imageUrl1,
      published: service.data.published,
      wilayah: service.data.wilayah,
      provider: service.data.provider,
      type: service.data.type,
      price: service.data.price,
      url: service.data.url,
      whatsappUrl: service.data.whatsappUrl,
      mapsUrl: service.data.mapsUrl,
      verify: service.data.verify,
      imageUrl2: service.data.imageUrl2,
      imageUrl3: service.data.imageUrl3,
      review: service.data.review
    };
  } else if (source === "supabase") {
    Content = null;
    layoutData = {
      title: service.title,
      category: service.category || [],
      slug: service.slug,
      imageUrl1: service.imageUrl1 || "",
      published: service.published,
      wilayah: service.wilayah || [],
      provider: service.provider,
      type: service.type || [],
      price: service.price,
      url: service.url,
      whatsappUrl: service.whatsappUrl,
      mapsUrl: service.mapsUrl,
      verify: service.verify || "",
      imageUrl2: service.imageUrl2 || "",
      imageUrl3: service.imageUrl3 || "",
      review: service.review || "",
      body: service.body || "",
      description: service.description || ""
    };
  }
  return renderTemplate`${renderComponent($$result, "ServicePage", $$ServicePage, { ...layoutData }, { "default": async ($$result2) => renderTemplate`${Content && renderTemplate`${renderComponent($$result2, "Content", Content, {})}`}` })}`;
}, "/workspace/src/pages/services/[...slug].astro", void 0);

const $$file = "/workspace/src/pages/services/[...slug].astro";
const $$url = "/services/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
