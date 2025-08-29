import { b as createAstro, c as createComponent, a as renderTemplate, d as addAttribute, r as renderComponent, m as maybeRenderHead } from './astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { $ as $$ResponsiveImage } from './ResponsiveImage_CQAk96ME.mjs';
import { g as getAffiliateMarketplaces, f as formatAffiliatePrice, c as calculateDiscountPercentage, a as getPriorityBadge, b as getCTAText, i as isSponsored } from './affiliateUtils_DePVnqi_.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://example.com");
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product, placement = "card", showFullDescription = false } = Astro2.props;
  const isMdx = !product?.data?.properties || !product.data.properties.pTitle;
  const properties = isMdx ? {
    pSlug: product.data?.slug || product.slug || "",
    pTitle: product.data?.title || product.title || "",
    pImageURL1: product.data?.imageUrl || product.imageUrl || "",
    pPrice: product.data?.price || product.price || "",
    pOriginalPrice: "",
    pDescription: product.data?.description || product.description || "",
    pVerify: "",
    pCountry: product.data?.country || product.country || [],
    pLocale: product.data?.locale || product.locale || [],
    pCategory: product.data?.category || product.category || [],
    pName: product.data?.name || product.name || "",
    pType: product.data?.type || product.type || [],
    pAffiliateCode: "",
    pCommissionRate: "",
    pDiscountCode: "",
    pSpecialOffer: "",
    pCTAText: "",
    pPriority: "",
    pExternalRating: "",
    pSoldCount: "",
    pIsSponsored: false,
    pTargetAudience: [],
    pTokopediaURL: "",
    pShopeeURL: "",
    pBlibliURL: "",
    pBukalapakURL: "",
    pLazadaURL: ""
  } : product.data.properties;
  const affiliateProduct = {
    title: properties.pTitle,
    slug: properties.pSlug,
    price: properties.pPrice,
    originalPrice: properties.pOriginalPrice,
    imageUrl: properties.pImageURL1,
    affiliateCode: properties.pAffiliateCode,
    commissionRate: properties.pCommissionRate,
    discountCode: properties.pDiscountCode,
    specialOffer: properties.pSpecialOffer,
    ctaText: properties.pCTAText,
    priority: properties.pPriority,
    externalRating: properties.pExternalRating,
    soldCount: properties.pSoldCount,
    isSponsored: properties.pIsSponsored,
    targetAudience: Array.isArray(properties.pTargetAudience) ? properties.pTargetAudience : properties.pTargetAudience ? [properties.pTargetAudience] : [],
    tokopediaUrl: properties.pTokopediaURL,
    shopeeUrl: properties.pShopeeURL,
    blibliUrl: properties.pBlibliURL,
    bukalapakUrl: properties.pBukalapakURL,
    lazadaUrl: properties.pLazadaURL
  };
  const affiliateMarketplaces = getAffiliateMarketplaces(affiliateProduct, placement);
  const primaryMarketplace = affiliateMarketplaces[0];
  const secondaryMarketplaces = affiliateMarketplaces.slice(1, 3);
  const formattedPrice = formatAffiliatePrice(properties.pPrice);
  const formattedOriginalPrice = formatAffiliatePrice(properties.pOriginalPrice);
  const discountPercentage = properties.pOriginalPrice ? calculateDiscountPercentage(properties.pOriginalPrice, properties.pPrice || "0") : 0;
  const priorityBadge = getPriorityBadge(properties.pPriority);
  const sponsored = isSponsored(affiliateProduct);
  const DEFAULT_IMAGE = "https://res.cloudinary.com/dxyjku3eh/image/upload/v1754820661/Tanpa_judul_Presentasi__20250810_170926_0000_vdiibn.png";
  const imageUrl = properties.pImageURL1 || DEFAULT_IMAGE;
  return renderTemplate(_a || (_a = __template(["", '<article class="group relative school-card rounded-xl shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"> <!-- Sponsored Badge --> ', " <!-- Priority Badge --> ", " <!-- Discount Badge --> ", ' <!-- Product Image --> <div class="relative aspect-square"> <a', ' class="block"> ', " <!-- Verify Badge --> ", ' </a> </div> <!-- Product Info --> <div class="p-4"> <!-- Categories --> ', ' <!-- Product Title --> <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"> <a', "> ", ' </a> </h3> <!-- Rating & Sold Count --> <div class="flex items-center justify-between mb-3"> <div class="flex items-center space-x-2"> ', " ", ' </div> </div> <!-- Price Section --> <div class="mb-4"> <div class="flex items-center space-x-2"> ', " ", " </div> <!-- Special Offer --> ", " <!-- Discount Code --> ", " </div> <!-- Description --> ", ' <!-- Store Info --> <div class="text-xs text-gray-500 dark:text-gray-400 mb-3"> ', " ", " </div> <!-- Marketplace Buttons --> ", " <!-- View Details Button --> <a", ` class="mt-3 w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Lihat Detail
</a> </div> </article> <!-- Client-side tracking script --> <script>
  // Make affiliate utils available globally for onclick handlers
  window.affiliateUtils = window.affiliateUtils || {};
  
  window.affiliateUtils.trackClick = function(productSlug, marketplace, placement) {
    // Track the click event
    console.log('Affiliate click:', { productSlug, marketplace, placement });
    
    // Store in localStorage for development
    const events = JSON.parse(localStorage.getItem('affiliate_events') || '[]');
    events.push({
      eventType: 'click',
      productSlug,
      marketplace,
      placement,
      timestamp: new Date().toISOString(),
      url: window.location.href
    });
    localStorage.setItem('affiliate_events', JSON.stringify(events.slice(-100))); // Keep last 100
    
    // Send to Google Analytics if available
    if (typeof gtag !== 'undefined') {
      gtag('event', 'affiliate_click', {
        product_slug: productSlug,
        marketplace: marketplace,
        placement: placement,
        value: 1
      });
    }
  };
  
  // Track product view
  window.affiliateUtils.trackView = function(productSlug, placement) {
    console.log('Affiliate view:', { productSlug, placement });
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'product_view', {
        product_slug: productSlug,
        placement: placement,
        value: 1
      });
    }
  };
  
  // Track view on load
  document.addEventListener('DOMContentLoaded', function() {
    window.affiliateUtils.trackView('{properties.pSlug}', '{placement}');
  });
<\/script>`])), maybeRenderHead(), sponsored && renderTemplate`<div class="absolute top-2 right-2 z-10 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
SPONSORED
</div>`, priorityBadge && !sponsored && renderTemplate`<div${addAttribute(`absolute top-2 right-2 z-10 text-xs font-bold px-2 py-1 rounded-full ${priorityBadge.class}`, "class")}> ${priorityBadge.text} </div>`, discountPercentage > 0 && renderTemplate`<div class="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
-${discountPercentage}%
</div>`, addAttribute(`/products/${properties.pSlug}/`, "href"), renderComponent($$result, "ResponsiveImage", $$ResponsiveImage, { "class": "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300", "src": imageUrl, "alt": properties.pTitle, "preset": "card", "fallbackWidth": 400, "loading": "lazy" }), properties.pVerify && renderTemplate`<div class="absolute bottom-2 left-2 bg-green-500 bg-opacity-90 rounded-md px-2 py-1 flex items-center gap-1"> <svg class="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <p class="text-xs font-medium text-white">${properties.pVerify}</p> </div>`, Array.isArray(properties.pCategory) && properties.pCategory.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1 mb-2"> ${properties.pCategory.slice(0, 2).map((category) => renderTemplate`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"> ${category} </span>`)} </div>`, addAttribute(`/products/${properties.pSlug}/`, "href"), properties.pTitle, properties.pExternalRating && renderTemplate`<div class="flex items-center"> <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> <span class="text-sm text-gray-600 dark:text-gray-300 ml-1">${properties.pExternalRating}</span> </div>`, properties.pSoldCount && renderTemplate`<span class="text-xs text-gray-500 dark:text-gray-400">(${properties.pSoldCount} terjual)</span>`, formattedPrice && renderTemplate`<span class="text-lg font-bold text-green-600">${formattedPrice}</span>`, formattedOriginalPrice && discountPercentage > 0 && renderTemplate`<span class="text-sm text-gray-500 dark:text-gray-400 line-through">${formattedOriginalPrice}</span>`, properties.pSpecialOffer && renderTemplate`<div class="mt-1 text-xs text-red-600 dark:text-red-400 font-medium">
🔥 ${properties.pSpecialOffer} </div>`, properties.pDiscountCode && renderTemplate`<div class="mt-1 text-xs text-blue-600 dark:text-blue-400 font-medium">
💳 Kode: ${properties.pDiscountCode} </div>`, properties.pDescription && showFullDescription && renderTemplate`<p class="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2"> ${properties.pDescription} </p>`, properties.pName && renderTemplate`<span class="font-medium text-gray-700 dark:text-gray-300">${properties.pName}</span>`, properties.pLocale && renderTemplate`<span class="ml-1">
dari ${Array.isArray(properties.pLocale) ? properties.pLocale.join(", ") : properties.pLocale} </span>`, affiliateMarketplaces.length > 0 && renderTemplate`<div class="space-y-2"> <!-- Primary Marketplace (Large Button) --> ${primaryMarketplace && renderTemplate`<a${addAttribute(primaryMarketplace.affiliateUrl, "href")} target="_blank" rel="noopener noreferrer sponsored"${addAttribute(`w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${primaryMarketplace.marketplace === "tokopedia" ? "bg-green-500 hover:bg-green-600 text-white" : primaryMarketplace.marketplace === "shopee" ? "bg-orange-500 hover:bg-orange-600 text-white" : primaryMarketplace.marketplace === "blibli" ? "bg-blue-500 hover:bg-blue-600 text-white" : primaryMarketplace.marketplace === "bukalapak" ? "bg-red-500 hover:bg-red-600 text-white" : "bg-purple-500 hover:bg-purple-600 text-white"}`, "class")}${addAttribute(`window.affiliateUtils?.trackClick('${properties.pSlug}', '${primaryMarketplace.marketplace}', '${placement}')`, "onclick")}> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M7 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM1 2v2h2l3.6 7.59-1.35 2.45a2 2 0 0 0-.25.96 2 2 0 0 0 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21L4.27 2H1Zm16 16a2 2 0 1 1 .001-4.001A2 2 0 0 1 17 18Z"></path> </svg> ${getCTAText(affiliateProduct, primaryMarketplace.marketplace)} </a>`} <!-- Secondary Marketplaces (Small Buttons) --> ${secondaryMarketplaces.length > 0 && renderTemplate`<div class="flex gap-2"> ${secondaryMarketplaces.map((marketplace) => renderTemplate`<a${addAttribute(marketplace.affiliateUrl, "href")} target="_blank" rel="noopener noreferrer sponsored" class="flex-1 flex items-center justify-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"${addAttribute(`Beli di ${marketplace.marketplace}`, "title")}${addAttribute(`window.affiliateUtils?.trackClick('${properties.pSlug}', '${marketplace.marketplace}', '${placement}')`, "onclick")}> <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"> <path d="M7 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM1 2v2h2l3.6 7.59-1.35 2.45a2 2 0 0 0-.25.96 2 2 0 0 0 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21L4.27 2H1Zm16 16a2 2 0 1 1 .001-4.001A2 2 0 0 1 17 18Z"></path> </svg> ${marketplace.marketplace.charAt(0).toUpperCase() + marketplace.marketplace.slice(1)} </a>`)} </div>`} </div>`, addAttribute(`/products/${properties.pSlug}/`, "href"));
}, "/workspace/src/components/ProductCard.astro", void 0);

export { $$ProductCard as $ };
