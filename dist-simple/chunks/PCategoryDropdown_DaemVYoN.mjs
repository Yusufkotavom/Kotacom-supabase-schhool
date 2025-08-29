import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from './_astro_content_BmwawJdT.mjs';

const $$Astro = createAstro("https://example.com");
const $$PCategoryDropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PCategoryDropdown;
  const currentCategoryPromise = (async () => {
    const pathSegments = Astro2.url.pathname.split("/");
    const potentialCategory = pathSegments[2];
    const mdxProjects2 = await getCollection("projectsMdx");
    const normalizedMdxProjects2 = mdxProjects2.map((entry) => ({
      ...entry,
      source: "mdx",
      data: {
        ...entry.data,
        properties: {
          pTitle: entry.data.title,
          pCategory: entry.data.category,
          pSlug: entry.data.slug,
          pImageURL: entry.data.imageUrl || "",
          pPublished: { start: entry.data.published },
          pCountry: entry.data.country,
          pLocale: entry.data.locale,
          pOrganiser: entry.data.organiser,
          pCost: entry.data.cost,
          pURL: entry.data.url,
          pGYGURL: entry.data.gygUrl,
          pMapsURL: entry.data.mapsUrl,
          pVerify: entry.data.verify || "",
          pReview: entry.data.review,
          pGetInvolved: entry.data.getInvolved
        }
      }
    }));
    const allProjects2 = [...normalizedMdxProjects2];
    const validCategories = allProjects2.reduce((acc, project) => {
      const categories = Array.isArray(project.data.properties.pCategory) ? project.data.properties.pCategory.map((c) => c.toLowerCase().replace(/\s+/g, "-")) : [String(project.data.properties.pCategory || "").toLowerCase().replace(/\s+/g, "-")];
      categories.forEach((category) => {
        if (category && category !== "") acc.add(category);
      });
      return acc;
    }, /* @__PURE__ */ new Set());
    return validCategories.has(potentialCategory) ? potentialCategory : null;
  })();
  const currentCategory = await currentCategoryPromise;
  const mdxProjects = await getCollection("projectsMdx");
  const normalizedMdxProjects = mdxProjects.map((entry) => ({
    ...entry,
    source: "mdx",
    data: {
      ...entry.data,
      properties: {
        pTitle: entry.data.title,
        pCategory: entry.data.category,
        pSlug: entry.data.slug,
        pImageURL: entry.data.imageUrl || "",
        pPublished: { start: entry.data.published },
        pCountry: entry.data.country,
        pLocale: entry.data.locale,
        pOrganiser: entry.data.organiser,
        pCost: entry.data.cost,
        pURL: entry.data.url,
        pGYGURL: entry.data.gygUrl,
        pMapsURL: entry.data.mapsUrl,
        pVerify: entry.data.verify || "",
        pReview: entry.data.review,
        pGetInvolved: entry.data.getInvolved
      }
    }
  }));
  const allProjects = [...normalizedMdxProjects];
  const categoryCounts = allProjects.reduce((acc, project) => {
    const categories = Array.isArray(project.data.properties.pCategory) ? project.data.properties.pCategory : [project.data.properties.pCategory];
    categories.forEach((category) => {
      if (category && category.trim() !== "") {
        acc[category] = (acc[category] || 0) + 1;
      }
    });
    return acc;
  }, {});
  const uniqueCategories = Object.keys(categoryCounts).sort();
  return renderTemplate`${maybeRenderHead()}<form class="w-100%"> <select id="categories" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onchange="if (this.value) window.location.href = this.value"> <option value="/projects/"${addAttribute(!currentCategory, "selected")}>
Semua Kategori
</option> ${uniqueCategories.map((category) => {
    const categorySlug = category.toLowerCase().replace(/\s+/g, "-");
    return renderTemplate`<option${addAttribute(`/projects/${categorySlug}/`, "value")}${addAttribute(currentCategory === categorySlug, "selected")}> ${category} (${categoryCounts[category]})
</option>`;
  })} </select> </form>`;
}, "/workspace/src/components/PCategoryDropdown.astro", void 0);

export { $$PCategoryDropdown as $ };
