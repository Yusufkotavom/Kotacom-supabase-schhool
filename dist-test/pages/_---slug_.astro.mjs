import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, f as renderSlot, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_DvVCR5uu.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_CxUZirbi.mjs';
import { $ as $$ResponsiveImage } from '../chunks/ResponsiveImage_CQAk96ME.mjs';
import { $ as $$SchemaMarkup } from '../chunks/SchemaMarkup_CmQj82KU.mjs';
import { $ as $$RelatedList } from '../chunks/RelatedList_O416kMU6.mjs';
import { C as COMPANY_NAME } from '../chunks/consts_BQzPd2gi.mjs';
/* empty css                                  */
import { t as toSlug } from '../chunks/slug-helpers_BiUprBZy.mjs';
import { $ as $$WhatsAppButton } from '../chunks/WhatsAppButton_BTurfMmZ.mjs';
import { l as logger, g as getPostsDirectFromSupabase } from '../chunks/supabase-direct_CBgP8j8M.mjs';
import { g as getPostsFromPayload, c as convertPayloadPost } from '../chunks/payload-api_CAscSAW8.mjs';
import { marked } from 'marked';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://example.com");
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const props = Astro2.props;
  const processTags = (tags) => {
    if (!tags) return [];
    if (Array.isArray(tags)) {
      return tags.map((tag) => {
        if (typeof tag === "string") return tag;
        if (tag && typeof tag === "object" && tag.value) return tag.value;
        return String(tag);
      }).filter(Boolean);
    }
    return [];
  };
  let postData;
  if (props.title && !props.properties) {
    postData = {
      title: props.title,
      description: props.description || "",
      image: props.imageUrl || props.coverImage || props.image || "https://res.cloudinary.com/dxyjku3eh/image/upload/v1754820661/Tanpa_judul_Presentasi__20250810_170926_0000_vdiibn.png",
      published: props.published || props.publishedAt || /* @__PURE__ */ new Date(),
      updated: props.updated || props.lastUpdated || props.published || props.publishedAt || /* @__PURE__ */ new Date(),
      tags: [...processTags(props.tags), ...processTags(props.category)],
      author: props.author || COMPANY_NAME,
      source: props.source || "payload",
      slug: props.slug,
      content: props.content || props.body
    };
  } else if (props.source === "directus" || props.source === "sanity") {
    postData = {
      title: props.title || "Untitled",
      description: props.description || "",
      image: props.image || "https://res.cloudinary.com/dxyjku3eh/image/upload/v1754820661/Tanpa_judul_Presentasi__20250810_170926_0000_vdiibn.png",
      published: props.published || /* @__PURE__ */ new Date(),
      updated: props.updated || /* @__PURE__ */ new Date(),
      tags: processTags(props.tags),
      author: props.author || COMPANY_NAME,
      source: props.source || "sanity"
    };
  } else if (props.properties) {
    const properties = props.properties;
    postData = {
      title: properties.bTitle || properties.title || "Untitled",
      description: properties.bDescription || properties.description || "",
      image: properties.bCoverImage || properties.coverImage || "https://res.cloudinary.com/dxyjku3eh/image/upload/v1754820661/Tanpa_judul_Presentasi__20250810_170926_0000_vdiibn.png",
      published: properties.bPublished?.start || properties.published || /* @__PURE__ */ new Date(),
      updated: properties.bLastUpdated?.start || properties.lastUpdated || /* @__PURE__ */ new Date(),
      tags: Array.isArray(properties.bTags) ? properties.bTags.filter(Boolean) : properties.bTags ? [properties.bTags] : [],
      author: COMPANY_NAME,
      source: props.source || "notion",
      slug: properties.bSlug || properties.slug
    };
  } else {
    postData = {
      title: props.title || "Untitled",
      description: props.description || "",
      image: props.image || "https://res.cloudinary.com/dxyjku3eh/image/upload/v1754820661/Tanpa_judul_Presentasi__20250810_170926_0000_vdiibn.png",
      published: props.published || /* @__PURE__ */ new Date(),
      updated: props.updated || /* @__PURE__ */ new Date(),
      tags: processTags(props.tags),
      author: props.author || COMPANY_NAME,
      source: props.source || "unknown"
    };
  }
  const title = postData.title;
  const description = postData.description || `Artikel tentang ${postData.title} dari ${COMPANY_NAME}`;
  const image = postData.image;
  const publishedDate = postData.published instanceof Date ? postData.published.toISOString() : new Date(postData.published).toISOString();
  const modifiedDate = postData.updated instanceof Date ? postData.updated.toISOString() : new Date(postData.updated).toISOString();
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: postData.title, url: Astro2.url.toString() }
  ];
  props.wordCount ? Math.ceil(props.wordCount / 200) : null;
  const popularCategories = Array.isArray(Astro2.props.popularCategories) ? Astro2.props.popularCategories : [];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description, "image": image, "type": "article", "published": publishedDate, "modified": modifiedDate, "section": postData.tags?.[0], "tags": postData.tags }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", "  ", '<section class="bg-white dark:bg-gray-900"> <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"> <div class="space-y-4"> <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white" data-pagefind-meta="title">', "</h1> ", ' <div class="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400"> <time', ' class="inline-flex items-center gap-1"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg> ', " </time> ", " </div> ", ' </div> </div> </section>  <section class="bg-gray-50 dark:bg-gray-800"> <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"> <!-- Article dengan WordPress styling otomatis --> <article id="post-article"', " data-pagefind-body", "> ", " ", ' </article> <!-- Sidebar CTA + Popular Categories --> <aside class="lg:col-span-1 space-y-6 lg:sticky lg:top-24"> <div class="p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700"> <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Butuh Bantuan?</h2> <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Konsultasi gratis untuk kebutuhan website, software, atau layanan IT Anda.</p> ', " </div> ", ' <div class="p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700"> <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-2">Layanan Populer</h3> <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"> <li><a class="hover:underline" href="/services/website-software-development-terbaik/">Website & Software Development</a></li> <li><a class="hover:underline" href="/services/it-support/">IT Support & Maintenance</a></li> </ul> </div> </aside> </div> </div> </section>  <section class="bg-white dark:bg-gray-900"> <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-10"> <div class="flex flex-col md:flex-row items-center justify-between gap-4 p-5 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700"> <div> <h2 class="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Konsultasi Gratis dengan Tim Kami</h2> <p class="text-sm text-gray-600 dark:text-gray-300">Diskusikan kebutuhan Anda dan dapatkan solusi terbaik untuk bisnis.</p> </div> ', " </div> </div> </section>  ", " <script>\n		(function(){\n			function slugify(text){\n				return (text||'').toString().toLowerCase().trim()\n					.replace(/[^\\w\\s-]/g,'')\n					.replace(/\\s+/g,'-');\n			}\n			document.addEventListener('DOMContentLoaded', function(){\n				const article = document.getElementById('post-article');\n				if(!article) return;\n				const headers = Array.from(article.querySelectorAll('h2'));\n				if(headers.length === 0) return;\n				// Build TOC container\n				const toc = document.createElement('div');\n				toc.className = 'my-4 p-3 bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700';\n				const title = document.createElement('div');\n				title.textContent = 'Daftar Isi';\n				title.className = 'text-xs font-semibold text-gray-900 dark:text-white mb-2';\n				const ul = document.createElement('ul');\n				ul.className = 'space-y-1 text-xs leading-tight text-gray-700 dark:text-gray-300';\n				headers.forEach((h) => {\n					const text = h.textContent || '';\n					let id = h.getAttribute('id');\n					if(!id){ id = slugify(text); h.setAttribute('id', id); }\n					const li = document.createElement('li');\n					li.className = 'list-none';\n					const a = document.createElement('a');\n					a.href = `#${id}`;\n					a.textContent = text;\n					a.className = 'text-xs text-gray-700 hover:underline dark:text-gray-300';\n					li.appendChild(a);\n					ul.appendChild(li);\n				});\n				toc.appendChild(title);\n				toc.appendChild(ul);\n				// Insert after first paragraph\n				const firstP = article.querySelector('p');\n				if(firstP && firstP.parentNode){\n					firstP.parentNode.insertBefore(toc, firstP.nextSibling);\n				}\n			});\n		})();\n	<\/script> "], [" ", "  ", '<section class="bg-white dark:bg-gray-900"> <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"> <div class="space-y-4"> <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white" data-pagefind-meta="title">', "</h1> ", ' <div class="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400"> <time', ' class="inline-flex items-center gap-1"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg> ', " </time> ", " </div> ", ' </div> </div> </section>  <section class="bg-gray-50 dark:bg-gray-800"> <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"> <!-- Article dengan WordPress styling otomatis --> <article id="post-article"', " data-pagefind-body", "> ", " ", ' </article> <!-- Sidebar CTA + Popular Categories --> <aside class="lg:col-span-1 space-y-6 lg:sticky lg:top-24"> <div class="p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700"> <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Butuh Bantuan?</h2> <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Konsultasi gratis untuk kebutuhan website, software, atau layanan IT Anda.</p> ', " </div> ", ' <div class="p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700"> <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-2">Layanan Populer</h3> <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"> <li><a class="hover:underline" href="/services/website-software-development-terbaik/">Website & Software Development</a></li> <li><a class="hover:underline" href="/services/it-support/">IT Support & Maintenance</a></li> </ul> </div> </aside> </div> </div> </section>  <section class="bg-white dark:bg-gray-900"> <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-10"> <div class="flex flex-col md:flex-row items-center justify-between gap-4 p-5 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700"> <div> <h2 class="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Konsultasi Gratis dengan Tim Kami</h2> <p class="text-sm text-gray-600 dark:text-gray-300">Diskusikan kebutuhan Anda dan dapatkan solusi terbaik untuk bisnis.</p> </div> ', " </div> </div> </section>  ", " <script>\n		(function(){\n			function slugify(text){\n				return (text||'').toString().toLowerCase().trim()\n					.replace(/[^\\\\w\\\\s-]/g,'')\n					.replace(/\\\\s+/g,'-');\n			}\n			document.addEventListener('DOMContentLoaded', function(){\n				const article = document.getElementById('post-article');\n				if(!article) return;\n				const headers = Array.from(article.querySelectorAll('h2'));\n				if(headers.length === 0) return;\n				// Build TOC container\n				const toc = document.createElement('div');\n				toc.className = 'my-4 p-3 bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700';\n				const title = document.createElement('div');\n				title.textContent = 'Daftar Isi';\n				title.className = 'text-xs font-semibold text-gray-900 dark:text-white mb-2';\n				const ul = document.createElement('ul');\n				ul.className = 'space-y-1 text-xs leading-tight text-gray-700 dark:text-gray-300';\n				headers.forEach((h) => {\n					const text = h.textContent || '';\n					let id = h.getAttribute('id');\n					if(!id){ id = slugify(text); h.setAttribute('id', id); }\n					const li = document.createElement('li');\n					li.className = 'list-none';\n					const a = document.createElement('a');\n					a.href = \\`#\\${id}\\`;\n					a.textContent = text;\n					a.className = 'text-xs text-gray-700 hover:underline dark:text-gray-300';\n					li.appendChild(a);\n					ul.appendChild(li);\n				});\n				toc.appendChild(title);\n				toc.appendChild(ul);\n				// Insert after first paragraph\n				const firstP = article.querySelector('p');\n				if(firstP && firstP.parentNode){\n					firstP.parentNode.insertBefore(toc, firstP.nextSibling);\n				}\n			});\n		})();\n	<\/script> "])), renderComponent($$result2, "SchemaMarkup", $$SchemaMarkup, { "type": "article", "title": postData.title, "description": description, "image": image, "breadcrumbs": breadcrumbs, "author": postData.author, "datePublished": publishedDate, "dateModified": modifiedDate, "tags": postData.tags, "category": postData.tags, "data": { wordCount: props.wordCount } }), maybeRenderHead(), postData.title, postData.description && renderTemplate`<p class="text-gray-600 dark:text-gray-300 text-base sm:text-lg">${postData.description}</p>`, addAttribute(publishedDate, "datetime"), new Date(publishedDate).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" }), postData.tags?.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2"> ${postData.tags.slice(0, 4).map((tag) => renderTemplate`<a${addAttribute(`/category/${toSlug(tag)}/`, "href")} class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">${tag}</a>`)} </div>`, image && renderTemplate`<div class="mt-4"> ${renderComponent($$result2, "ResponsiveImage", $$ResponsiveImage, { "src": image, "alt": postData.title, "class": "rounded-lg w-full object-cover", "loading": "eager", "fetchpriority": "high", "data-pagefind-meta": "image[src], image_alt[alt]" })} </div>`, addAttribute(`lg:col-span-2 prose md:prose-lg max-w-none ${props.source === "supabase" || props.source === "wordpress" ? "wordpress-content" : ""}`, "class"), addAttribute(props.source === "page" ? void 0 : "type:post", "data-pagefind-filter"), renderSlot($$result2, $$slots["default"]), postData.tags?.length > 0 && renderTemplate`<span class="hidden" data-pagefind-meta="categories">${postData.tags.join(", ")}</span>`, renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "placement": "post_sidebar_cta", "whatsappMessage": `Halo! Saya membaca artikel ${postData.title}. Bisa konsultasi tentang layanan yang sesuai? {url}`, "className": "w-full justify-center" }), popularCategories.length > 0 && renderTemplate`<div class="p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700"> <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-2">Kategori Populer</h3> <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"> ${popularCategories.map((c) => renderTemplate`<li class="flex items-center justify-between"> <a class="hover:underline"${addAttribute(`/category/${toSlug(c.name)}/`, "href")}>${c.name}</a> <span class="text-xs text-gray-500 dark:text-gray-400">${c.count}</span> </li>`)} </ul> </div>`, renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "placement": "post_bottom_cta", "whatsappMessage": `Halo! Saya tertarik konsultasi setelah baca artikel ${postData.title}. {url}`, "className": "px-5 py-3" }), renderComponent($$result2, "RelatedList", $$RelatedList, { "type": "post", "limit": 5 })) })}`;
}, "/workspace/src/layouts/PostLayout.astro", void 0);

function extractTextFromBlock(block) {
  if (!block) return "";
  if (typeof block === "string") {
    return block;
  }
  if (block.root && block.root.children) {
    let text = "";
    try {
      block.root.children.forEach((child) => {
        if (child.type === "paragraph") {
          text += extractTextFromBlock(child);
        } else if (child.type === "heading") {
          text += extractTextFromBlock(child);
        } else if (child.type === "text") {
          text += child.text || "";
        }
      });
    } catch (error) {
      logger.warn("⚠️ Error extracting text from Lexical block:", error);
    }
    return text;
  }
  if (block.children && Array.isArray(block.children)) {
    let text = "";
    block.children.forEach((child) => {
      if (child.type === "text") {
        text += child.text || "";
      } else if (child.type === "link") {
        const linkText = extractTextFromBlock(child);
        const url = child.fields?.url || child.url || "#";
        text += `<a href="${url}" target="_blank">${linkText}</a>`;
      } else if (child.type === "linebreak") {
        text += "<br>";
      } else if (child.children) {
        text += extractTextFromBlock(child);
      }
    });
    return text;
  }
  return "";
}
function escapeHtml(text) {
  if (typeof text !== "string") return "";
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function getMediaUrl(media) {
  if (!media) return null;
  if (typeof media === "string") {
    logger.warn("⚠️ MediaBlock: Received media ID instead of full media object:", media);
    return null;
  }
  let extractedUrl = null;
  if (typeof media === "object" && media.sizes) {
    const sizePreference = ["medium", "small", "large", "xlarge"];
    for (const size of sizePreference) {
      if (media.sizes[size]?.url) {
        extractedUrl = media.sizes[size].url;
        break;
      }
    }
  }
  if (!extractedUrl && typeof media === "object" && media.url) {
    extractedUrl = media.url;
  }
  if (!extractedUrl) {
    logger.warn("⚠️ MediaBlock: Unable to extract URL from media object:", media);
    return null;
  }
  if (extractedUrl.startsWith("/")) {
    const payloadUrl = "http://localhost:3000";
    const absoluteUrl = `${payloadUrl}${extractedUrl}`;
    logger.debug(`🔗 Converting relative URL "${extractedUrl}" to absolute: "${absoluteUrl}"`);
    return absoluteUrl;
  }
  logger.debug(`✅ Using absolute URL: "${extractedUrl}"`);
  return extractedUrl;
}
function renderCustomBlock(block) {
  const blockType = block.fields?.blockType || block.blockType;
  if (!block || !blockType) return "";
  const blockName = block.fields?.blockName || block.blockName || "";
  try {
    switch (blockType) {
      case "banner":
        const bannerContent = extractTextFromBlock(block.fields?.content?.root || block.fields?.content);
        const style = block.fields?.style || "info";
        const alertStyles = {
          info: "text-blue-800 border-blue-300 bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800",
          success: "text-green-800 border-green-300 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800",
          warning: "text-yellow-800 border-yellow-300 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800",
          error: "text-red-800 border-red-300 bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
        };
        const bannerHtml = `
          <div class="flex p-4 mb-4 text-sm border rounded-lg ${alertStyles[style]}" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <div>
              ${blockName ? `<div class="font-medium mb-2">${blockName}</div>` : ""}
              <div>${bannerContent}</div>
            </div>
          </div>`;
        return bannerHtml;
      case "code":
        const code = block.fields?.code || "";
        const language = block.fields?.language || "typescript";
        const codeHtml = `
          <div class="my-6">
            ${blockName ? `
              <div class="flex items-center justify-between bg-gray-50 px-4 py-2 border-b border-gray-200 rounded-t-lg">
                <h4 class="text-sm font-medium text-gray-700">${blockName}</h4>
                <span class="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">${language}</span>
              </div>
            ` : ""}
            <div class="relative bg-gray-900 rounded-lg ${blockName ? "rounded-t-none" : ""}">
              <div class="flex items-center justify-between px-4 py-2 border-b border-gray-600">
                <div class="flex space-x-1">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <button class="text-gray-400 hover:text-white text-sm" onclick="navigator.clipboard.writeText(\`${escapeHtml(code).replace(/`/g, "\\`")}\`)">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </button>
              </div>
              <pre class="p-4 overflow-x-auto"><code class="language-${language} text-gray-300 text-sm leading-relaxed">${escapeHtml(code)}</code></pre>
            </div>
          </div>`;
        return codeHtml;
      case "mediaBlock":
        const media = block.fields?.media;
        logger.mediaDebug("MediaBlock Debug:", {
          blockType,
          blockName
        });
        if (!media) {
          logger.warn("⚠️ MediaBlock: No media object found in block.fields.media");
          return "";
        }
        const mediaUrl = getMediaUrl(media);
        if (!mediaUrl) {
          logger.warn("⚠️ MediaBlock: Unable to extract media URL from object:", media);
          return "";
        }
        logger.success("MediaBlock: Successfully extracted media URL:", mediaUrl);
        const altText = media.alt || `Media ${media.id || "image"}`;
        const caption = media.caption;
        const filename = media.filename || "";
        const mediaHtml = `
          <div class="prose">
            ${blockName ? `<h5 class="text-lg font-semibold mb-3">${blockName}</h5>` : ""}
            <div class="media-container">
              <img 
                src="${mediaUrl}" 
                alt="${altText}"
                class="w-full h-auto rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                loading="lazy"
                onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300/cccccc/666666?text=Media+Not+Found';"
                onload=""
              />
              ${caption ? `
                <div class="mt-3 text-sm text-gray-600 text-center italic">
                  ${typeof caption === "string" ? caption : caption.root ? extractTextFromBlock(caption.root) : ""}
                </div>
              ` : ""}
              ${filename ? `
                <div class="mt-1 text-xs text-gray-500 text-center">
                  ${filename}
                </div>
              ` : ""}
            </div>
          </div>`;
        return mediaHtml;
      case "gallery":
        const galleryTitle = block.fields?.title || "";
        const galleryDescription = block.fields?.description || "";
        const images = block.fields?.images || [];
        const layout = block.fields?.layout || "grid";
        const columns = block.fields?.columns || "3";
        const spacing = block.fields?.spacing || "normal";
        const showCaptions = block.fields?.showCaptions !== false;
        if (!images || images.length === 0) {
          logger.warn("⚠️ Gallery: No images found");
          return "";
        }
        const spacingClasses = {
          tight: "gap-2",
          normal: "gap-4",
          loose: "gap-8"
        };
        const columnClasses = {
          "2": "grid-cols-1 md:grid-cols-2",
          "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
          "5": "grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
        };
        const galleryId = `gallery-${Math.random().toString(36).substr(2, 9)}`;
        const getLayoutClass = () => {
          switch (layout) {
            case "masonry":
              return `columns-1 md:columns-2 lg:columns-${columns} ${spacingClasses[spacing]}`;
            case "carousel":
              return `flex overflow-x-auto ${spacingClasses[spacing]} snap-x snap-mandatory pb-4 scrollbar-hide`;
            case "slideshow":
              return "relative w-full";
            default:
              return `grid ${columnClasses[columns]} ${spacingClasses[spacing]}`;
          }
        };
        const galleryImages = images.map((item, index) => {
          if (!item.image) return "";
          const imageUrl = getMediaUrl(item.image);
          if (!imageUrl) return "";
          const imageAlt = item.alt || item.image.alt || `Gallery image ${index + 1}`;
          const imageCaption = item.caption || "";
          if (layout === "slideshow") {
            return `
              <div class="carousel-item duration-700 ease-in-out ${index === 0 ? "block" : "hidden"}" data-carousel-item="${index === 0 ? "active" : ""}">
                <img src="${imageUrl}" 
                     alt="${imageAlt}"
                     class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg"
                     loading="lazy">
                ${showCaptions && imageCaption ? `
                  <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 px-4 py-2 rounded-lg">
                    <p class="text-sm text-gray-800 text-center">${imageCaption}</p>
                  </div>
                ` : ""}
              </div>
            `;
          }
          const imageClass = layout === "carousel" ? "flex-none w-80 snap-start" : "w-full";
          return `
            <div class="${imageClass} group">
              <div class="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="${imageUrl}" 
                  alt="${imageAlt}"
                  class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                ${layout !== "slideshow" ? `
                  <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                      </svg>
                    </div>
                  </div>
                ` : ""}
              </div>
              ${showCaptions && imageCaption && layout !== "slideshow" ? `
                <div class="mt-3 text-center">
                  <p class="text-sm text-gray-700">${imageCaption}</p>
                </div>
              ` : ""}
            </div>
          `;
        }).join("");
        const galleryHtml = `
          <div class="my-8 max-w-full">
            ${galleryTitle || galleryDescription ? `
              <div class="text-center mb-8">
                ${galleryTitle ? `<h3 class="text-3xl font-bold text-gray-900 mb-4">${galleryTitle}</h3>` : ""}
                ${galleryDescription ? `<p class="text-lg text-gray-600 max-w-2xl mx-auto">${galleryDescription}</p>` : ""}
              </div>
            ` : ""}
            
            ${layout === "slideshow" ? `
              <div id="${galleryId}" class="relative w-full" data-carousel="slide">
                <!-- Carousel wrapper -->
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                  ${galleryImages}
                </div>
                
                <!-- Slider indicators -->
                <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                  ${images.map((_, index) => `
                    <button type="button" class="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-300" 
                            aria-current="${index === 0 ? "true" : "false"}" 
                            aria-label="Slide ${index + 1}" 
                            data-carousel-slide-to="${index}"></button>
                  `).join("")}
                </div>
                
                <!-- Slider controls -->
                <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                  </span>
                </button>
                <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                  </span>
                </button>
              </div>
              
              <script>
                document.addEventListener('DOMContentLoaded', function() {
                  const carousel = document.getElementById('${galleryId}');
                  if (carousel) {
                    let currentSlide = 0;
                    const slides = carousel.querySelectorAll('[data-carousel-item]');
                    const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
                    const totalSlides = slides.length;
                    
                    function showSlide(index) {
                      slides.forEach((slide, i) => {
                        slide.classList.toggle('hidden', i !== index);
                        slide.classList.toggle('block', i === index);
                      });
                      indicators.forEach((indicator, i) => {
                        indicator.classList.toggle('bg-opacity-100', i === index);
                        indicator.classList.toggle('bg-opacity-50', i !== index);
                      });
                      currentSlide = index;
                    }
                    
                    // Next/Previous buttons
                    carousel.querySelector('[data-carousel-next]').addEventListener('click', () => {
                      showSlide((currentSlide + 1) % totalSlides);
                    });
                    
                    carousel.querySelector('[data-carousel-prev]').addEventListener('click', () => {
                      showSlide((currentSlide - 1 + totalSlides) % totalSlides);
                    });
                    
                    // Indicators
                    indicators.forEach((indicator, index) => {
                      indicator.addEventListener('click', () => showSlide(index));
                    });
                    
                    // Auto-slide (optional)
                    setInterval(() => {
                      showSlide((currentSlide + 1) % totalSlides);
                    }, 5000);
                  }
                });
              </script>
            ` : `
              <div class="${getLayoutClass()}">
                ${galleryImages}
              </div>
            `}
          </div>`;
        return galleryHtml;
      case "quotes":
        const quotesTitle = block.fields?.title || "";
        const quotesSubtitle = block.fields?.subtitle || "";
        const quotes = block.fields?.quotes || [];
        const quotesLayout = block.fields?.layout || "grid";
        const quotesColumns = block.fields?.columns || "2";
        const quotesStyle = block.fields?.style || "modern";
        const showRatings = block.fields?.showRatings !== false;
        const showAuthorImages = block.fields?.showAuthorImages !== false;
        const backgroundColor = block.fields?.backgroundColor || "none";
        if (!quotes || quotes.length === 0) {
          logger.warn("⚠️ Quotes: No quotes found");
          return "";
        }
        const bgClasses = {
          none: "bg-white dark:bg-gray-900",
          gray: "bg-gray-50 dark:bg-gray-800",
          brand: "bg-blue-50 dark:bg-blue-900",
          dark: "bg-gray-900 dark:bg-gray-900"
        };
        const quotesColumnClasses = {
          "1": "grid-cols-1",
          "2": "grid-cols-1 lg:grid-cols-2",
          "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        };
        const getQuotesLayoutClass = () => {
          switch (quotesLayout) {
            case "carousel":
              return "flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4";
            case "featured":
              return "flex justify-center";
            case "list":
              return "space-y-8";
            default:
              return `grid ${quotesColumnClasses[quotesColumns]} gap-8`;
          }
        };
        const getQuoteCardClass = () => {
          switch (quotesStyle) {
            case "classic":
              return "max-w-screen-md text-gray-500 sm:text-lg dark:text-gray-400 border-l-4 border-blue-500 pl-6 py-4";
            case "minimal":
              return "max-w-screen-md text-gray-500 sm:text-lg dark:text-gray-400 border-b border-gray-200 pb-6";
            case "card":
              return "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6";
            default:
              return "max-w-screen-md text-gray-500 sm:text-lg dark:text-gray-400 bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100";
          }
        };
        const renderStars = (rating) => {
          return Array.from({ length: 5 }, (_, i) => i + 1).map((star) => `
              <svg class="w-5 h-5 ${star <= rating ? "text-yellow-400" : "text-gray-300"}" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            `).join("");
        };
        const quotesItems = quotes.map((quote, index) => {
          const quoteContent = extractTextFromBlock(quote.quote?.root || quote.quote);
          const authorImage = showAuthorImages && quote.authorImage ? getMediaUrl(quote.authorImage) : null;
          const isFeatured = quotesLayout === "featured";
          const isCarousel = quotesLayout === "carousel";
          return `
            <figure class="${getQuoteCardClass()} ${isCarousel ? "flex-none w-80 snap-start" : ""} ${isFeatured ? "mx-auto" : ""} mx-auto">
              <!-- Rating -->
              ${showRatings && quote.rating ? `
                <div class="flex items-center mb-4 ${isFeatured ? "justify-center" : ""}">
                  ${renderStars(quote.rating)}
                </div>
              ` : ""}
              
              <!-- Quote Content -->
              <blockquote>
                <p class="${isFeatured ? "text-2xl italic font-medium leading-relaxed" : "text-xl italic font-medium"} text-gray-900 dark:text-white">
                  "${quoteContent}"
                </p>
              </blockquote>
              
              <!-- Author Info -->
              <figcaption class="flex items-center ${isFeatured ? "justify-center" : ""} mt-6 space-x-3">
                ${authorImage ? `
                  <img class="w-6 h-6 rounded-full" src="${authorImage}" alt="${quote.author}">
                ` : `
                  <div class="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                `}
                <div class="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                  <cite class="pe-3 font-medium text-gray-900 dark:text-white">${quote.author}</cite>
                  ${quote.authorTitle || quote.company ? `
                    <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">
                      ${quote.authorTitle ? quote.authorTitle : ""}
                      ${quote.authorTitle && quote.company ? " at " : ""}
                      ${quote.company ? quote.company : ""}
                    </cite>
                  ` : ""}
                </div>
              </figcaption>
            </figure>
          `;
        }).join("");
        const quotesHtml = `
          <section class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 ${bgClasses[backgroundColor]}">
            ${quotesTitle || quotesSubtitle ? `
              <div class="mx-auto max-w-screen-sm">
                ${quotesTitle ? `<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">${quotesTitle}</h2>` : ""}
                ${quotesSubtitle ? `<p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">${quotesSubtitle}</p>` : ""}
              </div>
            ` : ""}
            <div class="${getQuotesLayoutClass()}">
              ${quotesItems}
            </div>
          </section>`;
        return quotesHtml;
      case "cta":
        const ctaRichText = extractTextFromBlock(block.fields?.richText?.root || block.fields?.richText);
        const ctaLinks = block.fields?.links || [];
        if (!ctaRichText && (!ctaLinks || ctaLinks.length === 0)) {
          logger.warn("⚠️ CTA: No content or links found");
          return "";
        }
        const ctaLinksHtml = ctaLinks.map((linkItem) => {
          const link = linkItem.link;
          if (!link) return "";
          const linkUrl = link.url || (link.reference?.slug ? `/${link.reference.slug}` : "#");
          const linkLabel = link.label || "Learn More";
          const linkAppearance = link.appearance || "default";
          const linkClasses = linkAppearance === "outline" ? "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 transition-all duration-300" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-all duration-300";
          return `
            <a href="${linkUrl}" class="inline-flex items-center justify-center ${linkClasses}">
              ${linkLabel}
              <svg class="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          `;
        }).join("");
        const ctaHtml = `
          <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              ${ctaRichText ? `
                <div class="mx-auto max-w-4xl mb-8 text-gray-900 dark:text-white">
                  ${ctaRichText}
                </div>
              ` : ""}
              ${ctaLinksHtml ? `
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                  ${ctaLinksHtml}
                </div>
              ` : ""}
            </div>
          </section>`;
        return ctaHtml;
      default:
        const defaultContent = extractTextFromBlock(block.fields?.content);
        const defaultHtml = `
          <div class="prose">
            ${blockName ? `<h5>${blockName}</h5>` : ""}
            <div>${defaultContent}</div>
          </div>`;
        return defaultHtml;
    }
  } catch (error) {
    return "";
  }
}
function renderLexicalBlocks(content) {
  if (!content) {
    return "";
  }
  if (typeof content === "string") {
    return content;
  }
  if (content.root && content.root.children && Array.isArray(content.root.children)) {
    let html = "";
    try {
      content.root.children.forEach((block) => {
        if (!block || !block.type) return;
        switch (block.type) {
          case "heading":
            const tag = block.tag || "h2";
            const text = extractTextFromBlock(block);
            if (text) {
              html += `<${tag}>${text}</${tag}>`;
            }
            break;
          case "paragraph":
            const paraText = extractTextFromBlock(block);
            if (paraText) {
              html += `<p>${paraText}</p>`;
            }
            break;
          case "block":
            const blockHtml = renderCustomBlock(block);
            if (blockHtml) {
              html += blockHtml;
            }
            break;
          case "linebreak":
            html += "<br>";
            break;
          default:
            const fallbackText = extractTextFromBlock(block);
            if (fallbackText) {
              html += `<div>${fallbackText}</div>`;
            }
        }
      });
      return html;
    } catch (error) {
      return "";
    }
  }
  return "";
}

const $$Astro = createAstro("https://example.com");
const Astro = $$Astro;
async function getStaticPaths() {
  const postFiles = await Astro.glob(/* #__PURE__ */ Object.assign({"./posts/backup-recovery-sistem-surabaya.mdx": () => import('../chunks/backup-recovery-sistem-surabaya_DUklMMEw.mjs').then(n => n._),"./posts/coworking-space-tech-surabaya.mdx": () => import('../chunks/coworking-space-tech-surabaya_D2phiZu4.mjs').then(n => n._),"./posts/digital-transformation-umkm-surabaya.mdx": () => import('../chunks/digital-transformation-umkm-surabaya_BNic-s4l.mjs').then(n => n._),"./posts/digitalisasi-umkm-surabaya-terbaik.mdx": () => import('../chunks/digitalisasi-umkm-surabaya-terbaik_SiFEArdm.mjs').then(n => n._),"./posts/it-infrastructure-planning-surabaya.mdx": () => import('../chunks/it-infrastructure-planning-surabaya_D43btGWR.mjs').then(n => n._),"./posts/jasa-it-support-surabaya-terpercaya.mdx": () => import('../chunks/jasa-it-support-surabaya-terpercaya_BDYLy0SX.mjs').then(n => n._),"./posts/jasa-pembuatan-website-surabaya-terbaik.mdx": () => import('../chunks/jasa-pembuatan-website-surabaya-terbaik_CLAdoJHh.mjs').then(n => n._),"./posts/jasa-pembuatan-website-surabaya.mdx": () => import('../chunks/jasa-pembuatan-website-surabaya_BllcCp_s.mjs').then(n => n._),"./posts/konsultan-it-sidoarjo-terpercaya.mdx": () => import('../chunks/konsultan-it-sidoarjo-terpercaya_CcJox418.mjs').then(n => n._),"./posts/panduan-memilih-sistem-pos-untuk-umkm.mdx": () => import('../chunks/panduan-memilih-sistem-pos-untuk-umkm_C0skJhIX.mjs').then(n => n._),"./posts/sample-post.md": () => import('../chunks/sample-post_D_WXt-So.mjs').then(n => n._),"./posts/server-maintenance-surabaya.mdx": () => import('../chunks/server-maintenance-surabaya_D9r7gQSZ.mjs').then(n => n._),"./posts/sistem-keamanan-jaringan-surabaya.mdx": () => import('../chunks/sistem-keamanan-jaringan-surabaya_BroL5o1s.mjs').then(n => n._),"./posts/sistem-pos-surabaya-terbaik-untuk-umkm.mdx": () => import('../chunks/sistem-pos-surabaya-terbaik-untuk-umkm_Cdta_4fo.mjs').then(n => n._),"./posts/smart-city-surabaya-teknologi.mdx": () => import('../chunks/smart-city-surabaya-teknologi_CGHoxyoV.mjs').then(n => n._),"./posts/software-development-surabaya-terbaik.mdx": () => import('../chunks/software-development-surabaya-terbaik_vmDo4qCT.mjs').then(n => n._),"./posts/software-development-surabaya.mdx": () => import('../chunks/software-development-surabaya_CGeGKFLU.mjs').then(n => n._),"./posts/startup-tech-surabaya-sidoarjo.mdx": () => import('../chunks/startup-tech-surabaya-sidoarjo_DsxryjHs.mjs').then(n => n._),"./posts/toko-online-surabaya.mdx": () => import('../chunks/toko-online-surabaya_DMdeJt_z.mjs').then(n => n._),"./posts/troubleshooting-komputer-surabaya.mdx": () => import('../chunks/troubleshooting-komputer-surabaya_DCU1bXA-.mjs').then(n => n._),"./posts/web-design-responsive-surabaya.mdx": () => import('../chunks/web-design-responsive-surabaya_u0NwsUyJ.mjs').then(n => n._)}), () => "./posts/*.{md,mdx}");
  const mdxPosts = postFiles.map((post) => ({
    data: post.frontmatter,
    slug: post.frontmatter.slug || post.file?.split("/").pop()?.replace(/\.(md|mdx)$/, "") || "",
    url: post.url,
    file: post.file,
    Content: post.default
    // Store the component
  }));
  let supabasePostsData = [];
  try {
    logger.info("Attempting to fetch posts from Payload API...");
    const payloadPosts = await getPostsFromPayload({
      limit: 1e3,
      status: "published"
    });
    if (payloadPosts && payloadPosts.length > 0) {
      supabasePostsData = payloadPosts.map(convertPayloadPost);
      logger.success(`Successfully fetched ${supabasePostsData.length} posts from Payload API`);
    } else {
      throw new Error("No posts returned from Payload API");
    }
  } catch (error) {
    logger.warn("Payload API failed, falling back to Supabase direct:", error);
    supabasePostsData = await getPostsDirectFromSupabase(1e3, "published");
  }
  const counts = {};
  try {
    const mdxColl = await getCollection("postsMdx").catch(() => []);
    for (const p of mdxColl) {
      const cats = Array.isArray(p.data?.category) ? p.data.category : p.data?.category ? [p.data.category] : [];
      const tags = Array.isArray(p.data?.tags) ? p.data.tags : p.data?.tags ? [p.data.tags] : [];
      for (const t of [...cats, ...tags]) {
        const name = typeof t === "object" && t.value ? String(t.value) : String(t || "");
        if (!name) continue;
        counts[name] = (counts[name] || 0) + 1;
      }
    }
    for (const p of supabasePostsData || []) {
      const cats = Array.isArray(p.category) ? p.category : p.category ? [p.category] : [];
      const tags = Array.isArray(p.tags) ? p.tags : p.tags ? [p.tags] : [];
      for (const t of [...cats, ...tags]) {
        const name = typeof t === "object" && t.value ? String(t.value) : String(t || "");
        if (!name) continue;
        counts[name] = (counts[name] || 0) + 1;
      }
    }
  } catch {
  }
  const popularCategories = Object.entries(counts).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count).slice(0, 10);
  const mdxPostPaths = mdxPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post, source: "mdx", popularCategories }
  }));
  const supabasePostPaths = (supabasePostsData || []).filter((post) => post.slug && typeof post.slug === "string").map((post) => ({
    params: { slug: post.slug },
    props: { post, source: "supabase", popularCategories }
  }));
  return [...mdxPostPaths, ...supabasePostPaths];
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post, source } = Astro2.props;
  const processContent = (content) => {
    return content.replace(/<h1[^>]*>/g, "<h1>").replace(/<h2[^>]*>/g, "<h2>").replace(/<h3[^>]*>/g, "<h3>").replace(/<h4[^>]*>/g, "<h4>").replace(/<h5[^>]*>/g, "<h5>").replace(/<h6[^>]*>/g, "<h6>").replace(/<p[^>]*>/g, "<p>").replace(/<ul[^>]*>/g, "<ul>").replace(/<ol[^>]*>/g, "<ol>").replace(/<li[^>]*>/g, "<li>").replace(/<blockquote[^>]*>/g, "<blockquote>").replace(/<pre[^>]*>/g, "<pre>").replace(/<code[^>]*>/g, "<code>").replace(/<table[^>]*>/g, "<table>").replace(/<th[^>]*>/g, "<th>").replace(/<td[^>]*>/g, "<td>").replace(/<img([^>]*?)src="([^"]*)"([^>]*?)>/g, '<img$1src="$2"$3 loading="lazy">').replace(/\s+/g, " ").trim();
  };
  let layoutData;
  let processedContent = "";
  let wordCount = 0;
  let Content;
  if (source === "supabase") {
    Content = void 0;
    let contentHtml = "";
    let bodyHtml = "";
    if (post.content && typeof post.content === "object") {
      try {
        contentHtml = renderLexicalBlocks(post.content);
        logger.success("Content blocks rendered for:", post.slug);
      } catch (error) {
        logger.error("\u274C Error rendering content blocks:", error);
        contentHtml = "";
      }
    }
    if (post.body && typeof post.body === "string") {
      try {
        const htmlContent = await marked(post.body);
        bodyHtml = processContent(htmlContent);
      } catch (error) {
        logger.error("\u274C Error rendering body markdown:", error);
        bodyHtml = "";
      }
    }
    if (contentHtml && bodyHtml) {
      processedContent = contentHtml + bodyHtml;
    } else if (contentHtml) {
      processedContent = contentHtml;
    } else if (bodyHtml) {
      processedContent = bodyHtml;
    } else {
      processedContent = "";
    }
    wordCount = processedContent.split(" ").length;
    const imageUrl = post.cover_image || post.featured_image || post.imageUrl || post.coverImage || post.image || post.thumbnail || "";
    layoutData = {
      title: post.title,
      description: post.description || post.excerpt || "",
      imageUrl,
      coverImage: imageUrl,
      image: imageUrl,
      published: post.published ? new Date(post.published) : post.created_at ? new Date(post.created_at) : /* @__PURE__ */ new Date(),
      updated: post.updated ? new Date(post.updated) : post.updated_at ? new Date(post.updated_at) : /* @__PURE__ */ new Date(),
      tags: post.tags || [],
      category: post.category || post.categories || [],
      author: post.author || "Kotacom.id",
      source: "supabase",
      popularCategories: Astro2.props.popularCategories || []
    };
  } else if (source === "mdx") {
    Content = post.Content;
    wordCount = 0;
    layoutData = {
      title: post.data.title,
      description: post.data.description || "",
      image: post.data.coverImage || "",
      published: post.data.published,
      updated: post.data.lastUpdated || post.data.published,
      tags: post.data.tags || [],
      author: "Kotacom.id",
      source: "mdx",
      popularCategories: Astro2.props.popularCategories || []
    };
  }
  return renderTemplate`${renderComponent($$result, "PostLayout", $$PostLayout, { ...layoutData, "wordCount": wordCount, "popularCategories": layoutData.popularCategories, "data-astro-cid-fzx4jmue": true }, { "default": async ($$result2) => renderTemplate`${source === "supabase" ? renderTemplate`${maybeRenderHead()}<div data-astro-cid-fzx4jmue>${unescapeHTML(processedContent)}</div>` : renderTemplate`${renderComponent($$result2, "Content", Content, { "data-astro-cid-fzx4jmue": true })}`}` })} `;
}, "/workspace/src/pages/[...slug].astro", void 0);

const $$file = "/workspace/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
