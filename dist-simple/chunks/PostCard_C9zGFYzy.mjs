import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { $ as $$ResponsiveImage } from './ResponsiveImage_CQAk96ME.mjs';

const $$Astro = createAstro("https://example.com");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post } = Astro2.props;
  const getPostData = (post2) => {
    if (post2.title && post2.slug) {
      return {
        title: post2.title,
        slug: post2.slug,
        imageUrl: post2.imageUrl || post2.coverImage,
        tags: post2.tags || post2.category || [],
        description: post2.description || "",
        published: post2.published || post2.publishedAt,
        source: post2.source || "supabase"
      };
    }
    if (post2.data?.properties) {
      return {
        title: post2.data.properties.bTitle,
        slug: post2.data.properties.bSlug,
        imageUrl: post2.data.properties.bCoverImage,
        tags: post2.data.properties.bTags || [],
        description: post2.data.properties.bDescription || "",
        published: post2.data.properties.bPublished,
        source: post2.source || "legacy"
      };
    }
    return {
      title: post2.title || "Untitled",
      slug: post2.slug || "#",
      imageUrl: post2.imageUrl || "",
      tags: [],
      description: "",
      published: null,
      source: "unknown"
    };
  };
  const getTagValue = (tag) => {
    if (typeof tag === "string") return tag;
    if (tag && typeof tag === "object" && tag.value) return tag.value;
    return String(tag || "");
  };
  const postData = getPostData(post);
  const getPostUrl = (slug, source) => {
    return `/${slug}/`;
  };
  const postUrl = getPostUrl(postData.slug, postData.source);
  const gradients = [
    "from-purple-600 via-blue-600 to-blue-700",
    "from-pink-500 via-red-500 to-yellow-500",
    "from-green-400 via-blue-500 to-purple-600",
    "from-yellow-400 via-red-500 to-pink-500",
    "from-indigo-500 via-purple-500 to-pink-500",
    "from-blue-500 via-teal-500 to-green-500",
    "from-rose-400 via-fuchsia-500 to-indigo-500",
    "from-orange-400 via-red-400 to-pink-400"
  ];
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  return renderTemplate`${maybeRenderHead()}<article class="group relative school-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-2"> <!-- Gradient Overlay Background --> <div${addAttribute(`absolute inset-0 bg-gradient-to-br ${randomGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`, "class")}></div> <!-- Image Container --> <div class="relative overflow-hidden"> <a${addAttribute(postUrl, "href")} class="block"> ${renderComponent($$result, "ResponsiveImage", $$ResponsiveImage, { "class": "w-full h-48 md:h-52 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-105", "src": postData.imageUrl, "alt": postData.title, "preset": "card", "fallbackWidth": 600 })} <!-- Gradient overlay on image --> <div${addAttribute(`absolute inset-0 bg-gradient-to-t ${randomGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`, "class")}></div> </a> </div> <!-- Content --> <div class="p-6"> <!-- Tags --> ${postData.tags && postData.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-4"> ${postData.tags.slice(0, 3).map((tag) => renderTemplate`<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100/80 to-blue-200/80 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-700 dark:text-blue-200 backdrop-blur-sm"> ${getTagValue(tag)} </span>`)} </div>`} <!-- Title --> <h2 class="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"> <a${addAttribute(postUrl, "href")} class="hover:underline"> ${postData.title} </a> </h2> <!-- Description --> ${postData.description && renderTemplate`<p class="mb-4 text-gray-600 dark:text-gray-300 line-clamp-3"> ${postData.description} </p>`} <!-- Meta Info --> <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400"> <span class="flex items-center"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path> </svg> ${postData.published ? new Date(postData.published).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }) : "Draft"} </span> <span class="flex items-center"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path> </svg> ${postData.source} </span> </div> </div> </article>`;
}, "/workspace/src/components/PostCard.astro", void 0);

export { $$PostCard as $ };
