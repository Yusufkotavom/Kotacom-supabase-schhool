import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_Ki2xGb0a.mjs';
import { $ as $$SchoolLottieSeparator } from '../chunks/SchoolLottieSeparator_asC9N0FI.mjs';
export { renderers } from '../renderers.mjs';

const $$TestSchool = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Test School Page", "description": "Testing SchoolLottieSeparator" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-20"> <h1 class="text-4xl font-bold text-center mb-8">Test SchoolLottieSeparator</h1> <div class="max-w-4xl mx-auto"> <p class="text-center mb-8">Testing if SchoolLottieSeparator works correctly</p> ${renderComponent($$result2, "SchoolLottieSeparator", $$SchoolLottieSeparator, { "animation": "school", "height": "h-20" })} <p class="text-center mt-8">If you can see the separator above, it's working!</p> </div> </div> ` })}`;
}, "/workspace/src/pages/test-school.astro", void 0);

const $$file = "/workspace/src/pages/test-school.astro";
const $$url = "/test-school";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TestSchool,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
