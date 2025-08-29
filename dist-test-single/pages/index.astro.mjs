import { c as createComponent, m as maybeRenderHead, r as renderComponent, g as renderScript, a as renderTemplate, b as createAstro, d as addAttribute } from '../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { $ as $$MainLayout, a as $$PageTransition } from '../chunks/MainLayout_Ki2xGb0a.mjs';
import { $ as $$SchoolLottieSeparator } from '../chunks/SchoolLottieSeparator_asC9N0FI.mjs';
import { $ as $$ServicesHighlight, a as $$SchoolInfo, b as $$SchoolFAQ, c as $$ClientTestimonials } from '../chunks/ClientTestimonials_1XMHUhVY.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_BamDxgSk.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_C9zGFYzy.mjs';
import { g as getPostsDirectFromSupabase, c as convertSupabasePost } from '../chunks/supabase-direct_CBgP8j8M.mjs';
import { t as toSlug } from '../chunks/slug-helpers_BiUprBZy.mjs';
import { $ as $$SchemaMarkup } from '../chunks/SchemaMarkup_CmQj82KU.mjs';
import { d as SITE_DESCRIPTION, S as SITE_TITLE } from '../chunks/consts_BQzPd2gi.mjs';
export { renderers } from '../renderers.mjs';

const $$HomeHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-bg-light dark:section-bg-dark py-8 sm:py-12 lg:py-16 xl:py-20 relative overflow-hidden"> <!-- Lightweight Floating Elements - Only on larger screens --> <div class="floating-elements"> <div class="floating-shape"></div> <div class="floating-shape"></div> <div class="floating-shape"></div> </div> <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"> <!-- Content Section --> <div class="order-2 lg:order-1 text-center lg:text-left"> <!-- Alert Banner - Responsive --> <a href="/services" class="inline-flex justify-between items-center py-2 px-3 sm:px-4 pr-3 sm:pr-4 mb-6 sm:mb-7 text-xs sm:text-sm text-gray-700 bg-gradient-to-r from-yellow-100/80 to-orange-100/80 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full dark:text-gray-300 hover:from-yellow-200/90 hover:to-orange-200/90 dark:hover:from-yellow-800/40 dark:hover:to-orange-800/40 transition-all duration-300 shadow-md backdrop-blur-sm max-w-sm sm:max-w-none mx-auto lg:mx-0" role="alert" data-reveal="fade-right"> <span class="text-xs bg-gradient-to-r from-blue-500/90 to-blue-600/90 rounded-full text-white px-2 sm:px-4 py-1.5 mr-2 sm:mr-3 font-bold shadow-lg whitespace-nowrap">Layanan</span> <span class="text-xs sm:text-sm font-bold hidden sm:inline">Optimalkan bisnis Anda bersama kotacom.id</span> <span class="text-xs sm:text-sm font-bold sm:hidden">Kotacom.id</span> <svg class="ml-2 w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg> </a> <!-- Main Heading - Responsive Typography --> <h1 class="mb-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white" data-reveal="fade-up"> <span class="bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">Solusi IT & Digital Terpadu</span> <br class="hidden sm:block"> <span class="text-gray-800 dark:text-gray-200">untuk Bisnis Anda</span> </h1> <!-- Description - Responsive --> <p class="mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl text-gray-600 lg:text-xl dark:text-gray-300 max-w-2xl mx-auto lg:mx-0" data-reveal="fade-up" data-reveal-delay="200">
Fokus pada pertumbuhan, biarkan kami yang urus website, software, infrastruktur IT, dan promosi digital Anda.
</p> <!-- Buttons - Responsive Layout --> <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start" data-reveal="fade-up" data-reveal-delay="400"> <a href="/services" class="inline-flex justify-center items-center py-3 px-6 sm:px-8 text-sm sm:text-base font-bold text-center text-white rounded-lg school-btn-primary hover:scale-105 transition-all duration-200 shadow-lg w-full sm:w-auto"> <span class="hidden sm:inline">Jelajahi Layanan</span> <span class="sm:hidden">Layanan</span> <svg class="w-4 h-4 ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg> </a> <a href="https://wa.me/085799520350" class="inline-flex justify-center items-center py-3 px-6 sm:px-8 text-sm sm:text-base font-bold text-center text-white bg-gradient-to-r from-green-500/90 to-emerald-500/90 rounded-lg border border-green-400/50 hover:from-green-600/90 hover:to-emerald-600/90 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900 transition-all duration-200 shadow-lg hover:scale-105 w-full sm:w-auto"> <span class="hidden sm:inline">WhatsApp Konsultasi</span> <span class="sm:hidden">WhatsApp</span> <svg class="w-4 h-4 ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg> </a> </div> </div> <!-- Image Section - Responsive --> <div class="relative w-full order-1 lg:order-2" data-reveal="fade-left" data-reveal-delay="300"> <div class="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-lg sm:rounded-xl border border-blue-200/50 dark:border-blue-700/50 shadow-2xl"> <img src="https://res.cloudinary.com/dwxw1h9my/image/upload/f_auto,q_auto,w_auto,dpr_auto/v1753726244/kotacom/website-images/Web_Development_hero.jpg" class="w-full h-full object-cover" alt="Web Development" loading="eager"> <!-- Decorative elements - Responsive sizing --> <div class="absolute top-2 right-2 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400/80 rounded-full animate-ping"></div> <div class="absolute bottom-2 left-2 w-2 h-2 sm:w-3 sm:h-3 bg-red-400/80 rounded-full animate-pulse"></div> </div> </div> </div> </div> <!-- Lottie Separator - Responsive height --> ${renderComponent($$result, "SchoolLottieSeparator", $$SchoolLottieSeparator, { "animation": "school", "height": "h-16 sm:h-20", "className": "mt-6 sm:mt-8" })} </section> ${renderScript($$result, "/workspace/src/components/Homepage/HomeHero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspace/src/components/Homepage/HomeHero.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$MasonryGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MasonryGallery;
  const { className = "" } = Astro2.props;
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9c1?w=400&h=300&fit=crop",
      alt: "Students in computer lab",
      category: "Technology",
      height: "h-48 sm:h-56 md:h-64 lg:h-72"
    },
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=500&fit=crop",
      alt: "Creative learning environment",
      category: "Education",
      height: "h-64 sm:h-72 md:h-80 lg:h-96"
    },
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop",
      alt: "School building",
      category: "Architecture",
      height: "h-56 sm:h-64 md:h-72 lg:h-80"
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=600&fit=crop",
      alt: "Students collaborating",
      category: "Collaboration",
      height: "h-72 sm:h-80 md:h-96 lg:h-[28rem]"
    },
    {
      src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=350&fit=crop",
      alt: "Digital learning tools",
      category: "Digital",
      height: "h-48 sm:h-56 md:h-64 lg:h-72"
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=450&fit=crop",
      alt: "Group study session",
      category: "Study",
      height: "h-56 sm:h-64 md:h-72 lg:h-80"
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop",
      alt: "Modern classroom",
      category: "Classroom",
      height: "h-48 sm:h-56 md:h-64 lg:h-72"
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
      alt: "Science experiment",
      category: "Science",
      height: "h-40 sm:h-48 md:h-56 lg:h-64"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ${className} section-bg-light dark:section-bg-dark relative overflow-hidden`, "class")}> <!-- Lightweight Floating Elements - Only on larger screens --> <div class="floating-elements"> <div class="floating-shape"></div> <div class="floating-shape"></div> <div class="floating-shape"></div> </div> <div class="max-w-7xl mx-auto relative z-10"> <!-- Section Header --> <div class="text-center mb-12 sm:mb-16" data-reveal="fade-up"> <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"> <span class="bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
Our School Gallery
</span> </h2> <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
Discover the vibrant and creative learning environment that makes our school special
</p> </div> <!-- Masonry Gallery - Responsive --> <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4"> ${galleryImages.map((image, index) => renderTemplate`<div${addAttribute(`relative group overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${image.height}`, "class")} data-reveal="fade-up"${addAttribute(index * 100, "data-reveal-delay")}> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy"> <!-- Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"> <div class="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4"> <div class="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-2 text-center"> <p class="text-xs sm:text-sm font-bold text-gray-800 dark:text-white">${image.category}</p> </div> </div> </div> <!-- Decorative elements - Responsive sizing --> <div class="absolute top-2 right-2 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400/80 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping"></div> <div class="absolute bottom-2 left-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400/80 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div> </div>`)} </div> <!-- View More Button --> <div class="text-center mt-8 sm:mt-12" data-reveal="fade-up"> <button class="school-btn-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg hover:scale-105 transition-all duration-200 shadow-lg">
View Full Gallery
</button> </div> </div> </section> ${renderScript($$result, "/workspace/src/components/Homepage/MasonryGallery.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspace/src/components/Homepage/MasonryGallery.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$BCategoryDropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BCategoryDropdown;
  const currentCategoryPromise = (async () => {
    const pathSegments = Astro2.url.pathname.split("/");
    const potentialCategory = pathSegments[2];
    const [mdxPosts2, supabasePosts2] = await Promise.all([
      getCollection("postsMdx").catch(() => []),
      getPostsDirectFromSupabase(1e3, "published").catch(() => [])
    ]);
    const normalizedMdxPosts2 = mdxPosts2.map((entry) => ({
      ...entry,
      source: "mdx",
      data: {
        ...entry.data,
        properties: {
          bTitle: entry.data.title,
          bTags: entry.data.tags,
          bSlug: entry.data.slug,
          bCoverImage: entry.data.coverImage,
          bPublished: { start: entry.data.published },
          bLastUpdated: { start: entry.data.lastUpdated || entry.data.published },
          bDescription: entry.data.description
        }
      }
    }));
    const normalizedSupabasePosts2 = supabasePosts2.map((post) => {
      const converted = convertSupabasePost(post);
      return {
        id: converted.id,
        source: "supabase",
        data: {
          properties: {
            bTitle: converted.title,
            bTags: converted.tags,
            bSlug: converted.slug,
            bCoverImage: converted.coverImage,
            bPublished: { start: converted.published },
            bLastUpdated: { start: converted.updated },
            bDescription: converted.description
          }
        }
      };
    });
    const allPosts2 = [...normalizedMdxPosts2, ...normalizedSupabasePosts2];
    const validCategories = allPosts2.reduce((acc, post) => {
      const tags = Array.isArray(post.data.properties.bTags) ? post.data.properties.bTags.map((t) => t.toLowerCase().replace(/\s+/g, "-")) : [String(post.data.properties.bTags || "").toLowerCase().replace(/\s+/g, "-")];
      tags.forEach((tag) => {
        if (tag && tag !== "") acc.add(tag);
      });
      return acc;
    }, /* @__PURE__ */ new Set());
    return validCategories.has(potentialCategory) ? potentialCategory : null;
  })();
  const currentCategory = await currentCategoryPromise;
  const [mdxPosts, supabasePosts] = await Promise.all([
    getCollection("postsMdx").catch(() => []),
    getPostsDirectFromSupabase(1e3, "published").catch(() => [])
  ]);
  const normalizedMdxPosts = mdxPosts.map((entry) => ({
    ...entry,
    source: "mdx",
    data: {
      ...entry.data,
      properties: {
        bTitle: entry.data.title,
        bTags: entry.data.tags,
        bSlug: entry.data.slug,
        bCoverImage: entry.data.coverImage,
        bPublished: { start: entry.data.published },
        bLastUpdated: { start: entry.data.lastUpdated || entry.data.published },
        bDescription: entry.data.description
      }
    }
  }));
  const normalizedSupabasePosts = supabasePosts.map((post) => {
    const converted = convertSupabasePost(post);
    return {
      id: converted.id,
      source: "supabase",
      data: {
        properties: {
          bTitle: converted.title,
          bTags: converted.tags,
          bSlug: converted.slug,
          bCoverImage: converted.coverImage,
          bPublished: { start: converted.published },
          bLastUpdated: { start: converted.updated },
          bDescription: converted.description
        }
      }
    };
  });
  const allPosts = [...normalizedMdxPosts, ...normalizedSupabasePosts];
  const tagCounts = allPosts.reduce((acc, post) => {
    const tags = Array.isArray(post.data.properties.bTags) ? post.data.properties.bTags : [post.data.properties.bTags];
    tags.forEach((tag) => {
      if (tag && tag.trim() !== "") {
        acc[tag] = (acc[tag] || 0) + 1;
      }
    });
    return acc;
  }, {});
  const uniqueTags = Object.keys(tagCounts).sort();
  return renderTemplate`${maybeRenderHead()}<form class="w-100%"> <select id="categories" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onchange="if (this.value) window.location.href = this.value"> <option value="/"${addAttribute(!currentCategory, "selected")}>
Semua Kategori
</option> ${uniqueTags.map((tag) => {
    const tagSlug = toSlug(tag);
    return renderTemplate`<option${addAttribute(`/category/${tagSlug}/`, "value")}${addAttribute(currentCategory === tagSlug, "selected")}> ${tag} (${tagCounts[tag]})
</option>`;
  })} </select> </form>`;
}, "/workspace/src/components/BCategoryDropdown.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$LatestPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LatestPosts;
  const { limit } = Astro2.props;
  let mdxPosts = [];
  try {
    mdxPosts = await getCollection("postsMdx");
  } catch (_) {
    mdxPosts = [];
  }
  const supabasePosts = await getPostsDirectFromSupabase(1e3);
  const normalizedMdxPosts = mdxPosts.map((entry) => ({
    ...entry,
    source: "mdx",
    data: {
      ...entry.data,
      properties: {
        bTitle: entry.data.title,
        bTags: entry.data.tags,
        bSlug: entry.data.slug,
        bCoverImage: entry.data.coverImage || "",
        bPublished: { start: entry.data.published },
        bLastUpdated: entry.data.lastUpdated ? { start: entry.data.lastUpdated } : { start: entry.data.published },
        bDescription: entry.data.description
      }
    }
  }));
  const normalizedSupabase = (supabasePosts || []).map(convertSupabasePost).map((p) => ({
    source: "supabase",
    data: {
      properties: {
        bTitle: p.title,
        bTags: (p.tags || []).map((x) => x.value || x),
        bSlug: p.slug,
        bCoverImage: p.coverImage || "",
        bPublished: { start: p.published ? new Date(p.published) : /* @__PURE__ */ new Date(0) },
        bLastUpdated: p.lastUpdated ? { start: new Date(p.lastUpdated) } : void 0,
        bDescription: p.description
      }
    }
  }));
  const allPosts = [...normalizedMdxPosts, ...normalizedSupabase];
  const sortedEntries = allPosts.sort((a, b) => {
    const dateA = a.data.properties.bPublished ? a.data.properties.bPublished.start : /* @__PURE__ */ new Date(0);
    const dateB = b.data.properties.bPublished ? b.data.properties.bPublished.start : /* @__PURE__ */ new Date(0);
    return dateB.getTime() - dateA.getTime();
  });
  const limitedEntries = sortedEntries.slice(0, limit);
  return renderTemplate`${maybeRenderHead()}<section class="bg-gradient-to-br from-yellow-50 via-white to-blue-50 dark:from-yellow-900/20 dark:via-gray-900 dark:to-blue-900/20"> <!-- Lottie Separator --> ${renderComponent($$result, "SchoolLottieSeparator", $$SchoolLottieSeparator, { "animation": "books", "height": "h-16", "className": "pt-8" })} <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> <div class="flex flex-col items-start justify-between p-2 space-y-3 md:flex-row md:space-y-0 mb-4"> <div class="max-w-screen-md"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"> <span class="bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">Artikel & Tips Teknologi</span> </h2> <p class="text-gray-600 sm:text-xl dark:text-gray-300">
Insights terbaru tentang teknologi, tips IT, dan panduan digital untuk mengoptimalkan bisnis Anda.
</p> </div> <div id="3" class="w-full md:w-1/4 p-2 order-2 md:order-3"> ${renderComponent($$result, "BCategoryDropdown", $$BCategoryDropdown, {})} </div> </div> <div class="flex flex-row overflow-x-auto hide-scrollbar space-x-4 md:space-x-0 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12"> ${limitedEntries.map((post) => renderTemplate`<div class="w-[70%] sm:w-[50%] md:w-auto flex-shrink-0 md:flex-shrink"> ${renderComponent($$result, "PostCard", $$PostCard, { "post": post })} </div>`)} </div> </div> </section>`;
}, "/workspace/src/components/Homepage/LatestPosts.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const reviews = [
    {
      author: "Ahmad Wijaya",
      rating: 5,
      reviewBody: "Layanan IT support sangat profesional dan responsif. Tim kotacom.id berhasil menyelesaikan masalah server kami dengan cepat.",
      datePublished: "2024-11-15"
    },
    {
      author: "Sari Indah",
      rating: 5,
      reviewBody: "Website toko online yang dibuat sangat bagus dan mudah digunakan. Penjualan online kami meningkat 150%!",
      datePublished: "2024-12-01"
    },
    {
      author: "PT Maju Bersama",
      rating: 5,
      reviewBody: "Sistem informasi yang dikembangkan sangat membantu efisiensi operasional perusahaan. Highly recommended!",
      datePublished: "2024-12-10"
    }
  ];
  const breadcrumbs = [
    { name: "Home", url: "/" }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${SITE_TITLE} - IT Service & Publications Terpercaya`, "description": SITE_DESCRIPTION }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "PageTransition", $$PageTransition, {})} ${renderComponent($$result2, "SchemaMarkup", $$SchemaMarkup, { "type": "homepage", "title": SITE_TITLE, "description": SITE_DESCRIPTION, "breadcrumbs": breadcrumbs, "reviews": reviews, "data": {
    services: [
      "IT Support & Maintenance",
      "Website Development",
      "Software Development",
      "Digital Marketing",
      "Printing Services"
    ]
  } })} ${renderComponent($$result2, "HomeHero", $$HomeHero, {})} ${renderComponent($$result2, "ServicesHighlight", $$ServicesHighlight, {})} ${renderComponent($$result2, "MasonryGallery", $$MasonryGallery, {})} ${renderComponent($$result2, "SchoolInfo", $$SchoolInfo, {})} ${renderComponent($$result2, "SchoolFAQ", $$SchoolFAQ, {})} ${renderComponent($$result2, "ClientTestimonials", $$ClientTestimonials, {})} ${renderComponent($$result2, "LatestPosts", $$LatestPosts, { "limit": 6 })} ` })}`;
}, "/workspace/src/pages/index.astro", void 0);

const $$file = "/workspace/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
