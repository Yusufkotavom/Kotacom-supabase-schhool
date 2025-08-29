import { b as createAstro, c as createComponent, r as renderComponent, e as renderHead, f as renderSlot, a as renderTemplate } from './astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer, c as $$ContactButtons, d as $$Index, e as $$Index$1 } from './index_CX7Kovxv.mjs';

const $$Astro = createAstro("https://example.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Kotacom - Professional Web Development",
    description = "Professional web development services for your business. We create modern, responsive websites that help you grow your online presence.",
    canonical,
    author = "Kotacom Team",
    publishDate,
    updateDate,
    image = "/og-image.jpg",
    imageAlt,
    category,
    tags,
    type = "website",
    schemaMarkup,
    robots = "index, follow",
    socialTitle,
    socialDescription,
    socialImage,
    socialType
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "canonical": canonical, "author": author, "publishDate": publishDate, "updateDate": updateDate, "category": category, "tags": tags, "image": image, "imageAlt": imageAlt, "type": type, "schemaMarkup": schemaMarkup, "robots": robots })}${renderHead()}</head> <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"> ${renderComponent($$result, "Header", $$Header, {})} <main id="main-content" class="pt-16"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "ContactButtons", $$ContactButtons, {})} ${renderComponent($$result, "Analytics", $$Index, {})} ${renderComponent($$result, "SpeedInsights", $$Index$1, {})} </body></html>`;
}, "/workspace/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
