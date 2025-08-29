import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_BamDxgSk.mjs';
import { $ as $$MainLayout } from '../../../chunks/MainLayout_Ki2xGb0a.mjs';
import { $ as $$ProductCard } from '../../../chunks/ProductCard_C_hFhREh.mjs';
import { $ as $$ProductCategoryDropdown } from '../../../chunks/ProductCategoryDropdown_D_OaUHJP.mjs';
import { a as getProductsDirectFromSupabase } from '../../../chunks/supabase-direct_CBgP8j8M.mjs';
import { $ as $$SeoPaginationHead, a as $$ItemListJsonLd } from '../../../chunks/ItemListJsonLd_BFrAWTmF.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
async function getStaticPaths({ paginate }) {
  function getPriorityScore(priority, isSponsored) {
    if (isSponsored) return 100;
    const priorityScores = { featured: 90, bestseller: 80, sale: 70, new: 60 };
    return priorityScores[priority?.toLowerCase()] || 0;
  }
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
        pCategory: entry.data.category,
        pSlug: entry.data.slug,
        pImageURL1: entry.data.imageUrl || "",
        pPublished: { start: entry.data.published },
        pCountry: entry.data.country,
        pLocale: entry.data.locale,
        pPrice: entry.data.price,
        pDescription: entry.data.description,
        pPriority: entry.data.priority || "",
        pIsSponsored: entry.data.isSponsored || false,
        pOriginalPrice: entry.data.originalPrice || "",
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
        pCategory: Array.isArray(product.category) ? product.category.map((c) => c?.value || c) : product.category ? [product.category] : [],
        pSlug: product.slug,
        pImageURL1: product.imageUrl || "",
        pPublished: { start: product.published ? new Date(product.published) : /* @__PURE__ */ new Date(0) },
        pCountry: product.country || [],
        pLocale: product.locale || [],
        pPrice: product.price,
        pDescription: product.description,
        pPriority: product.priority || "",
        pIsSponsored: !!product.isSponsored,
        pOriginalPrice: product.originalPrice || "",
        pVerify: "",
        pImageURL2: "",
        pImageURL3: "",
        pReview: ""
      }
    }
  }));
  const allProducts = [...normalizedMdxProducts, ...normalizedSupabaseProducts];
  const categoryCounts = {};
  allProducts.forEach((product) => {
    const raw = product.data.properties.pCategory;
    const cats = Array.isArray(raw) ? raw : raw ? [raw] : [];
    cats.forEach((c) => {
      const name = typeof c === "string" ? c : c?.value ?? String(c);
      const key = String(name).trim();
      if (key) categoryCounts[key] = (categoryCounts[key] || 0) + 1;
    });
  });
  const categories = Array.from(
    new Set(
      allProducts.flatMap((product) => {
        const pCategory = product.data.properties.pCategory;
        if (Array.isArray(pCategory)) {
          return pCategory.filter((cat) => cat && String(cat).trim() !== "");
        } else if (pCategory && String(pCategory).trim() !== "") {
          return [pCategory];
        }
        return [];
      })
    )
  ).map((category) => String(category).toLowerCase().replace(/\s+/g, "-"));
  const paths = categories.flatMap((category) => {
    const categoryProducts = allProducts.filter((product) => {
      const pCategory = product.data.properties.pCategory;
      let productCategories = [];
      if (Array.isArray(pCategory)) {
        productCategories = pCategory.map((c) => String(c).toLowerCase().replace(/\s+/g, "-"));
      } else if (pCategory) {
        productCategories = [String(pCategory).toLowerCase().replace(/\s+/g, "-")];
      }
      return productCategories.includes(category);
    });
    const sortedProducts = categoryProducts.sort((a, b) => {
      const aPriority = getPriorityScore(a.data.properties.pPriority, a.data.properties.pIsSponsored);
      const bPriority = getPriorityScore(b.data.properties.pPriority, b.data.properties.pIsSponsored);
      if (aPriority !== bPriority) return bPriority - aPriority;
      const dateA = a.data.properties.pPublished?.start ? typeof a.data.properties.pPublished.start === "string" ? parseDate(a.data.properties.pPublished.start) : a.data.properties.pPublished.start : /* @__PURE__ */ new Date(0);
      const dateB = b.data.properties.pPublished?.start ? typeof b.data.properties.pPublished.start === "string" ? parseDate(b.data.properties.pPublished.start) : b.data.properties.pPublished.start : /* @__PURE__ */ new Date(0);
      return dateB.getTime() - dateA.getTime();
    });
    return paginate(sortedProducts, {
      pageSize: 12,
      params: { category },
      props: { category, categoryCounts }
    });
  });
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page, categoryCounts } = Astro2.props;
  const { category } = Astro2.params;
  const displayCategory = category.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const readableCategory = displayCategory;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `Produk ${readableCategory} - Halaman ${page.currentPage} dari ${page.lastPage} | kotacom.id` }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-white dark:bg-gray-900"> <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> <div class="max-w-screen-md mb-8 lg:mb-16"> <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Produk ${readableCategory}</h1> <p class="text-gray-500 sm:text-xl dark:text-gray-400">Kumpulan produk ${readableCategory.toLowerCase()} terbaru</p> </div> <div class="flex flex-col md:flex-row mb-6 gap-4 items-center justify-between"> <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
Menampilkan <span class="font-semibold text-gray-900 dark:text-white">${page.start + 1}-${page.end + 1}</span> dari <span class="font-semibold text-gray-900 dark:text-white">${page.total}</span> produk
</span> <div class="min-w-[220px] w-full md:w-auto"> ${renderComponent($$result2, "ProductCategoryDropdown", $$ProductCategoryDropdown, { "categoryCounts": categoryCounts })} </div> </div> <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"> ${page.data.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": product, "placement": "category-listing", "showFullDescription": false })}`)} </div> </div> </section> <section class="bg-white dark:bg-gray-900"> <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> <nav class="flex justify-center items-center space-x-1"> ${page.url.prev && renderTemplate`<a${addAttribute(page.url.prev, "href")} class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>`} ${Array.from({ length: page.lastPage }, (_, i) => i + 1).map((pageNum) => renderTemplate`<a${addAttribute(pageNum === 1 ? `/products/${category}/` : `/products/${category}/${pageNum}/`, "href")}${addAttribute(`flex items-center justify-center px-3 h-8 leading-tight border ${pageNum === page.currentPage ? "text-blue-600 bg-blue-50 border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}`, "class")}> ${pageNum} </a>`)} ${page.url.next && renderTemplate`<a${addAttribute(page.url.next, "href")} class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>`} </nav> </div> </section> `, "head": async ($$result2) => renderTemplate`<fragment> ${renderComponent($$result2, "SeoPaginationHead", $$SeoPaginationHead, { "currentPage": page.currentPage, "lastPage": page.lastPage })} ${renderComponent($$result2, "ItemListJsonLd", $$ItemListJsonLd, { "elements": page.data.map((product, idx) => ({
    position: (page.start || 0) + idx + 1,
    url: `/products/${product.data?.properties?.pCategory?.[0] ? String(product.data.properties.pCategory[0]).toLowerCase().replace(/\s+/g, "-") + "/" : ""}${product.data?.properties?.pSlug || ""}/`,
    name: product.data?.properties?.pTitle || "Product",
    image: product.data?.properties?.pImageURL1 || void 0
  })) })} </fragment>` })}`;
}, "/workspace/src/pages/products/[category]/[...page].astro", void 0);

const $$file = "/workspace/src/pages/products/[category]/[...page].astro";
const $$url = "/products/[category]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
