import { b as createAstro, c as createComponent, d as addAttribute, a as renderTemplate } from './astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import 'clsx';

const SEO_SECTIONS = {
  posts: { basePath: "/posts", type: "article", titlePrefix: "Semua Artikel", robotsIndexPaginated: false },
  products: { basePath: "/products", type: "product", titlePrefix: "Produk", robotsIndexPaginated: false },
  services: { basePath: "/services", type: "service", titlePrefix: "Layanan", robotsIndexPaginated: false },
  projects: { basePath: "/projects", type: "project", titlePrefix: "Project", robotsIndexPaginated: false }
};
function getSectionConfigByPath(pathname) {
  const match = Object.values(SEO_SECTIONS).find((s) => pathname.startsWith(s.basePath));
  return match;
}

const $$Astro$1 = createAstro("https://example.com");
const $$SeoPaginationHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SeoPaginationHead;
  const { currentPage, lastPage } = Astro2.props;
  const section = getSectionConfigByPath(Astro2.url.pathname);
  const shouldNoindex = section && section.robotsIndexPaginated === false && currentPage > 1;
  return renderTemplate`${Astro2.props.currentPage && Astro2.props.currentPage > 1 && renderTemplate`<link rel="prev"${addAttribute(Astro2.props.currentPage - 1 === 1 ? Astro2.url.pathname.replace(/\d+\/?$/, "") : Astro2.url.pathname.replace(/\d+\/?$/, `${Astro2.props.currentPage - 1}/`), "href")}>`}${Astro2.props.currentPage && Astro2.props.currentPage < Astro2.props.lastPage && renderTemplate`<link rel="next"${addAttribute(Astro2.url.pathname.replace(/\d+\/?$/, `${Astro2.props.currentPage + 1}/`), "href")}>`}${shouldNoindex && renderTemplate`<meta name="robots" content="noindex,follow">`}`;
}, "/workspace/src/components/partials/SeoPaginationHead.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://example.com");
const $$ItemListJsonLd = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ItemListJsonLd;
  const { elements } = Astro2.props;
  ({
    itemListElement: elements.map((e) => ({
      "@type": "ListItem",
      position: e.position,
      url: e.url,
      name: e.name,
      ...e.image ? { image: e.image } : {}
    }))
  });
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">{JSON.stringify(json)}<\/script>'])));
}, "/workspace/src/components/partials/ItemListJsonLd.astro", void 0);

export { $$SeoPaginationHead as $, $$ItemListJsonLd as a };
