import { b as createAstro, c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BmwawJdT.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_Dq2hjnnk.mjs';
import { $ as $$ProductCard } from '../../chunks/ProductCard_C_hFhREh.mjs';
import { $ as $$ProductCategoryDropdown } from '../../chunks/ProductCategoryDropdown_D_OaUHJP.mjs';
import { a as getProductsDirectFromSupabase } from '../../chunks/supabase-direct_CBgP8j8M.mjs';
import { $ as $$SeoPaginationHead, a as $$ItemListJsonLd } from '../../chunks/ItemListJsonLd_BFrAWTmF.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
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
        pPrice: entry.data.price,
        pCountry: entry.data.country,
        pLocale: entry.data.locale,
        pCategory: entry.data.category,
        pSlug: entry.data.slug,
        pImageURL1: entry.data.imageUrl || "",
        pPublished: { start: entry.data.published },
        pDescription: entry.data.description,
        pVerify: entry.data.verify || "",
        pImageURL2: entry.data.imageUrl2 || "",
        pImageURL3: entry.data.imageUrl3 || "",
        pReview: entry.data.review || "",
        // Affiliate fields from MDX
        pAffiliateCode: entry.data.affiliateCode || "",
        pCommissionRate: entry.data.commissionRate || "",
        pAffiliateProvider: entry.data.affiliateProvider || "",
        pDiscountCode: entry.data.discountCode || "",
        pSpecialOffer: entry.data.specialOffer || "",
        pCTAText: entry.data.ctaText || "",
        pPriority: entry.data.priority || "",
        pExternalRating: entry.data.externalRating || "",
        pSoldCount: entry.data.soldCount || "",
        pOriginalPrice: entry.data.originalPrice || "",
        pIsSponsored: !!entry.data.isSponsored,
        pTargetAudience: entry.data.targetAudience || [],
        // Marketplace URLs from MDX
        pTokopediaURL: entry.data.tokopediaUrl || "",
        pShopeeURL: entry.data.shopeeUrl || "",
        pBlibliURL: entry.data.blibliUrl || "",
        pBukalapakURL: entry.data.bukalapakUrl || "",
        pLazadaURL: entry.data.lazadaUrl || "",
        pURL: entry.data.url || "",
        pOtherURL: entry.data.otherUrl || "",
        pMapsURL: entry.data.mapsUrl || "",
        // Additional product fields from MDX
        pFeatures: entry.data.features || [],
        pName: entry.data.name || "",
        pType: entry.data.type || [],
        pBrand: entry.data.brand || "",
        pModel: entry.data.model || "",
        pWarranty: entry.data.warranty || "",
        pCondition: entry.data.condition || "",
        pWeight: entry.data.weight || "",
        pDimensions: entry.data.dimensions || "",
        pColor: entry.data.color || "",
        pMaterial: entry.data.material || "",
        pAvailability: entry.data.availability || "",
        pStockQuantity: entry.data.stockQuantity || "",
        pMinimumOrder: entry.data.minimumOrder || "",
        pShippingInfo: entry.data.shippingInfo || "",
        pReturnPolicy: entry.data.returnPolicy || "",
        pTags: entry.data.tags || [],
        pSeoTitle: entry.data.seoTitle || "",
        pSeoDescription: entry.data.seoDescription || "",
        pMetaKeywords: entry.data.metaKeywords || ""
      }
    }
  }));
  const normalizedSupabaseProducts = supabaseProducts.filter((product) => product.slug && typeof product.slug === "string").map((product) => ({
    source: "supabase",
    data: {
      properties: {
        pTitle: product.title,
        pPrice: product.price,
        pCountry: product.country || [],
        pLocale: product.locale || [],
        pCategory: Array.isArray(product.category) ? product.category.map((c) => c?.value || c) : product.category ? [product.category] : [],
        pSlug: product.slug,
        pImageURL1: product.imageUrl || product.cover_image || product.image_url || "",
        pPublished: { start: product.published ? new Date(product.published) : /* @__PURE__ */ new Date(0) },
        pDescription: product.description,
        pVerify: product.verify || "",
        pImageURL2: product.imageUrl2 || product.image_url_2 || "",
        pImageURL3: product.imageUrl3 || product.image_url_3 || "",
        pReview: product.review || "",
        // Affiliate fields
        pAffiliateCode: product.affiliateCode || product.affiliate_code || "",
        pCommissionRate: product.commissionRate || product.commission_rate || "",
        pAffiliateProvider: product.affiliateProvider || product.affiliate_provider || "",
        pDiscountCode: product.discountCode || product.discount_code || "",
        pSpecialOffer: product.specialOffer || product.special_offer || "",
        pCTAText: product.ctaText || product.cta_text || "",
        pPriority: product.priority || "",
        pExternalRating: product.externalRating || product.external_rating || "",
        pSoldCount: product.soldCount || product.sold_count || "",
        pOriginalPrice: product.originalPrice || product.original_price || "",
        pIsSponsored: !!product.isSponsored || !!product.is_sponsored,
        pTargetAudience: product.targetAudience || product.target_audience || [],
        // Marketplace URLs
        pTokopediaURL: product.tokopediaUrl || product.tokopedia_url || "",
        pShopeeURL: product.shopeeUrl || product.shopee_url || "",
        pBlibliURL: product.blibliUrl || product.blibli_url || "",
        pBukalapakURL: product.bukalapakUrl || product.bukalapak_url || "",
        pLazadaURL: product.lazadaUrl || product.lazada_url || "",
        pURL: product.url || product.product_url || "",
        pOtherURL: product.otherUrl || product.other_url || "",
        pMapsURL: product.mapsUrl || product.maps_url || "",
        // Additional product fields
        pFeatures: product.features || [],
        pName: product.name || product.product_name || "",
        pType: product.type || [],
        pBrand: product.brand || "",
        pModel: product.model || "",
        pWarranty: product.warranty || "",
        pCondition: product.condition || "",
        pWeight: product.weight || "",
        pDimensions: product.dimensions || "",
        pColor: product.color || "",
        pMaterial: product.material || "",
        pAvailability: product.availability || "",
        pStockQuantity: product.stockQuantity || product.stock_quantity || "",
        pMinimumOrder: product.minimumOrder || product.minimum_order || "",
        pShippingInfo: product.shippingInfo || product.shipping_info || "",
        pReturnPolicy: product.returnPolicy || product.return_policy || "",
        pTags: product.tags || [],
        pSeoTitle: product.seoTitle || product.seo_title || "",
        pSeoDescription: product.seoDescription || product.seo_description || "",
        pMetaKeywords: product.metaKeywords || product.meta_keywords || ""
      }
    }
  }));
  const allProducts = [...normalizedMdxProducts, ...normalizedSupabaseProducts];
  if (allProducts.length === 0) {
    return paginate([], {
      pageSize: 12
    });
  }
  function getPriorityScore(priority, isSponsored) {
    if (isSponsored) return 100;
    const priorityScores = { featured: 90, bestseller: 80, sale: 70, new: 60 };
    return priorityScores[priority?.toLowerCase()] || 0;
  }
  const sortedEntries = allProducts.sort((a, b) => {
    const aP = getPriorityScore(a.data.properties.pPriority, a.data.properties.pIsSponsored);
    const bP = getPriorityScore(b.data.properties.pPriority, b.data.properties.pIsSponsored);
    if (aP !== bP) return bP - aP;
    const dateA = a.data.properties.pPublished?.start || /* @__PURE__ */ new Date(0);
    const dateB = a.data.properties.pPublished?.start || /* @__PURE__ */ new Date(0);
    return dateB.getTime() - dateA.getTime();
  });
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
  return paginate(sortedEntries, {
    pageSize: 12,
    props: { categoryCounts }
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page, categoryCounts } = Astro2.props;
  const sponsoredCount = page.data.filter((p) => p.data.properties.pIsSponsored).length;
  const featuredCount = page.data.filter((p) => p.data.properties.pPriority === "featured").length;
  const productsWithDiscount = page.data.filter((p) => p.data.properties.pOriginalPrice && p.data.properties.pPrice).length;
  return renderTemplate(_a || (_a = __template(["", " <!-- Client-side sorting and filtering --> <script>\n  document.addEventListener('DOMContentLoaded', function() {\n    const sortSelect = document.getElementById('sortSelect');\n    \n    if (sortSelect) {\n      sortSelect.addEventListener('change', function() {\n        console.log('Sort changed to:', this.value);\n      });\n    }\n    \n    if (window.affiliateUtils?.trackView) {\n      window.affiliateUtils.trackView('product-listing', 'category-page');\n    }\n  });\n<\/script>"])), renderComponent($$result, "MainLayout", $$MainLayout, { "title": `Produk Affiliate Terbaik - Halaman ${page.currentPage} dari ${page.lastPage} | kotacom.id`, "description": `Temukan ${page.total} produk terbaik dengan harga terjangkau dan kualitas terpercaya. ${sponsoredCount} produk unggulan dan ${featuredCount} produk featured tersedia.` }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-white dark:bg-gray-900"> <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> <!-- Header Section --> <div class="max-w-screen-md mb-8 lg:mb-16"> <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
🛍️ Produk Affiliate Terbaik
</h1> <p class="text-gray-500 sm:text-xl dark:text-gray-400">
Temukan produk-produk berkualitas dengan harga terbaik. Dapatkan cashback dan diskon eksklusif melalui link affiliate kami.
</p> <!-- Stats Bar --> <div class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"> <div class="bg-blue-50 rounded-lg p-3 text-center"> <div class="text-2xl font-bold text-blue-600">${page.total}</div> <div class="text-sm text-blue-800">Total Produk</div> </div> ${sponsoredCount > 0 && renderTemplate`<div class="bg-green-50 rounded-lg p-3 text-center"> <div class="text-2xl font-bold text-green-600">${sponsoredCount}</div> <div class="text-sm text-green-800">Sponsored</div> </div>`} ${featuredCount > 0 && renderTemplate`<div class="bg-yellow-50 rounded-lg p-3 text-center"> <div class="text-2xl font-bold text-yellow-600">${featuredCount}</div> <div class="text-sm text-yellow-800">Featured</div> </div>`} ${productsWithDiscount > 0 && renderTemplate`<div class="bg-red-50 rounded-lg p-3 text-center"> <div class="text-2xl font-bold text-red-600">${productsWithDiscount}</div> <div class="text-sm text-red-800">Diskon</div> </div>`} </div> </div> <!-- Filter and Sort Section --> <div class="flex flex-col md:flex-row mb-8 gap-4"> <!-- Product Count Display --> <div class="flex-1 flex items-center"> <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
Menampilkan <span class="font-semibold text-gray-900 dark:text-white"> ${page.start + 1}-${page.end + 1} </span> dari <span class="font-semibold text-gray-900 dark:text-white"> ${page.total} </span> produk
</span> </div> <!-- Filters --> <div class="flex flex-col sm:flex-row gap-2"> <!-- Category Filter --> <div class="min-w-[200px]"> ${renderComponent($$result2, "ProductCategoryDropdown", $$ProductCategoryDropdown, { "categoryCounts": categoryCounts })} </div> <!-- Sort Options --> <select id="sortSelect" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"> <option value="priority">Terpopuler</option> <option value="newest">Terbaru</option> <option value="price-low">Harga Terendah</option> <option value="price-high">Harga Tertinggi</option> <option value="rating">Rating Tertinggi</option> </select> </div> </div> <!-- Special Offers Banner --> ${(sponsoredCount > 0 || productsWithDiscount > 0) && renderTemplate`<div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6 mb-8"> <div class="flex items-center justify-between"> <div> <h3 class="text-xl font-bold mb-2">🔥 Penawaran Spesial Hari Ini!</h3> <p class="text-purple-100"> ${productsWithDiscount > 0 && `${productsWithDiscount} produk dengan diskon khusus`} ${sponsoredCount > 0 && productsWithDiscount > 0 && " \u2022 "} ${sponsoredCount > 0 && `${sponsoredCount} produk unggulan pilihan`} </p> </div> <div class="text-4xl">🎉</div> </div> </div>`} <!-- Products Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"> ${page.data.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": product, "placement": "category-listing", "showFullDescription": false })}`)} </div> <!-- No Products Message --> ${page.data.length === 0 && renderTemplate`<div class="text-center py-12"> <div class="text-6xl mb-4">🔍</div> <h3 class="text-xl font-semibold text-gray-900 mb-2">Tidak ada produk ditemukan</h3> <p class="text-gray-600 mb-6">Coba ubah filter pencarian atau kembali ke halaman utama</p> <a href="/products" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
Lihat Semua Produk
</a> </div>`} </div> </section>  ${page.data.length > 0 && renderTemplate`<section class="bg-gray-50 dark:bg-gray-800"> <div class="py-8 px-4 mx-auto max-w-screen-xl"> <div class="flex flex-col sm:flex-row justify-between items-center gap-4"> <!-- Previous Button --> ${page.url.prev ? renderTemplate`<a${addAttribute(page.url.prev, "href")} class="flex items-center justify-center px-6 py-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Sebelumnya
</a>` : renderTemplate`<div></div>`} <!-- Page Info --> <div class="text-sm text-gray-600 dark:text-gray-400">
Halaman ${page.currentPage} dari ${page.lastPage} </div> <!-- Next Button --> ${page.url.next ? renderTemplate`<a${addAttribute(page.url.next, "href")} class="flex items-center justify-center px-6 py-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors">
Selanjutnya
<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a>` : renderTemplate`<div></div>`} </div> </div> </section>`} <section class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white"> <div class="py-12 px-4 mx-auto max-w-screen-xl"> <div class="grid md:grid-cols-3 gap-6 items-center"> <div class="md:col-span-2 text-center md:text-left"> <h2 class="text-2xl md:text-3xl font-bold mb-2">Minta Penawaran atau Diskon untuk Produk Ini</h2> <p class="text-blue-100">Tim kami akan bantu cari harga terbaik atau promosi yang tersedia.</p> </div> <form action="/api/request-quote" method="post" class="bg-white/10 backdrop-blur rounded-lg p-4 flex flex-col sm:flex-row gap-3 md:gap-4"> <input type="text" name="name" placeholder="Nama" class="flex-1 px-4 py-3 rounded-md text-gray-900 border-0 focus:ring-2 focus:ring-blue-300" required> <input type="text" name="product" placeholder="Produk (opsional)" class="flex-1 px-4 py-3 rounded-md text-gray-900 border-0 focus:ring-2 focus:ring-blue-300"> <select name="request" class="px-4 py-3 rounded-md text-gray-900 border-0 focus:ring-2 focus:ring-blue-300"> <option value="quote">Penawaran</option> <option value="discount">Diskon</option> <option value="consult">Konsultasi</option> </select> <button type="submit" class="px-6 py-3 rounded-md font-semibold bg-yellow-400 hover:bg-yellow-500 text-black">Kirim</button> <a href="https://wa.me/62085799520350?text=Halo,%20saya%20butuh%20penawaran/diskon%20produk" class="px-6 py-3 rounded-md font-semibold bg-green-500 hover:bg-green-600 text-white text-center" target="_blank" rel="noopener noreferrer">Chat WA</a> </form> </div> </div> </section> `, "head": async ($$result2) => renderTemplate`<fragment> ${renderComponent($$result2, "SeoPaginationHead", $$SeoPaginationHead, { "currentPage": page.currentPage, "lastPage": page.lastPage })} ${renderComponent($$result2, "ItemListJsonLd", $$ItemListJsonLd, { "elements": page.data.map((product, idx) => ({
    position: (page.start || 0) + idx + 1,
    url: `/products/${product.data?.properties?.pSlug || ""}/`,
    name: product.data?.properties?.pTitle || "Product",
    image: product.data?.properties?.pImageURL1 || void 0
  })) })} </fragment>` }));
}, "/workspace/src/pages/products/[...page].astro", void 0);

const $$file = "/workspace/src/pages/products/[...page].astro";
const $$url = "/products/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
