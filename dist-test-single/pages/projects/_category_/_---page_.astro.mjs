import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_BamDxgSk.mjs';
import { $ as $$MainLayout } from '../../../chunks/MainLayout_Ki2xGb0a.mjs';
import { $ as $$ProjectCard } from '../../../chunks/ProjectCard_F7YUbisB.mjs';
import { $ as $$PCategoryDropdown } from '../../../chunks/PCategoryDropdown_C55tX4m2.mjs';
import { b as getProjectsDirectFromSupabase } from '../../../chunks/supabase-direct_CBgP8j8M.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
async function getStaticPaths({ paginate }) {
  const mdxProjects = await getCollection("projectsMdx");
  const supabaseProjects = await getProjectsDirectFromSupabase(1e4, "published");
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
  const normalizedSupabaseProjects = supabaseProjects.filter((project) => project.slug && typeof project.slug === "string").map((project) => ({
    source: "supabase",
    data: {
      properties: {
        pTitle: project.title,
        pCategory: project.category || [],
        pSlug: project.slug,
        pImageURL: project.imageUrl || "",
        pPublished: { start: project.published ? new Date(project.published) : /* @__PURE__ */ new Date(0) },
        pCountry: project.country || [],
        pLocale: project.locale || [],
        pOrganiser: project.organiser,
        pCost: project.cost || [],
        pURL: project.url || "",
        pGYGURL: project.gygUrl || "",
        pMapsURL: project.mapsUrl || "",
        pVerify: project.verify || "",
        pReview: project.description || "",
        pGetInvolved: project.getInvolved || ""
      }
    }
  }));
  const allProjects = [...normalizedMdxProjects, ...normalizedSupabaseProjects];
  const categories = Array.from(
    new Set(
      allProjects.flatMap((project) => {
        const pCategory = project.data.properties.pCategory;
        if (Array.isArray(pCategory)) {
          return pCategory.filter((cat) => cat && String(cat).trim() !== "");
        } else if (pCategory && String(pCategory).trim() !== "") {
          return [pCategory];
        }
        return [];
      })
    )
  ).map((category) => String(category).toLowerCase().replace(/\s+/g, "-"));
  const paths = categories.flatMap((category) => {
    const categoryProjects = allProjects.filter((project) => {
      const pCategory = project.data.properties.pCategory;
      let projectCategories = [];
      if (Array.isArray(pCategory)) {
        projectCategories = pCategory.map(
          (c) => String(c).toLowerCase().replace(/\s+/g, "-")
        );
      } else if (pCategory) {
        projectCategories = [String(pCategory).toLowerCase().replace(/\s+/g, "-")];
      }
      return projectCategories.includes(category);
    });
    const sortedProjects = categoryProjects.sort((a, b) => {
      const dateA = a.data.properties.pPublished?.start ? typeof a.data.properties.pPublished.start === "string" ? parseDate(a.data.properties.pPublished.start) : a.data.properties.pPublished.start : /* @__PURE__ */ new Date(0);
      const dateB = b.data.properties.pPublished?.start ? typeof b.data.properties.pPublished.start === "string" ? parseDate(b.data.properties.pPublished.start) : b.data.properties.pPublished.start : /* @__PURE__ */ new Date(0);
      return dateB.getTime() - dateA.getTime();
    });
    return paginate(sortedProjects, {
      pageSize: 9,
      // Number of projects per page
      params: { category },
      props: { category }
      // Pass category as a prop
    });
  });
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const { category } = Astro2.params;
  const displayCategory = category.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const readableCategory = displayCategory;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${readableCategory} Projects - Page ${page.currentPage} of ${page.lastPage}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white dark:bg-gray-900"> <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> <div class="max-w-screen-md mb-8 lg:mb-16"> <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
Portfolio ${readableCategory} </h1> <p class="text-gray-500 sm:text-xl dark:text-gray-400">
Showcase proyek ${readableCategory.toLowerCase()} profesional yang telah berhasil kami kerjakan untuk berbagai klien.
</p> </div> <div class="flex flex-col md:flex-row mb-5"> <!-- Div 1 (Showing projects) --> <div id="1" class="w-full md:w-3/4 p-2 order-3 md:order-1"> <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
Menampilkan <span class="font-semibold text-gray-900 dark:text-white"> ${page.start + 1}-${page.end + 1} </span> dari <span class="font-semibold text-gray-900 dark:text-white"> ${page.total} </span> proyek ${readableCategory} </span> </div> <!-- Div 3 (Category Dropdown) --> <div id="3" class="w-full md:w-1/4 p-2 order-2 md:order-3"> ${renderComponent($$result2, "PCategoryDropdown", $$PCategoryDropdown, {})} </div> </div> <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"> ${page.data.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project })}`)} </div> </div> </section>  <section class="bg-white dark:bg-gray-900"> <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> <div class="flex justify-center items-center"> <!-- Previous Button --> ${page.url.prev && renderTemplate`<a${addAttribute(page.url.prev, "href")} class="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"></path> </svg>
Previous
</a>`} <!-- Next Button --> ${page.url.next && renderTemplate`<a${addAttribute(page.url.next, "href")} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
Next
<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a>`} </div> </div> </section> ` })}`;
}, "/workspace/src/pages/projects/[category]/[...page].astro", void 0);

const $$file = "/workspace/src/pages/projects/[category]/[...page].astro";
const $$url = "/projects/[category]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
