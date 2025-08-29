import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_Dq2hjnnk.mjs';
export { renderers } from '../renderers.mjs';

const $$TestTransitions = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Test Page Transitions", "description": "Testing page transitions and scroll reveal animations" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 dark:from-blue-900/20 dark:via-gray-900 dark:to-yellow-900/20 py-16 px-4"> <div class="max-w-4xl mx-auto"> <h1 class="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
Test Page Transitions
</h1> <p class="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
This page demonstrates the colorful page transitions and scroll reveal animations
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="school-card p-8 rounded-xl" data-reveal="fade-up"> <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Page Transitions</h3> <p class="text-gray-600 dark:text-gray-300">
Smooth, colorful transitions between pages with blue, red, and yellow gradients.
</p> </div> <div class="school-card p-8 rounded-xl" data-reveal="fade-up" data-reveal-delay="200"> <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Scroll Reveal</h3> <p class="text-gray-600 dark:text-gray-300">
Elements animate in as you scroll, creating an engaging user experience.
</p> </div> </div> <div class="text-center mt-12"> <a href="/" class="school-btn-primary px-8 py-3 text-lg font-bold rounded-lg hover:scale-105 transition-all duration-200 shadow-lg">
Back to Home
</a> </div> </div> </div> ` })}`;
}, "/workspace/src/pages/test-transitions.astro", void 0);

const $$file = "/workspace/src/pages/test-transitions.astro";
const $$url = "/test-transitions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TestTransitions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
