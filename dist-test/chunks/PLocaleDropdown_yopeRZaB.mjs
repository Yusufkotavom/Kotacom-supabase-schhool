import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from './_astro_content_DvVCR5uu.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$PCountryDropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PCountryDropdown;
  const currentCountryPromise = (async () => {
    const pathSegments = Astro2.url.pathname.split("/");
    const potentialCountry = pathSegments[2];
    const products2 = await getCollection("productsMdx");
    const validCountries = products2.reduce((acc, product) => {
      const countries = Array.isArray(product.data.country) ? product.data.country.map(
        (c) => String(c).toLowerCase().replace(/\s+/g, "-")
      ) : [String(product.data.country).toLowerCase().replace(/\s+/g, "-")];
      countries.forEach((country) => acc.add(country));
      return acc;
    }, /* @__PURE__ */ new Set());
    return validCountries.has(potentialCountry) ? potentialCountry : null;
  })();
  const currentCountry = await currentCountryPromise;
  const products = await getCollection("productsMdx");
  const countryCounts = products.reduce((acc, product) => {
    const countries = Array.isArray(product.data.country) ? product.data.country : [product.data.country];
    countries.forEach((country) => {
      if (country) {
        acc[country] = (acc[country] || 0) + 1;
      }
    });
    return acc;
  }, {});
  const uniqueCountries = Object.keys(countryCounts).sort();
  return renderTemplate`${maybeRenderHead()}<form class="w-100%"> <select id="countries" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onchange="if (this.value) window.location.href = this.value"> <option disabled${addAttribute(!currentCountry, "selected")}>Negara</option> ${uniqueCountries.map((country) => {
    const countrySlug = country.toLowerCase().replace(/\s+/g, "-");
    return renderTemplate`<option${addAttribute(`/products/${countrySlug}`, "value")}${addAttribute(currentCountry === countrySlug, "selected")}> ${country} (${countryCounts[country]})
</option>`;
  })} </select> </form>`;
}, "/workspace/src/components/PCountryDropdown.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$PLocaleDropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PLocaleDropdown;
  const currentCountry = Astro2.url.pathname.split("/")[2];
  const currentLocale = Astro2.url.pathname.split("/")[3];
  const products = await getCollection("productsMdx");
  const filteredProducts = products.filter((product) => {
    const countries = Array.isArray(product.data.country) ? product.data.country.map(
      (c) => String(c).toLowerCase().replace(/\s+/g, "-")
    ) : [String(product.data.country).toLowerCase().replace(/\s+/g, "-")];
    return countries.includes(currentCountry);
  });
  const localeCounts = filteredProducts.reduce((acc, product) => {
    const countries = Array.isArray(product.data.country) ? product.data.country.map(
      (c) => String(c).toLowerCase().replace(/\s+/g, "-")
    ) : [String(product.data.country).toLowerCase().replace(/\s+/g, "-")];
    const locales = Array.isArray(product.data.locale) ? product.data.locale : [product.data.locale];
    if (countries.includes(currentCountry)) {
      locales.forEach((locale) => {
        if (locale) {
          acc[locale] = (acc[locale] || 0) + 1;
        }
      });
    }
    return acc;
  }, {});
  const uniqueLocales = Object.keys(localeCounts).sort();
  return renderTemplate`${maybeRenderHead()}<form class="w-100%"> <select id="locales" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onchange="if (this.value) window.location.href = this.value"> <option disabled${addAttribute(!currentLocale, "selected")}>Lokasi</option> ${uniqueLocales.map((locale) => {
    const localeSlug = locale.toLowerCase().replace(/\s+/g, "-");
    return renderTemplate`<option${addAttribute(`/products/${currentCountry}/${localeSlug}`, "value")}${addAttribute(currentLocale === localeSlug, "selected")}> ${locale} (${localeCounts[locale]})
</option>`;
  })} </select> </form>`;
}, "/workspace/src/components/PLocaleDropdown.astro", void 0);

export { $$PCountryDropdown as $, $$PLocaleDropdown as a };
