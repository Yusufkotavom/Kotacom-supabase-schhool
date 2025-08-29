import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CjgKBWt9.mjs';
import { g as getPostsDirectFromSupabase } from '../chunks/supabase-direct_CBgP8j8M.mjs';
import { t as toSlug } from '../chunks/slug-helpers_BiUprBZy.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const postFiles = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/backup-recovery-sistem-surabaya.mdx": () => import('../chunks/backup-recovery-sistem-surabaya_DUklMMEw.mjs').then(n => n._),"../posts/coworking-space-tech-surabaya.mdx": () => import('../chunks/coworking-space-tech-surabaya_D2phiZu4.mjs').then(n => n._),"../posts/digital-transformation-umkm-surabaya.mdx": () => import('../chunks/digital-transformation-umkm-surabaya_BNic-s4l.mjs').then(n => n._),"../posts/digitalisasi-umkm-surabaya-terbaik.mdx": () => import('../chunks/digitalisasi-umkm-surabaya-terbaik_SiFEArdm.mjs').then(n => n._),"../posts/it-infrastructure-planning-surabaya.mdx": () => import('../chunks/it-infrastructure-planning-surabaya_D43btGWR.mjs').then(n => n._),"../posts/jasa-it-support-surabaya-terpercaya.mdx": () => import('../chunks/jasa-it-support-surabaya-terpercaya_BDYLy0SX.mjs').then(n => n._),"../posts/jasa-pembuatan-website-surabaya-terbaik.mdx": () => import('../chunks/jasa-pembuatan-website-surabaya-terbaik_CLAdoJHh.mjs').then(n => n._),"../posts/jasa-pembuatan-website-surabaya.mdx": () => import('../chunks/jasa-pembuatan-website-surabaya_BllcCp_s.mjs').then(n => n._),"../posts/konsultan-it-sidoarjo-terpercaya.mdx": () => import('../chunks/konsultan-it-sidoarjo-terpercaya_CcJox418.mjs').then(n => n._),"../posts/panduan-memilih-sistem-pos-untuk-umkm.mdx": () => import('../chunks/panduan-memilih-sistem-pos-untuk-umkm_C0skJhIX.mjs').then(n => n._),"../posts/server-maintenance-surabaya.mdx": () => import('../chunks/server-maintenance-surabaya_D9r7gQSZ.mjs').then(n => n._),"../posts/sistem-keamanan-jaringan-surabaya.mdx": () => import('../chunks/sistem-keamanan-jaringan-surabaya_BroL5o1s.mjs').then(n => n._),"../posts/sistem-pos-surabaya-terbaik-untuk-umkm.mdx": () => import('../chunks/sistem-pos-surabaya-terbaik-untuk-umkm_Cdta_4fo.mjs').then(n => n._),"../posts/smart-city-surabaya-teknologi.mdx": () => import('../chunks/smart-city-surabaya-teknologi_CGHoxyoV.mjs').then(n => n._),"../posts/software-development-surabaya-terbaik.mdx": () => import('../chunks/software-development-surabaya-terbaik_vmDo4qCT.mjs').then(n => n._),"../posts/software-development-surabaya.mdx": () => import('../chunks/software-development-surabaya_CGeGKFLU.mjs').then(n => n._),"../posts/startup-tech-surabaya-sidoarjo.mdx": () => import('../chunks/startup-tech-surabaya-sidoarjo_DsxryjHs.mjs').then(n => n._),"../posts/toko-online-surabaya.mdx": () => import('../chunks/toko-online-surabaya_DMdeJt_z.mjs').then(n => n._),"../posts/troubleshooting-komputer-surabaya.mdx": () => import('../chunks/troubleshooting-komputer-surabaya_DCU1bXA-.mjs').then(n => n._),"../posts/web-design-responsive-surabaya.mdx": () => import('../chunks/web-design-responsive-surabaya_u0NwsUyJ.mjs').then(n => n._)}), () => "../posts/*.mdx");
  const mdxPosts = postFiles.map((post) => ({
    data: post.frontmatter,
    slug: post.file?.split("/").pop()?.replace(".mdx", "") || "",
    url: post.url
  }));
  const supabasePosts = await getPostsDirectFromSupabase(1e4);
  const allTags = /* @__PURE__ */ new Set();
  mdxPosts.forEach((post) => {
    (post.data.tags || []).forEach((tag) => {
      if (tag && typeof tag === "string") {
        allTags.add(tag);
      }
    });
  });
  (supabasePosts || []).forEach((post) => {
    const tags = post.tags || [];
    if (Array.isArray(tags)) {
      tags.forEach((tag) => {
        const tagValue = typeof tag === "string" ? tag : tag?.value || tag?.name;
        if (tagValue && typeof tagValue === "string") {
          allTags.add(tagValue);
        }
      });
    } else if (typeof tags === "string") {
      try {
        const parsedTags = JSON.parse(tags);
        if (Array.isArray(parsedTags)) {
          parsedTags.forEach((tag) => {
            if (tag && typeof tag === "string") {
              allTags.add(tag);
            }
          });
        }
      } catch {
        allTags.add(tags);
      }
    }
  });
  const uniqueTags = Array.from(allTags).sort();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kategori - Kotacom.id" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Kategori</h1> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> ${uniqueTags.map((tag) => renderTemplate`<a${addAttribute(`/category/${toSlug(tag)}/`, "href")} class="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"> <span class="text-gray-900 dark:text-white font-medium">${tag}</span> </a>`)} </div> </main> ` })}`;
}, "/workspace/src/pages/category/index.astro", void 0);

const $$file = "/workspace/src/pages/category/index.astro";
const $$url = "/category";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
