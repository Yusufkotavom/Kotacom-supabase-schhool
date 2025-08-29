import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_BamDxgSk.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_Ki2xGb0a.mjs';
import { $ as $$ServiceCard } from '../chunks/ServiceCard_Cbj1_ZVW.mjs';
import 'clsx';
import { d as getServicesDirectFromSupabase } from '../chunks/supabase-direct_CBgP8j8M.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$SCategoryDropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SCategoryDropdown;
  const currentCategoryPromise = (async () => {
    const pathSegments = Astro2.url.pathname.split("/");
    const potentialCategory = pathSegments[2];
    const mdxServices2 = await getCollection("servicesMdx");
    const normalizedMdxServices2 = mdxServices2.map((entry) => ({
      ...entry,
      source: "mdx",
      data: {
        ...entry.data,
        properties: {
          svTitle: entry.data.title,
          svCategory: entry.data.category,
          svSlug: entry.data.slug,
          svImageURL1: entry.data.imageUrl1 || "",
          svPublished: { start: entry.data.published },
          svWilayah: entry.data.wilayah,
          svProvider: entry.data.provider,
          svType: entry.data.type,
          svPrice: entry.data.price,
          svURL: entry.data.url,
          svWhatsAppURL: entry.data.whatsappUrl,
          svMapsURL: entry.data.mapsUrl,
          svVerify: entry.data.verify || "",
          svImageURL2: entry.data.imageUrl2,
          svImageURL3: entry.data.imageUrl3,
          svReview: entry.data.review
        }
      }
    }));
    const allServices2 = [...normalizedMdxServices2];
    const validCategories = allServices2.reduce((acc, service) => {
      const categories = Array.isArray(service.data.properties.svCategory) ? service.data.properties.svCategory.map((c) => c.toLowerCase().replace(/\s+/g, "-")) : [String(service.data.properties.svCategory).toLowerCase().replace(/\s+/g, "-")];
      categories.forEach((category) => acc.add(category));
      return acc;
    }, /* @__PURE__ */ new Set());
    return validCategories.has(potentialCategory) ? potentialCategory : null;
  })();
  const currentCategory = await currentCategoryPromise;
  const mdxServices = await getCollection("servicesMdx");
  const normalizedMdxServices = mdxServices.map((entry) => ({
    ...entry,
    source: "mdx",
    data: {
      ...entry.data,
      properties: {
        svTitle: entry.data.title,
        svCategory: entry.data.category,
        svSlug: entry.data.slug,
        svImageURL1: entry.data.imageUrl1 || "",
        svPublished: { start: entry.data.published },
        svWilayah: entry.data.wilayah,
        svProvider: entry.data.provider,
        svType: entry.data.type,
        svPrice: entry.data.price,
        svURL: entry.data.url,
        svWhatsAppURL: entry.data.whatsappUrl,
        svMapsURL: entry.data.mapsUrl,
        svVerify: entry.data.verify || "",
        svImageURL2: entry.data.imageUrl2,
        svImageURL3: entry.data.imageUrl3,
        svReview: entry.data.review
      }
    }
  }));
  const allServices = [...normalizedMdxServices];
  const categoryCounts = allServices.reduce((acc, service) => {
    const categories = Array.isArray(service.data.properties.svCategory) ? service.data.properties.svCategory : [service.data.properties.svCategory];
    categories.forEach((category) => {
      if (category) {
        acc[category] = (acc[category] || 0) + 1;
      }
    });
    return acc;
  }, {});
  const uniqueCategories = Object.keys(categoryCounts).sort();
  return renderTemplate`${maybeRenderHead()}<form class="w-100%"> <select id="categories" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onchange="if (this.value) window.location.href = this.value"> <option value="/services/"${addAttribute(!currentCategory, "selected")}>
Semua Kategori
</option> ${uniqueCategories.map((category) => {
    const categorySlug = category.toLowerCase().replace(/\s+/g, "-");
    return renderTemplate`<option${addAttribute(`/services/${categorySlug}/`, "value")}${addAttribute(currentCategory === categorySlug, "selected")}> ${category} (${categoryCounts[category]})
