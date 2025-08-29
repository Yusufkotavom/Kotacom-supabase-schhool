import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, g as renderScript, a as renderTemplate, r as renderComponent, f as renderSlot, e as renderHead } from './astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { d as $$Index, e as $$Index$1, c as $$ContactButtons, b as $$Footer, a as $$Header, $ as $$BaseHead } from './index_CZwhhWzL.mjs';
import 'clsx';
/* empty css                                                                      */
import { g as getCollection } from './_astro_content_BamDxgSk.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$PageTransition = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PageTransition;
  const { className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="page-transition"${addAttribute(`fixed inset-0 z-50 pointer-events-none ${className}`, "class")} data-astro-cid-hg254eu5> <!-- Transition overlay --> <div class="absolute inset-0 bg-gradient-to-br from-blue-600 via-red-600 to-yellow-600 opacity-0 transition-opacity duration-500" id="transition-overlay" data-astro-cid-hg254eu5></div> <!-- Loading animation --> <div class="absolute inset-0 flex items-center justify-center opacity-0" id="loading-animation" data-astro-cid-hg254eu5> <div class="relative" data-astro-cid-hg254eu5> <!-- School icon --> <svg class="w-16 h-16 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-hg254eu5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" data-astro-cid-hg254eu5></path> </svg> <!-- Decorative elements --> <div class="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping" data-astro-cid-hg254eu5></div> <div class="absolute -bottom-2 -left-2 w-3 h-3 bg-red-400 rounded-full animate-pulse" data-astro-cid-hg254eu5></div> <div class="absolute top-1/2 -right-2 w-2 h-2 bg-blue-400 rounded-full animate-bounce" data-astro-cid-hg254eu5></div> </div> </div> </div> ${renderScript($$result, "/workspace/src/components/PageTransition.astro?astro&type=script&index=0&lang.ts")} `;
}, "/workspace/src/components/PageTransition.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://example.com");
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description, type = "website", published, modified, section, tags } = Astro2.props;
  let image = Astro2.props.image;
  if (!image) {
    try {
      const products = await getCollection("productsMdx");
      const candidates = products.map((p) => [p.data?.imageUrl]).flat().filter((u) => typeof u === "string" && u.length > 0);
      if (candidates.length > 0) {
        const h = Array.from(Astro2.url.pathname).reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
        image = candidates[h % candidates.length];
      }
    } catch {
    }
  }
  return renderTemplate(_b || (_b = __template(['<html lang="id"> <head>', `<!-- Font Awesome for WordPress content --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer"><!-- No-FOUC theme initialization --><script>
      {\`
        (function(){
          try {
            var stored = localStorage.getItem('theme');
            var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            var root = document.documentElement;
            var theme = stored || 'system';
            if (theme === 'dark' || (theme === 'system' && prefersDark)) {
              root.classList.add('dark');
            } else {
              root.classList.remove('dark');
            }
            root.setAttribute('data-theme', theme);
          } catch(e){}
        })();
      \`}
    </script>`, "", '</head> <body class="universal-bg min-h-screen"> <!-- Page Transition --> ', " ", ' <main class="relative z-10"> ', " </main> ", " ", ` <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script> <!-- Fix Scrolling Script --> <script>
      // Ensure scrolling works after page load
      function fixScrolling() {
        // Force enable scrolling
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
        
        // Remove any fixed positioning that might block scrolling
        const pageTransition = document.getElementById('page-transition');
        if (pageTransition) {
          pageTransition.style.display = 'none';
        }
        
        // Ensure body can scroll
        document.body.style.position = 'relative';
        document.body.style.height = 'auto';
        document.body.style.minHeight = '100vh';
        
        // Force scroll to top
        window.scrollTo(0, 0);
      }
      
      // Fix scrolling on multiple events
      document.addEventListener('DOMContentLoaded', fixScrolling);
      document.addEventListener('astro:page-load', fixScrolling);
      window.addEventListener('load', fixScrolling);
      
      // Also fix after a short delay
      setTimeout(fixScrolling, 100);
      setTimeout(fixScrolling, 500);
      setTimeout(fixScrolling, 1000);
      
      // Ensure scrolling is always enabled
      document.addEventListener('scroll', function() {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
      });
    </script> <!-- WhatsApp Tracking Script (Production Only) --> `, " ", " ", " </body></html>"], ['<html lang="id"> <head>', `<!-- Font Awesome for WordPress content --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer"><!-- No-FOUC theme initialization --><script>
      {\\\`
        (function(){
          try {
            var stored = localStorage.getItem('theme');
            var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            var root = document.documentElement;
            var theme = stored || 'system';
            if (theme === 'dark' || (theme === 'system' && prefersDark)) {
              root.classList.add('dark');
            } else {
              root.classList.remove('dark');
            }
            root.setAttribute('data-theme', theme);
          } catch(e){}
        })();
      \\\`}
    </script>`, "", '</head> <body class="universal-bg min-h-screen"> <!-- Page Transition --> ', " ", ' <main class="relative z-10"> ', " </main> ", " ", ` <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script> <!-- Fix Scrolling Script --> <script>
      // Ensure scrolling works after page load
      function fixScrolling() {
        // Force enable scrolling
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
        
        // Remove any fixed positioning that might block scrolling
        const pageTransition = document.getElementById('page-transition');
        if (pageTransition) {
          pageTransition.style.display = 'none';
        }
        
        // Ensure body can scroll
        document.body.style.position = 'relative';
        document.body.style.height = 'auto';
        document.body.style.minHeight = '100vh';
        
        // Force scroll to top
        window.scrollTo(0, 0);
      }
      
      // Fix scrolling on multiple events
      document.addEventListener('DOMContentLoaded', fixScrolling);
      document.addEventListener('astro:page-load', fixScrolling);
      window.addEventListener('load', fixScrolling);
      
      // Also fix after a short delay
      setTimeout(fixScrolling, 100);
      setTimeout(fixScrolling, 500);
      setTimeout(fixScrolling, 1000);
      
      // Ensure scrolling is always enabled
      document.addEventListener('scroll', function() {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
      });
    </script> <!-- WhatsApp Tracking Script (Production Only) --> `, " ", " ", " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image, "type": type, "published": published, "modified": modified, "section": section, "tags": tags }), renderSlot($$result, $$slots["head"]), renderHead(), renderComponent($$result, "PageTransition", $$PageTransition, {}), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "ContactButtons", $$ContactButtons, {}), renderTemplate(_a || (_a = __template([`<script>
        // Optimized WhatsApp tracking with minimal performance impact
        function trackWhatsAppClick(placement) {
          // Use requestIdleCallback for better performance
          if (window.requestIdleCallback) {
            requestIdleCallback(() => {
              trackWhatsAppEvent(placement);
            });
          } else {
            // Fallback for older browsers
            setTimeout(() => {
              trackWhatsAppEvent(placement);
            }, 100);
          }
        }
        
        function trackWhatsAppEvent(placement) {
          // Track WhatsApp clicks with Google Analytics
          if (typeof gtag !== 'undefined') {
            gtag('event', 'whatsapp_click', {
              'event_category': 'engagement',
              'event_label': placement,
              'value': 1
            });
          }
        }
        
        // Add click tracking to all WhatsApp links
        document.addEventListener('click', function(e) {
          if (e.target.closest('a[href*="wa.me"]')) {
            const link = e.target.closest('a[href*="wa.me"]');
            const placement = link.getAttribute('data-placement') || 'unknown';
            trackWhatsAppClick(placement);
          }
        });
      </script>`]))), renderTemplate`${renderComponent($$result, "SpeedInsights", $$Index$1, {})}`, renderTemplate`${renderComponent($$result, "Analytics", $$Index, {})}`);
}, "/workspace/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, $$PageTransition as a };
