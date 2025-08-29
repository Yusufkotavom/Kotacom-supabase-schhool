import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_CjgKBWt9.mjs';
import { $ as $$PostCard } from '../../../chunks/PostCard_C9zGFYzy.mjs';
import { g as getPostsDirectFromSupabase } from '../../../chunks/supabase-direct_CBgP8j8M.mjs';
import { f as fromSlug, t as toSlug } from '../../../chunks/slug-helpers_BiUprBZy.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
async function getStaticPaths({ paginate }) {
  const postFiles = await /* #__PURE__ */ Object.assign({"../../posts/backup-recovery-sistem-surabaya.mdx": () => import('../../../chunks/backup-recovery-sistem-surabaya_DUklMMEw.mjs').then(n => n._),"../../posts/coworking-space-tech-surabaya.mdx": () => import('../../../chunks/coworking-space-tech-surabaya_D2phiZu4.mjs').then(n => n._),"../../posts/digital-transformation-umkm-surabaya.mdx": () => import('../../../chunks/digital-transformation-umkm-surabaya_BNic-s4l.mjs').then(n => n._),"../../posts/digitalisasi-umkm-surabaya-terbaik.mdx": () => import('../../../chunks/digitalisasi-umkm-surabaya-terbaik_SiFEArdm.mjs').then(n => n._),"../../posts/it-infrastructure-planning-surabaya.mdx": () => import('../../../chunks/it-infrastructure-planning-surabaya_D43btGWR.mjs').then(n => n._),"../../posts/jasa-it-support-surabaya-terpercaya.mdx": () => import('../../../chunks/jasa-it-support-surabaya-terpercaya_BDYLy0SX.mjs').then(n => n._),"../../posts/jasa-pembuatan-website-surabaya-terbaik.mdx": () => import('../../../chunks/jasa-pembuatan-website-surabaya-terbaik_CLAdoJHh.mjs').then(n => n._),"../../posts/jasa-pembuatan-website-surabaya.mdx": () => import('../../../chunks/jasa-pembuatan-website-surabaya_BllcCp_s.mjs').then(n => n._),"../../posts/konsultan-it-sidoarjo-terpercaya.mdx": () => import('../../../chunks/konsultan-it-sidoarjo-terpercaya_CcJox418.mjs').then(n => n._),"../../posts/panduan-memilih-sistem-pos-untuk-umkm.mdx": () => import('../../../chunks/panduan-memilih-sistem-pos-untuk-umkm_C0skJhIX.mjs').then(n => n._),"../../posts/server-maintenance-surabaya.mdx": () => import('../../../chunks/server-maintenance-surabaya_D9r7gQSZ.mjs').then(n => n._),"../../posts/sistem-keamanan-jaringan-surabaya.mdx": () => import('../../../chunks/sistem-keamanan-jaringan-surabaya_BroL5o1s.mjs').then(n => n._),"../../posts/sistem-pos-surabaya-terbaik-untuk-umkm.mdx": () => import('../../../chunks/sistem-pos-surabaya-terbaik-untuk-umkm_Cdta_4fo.mjs').then(n => n._),"../../posts/smart-city-surabaya-teknologi.mdx": () => import('../../../chunks/smart-city-surabaya-teknologi_CGHoxyoV.mjs').then(n => n._),"../../posts/software-development-surabaya-terbaik.mdx": () => import('../../../chunks/software-development-surabaya-terbaik_vmDo4qCT.mjs').then(n => n._),"../../posts/software-development-surabaya.mdx": () => import('../../../chunks/software-development-surabaya_CGeGKFLU.mjs').then(n => n._),"../../posts/startup-tech-surabaya-sidoarjo.mdx": () => import('../../../chunks/startup-tech-surabaya-sidoarjo_DsxryjHs.mjs').then(n => n._),"../../posts/toko-online-surabaya.mdx": () => import('../../../chunks/toko-online-surabaya_DMdeJt_z.mjs').then(n => n._),"../../posts/troubleshooting-komputer-surabaya.mdx": () => import('../../../chunks/troubleshooting-komputer-surabaya_DCU1bXA-.mjs').then(n => n._),"../../posts/web-design-responsive-surabaya.mdx": () => import('../../../chunks/web-design-responsive-surabaya_u0NwsUyJ.mjs').then(n => n._)});
  const mdxPosts = await Promise.all(
    Object.entries(postFiles).map(async ([path, loader]) => {
      const post = await loader();
      return {
        data: post.frontmatter,
        slug: path.split("/").pop()?.replace(".mdx", "") || "",
        url: path.replace("../../posts/", "/posts/").replace(".mdx", "/")
      };
    })
  );
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
    }
  });
  const paths = [];
  for (const tag of allTags) {
    const mdxPostsWithTag = mdxPosts.filter((post) => {
      return (post.data.tags || []).includes(tag);
    });
    const supabasePostsWithTag = (supabasePosts || []).filter((post) => {
      const tags = post.tags || [];
      if (Array.isArray(tags)) {
        return tags.some((postTag) => {
          const tagValue = typeof postTag === "string" ? postTag : postTag?.value || postTag?.name;
          return tagValue === tag;
        });
      }
      return false;
    });
    const allPostsWithTag = [
      ...mdxPostsWithTag.map((post) => ({ ...post, source: "mdx" })),
      ...supabasePostsWithTag.map((post) => ({ ...post, source: "supabase" }))
    ];
    if (allPostsWithTag.length > 0) {
      const paginatedPosts = paginate(allPostsWithTag, {
        params: { tag: toSlug(tag) },
        pageSize: 12
      });
      paths.push(...paginatedPosts);
    }
  }
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const tagSlug = page.params?.tag || Astro2.params.tag;
  const tagTitle = fromSlug(tagSlug || "");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Kategori: ${tagTitle} - Kotacom.id` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <div class="mb-8"> <nav class="text-sm breadcrumbs mb-4"> <a href="/" class="text-blue-600 hover:underline">Home</a> <span class="mx-2">/</span> <a href="/category/" class="text-blue-600 hover:underline">Kategori</a> <span class="mx-2">/</span> <span class="text-gray-600">${tagTitle}</span> </nav> <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
Kategori: ${tagTitle} </h1> <p class="text-gray-600 dark:text-gray-400"> ${page.total} artikel ditemukan
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> ${page.data.map((post) => {
    if (post.source === "mdx") {
      return renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": {
        source: "mdx",
        data: {
          properties: {
            bSlug: post.data.slug,
            bCoverImage: post.data.coverImage || "",
            bTags: post.data.tags || [],
            bTitle: post.data.title
          }
        }
      } })}`;
    } else {
      return renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": {
        source: "supabase",
        data: {
          properties: {
            bSlug: post.slug,
            bCoverImage: post.imageUrl || post.coverImage || "",
            bTags: Array.isArray(post.tags) ? post.tags.map(
              (tag) => typeof tag === "string" ? tag : tag?.value || tag?.name || tag
            ) : [],
            bTitle: post.title
          }
        }
      } })}`;
    }
  })} </div> <!-- Pagination --> ${page.url.prev || page.url.next ? renderTemplate`<div class="flex justify-center items-center space-x-4 mt-8"> ${page.url.prev && renderTemplate`<a${addAttribute(page.url.prev, "href")} class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
← Sebelumnya
</a>`} <span class="text-gray-600 dark:text-gray-400">
Halaman ${page.currentPage} dari ${page.lastPage} </span> ${page.url.next && renderTemplate`<a${addAttribute(page.url.next, "href")} class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
Selanjutnya →
</a>`} </div>` : null} </main> ` })}`;
}, "/workspace/src/pages/category/[tag]/[...page].astro", void 0);

const $$file = "/workspace/src/pages/category/[tag]/[...page].astro";
const $$url = "/category/[tag]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
