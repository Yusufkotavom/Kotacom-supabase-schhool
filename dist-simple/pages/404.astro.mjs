import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_Dq2hjnnk.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "404 - Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white dark:bg-gray-900"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"> <div class="mx-auto max-w-screen-sm text-center"> <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1> <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Page not found</p> <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page.</p> <a href="#" class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a> </div> </div> </section> ` })}`;
}, "/workspace/src/pages/404.astro", void 0);

const $$file = "/workspace/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