</option>`;
  })} </select> </form>`;
}, "/workspace/src/components/SCategoryDropdown.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const mdxServices = await getCollection("servicesMdx");
  const supabaseServices = await getServicesDirectFromSupabase(1e4, "published");
  console.log(`\u{1F4CB} MDX services found: ${mdxServices.length}`);
  console.log(`\u{1F4CB} Supabase services found: ${supabaseServices?.length || 0}`);
  const normalizedMdxServices = mdxServices.map((entry) => ({
    ...entry,
    source: "mdx",
    data: {
      ...entry.data,
      properties: {
        svTitle: entry.data.title,
        svCategory: entry.data.category,
        svSlug: entry.data.slug,
        svImageURL1: entry.data.imageUrl1 || "",
        svPublished: { start: entry.data.published },
        svWilayah: entry.data.wilayah,
        svProvider: entry.data.provider,
        svType: entry.data.type,
        svPrice: entry.data.price,
        svURL: entry.data.url,
        svWhatsAppURL: entry.data.whatsappUrl,
        svMapsURL: entry.data.mapsUrl,
        svVerify: entry.data.verify || "",
        svImageURL2: entry.data.imageUrl2,
        svImageURL3: entry.data.imageUrl3,
        svReview: entry.data.review
      }
    }
  }));
  const normalizedSupabaseServices = (supabaseServices || []).map((service) => ({
    source: "supabase",
    data: {
      properties: {
        svTitle: service.title,
        svCategory: service.category || [],
        svSlug: service.slug,
        svImageURL1: service.imageUrl1 || service.cover_image || "",
        svPublished: { start: service.published ? new Date(service.published) : /* @__PURE__ */ new Date() },
        svWilayah: service.wilayah || [],
        svProvider: service.provider,
        svType: service.type || [],
        svPrice: service.price,
        svURL: service.url,
        svWhatsAppURL: service.whatsappUrl,
        svMapsURL: service.mapsUrl,
        svVerify: service.verify || "",
        svImageURL2: service.imageUrl2 || "",
        svImageURL3: service.imageUrl3 || "",
        svReview: service.review || ""
      }
    }
  }));
  const entries = [...normalizedMdxServices, ...normalizedSupabaseServices];
  const url = new URL(Astro2.request.url);
  const activeCategory = url.searchParams.get("category");
  const filtered = activeCategory ? entries.filter((e) => {
    const c = e.data.properties.svCategory;
    return Array.isArray(c) ? c.includes(activeCategory) : c === activeCategory;
  }) : entries;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Layanan IT Profesional", "description": "Temukan berbagai layanan IT profesional untuk kebutuhan bisnis Anda. IT Support, Website Development, Software Development, dan Percetakan." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white dark:bg-gray-900"> <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> <div class="max-w-screen-md mb-8 lg:mb-16"> <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
Layanan IT Profesional
</h1> <p class="text-gray-500 sm:text-xl dark:text-gray-400">
Solusi teknologi terpercaya untuk UMKM dan bisnis. IT Support, Website Development, Software Development, dan layanan Percetakan berkualitas tinggi.
</p> </div> <div class="flex flex-col md:flex-row mb-8 gap-4"> <!-- Showing count --> <div class="flex-1"> <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
Menampilkan <span class="font-semibold text-gray-900 dark:text-white"> ${filtered.length} </span> dari <span class="font-semibold text-gray-900 dark:text-white"> ${entries.length} </span> layanan
${activeCategory && renderTemplate`<span class="ml-2">
dalam kategori <span class="font-semibold text-blue-600 dark:text-blue-400">${activeCategory}</span> </span>`} </span> </div> <!-- Category Dropdown --> <div class="w-full md:w-1/4"> ${renderComponent($$result2, "SCategoryDropdown", $$SCategoryDropdown, {})} </div> </div> <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"> ${filtered.map((service) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "service": service })}`)} </div> ${filtered.length === 0 && renderTemplate`<div class="text-center py-12"> <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">Tidak ada layanan ditemukan</h3> <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
Tidak ada layanan dalam kategori "${activeCategory}". Coba pilih kategori lain.
</p> <div class="mt-6"> <a href="/services" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
Lihat Semua Layanan
</a> </div> </div>`} </div> </section> ` })}`;
}, "/workspace/src/pages/services/index.astro", void 0);

const $$file = "/workspace/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
