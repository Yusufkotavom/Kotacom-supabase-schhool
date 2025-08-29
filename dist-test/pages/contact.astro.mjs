import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_CxUZirbi.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Contact Us" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<main> <section class="bg-white dark:bg-gray-900"> <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
Contact Us
</h2> <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
If you have any questions or feedback about Giveback, you\u2019re in the
          right place.
</p> <iframe data-tally-src="https://tally.so/embed/w4xVvY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="655" frameborder="0" marginheight="0" marginwidth="0" title="Give Back General Contact"></iframe> <script>
          var d = document,
            w = "https://tally.so/widgets/embed.js",
            v = function () {
              "undefined" != typeof Tally
                ? Tally.loadEmbeds()
                : d
                    .querySelectorAll("iframe[data-tally-src]:not([src])")
                    .forEach(function (e) {
                      e.src = e.dataset.tallySrc;
                    });
            };
          if ("undefined" != typeof Tally) v();
          else if (d.querySelector('script[src="' + w + '"]') == null) {
            var s = d.createElement("script");
            (s.src = w), (s.onload = v), (s.onerror = v), d.body.appendChild(s);
          }
        <\/script> </div> </section> </main> `])), maybeRenderHead()) })}`;
}, "/workspace/src/pages/contact.astro", void 0);

const $$file = "/workspace/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
