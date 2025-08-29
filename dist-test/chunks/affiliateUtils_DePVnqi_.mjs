const AFFILIATE_CONFIG = {
  baseSource: "kotacom-id",
  trackingDomain: "kotacom.id",
  defaultMedium: "affiliate",
  campaigns: {
    productCard: "product-card",
    blogEmbed: "blog-embed",
    homepage: "homepage-featured",
    singlePage: "product-page",
    categoryPage: "category-listing"
  }
};
const MARKETPLACE_AFFILIATE_CONFIG = {
  tokopedia: {
    name: "Tokopedia",
    baseParam: "ta",
    // Tokopedia affiliate parameter
    color: "text-white",
    bgColor: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    icon: "tokopedia",
    commission: "2-5%",
    priority: 1
  },
  shopee: {
    name: "Shopee",
    baseParam: "af",
    // Shopee affiliate parameter
    color: "text-white",
    bgColor: "bg-orange-500",
    hoverColor: "hover:bg-orange-600",
    icon: "shopee",
    commission: "1-3%",
    priority: 2
  },
  blibli: {
    name: "Blibli",
    baseParam: "ref",
    // Blibli affiliate parameter
    color: "text-white",
    bgColor: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
    icon: "blibli",
    commission: "2-4%",
    priority: 3
  },
  bukalapak: {
    name: "Bukalapak",
    baseParam: "from",
    // Bukalapak affiliate parameter
    color: "text-white",
    bgColor: "bg-red-500",
    hoverColor: "hover:bg-red-600",
    icon: "bukalapak",
    commission: "1-2%",
    priority: 4
  },
  lazada: {
    name: "Lazada",
    baseParam: "laz_trackid",
    // Lazada affiliate parameter
    color: "text-white",
    bgColor: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
    icon: "lazada",
    commission: "2-6%",
    priority: 5
  }
};
function generateAffiliateUrl(originalUrl, marketplace, product, placement = "card", customParams = {}) {
  if (!originalUrl) return "";
  try {
    const url = new URL(originalUrl);
    const config = MARKETPLACE_AFFILIATE_CONFIG[marketplace.toLowerCase()];
    if (!config) return originalUrl;
    if (product.affiliateCode) {
      url.searchParams.set(config.baseParam, product.affiliateCode);
    }
    const utmParams = {
      source: AFFILIATE_CONFIG.baseSource,
      medium: customParams.medium || AFFILIATE_CONFIG.defaultMedium,
      campaign: customParams.campaign || AFFILIATE_CONFIG.campaigns[placement] || placement,
      term: customParams.term || product.targetAudience?.join(",") || "",
      content: customParams.content || `${marketplace}-${product.slug}`,
      ...customParams
    };
    Object.entries(utmParams).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(`utm_${key}`, value);
      }
    });
    url.searchParams.set("t", Date.now().toString());
    return url.toString();
  } catch (error) {
    console.warn("Failed to generate affiliate URL:", error);
    return originalUrl;
  }
}
function getAffiliateMarketplaces(product, placement = "card") {
  const marketplaces = [];
  const urlMap = {
    tokopedia: product.tokopediaUrl,
    shopee: product.shopeeUrl,
    blibli: product.blibliUrl,
    bukalapak: product.bukalapakUrl,
    lazada: product.lazadaUrl
  };
  Object.entries(urlMap).forEach(([marketplace, url]) => {
    if (url) {
      const affiliateUrl = generateAffiliateUrl(url, marketplace, product, placement);
      const trackingId = generateTrackingId(product.slug, marketplace, placement);
      marketplaces.push({
        marketplace,
        originalUrl: url,
        affiliateUrl,
        utmParams: extractUTMParams(affiliateUrl),
        trackingId
      });
    }
  });
  return marketplaces.sort((a, b) => {
    const priorityA = MARKETPLACE_AFFILIATE_CONFIG[a.marketplace]?.priority || 999;
    const priorityB = MARKETPLACE_AFFILIATE_CONFIG[b.marketplace]?.priority || 999;
    return priorityA - priorityB;
  });
}
function generateTrackingId(productSlug, marketplace, placement) {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `${productSlug}-${marketplace}-${placement}-${timestamp}-${random}`;
}
function extractUTMParams(url) {
  try {
    const urlObj = new URL(url);
    return {
      source: urlObj.searchParams.get("utm_source") || "",
      medium: urlObj.searchParams.get("utm_medium") || "",
      campaign: urlObj.searchParams.get("utm_campaign") || "",
      term: urlObj.searchParams.get("utm_term") || "",
      content: urlObj.searchParams.get("utm_content") || ""
    };
  } catch (error) {
    return { source: "", medium: "", campaign: "" };
  }
}
function calculateDiscountPercentage(originalPrice, currentPrice) {
  try {
    const original = parseFloat(originalPrice.replace(/[^\d.-]/g, ""));
    const current = parseFloat(currentPrice.replace(/[^\d.-]/g, ""));
    if (original <= current || original === 0) return 0;
    return Math.round((original - current) / original * 100);
  } catch (error) {
    return 0;
  }
}
function formatAffiliatePrice(price) {
  if (price === null || price === void 0) return "";
  const priceStr = String(price).trim();
  if (!priceStr) return "";
  const clean = priceStr.replace(/[^\d.,]/g, "");
  if (/[.,]/.test(clean) && /\d/.test(clean)) {
    return `Rp ${clean}`;
  }
  const numeric = parseInt(clean, 10);
  if (Number.isNaN(numeric)) return priceStr;
  return `Rp ${numeric.toLocaleString("id-ID")}`;
}
function getPriorityBadge(priority) {
  if (!priority) return null;
  const badges = {
    "featured": { text: "Featured", class: "bg-yellow-500 text-white" },
    "sponsored": { text: "Sponsored", class: "bg-blue-500 text-white" },
    "bestseller": { text: "Best Seller", class: "bg-green-500 text-white" },
    "new": { text: "New", class: "bg-purple-500 text-white" },
    "sale": { text: "Sale", class: "bg-red-500 text-white" }
  };
  return badges[priority.toLowerCase()] || null;
}
function isSponsored(product) {
  return product.isSponsored === true || product.priority === "sponsored";
}
function getCTAText(product, marketplace) {
  if (product.ctaText) return product.ctaText;
  const defaultCTAs = {
    tokopedia: "Beli di Tokopedia",
    shopee: "Beli di Shopee",
    blibli: "Beli di Blibli",
    bukalapak: "Beli di Bukalapak",
    lazada: "Beli di Lazada"
  };
  return defaultCTAs[marketplace.toLowerCase()] || "Beli Sekarang";
}

export { getPriorityBadge as a, getCTAText as b, calculateDiscountPercentage as c, formatAffiliatePrice as f, getAffiliateMarketplaces as g, isSponsored as i };
