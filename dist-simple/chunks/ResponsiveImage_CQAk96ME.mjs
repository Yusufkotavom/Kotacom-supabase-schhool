import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, a as renderTemplate } from './astro/server_CJHufnQ6.mjs';
import 'clsx';

const DEFAULT_RESPONSIVE_SIZES = [
  { width: 400 },
  // Mobile
  { width: 768 },
  // Tablet
  { width: 1024 },
  // Desktop
  { width: 1200 }
  // Large desktop (original size)
];
function transformCloudinaryUrl(originalUrl, width, height, quality = 85, format = "auto") {
  if (!originalUrl || !originalUrl.includes("cloudinary.com")) {
    return originalUrl;
  }
  const uploadIndex = originalUrl.indexOf("/upload/");
  if (uploadIndex === -1) return originalUrl;
  const baseUrl = originalUrl.substring(0, uploadIndex + 8);
  const imagePath = originalUrl.substring(uploadIndex + 8);
  const transforms = [];
  {
    transforms.push(`w_${width}`);
    if (height) {
      transforms.push(`h_${height}`, "c_fill", "g_auto");
    }
  }
  {
    transforms.push(`q_${quality}`);
  }
  {
    transforms.push(`f_${format}`);
  }
  if (transforms.length === 0) {
    return originalUrl;
  }
  return `${baseUrl}${transforms.join(",")}/${imagePath}`;
}
function generateSrcSet(originalUrl, sizes = DEFAULT_RESPONSIVE_SIZES, options = {}) {
  const { quality = 85, format = "auto", maintainAspectRatio = true } = options;
  return sizes.map((size) => {
    const height = maintainAspectRatio && size.width ? Math.round(size.width * (800 / 1200)) : size.height;
    const url = transformCloudinaryUrl(originalUrl, size.width, height, quality, format);
    return `${url} ${size.width}w`;
  }).join(", ");
}
function generateSizesAttribute(breakpoints) {
  const defaultBreakpoints = [
    "(max-width: 640px) 100vw",
    "(max-width: 768px) 100vw",
    "(max-width: 1024px) 50vw",
    "33vw"
  ];
  return (breakpoints || defaultBreakpoints).join(", ");
}
function createResponsiveImage(originalUrl, options = {}) {
  const {
    sizes = DEFAULT_RESPONSIVE_SIZES,
    sizesAttribute,
    quality = 85,
    format = "auto",
    fallbackWidth = 1200,
    maintainAspectRatio = true
  } = options;
  const fallbackHeight = maintainAspectRatio ? Math.round(fallbackWidth * (800 / 1200)) : void 0;
  return {
    src: transformCloudinaryUrl(originalUrl, fallbackWidth, fallbackHeight, quality, format),
    srcset: generateSrcSet(originalUrl, sizes, { quality, format, maintainAspectRatio }),
    sizes: generateSizesAttribute(sizesAttribute),
    width: fallbackWidth,
    height: fallbackHeight || 800
  };
}
const RESPONSIVE_PRESETS = {
  // For hero/featured images (full width)
  hero: {
    sizes: [
      { width: 640 },
      // Mobile
      { width: 768 },
      // Tablet
      { width: 1024 },
      // Desktop
      { width: 1200 },
      // Large desktop
      { width: 1600 }
      // Extra large
    ],
    sizesAttribute: [
      "(max-width: 640px) 100vw",
      "(max-width: 768px) 100vw",
      "(max-width: 1024px) 100vw",
      "100vw"
    ]
  },
  // For card images (grid layouts)
  card: {
    sizes: [
      { width: 300 },
      // Mobile (1 column)
      { width: 400 },
      // Tablet (2 columns)
      { width: 600 }
      // Desktop (3 columns)
    ],
    sizesAttribute: [
      "(max-width: 640px) 100vw",
      "(max-width: 768px) 50vw",
      "33vw"
    ]
  },
  // For thumbnail images
  thumbnail: {
    sizes: [
      { width: 150 },
      { width: 200 },
      { width: 300 }
    ],
    sizesAttribute: [
      "(max-width: 768px) 150px",
      "200px"
    ]
  },
  // For profile/avatar images
  avatar: {
    sizes: [
      { width: 64 },
      { width: 128 },
      { width: 200 }
    ],
    sizesAttribute: [
      "(max-width: 768px) 64px",
      "128px"
    ]
  }
};

const $$Astro = createAstro("https://example.com");
const $$ResponsiveImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResponsiveImage;
  const {
    src,
    alt,
    class: className = "",
    preset,
    sizes,
    sizesAttribute,
    quality = 85,
    format = "auto",
    fallbackWidth = 1200,
    maintainAspectRatio = true,
    loading = "lazy",
    fetchpriority = "auto",
    showSkeleton = true,
    ...rest
  } = Astro2.props;
  const config = preset ? RESPONSIVE_PRESETS[preset] : { sizes, sizesAttribute };
  const imageId = `img-${Math.random().toString(36).substr(2, 9)}`;
  const responsiveImage = createResponsiveImage(src, {
    sizes: config.sizes ? [...config.sizes] : sizes,
    sizesAttribute: config.sizesAttribute ? [...config.sizesAttribute] : sizesAttribute,
    quality,
    format,
    fallbackWidth,
    maintainAspectRatio
  });
  return renderTemplate`${maybeRenderHead()}<div class="relative"> ${showSkeleton && renderTemplate`<div${addAttribute(`skeleton-${imageId}`, "id")}${addAttribute(`absolute inset-0 animate-pulse bg-gray-300 dark:bg-gray-700 ${className}`, "class")} role="status" aria-label="Loading image..."> <div class="flex items-center justify-center h-full"> <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18"> <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"></path> </svg> </div> </div>`} <img${addAttribute(imageId, "id")}${addAttribute(responsiveImage.src, "src")}${addAttribute(responsiveImage.srcset, "srcset")}${addAttribute(responsiveImage.sizes, "sizes")}${addAttribute(alt, "alt")}${addAttribute(responsiveImage.width, "width")}${addAttribute(responsiveImage.height, "height")}${addAttribute(loading, "loading")}${addAttribute(fetchpriority, "fetchpriority")}${addAttribute(showSkeleton ? `opacity-0 transition-opacity duration-300 ${className}` : className, "class")}${addAttribute(showSkeleton ? `
      this.style.opacity = '1';
      document.getElementById('skeleton-${imageId}').style.display = 'none';
    ` : void 0, "onload")}${addAttribute(showSkeleton ? `
      document.getElementById('skeleton-${imageId}').innerHTML = '<div class="flex items-center justify-center h-full text-gray-400 dark:text-gray-600"><svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 18"><path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/></svg></div>';
      document.getElementById('skeleton-${imageId}').classList.remove('animate-pulse');
    ` : void 0, "onerror")}${spreadAttributes(rest)}> </div>`;
}, "/workspace/src/components/ResponsiveImage.astro", void 0);

export { $$ResponsiveImage as $ };
