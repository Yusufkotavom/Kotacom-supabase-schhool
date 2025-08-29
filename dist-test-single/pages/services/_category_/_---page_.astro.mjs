import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_BamDxgSk.mjs';
import { $ as $$MainLayout } from '../../../chunks/MainLayout_Ki2xGb0a.mjs';
import { $ as $$ServiceCard } from '../../../chunks/ServiceCard_Cbj1_ZVW.mjs';
import { d as getServicesDirectFromSupabase } from '../../../chunks/supabase-direct_CBgP8j8M.mjs';
import { $ as $$SeoPaginationHead, a as $$ItemListJsonLd } from '../../../chunks/ItemListJsonLd_BFrAWTmF.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
async function getStaticPaths({ paginate }) {
  const mdxServices = await getCollection("servicesMdx");
  const supabaseServices = await getServicesDirectFromSupabase(1e4, "published");
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
  const normalizedSupabaseServices = (supabaseServices || []).filter((service) => service.slug && typeof service.slug === "string").map((service) => ({
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
  const allServices = [...normalizedMdxServices, ...normalizedSupabaseServices];
  const categories = Array.from(
    new Set(
      allServices.flatMap((service) => {
        const svCategory = service.data.properties.svCategory;
        if (Array.isArray(svCategory)) {
          return svCategory.filter((cat) => cat && String(cat).trim() !== "");
        } else if (svCategory && String(svCategory).trim() !== "") {
          return [svCategory];
        }
        return [];
      })
    )
  ).map((category) => String(category).toLowerCase().replace(/\s+/g, "-"));
  const paths = categories.flatMap((category) => {
    const categoryServices = allServices.filter((service) => {
      const svCategory = service.data.properties.svCategory;
      let serviceCategories = [];
      if (Array.isArray(svCategory)) {
        serviceCategories = svCategory.map(
          (c) => String(c).toLowerCase().replace(/\s+/g, "-")
        );
      } else if (svCategory) {
        serviceCategories = [String(svCategory).toLowerCase().replace(/\s+/g, "-")];
      }
      return serviceCategories.includes(category);
    });
    const sortedCategoryServices = categoryServices.sort((a, b) => {
      const dateA = a.data.properties.svPublished?.start ? typeof a.data.properties.svPublished.start === "string" ? parseDate(a.data.properties.svPublished.start) : a.data.properties.svPublished.start : /* @__PURE__ */ new Date(0);
      const dateB = b.data.properties.svPublished?.start ? typeof b.data.properties.svPublished.start === "string" ? parseDate(b.data.properties.svPublished.start) : b.data.properties.svPublished.start : /* @__PURE__ */ new Date(0);
      return dateB.getTime() - dateA.getTime();
    });
    return paginate(sortedCategoryServices, {
      pageSize: 9,
      params: { category }
    });
  });
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { category } = Astro2.params;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `Services in ${category} - Page ${page.currentPage} of ${page.lastPage}` }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-white dark:bg-gray-900"> <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> <div class="max-w-screen-md mb-8 lg:mb-16"> <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"> ${category} </h1> </div> <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"> ${page.data.map((service) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "service": service })}`)} </div> </div> </section> `, "head": async ($$result2) => renderTemplate`<fragment> ${renderComponent($$result2, "SeoPaginationHead", $$SeoPaginationHead, { "currentPage": page.currentPage, "lastPage": page.lastPage })} ${renderComponent($$result2, "ItemListJsonLd", $$ItemListJsonLd, { "elements": page.data.map((service, idx) => ({
    position: (page.start || 0) + idx + 1,
    url: `/services/${service.data?.properties?.svCategory?.[0] ? String(service.data.properties.svCategory[0]).toLowerCase().replace(/\s+/g, "-") + "/" : ""}${service.data?.properties?.svSlug || ""}/`,
    name: service.data?.properties?.svTitle || "Service",
    image: service.data?.properties?.svImageURL1 || void 0
  })) })} </fragment>` })}`;
}, "/workspace/src/pages/services/[category]/[...page].astro", void 0);

const $$file = "/workspace/src/pages/services/[category]/[...page].astro";
const $$url = "/services/[category]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
