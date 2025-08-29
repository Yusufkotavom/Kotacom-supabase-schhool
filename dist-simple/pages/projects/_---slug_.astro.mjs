import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_BmwawJdT.mjs';
import { $ as $$ProjectPage } from '../../chunks/ProjectPage_EeMmmvMF.mjs';
import { b as getProjectsDirectFromSupabase } from '../../chunks/supabase-direct_CBgP8j8M.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const mdxProjects = await getCollection("projectsMdx");
  const supabaseProjects = await getProjectsDirectFromSupabase(1e4, "published");
  console.log(`\uFFFD Building static paths for ${supabaseProjects?.length || 0} projects (direct from Supabase)`);
  const mdxPaths = mdxProjects.map((project) => ({
    params: { slug: project.data.slug },
    props: { project, source: "mdx" }
  }));
  const supabasePaths = (supabaseProjects || []).filter((project) => project.slug && typeof project.slug === "string").map((project) => ({
    params: { slug: project.slug },
    props: { project, source: "supabase" }
  }));
  return [...mdxPaths, ...supabasePaths];
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { project, source } = Astro2.props;
  let layoutData = {};
  let Content;
  if (source === "mdx") {
    const { Content: C } = await renderEntry(project);
    Content = C;
    layoutData = {
      ...project.data,
      properties: {
        title: project.data.title,
        country: project.data.country,
        locale: project.data.locale,
        category: project.data.category,
        organiser: project.data.organiser,
        slug: project.data.slug,
        cost: project.data.cost,
        url: project.data.url,
        gygUrl: project.data.gygUrl,
        mapsUrl: project.data.mapsUrl,
        verify: project.data.verify,
        imageUrl: project.data.imageUrl,
        published: project.data.published,
        review: project.data.review,
        getInvolved: project.data.getInvolved,
        description: project.data.description
      }
    };
  } else if (source === "supabase") {
    Content = void 0;
    layoutData = {
      properties: {
        title: project.title,
        country: project.country || [],
        locale: project.locale || [],
        category: project.category || [],
        organiser: project.organiser || "",
        slug: project.slug,
        cost: project.cost || [],
        url: project.url || "",
        gygUrl: project.gyg_url || "",
        // Map gyg_url from Supabase
        mapsUrl: project.maps_url || "",
        // Map maps_url from Supabase
        verify: project.verify || "",
        imageUrl: project.imageUrl || "",
        // Already mapped from image_url
        published: project.published,
        review: project.review || "",
        // Use processed markdown content
        getInvolved: project.get_involved || "",
        // Map get_involved from Supabase
        description: project.description || "",
        // Use processed markdown content
        body: project.body || "",
        // Use processed markdown content
        get_involved: project.get_involved || "",
        // Add native field for layout compatibility
        format: project.format || ""
      }
    };
  }
  return renderTemplate`${renderComponent($$result, "ProjectPage", $$ProjectPage, { ...layoutData }, { "default": async ($$result2) => renderTemplate`${Content && renderTemplate`${renderComponent($$result2, "Content", Content, {})}`}` })}`;
}, "/workspace/src/pages/projects/[...slug].astro", void 0);

const $$file = "/workspace/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
