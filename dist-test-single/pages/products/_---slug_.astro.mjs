import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, D as defineScriptVars, d as addAttribute, u as unescapeHTML, f as renderSlot, m as maybeRenderHead } from '../../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_BamDxgSk.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_Ki2xGb0a.mjs';
import { $ as $$ResponsiveImage } from '../../chunks/ResponsiveImage_CQAk96ME.mjs';
import { $ as $$SchemaMarkup } from '../../chunks/SchemaMarkup_CmQj82KU.mjs';
import { C as COMPANY_NAME } from '../../chunks/consts_BQzPd2gi.mjs';
import { g as getAffiliateMarketplaces, b as getCTAText, f as formatAffiliatePrice, c as calculateDiscountPercentage, a as getPriorityBadge, i as isSponsored } from '../../chunks/affiliateUtils_DePVnqi_.mjs';
import { $ as $$RelatedList } from '../../chunks/RelatedList_BIaCAO_J.mjs';
import { a as getProductsDirectFromSupabase } from '../../chunks/supabase-direct_CBgP8j8M.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://example.com");
const $$ProductPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductPage;
  const { properties = {} } = Astro2.props;
  const isNotionProduct = !!(properties && properties.pTitle);
  const productData = isNotionProduct ? {
    title: properties.pTitle,
    category: Array.isArray(properties.pCategory) ? properties.pCategory.filter(Boolean) : properties.pCategory ? [properties.pCategory] : [],
    slug: properties.pSlug,
    imageUrl: properties.pImageURL1,
    published: properties.pPublished,
    country: properties.pCountry,
    locale: properties.pLocale,
    price: properties.pPrice,
    description: properties.pDescription,
    content: properties.pContent,
    // Additional content field
    features: Array.isArray(properties.pFeatures) ? properties.pFeatures.filter(Boolean) : properties.pFeatures ? [properties.pFeatures] : [],
    name: properties.pName,
    type: properties.pType,
    url: properties.pURL,
    otherUrl: properties.pOtherURL,
    tokopediaUrl: properties.pTokopediaURL,
    shopeeUrl: properties.pShopeeURL,
    blibliUrl: properties.pBlibliURL,
    bukalapakUrl: properties.pBukalapakURL,
    lazadaUrl: properties.pLazadaURL,
    mapsUrl: properties.pMapsURL,
    verify: properties.pVerify,
    imageUrl2: properties.pImageURL2,
    imageUrl3: properties.pImageURL3,
    review: properties.pReview,
    // New affiliate fields
    affiliateCode: properties.pAffiliateCode,
    commissionRate: properties.pCommissionRate,
    affiliateProvider: properties.pAffiliateProvider,
    discountCode: properties.pDiscountCode,
    specialOffer: properties.pSpecialOffer,
    ctaText: properties.pCTAText,
    priority: properties.pPriority,
    externalRating: properties.pExternalRating,
    soldCount: properties.pSoldCount,
    originalPrice: properties.pOriginalPrice,
    isSponsored: properties.pIsSponsored,
    targetAudience: Array.isArray(properties.pTargetAudience) ? properties.pTargetAudience.filter(Boolean) : properties.pTargetAudience ? [properties.pTargetAudience] : []
  } : {
    title: properties.title,
    category: Array.isArray(properties.category) ? properties.category.filter(Boolean) : properties.category ? [properties.category] : [],
    slug: properties.slug,
    imageUrl: properties.imageUrl,
    published: { start: properties.published },
    country: properties.country,
    locale: properties.locale,
    price: properties.price,
    description: properties.description,
    content: properties.content,
    // Additional content field for MDX
    features: Array.isArray(properties.features) ? properties.features.filter(Boolean) : properties.features ? [properties.features] : [],
    name: properties.name,
    type: properties.type,
    url: properties.url,
    otherUrl: properties.otherUrl,
    tokopediaUrl: properties.tokopediaUrl,
    shopeeUrl: properties.shopeeUrl,
    blibliUrl: properties.blibliUrl,
    bukalapakUrl: properties.bukalapakUrl,
    lazadaUrl: properties.lazadaUrl,
    mapsUrl: properties.mapsUrl,
    verify: properties.verify,
    imageUrl2: properties.imageUrl2,
    imageUrl3: properties.imageUrl3,
    review: properties.review,
    // New affiliate fields (empty for MDX)
    affiliateCode: "",
    commissionRate: "",
    affiliateProvider: "",
    discountCode: "",
    specialOffer: "",
    ctaText: "",
    priority: "",
    externalRating: "",
    soldCount: "",
    originalPrice: "",
    isSponsored: false,
    targetAudience: []
  };
  const title = productData.title + " - Products";
  const description = productData.description || productData.review || `${productData.title} - Produk berkualitas dari ${COMPANY_NAME}`;
  const DEFAULT_IMAGE = "https://res.cloudinary.com/dxyjku3eh/image/upload/v1754820661/Tanpa_judul_Presentasi__20250810_170926_0000_vdiibn.png";
  const image = productData.imageUrl || DEFAULT_IMAGE;
  const affiliateProduct = {
    title: productData.title,
    slug: productData.slug,
    price: productData.price,
    originalPrice: productData.originalPrice,
    imageUrl: productData.imageUrl,
    affiliateCode: productData.affiliateCode,
    commissionRate: productData.commissionRate,
    discountCode: productData.discountCode,
    specialOffer: productData.specialOffer,
    ctaText: productData.ctaText,
    priority: productData.priority,
    externalRating: productData.externalRating,
    soldCount: productData.soldCount,
    isSponsored: productData.isSponsored,
    targetAudience: productData.targetAudience,
    tokopediaUrl: productData.tokopediaUrl,
    shopeeUrl: productData.shopeeUrl,
    blibliUrl: productData.blibliUrl,
    bukalapakUrl: productData.bukalapakUrl,
    lazadaUrl: productData.lazadaUrl
  };
  const affiliateMarketplaces = getAffiliateMarketplaces(affiliateProduct, "single-page");
  const primaryMarketplace = affiliateMarketplaces[0];
  const whatsappUrl = `https://wa.me/62085799520350?text=${encodeURIComponent("Halo, saya tertarik dengan produk " + productData.title)}`;
  const stickyCta = primaryMarketplace ? { href: primaryMarketplace.affiliateUrl, label: getCTAText(affiliateProduct, primaryMarketplace.marketplace), marketplace: primaryMarketplace.marketplace } : { href: whatsappUrl, label: "Konsultasi via WhatsApp", marketplace: "whatsapp" };
  const formattedPrice = formatAffiliatePrice(productData.price);
  const formattedOriginalPrice = formatAffiliatePrice(productData.originalPrice);
  const discountPercentage = calculateDiscountPercentage(productData.originalPrice || "", productData.price || "");
  const priorityBadge = getPriorityBadge(productData.priority);
  const sponsored = isSponsored(affiliateProduct);
  const publishedDate = productData.published?.start ? productData.published.start instanceof Date ? productData.published.start.toISOString() : new Date(productData.published.start).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: productData.title, url: Astro2.url.toString() }
  ];
  const reviews = productData.review ? [
    {
      author: "Customer Review",
      rating: 5,
      reviewBody: productData.review,
      datePublished: publishedDate.split("T")[0]
    }
  ] : [];
  const fallbackImage = DEFAULT_IMAGE;
  const oneSec = [productData.imageUrl, productData.imageUrl2, productData.imageUrl3].filter((i) => !!i);
  const images = oneSec.length > 0 ? oneSec : [fallbackImage];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", "  ", '<section class="bg-gray-50 dark:bg-gray-800 py-4"> <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> <nav class="flex" aria-label="Breadcrumb"> <ol class="inline-flex items-center space-x-1 md:space-x-3"> <li class="inline-flex items-center"> <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"> <svg class="w-3 h-3 mr-2.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"> <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"></path> </svg>\nHome\n</a> </li> <li> <div class="flex items-center"> <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <a href="/products" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Products</a> </div> </li> <li aria-current="page"> <div class="flex items-center"> <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">', '</span> </div> </li> </ol> </nav> </div> </section>  <section class="bg-white dark:bg-gray-900 relative"> <!-- Sponsored Banner --> ', " <!-- Priority Badge --> ", ' <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start"> <!-- Left Column: Image Gallery --> <div class="order-1 md:order-1"> <!-- Mobile Swipeable Gallery --> <div class="md:hidden relative -mx-4 px-4 mb-6"> ', ' <div class="flex overflow-x-auto gap-3 snap-x snap-mandatory scroll-pl-4 pb-2"> ', ' </div> </div> <!-- Desktop Gallery --> <div class="hidden md:block"> <div class="space-y-3 sm:space-y-4 relative"> ', " ", " ", ' </div> </div> </div> <!-- Right Column: Product Info --> <div class="space-y-6 order-2 md:order-2"> <div> <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4" data-pagefind-meta="title"> ', ' </h1> <!-- Rating & Sold Count --> <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4"> ', " ", ' </div> <!-- Price Section --> <div class="mb-6"> <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"> ', " ", " </div> <!-- Special Offer --> ", " <!-- Discount Code --> ", " ", " </div> ", " ", " </div> ", " ", ' <!-- Enhanced Purchase Options --> <div class="space-y-4"> <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Beli Produk Ini</h3> ', " <!-- WhatsApp Contact --> <a", ' class="flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm sm:text-base"> <svg class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path> </svg> <span class="truncate">Konsultasi Gratis via WhatsApp</span> </a> <!-- Store Info --> ', ' </div> </div> </div> </div> </section>  <section class="bg-gray-50 dark:bg-gray-800"> <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <article class="prose md:prose-lg max-w-none" data-pagefind-body data-pagefind-filter="type:product"> ', " ", " </article> </div> </section> ", " ", ' <div class="h-16 md:hidden"></div>  ', " <script>(function(){", "\n    // Import affiliate utilities for client-side tracking\n    if (typeof window !== 'undefined') {\n      // Track page view\n      if (window.affiliateUtils) {\n        window.affiliateUtils.trackView(productSlug, 'single-page');\n      }\n      \n      // Make affiliate utilities available globally\n      window.affiliateProduct = affiliateProduct;\n    }\n  })();<\/script> ", " "])), renderComponent($$result2, "SchemaMarkup", $$SchemaMarkup, { "type": "product", "title": productData.title, "description": description, "image": image, "breadcrumbs": breadcrumbs, "datePublished": publishedDate, "dateModified": publishedDate, "category": productData.category, "price": productData.price, "reviews": reviews, "data": {
    brand: COMPANY_NAME,
    sku: productData.slug,
    features: productData.features,
    name: productData.name,
    type: productData.type,
    verify: productData.verify,
    // Enhanced schema with affiliate data
    affiliateProvider: productData.affiliateProvider,
    commissionRate: productData.commissionRate,
    specialOffer: productData.specialOffer,
    isSponsored: sponsored,
    externalRating: productData.externalRating,
    soldCount: productData.soldCount,
    originalPrice: productData.originalPrice,
    discountPercentage: discountPercentage > 0 ? discountPercentage : void 0
  } }), maybeRenderHead(), productData.title, sponsored && renderTemplate`<div class="absolute top-0 right-0 z-10 bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-bl-lg">
SPONSORED
</div>`, priorityBadge && !sponsored && renderTemplate`<div${addAttribute(`absolute top-0 right-0 z-10 text-sm font-bold px-4 py-2 rounded-bl-lg ${priorityBadge.class}`, "class")}> ${priorityBadge.text} </div>`, discountPercentage > 0 && renderTemplate`<div class="absolute top-3 left-4 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
-${discountPercentage}%
</div>`, images.map((img, idx) => renderTemplate`<div class="min-w-full snap-center"> ${renderComponent($$result2, "ResponsiveImage", $$ResponsiveImage, { "src": img, "alt": productData.title, "class": "rounded-lg shadow-lg w-full h-40 sm:h-48 object-cover", "loading": idx === 0 ? "eager" : "lazy" })} </div>`), discountPercentage > 0 && renderTemplate`<div class="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 bg-red-500 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full">
-${discountPercentage}%
</div>`, renderComponent($$result2, "ResponsiveImage", $$ResponsiveImage, { "src": images[0], "alt": productData.title, "class": "rounded-lg shadow-lg w-full", "loading": "eager", "fetchpriority": "high", "data-pagefind-meta": "image[src], image_alt[alt]" }), images.length > 1 && renderTemplate`<div class="grid grid-cols-3 gap-2"> ${images.slice(1, 4).map((img) => renderTemplate`${renderComponent($$result2, "ResponsiveImage", $$ResponsiveImage, { "src": img, "alt": productData.title, "class": "rounded-lg shadow w-full h-16 sm:h-20 lg:h-24 object-cover cursor-pointer hover:opacity-75 transition-opacity" })}`)} </div>`, productData.title, productData.externalRating && renderTemplate`<div class="flex items-center"> <svg class="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> <span class="text-base sm:text-lg text-gray-700 dark:text-gray-300 ml-1 font-medium">${productData.externalRating}</span> </div>`, productData.soldCount && renderTemplate`<span class="text-xs sm:text-sm text-gray-500">(${productData.soldCount} terjual)</span>`, formattedPrice && renderTemplate`<span class="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400"> ${formattedPrice} </span>`, formattedOriginalPrice && discountPercentage > 0 && renderTemplate`<span class="text-base sm:text-lg text-gray-500 line-through"> ${formattedOriginalPrice} </span>`, productData.specialOffer && renderTemplate`<div class="mt-2 text-sm text-red-600 font-medium bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg">
🔥 ${productData.specialOffer} </div>`, productData.discountCode && renderTemplate`<div class="mt-2 text-sm text-blue-600 font-medium bg-blue-50 dark:bg-blue-900/20 px-3 py-2 rounded-lg">
💳 Gunakan kode: <span class="font-bold">${productData.discountCode}</span> </div>`, discountPercentage > 0 && renderTemplate`<div class="mt-4"> <div class="flex items-center justify-between mb-1 text-sm text-gray-600 dark:text-gray-300"> <span>Promo Diskon</span> <span>${discountPercentage}%</span> </div> <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"> <div class="h-2 bg-red-500"${addAttribute(`width: ${Math.min(discountPercentage, 100)}%`, "style")}></div> </div> </div>`, productData.description && renderTemplate`<p class="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed"> ${productData.description} </p>`, productData.category && productData.category.length > 0 && renderTemplate`<div> <h3 class="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Categories</h3> <div class="flex flex-wrap gap-2"> ${productData.category.map((cat) => renderTemplate`<span class="bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-2 sm:px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"> ${cat} </span>`)} </div> </div>`, productData.features && productData.features.length > 0 && renderTemplate`<details class="group"> <summary class="flex items-center justify-between cursor-pointer select-none py-2 px-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"> <span class="text-sm font-medium">Fitur</span> <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </summary> <ul class="mt-3 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 px-3"> ${productData.features.map((feature) => renderTemplate`<li>${feature}</li>`)} </ul> </details>`, productData.verify && renderTemplate`<div class="flex items-center space-x-2"> <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-green-700 dark:text-green-300 font-medium">${productData.verify}</span> </div>`, affiliateMarketplaces.length > 0 && renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"> ${affiliateMarketplaces.map((marketplace) => renderTemplate`<a${addAttribute(marketplace.affiliateUrl, "href")} target="_blank" rel="noopener noreferrer sponsored"${addAttribute(`overflow-hidden flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-105 ${marketplace.marketplace === "tokopedia" ? "bg-green-500 hover:bg-green-600 text-white" : marketplace.marketplace === "shopee" ? "bg-orange-500 hover:bg-orange-600 text-white" : marketplace.marketplace === "blibli" ? "bg-blue-500 hover:bg-blue-600 text-white" : marketplace.marketplace === "bukalapak" ? "bg-red-500 hover:bg-red-600 text-white" : "bg-purple-500 hover:bg-purple-600 text-white"}`, "class")}${addAttribute(`window.affiliateUtils?.trackClick('${productData.slug}', '${marketplace.marketplace}', 'single-page')`, "onclick")}> <span class="truncate">${getCTAText(affiliateProduct, marketplace.marketplace)}</span> <svg class="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a>`)} </div>`, addAttribute(`https://wa.me/62085799520350?text=Halo,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(productData.title)}`, "href"), productData.name && renderTemplate`<div class="text-center text-sm text-gray-500 dark:text-gray-400 border-t pt-4"> <p>Produk dari: <span class="font-medium text-gray-700 dark:text-gray-300">${productData.name}</span></p> ${productData.locale && renderTemplate`<p>Lokasi: ${Array.isArray(productData.locale) ? productData.locale.join(", ") : productData.locale}</p>`} </div>`, renderSlot($$result2, $$slots["default"]), productData.category && productData.category.length > 0 && renderTemplate`<span class="hidden" data-pagefind-meta="categories">${productData.category.join(", ")}</span>`, productData.content && renderTemplate`<section class="bg-white dark:bg-gray-900"> <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Informasi Tambahan</h2> ${isNotionProduct ? renderTemplate`<div class="prose md:prose-lg max-w-none text-gray-700 dark:text-gray-300">${unescapeHTML(productData.content)}</div>` : renderTemplate`<div class="prose md:prose-lg max-w-none text-gray-700 dark:text-gray-300"> ${productData.content} </div>`} </div> </section>`, productData.review && renderTemplate`<section class="bg-blue-50 dark:bg-blue-900"> <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="text-center"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Customer Review</h2> <blockquote class="text-xl italic text-gray-700 dark:text-gray-300 mb-6">
"${productData.review}"
</blockquote> <div class="flex justify-center items-center space-x-1"> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> </div> </div> </section>`, stickyCta?.href && renderTemplate`<div class="fixed bottom-0 left-0 right-0 z-30 md:hidden"> <div class="bg-white/90 dark:bg-gray-900/90 backdrop-blur border-t px-4 py-3"> <a${addAttribute(stickyCta.href, "href")} target="_blank" rel="noopener noreferrer sponsored" class="w-full overflow-hidden flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors text-sm"${addAttribute(primaryMarketplace ? `window.affiliateUtils?.trackClick('${productData.slug}', '${stickyCta.marketplace}', 'sticky-bar')` : void 0, "onclick")}> <span class="truncate">${stickyCta.label}</span> </a> </div> </div>`, defineScriptVars({ productSlug: productData.slug, affiliateProduct }), renderComponent($$result2, "RelatedList", $$RelatedList, { "type": "product", "limit": 6 })) })}`;
}, "/workspace/src/layouts/ProductPage.astro", void 0);

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const mdxProducts = await getCollection("productsMdx");
  const supabaseProducts = await getProductsDirectFromSupabase(1e4, "published");
  console.log(`\uFFFD Building static paths for ${supabaseProducts?.length || 0} products (direct from Supabase)`);
  const mdxPaths = mdxProducts.map((product) => ({
    params: { slug: product.data.slug },
    props: { product, source: "mdx" }
  }));
  const supabasePaths = (supabaseProducts || []).filter((product) => product.slug && typeof product.slug === "string").map((product) => ({
    params: { slug: product.slug },
    props: { product, source: "supabase" }
  }));
  return [...mdxPaths, ...supabasePaths];
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { product, source } = Astro2.props;
  let layoutData = {};
  let Content;
  if (source === "mdx") {
    const { Content: C } = await renderEntry(product);
    Content = C;
    layoutData = {
      ...product.data,
      title: product.data.title,
      price: product.data.price,
      content: product.data.content || "",
      country: product.data.country || [],
      locale: product.data.locale || [],
      category: product.data.category || [],
      slug: product.data.slug,
      imageUrl: product.data.imageUrl || "",
      published: { start: product.data.published },
      description: product.data.description || "",
      verify: product.data.verify || "",
      imageUrl2: product.data.imageUrl2 || "",
      imageUrl3: product.data.imageUrl3 || "",
      review: product.data.review || "",
      features: product.data.features || [],
      name: product.data.name || "",
      type: product.data.type || [],
      url: product.data.url || "",
      otherUrl: product.data.otherUrl || "",
      tokopediaUrl: product.data.tokopediaUrl || "",
      shopeeUrl: product.data.shopeeUrl || "",
      blibliUrl: product.data.blibliUrl || "",
      bukalapakUrl: product.data.bukalapakUrl || "",
      lazadaUrl: product.data.lazadaUrl || "",
      mapsUrl: product.data.mapsUrl || "",
      affiliateCode: product.data.affiliateCode || "",
      commissionRate: product.data.commissionRate || "",
      affiliateProvider: product.data.affiliateProvider || "",
      discountCode: product.data.discountCode || "",
      specialOffer: product.data.specialOffer || "",
      ctaText: product.data.ctaText || "",
      priority: product.data.priority || "",
      externalRating: product.data.externalRating || "",
      soldCount: product.data.soldCount || "",
      originalPrice: product.data.originalPrice || "",
      isSponsored: !!product.data.isSponsored,
      targetAudience: product.data.targetAudience || [],
      // Additional fields that might be in MDX
      brand: product.data.brand || "",
      model: product.data.model || "",
      warranty: product.data.warranty || "",
      condition: product.data.condition || "",
      weight: product.data.weight || "",
      dimensions: product.data.dimensions || "",
      color: product.data.color || "",
      material: product.data.material || "",
      availability: product.data.availability || "",
      stockQuantity: product.data.stockQuantity || "",
      minimumOrder: product.data.minimumOrder || "",
      shippingInfo: product.data.shippingInfo || "",
      returnPolicy: product.data.returnPolicy || "",
      tags: product.data.tags || [],
      seoTitle: product.data.seoTitle || "",
      seoDescription: product.data.seoDescription || "",
      metaKeywords: product.data.metaKeywords || ""
    };
  } else if (source === "supabase") {
    Content = void 0;
    layoutData = {
      properties: {
        title: product.title,
        price: product.price,
        content: product.body || product.content || "",
        country: (product.country || []).map((x) => x.value || x),
        locale: (product.locale || []).map((x) => x.value || x),
        category: (product.category || []).map((x) => x.value || x),
        slug: product.slug,
        imageUrl: product.imageUrl || product.cover_image || product.image_url || "",
        published: product.published ? new Date(product.published) : /* @__PURE__ */ new Date(),
        description: product.description || "",
        verify: product.verify || "",
        imageUrl2: product.imageUrl2 || product.image_url_2 || "",
        imageUrl3: product.imageUrl3 || product.image_url_3 || "",
        review: product.review || "",
        features: product.features || [],
        name: product.name || product.product_name || "",
        type: (product.type || []).map((x) => x.value || x),
        url: product.url || product.product_url || "",
        otherUrl: product.otherUrl || product.other_url || "",
        tokopediaUrl: product.tokopediaUrl || product.tokopedia_url || "",
        shopeeUrl: product.shopeeUrl || product.shopee_url || "",
        blibliUrl: product.blibliUrl || product.blibli_url || "",
        bukalapakUrl: product.bukalapakUrl || product.bukalapak_url || "",
        lazadaUrl: product.lazadaUrl || product.lazada_url || "",
        mapsUrl: product.mapsUrl || product.maps_url || "",
        affiliateCode: product.affiliateCode || product.affiliate_code || "",
        commissionRate: product.commissionRate || product.commission_rate || "",
        affiliateProvider: product.affiliateProvider || product.affiliate_provider || "",
        discountCode: product.discountCode || product.discount_code || "",
        specialOffer: product.specialOffer || product.special_offer || "",
        ctaText: product.ctaText || product.cta_text || "",
        priority: product.priority || "",
        externalRating: product.externalRating || product.external_rating || "",
        soldCount: product.soldCount || product.sold_count || "",
        originalPrice: product.originalPrice || product.original_price || "",
        isSponsored: !!product.isSponsored || !!product.is_sponsored,
        targetAudience: product.targetAudience || product.target_audience || [],
        // Additional fields that might be in Supabase
        brand: product.brand || "",
        model: product.model || "",
        warranty: product.warranty || "",
        condition: product.condition || "",
        weight: product.weight || "",
        dimensions: product.dimensions || "",
        color: product.color || "",
        material: product.material || "",
        availability: product.availability || "",
        stockQuantity: product.stockQuantity || product.stock_quantity || "",
        minimumOrder: product.minimumOrder || product.minimum_order || "",
        shippingInfo: product.shippingInfo || product.shipping_info || "",
        returnPolicy: product.returnPolicy || product.return_policy || "",
        tags: product.tags || [],
        seoTitle: product.seoTitle || product.seo_title || "",
        seoDescription: product.seoDescription || product.seo_description || "",
        metaKeywords: product.metaKeywords || product.meta_keywords || ""
      }
    };
  }
  return renderTemplate`${renderComponent($$result, "ProductPage", $$ProductPage, { ...layoutData }, { "default": async ($$result2) => renderTemplate`${Content && renderTemplate`${renderComponent($$result2, "Content", Content, {})}`}` })}`;
}, "/workspace/src/pages/products/[...slug].astro", void 0);

const $$file = "/workspace/src/pages/products/[...slug].astro";
const $$url = "/products/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
