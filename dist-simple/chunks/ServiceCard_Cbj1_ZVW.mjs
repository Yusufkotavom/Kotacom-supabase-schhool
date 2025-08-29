import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { $ as $$ResponsiveImage } from './ResponsiveImage_CQAk96ME.mjs';

function formatPrice(price) {
  if (price === null || price === void 0) return "";
  const priceStr = String(price).trim();
  if (!priceStr) return "";
  const clean = priceStr.replace(/[^\d.,]/g, "");
  if (/[.,]/.test(clean) && /\d/.test(clean)) {
    return `Rp ${clean}`;
  }
  const numeric = parseInt(clean, 10);
  if (Number.isNaN(numeric)) return priceStr;
  return `Rp ${numeric.toLocaleString("id-ID")}`;
}

const $$Astro = createAstro("https://example.com");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { service } = Astro2.props;
  const p = service.data.properties;
  const formattedPrice = formatPrice(p.svPrice);
  const DEFAULT_WA_NUMBER = "085799520350";
  const waHref = p.svWhatsAppURL || `https://wa.me/62${DEFAULT_WA_NUMBER.replace(/^0/, "")}`;
  const DEFAULT_IMAGE = "https://res.cloudinary.com/dxyjku3eh/image/upload/v1754820661/Tanpa_judul_Presentasi__20250810_170926_0000_vdiibn.png";
  const imageUrl = p.svImageURL1 || DEFAULT_IMAGE;
  return renderTemplate`${maybeRenderHead()}<article class="group relative school-card rounded-xl shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"> <div class="relative"> <a${addAttribute(`/services/${p.svSlug}/`, "href")}> ${renderComponent($$result, "ResponsiveImage", $$ResponsiveImage, { "class": "w-full h-48 md:h-52 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-105", "src": imageUrl, "alt": p.svTitle, "preset": "card", "fallbackWidth": 600 })} </a> </div> <!-- Content --> <div class="p-5"> <!-- Title --> <h2 class="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"> <a${addAttribute(`/services/${p.svSlug}/`, "href")}>${p.svTitle}</a> </h2> <!-- Price --> ${formattedPrice && renderTemplate`<p class="mb-3 text-lg font-bold text-green-600/80 dark:text-green-400/80 bg-gradient-to-r from-green-100/60 to-emerald-100/60 dark:from-green-900/20 dark:to-emerald-900/20 px-3 py-2 rounded-lg inline-block backdrop-blur-sm"> ${formattedPrice} </p>`} <!-- Description --> <p class="mb-4 text-sm text-gray-700 dark:text-gray-300"> ${p.svProvider && renderTemplate`<span class="font-bold text-red-600/80 dark:text-red-400/80">${p.svProvider}</span>`} ${p.svType && renderTemplate`<span> adalah <span class="font-bold text-orange-600/80 dark:text-orange-400/80">${p.svType}</span></span>`} ${p.svWilayah && renderTemplate`<span> di <span class="font-bold text-blue-600/80 dark:text-blue-400/80"> ${Array.isArray(p.svWilayah) ? p.svWilayah.join(", ") : p.svWilayah} </span></span>`} </p> <!-- WhatsApp CTA --> <a${addAttribute(waHref, "href")} target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold text-white school-btn-accent transition-all duration-200 transform hover:scale-105"> <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.965-.273-.099-.471-.149-.67.15-.198.297-.767.964-.94 1.162-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.297.298-.496.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.582-.487-.502-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.461 1.065 2.874 1.213 3.072.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.718 2.006-1.41.248-.694.248-1.289.173-1.41-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.234c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.12 1.03 6.988 2.899a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.33-1.654a11.88 11.88 0 005.713 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.47-8.421"></path></svg> <span>Konsultasi Gratis</span> </a> </div> </article>`;
}, "/workspace/src/components/ServiceCard.astro", void 0);

export { $$ServiceCard as $ };
