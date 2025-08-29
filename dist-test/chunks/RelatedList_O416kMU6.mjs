import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from './_astro_content_DvVCR5uu.mjs';

const $$Astro = createAstro("https://example.com");
const $$RelatedList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RelatedList;
  const { type, limit = 5 } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  let items = [];
  if (type === "post") {
    const mdx = await getCollection("postsMdx").catch(() => []);
    const mdxItems = mdx.map((p) => ({
      title: p.data?.title,
      slug: p.data?.slug,
      date: p.data?.published ? new Date(p.data.published) : void 0
    })).filter((x) => x.slug).map((x) => ({ title: x.title, href: `/${x.slug}/`, date: x.date }));
    items = [...mdxItems];
  }
  if (type === "project") {
    const mdx = await getCollection("projectsMdx").catch(() => []);
    const mdxItems = mdx.map((p) => ({
      title: p.data?.title,
      slug: p.data?.slug,
      date: p.data?.published ? new Date(p.data.published) : void 0
    })).filter((x) => x.slug).map((x) => ({ title: x.title, href: `/projects/${x.slug}/`, date: x.date }));
    items = [...mdxItems];
  }
  if (type === "product") {
    const mdx = await getCollection("productsMdx").catch(() => []);
    const mdxItems = mdx.map((p) => ({
      title: p.data?.title,
      slug: p.data?.slug,
      date: p.data?.published ? new Date(p.data.published) : void 0
    })).filter((x) => x.slug).map((x) => ({ title: x.title, href: `/products/${x.slug}/`, date: x.date }));
    items = [...mdxItems];
  }
  items = items.filter((it) => it.href !== currentPath);
  items.sort((a, b) => {
    const da = a.date ? a.date.getTime() : 0;
    const db = b.date ? b.date.getTime() : 0;
    if (db !== da) return db - da;
    return a.title.localeCompare(b.title);
  });
  items = items.slice(0, limit);
  return renderTemplate`${items.length > 0 && renderTemplate`${maybeRenderHead()}<section class="bg-white dark:bg-gray-900"><div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="flex items-center justify-between mb-3"><h2 class="text-base font-semibold text-gray-900 dark:text-white">${type === "post" ? "Artikel Terkait" : type === "project" ? "Project Terkait" : "Produk Terkait"}</h2></div><ul class="divide-y divide-gray-200 dark:divide-gray-700 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">${items.map((it) => renderTemplate`<li class="p-3"><a${addAttribute(it.href, "href")} class="text-sm text-blue-600 dark:text-blue-400 hover:underline">${it.title}</a></li>`)}</ul></div></section>`}`;
}, "/workspace/src/components/RelatedList.astro", void 0);

export { $$RelatedList as $ };
