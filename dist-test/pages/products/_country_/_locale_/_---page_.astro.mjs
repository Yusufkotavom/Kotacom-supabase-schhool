import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../../chunks/_astro_content_DvVCR5uu.mjs';
import { $ as $$MainLayout } from '../../../../chunks/MainLayout_CxUZirbi.mjs';
import { $ as $$ProductCard } from '../../../../chunks/ProductCard_C_hFhREh.mjs';
import { $ as $$PCountryDropdown, a as $$PLocaleDropdown } from '../../../../chunks/PLocaleDropdown_yopeRZaB.mjs';
import { a as getProductsDirectFromSupabase } from '../../../../chunks/supabase-direct_CBgP8j8M.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
async function getStaticPaths({ paginate }) {
  let mdxProducts = [];
  try {
    mdxProducts = await getCollection("productsMdx");
  } catch (e) {
    console.warn("ProductsMdx collection not available:", e.message);
  }
  const supabaseProducts = await getProductsDirectFromSupabase(1e4, "published");
  const normalizedMdxProducts = mdxProducts.map((entry) => ({
    ...entry,
    source: "mdx",
    data: {
      ...entry.data,
      properties: {
        pTitle: entry.data.title,
        pCountry: entry.data.country,
        pSlug: entry.data.slug,
        pImageURL1: entry.data.imageUrl || "",
        pPublished: { start: entry.data.published },
        pLocale: entry.data.locale,
        pPrice: entry.data.price,
        pDescription: entry.data.description,
        pVerify: "",
        pImageURL2: "",
        pImageURL3: "",
        pReview: ""
      }
    }
  }));
  const normalizedSupabaseProducts = supabaseProducts.filter((product) => product.slug && typeof product.slug === "string").map((product) => ({
    source: "supabase",
    data: {
      properties: {
        pTitle: product.title,
        pCountry: product.country || [],
        pSlug: product.slug,
        pImageURL1: product.imageUrl || "",
        pPublished: { start: product.published ? new Date(product.published) : /* @__PURE__ */ new Date(0) },
        pLocale: product.locale || [],
        pPrice: product.price,
        pDescription: product.description,
        pVerify: "",
        pImageURL2: "",
        pImageURL3: "",
        pReview: ""
      }
    }
  }));
  const allProducts = [...normalizedMdxProducts, ...normalizedSupabaseProducts];
  const countryLocaleMap = /* @__PURE__ */ new Map();
  allProducts.forEach((product) => {
    const pCountry = product.data.properties.pCountry;
    const pLocale = product.data.properties.pLocale;
    let countries = [];
    let locales = [];
    if (Array.isArray(pCountry)) {
      countries = pCountry;
    } else if (pCountry) {
      countries = [pCountry];
    }
    if (Array.isArray(pLocale)) {
      locales = pLocale;
    } else if (pLocale) {
      locales = [pLocale];
    }
    countries.forEach((country) => {
      const countrySlug = String(country).toLowerCase().replace(/\s+/g, "-");
      if (!countryLocaleMap.has(countrySlug)) {
        countryLocaleMap.set(countrySlug, /* @__PURE__ */ new Set());
      }
      locales.forEach((locale) => {
        const localeSlug = String(locale).toLowerCase().replace(/\s+/g, "-");
        countryLocaleMap.get(countrySlug).add(localeSlug);
      });
    });
  });
  const paths = [];
  for (const [country, locales] of countryLocaleMap.entries()) {
    for (const locale of locales) {
      const localeProducts = allProducts.filter((product) => {
        const pCountry = product.data.properties.pCountry;
        const pLocale = product.data.properties.pLocale;
        let productCountries = [];
        let productLocales = [];
        if (Array.isArray(pCountry)) {
          productCountries = pCountry.map(
            (c) => String(c).toLowerCase().replace(/\s+/g, "-")
          );
        } else if (pCountry) {
          productCountries = [String(pCountry).toLowerCase().replace(/\s+/g, "-")];
        }
        if (Array.isArray(pLocale)) {
          productLocales = pLocale.map(
            (l) => String(l).toLowerCase().replace(/\s+/g, "-")
          );
        } else if (pLocale) {
          productLocales = [String(pLocale).toLowerCase().replace(/\s+/g, "-")];
        }
        return productCountries.includes(country) && productLocales.includes(locale);
      });
      const localePaginatedPaths = paginate(localeProducts, {
        pageSize: 9,
        // Number of products per page
        params: { country, locale },
        props: { country, locale }
        // Pass country and locale as props
      });
      paths.push(...localePaginatedPaths);
    }
  }
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { country, locale } = Astro2.params;
  const { page } = Astro2.props;
  const readableCountry = country.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const readableLocale = locale.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `Produk di ${readableLocale}, ${readableCountry} - Halaman ${page.currentPage} dari ${page.lastPage}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white dark:bg-gray-900"> <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> <div class="max-w-screen-md mb-8 lg:mb-16"> <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
Produk di ${readableLocale}, ${readableCountry} </h1> <p class="text-gray-500 sm:text-xl dark:text-gray-400">
Daftar produk yang berlokasi di ${readableLocale}, ${readableCountry}.
</p> </div> <div class="flex flex-col md:flex-row mb-5"> <!-- Div 1 (Showing products) --> <div id="1" class="w-full md:w-1/2 p-2 order-3 md:order-1"> <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
Menampilkan <span class="font-semibold text-gray-900 dark:text-white"> ${page.start + 1}-${page.end + 1} </span> dari <span class="font-semibold text-gray-900 dark:text-white"> ${page.total} </span> produk
</span> </div> <!-- Div 2 (Country Dropdown) --> <div id="2" class="w-full md:w-1/4 p-2 order-1 md:order-2"> ${renderComponent($$result2, "PCountryDropdown", $$PCountryDropdown, {})} </div> <!-- Div 3 (Locale Dropdown) --> <div id="3" class="w-full md:w-1/4 p-2 order-2 md:order-3"> ${renderComponent($$result2, "PLocaleDropdown", $$PLocaleDropdown, {})} </div> </div> <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"> ${page.data.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": product })}`)} </div> </div> </section>  <section class="bg-white dark:bg-gray-900"> <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> <div class="flex justify-center items-center"> <!-- Previous Button --> ${page.url.prev ? renderTemplate`<a${addAttribute(page.url.prev, "href")} class="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
Sebelumnya
</a>` : null} ${page.url.next ? renderTemplate`<a${addAttribute(page.url.next, "href")} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
Selanjutnya
</a>` : null} </div> </div> </section> ` })}`;
}, "/workspace/src/pages/products/[country]/[locale]/[...page].astro", void 0);

const $$file = "/workspace/src/pages/products/[country]/[locale]/[...page].astro";
const $$url = "/products/[country]/[locale]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
