import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { $ as $$ResponsiveImage } from './ResponsiveImage_CQAk96ME.mjs';

const $$Astro = createAstro("https://example.com");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project } = Astro2.props;
  const isMdx = !project?.data?.properties || !project.data.properties.pSlug;
  const props = isMdx ? {
    pSlug: project.data.slug,
    pImageURL: project.data.imageUrl || "",
    pVerify: project.data.verify || "",
    pCountry: project.data.country,
    pLocale: project.data.locale,
    pTitle: project.data.title,
    pOrganiser: project.data.organiser || ""
  } : project.data.properties;
  return renderTemplate`${maybeRenderHead()}<article class="group relative school-card rounded-xl shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"> <div class="relative"> <a${addAttribute(`/projects/${props.pSlug}/`, "href")}> ${renderComponent($$result, "ResponsiveImage", $$ResponsiveImage, { "class": "w-full h-48 md:h-52 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-105", "src": props.pImageURL, "alt": props.pTitle, "preset": "card", "fallbackWidth": 600 })} ${props.pVerify && renderTemplate`<div class="absolute top-2 left-2 bg-gradient-to-r from-yellow-400/90 to-orange-500/90 rounded-md px-3 py-2 flex items-center gap-2 shadow-lg backdrop-blur-sm"> <svg class="h-5 w-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd"></path> </svg> <p class="text-xs font-bold text-white">${props.pVerify}</p> </div>`} </a> </div> <!-- Content --> <div class="p-5"> <!-- Countries --> ${Array.isArray(props.pCountry) && props.pCountry.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-4"> ${props.pCountry.map((country) => renderTemplate`<a${addAttribute(`/projects/${country.toLowerCase().replace(/\s+/g, "-")}`, "href")} class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-100/80 to-blue-200/80 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-700 dark:text-blue-200 hover:from-blue-200/90 hover:to-blue-300/90 dark:hover:from-blue-800/60 dark:hover:to-blue-700/60 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 backdrop-blur-sm"> ${country} </a>`)} </div>`} <!-- Title --> <h2 class="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"> <a${addAttribute(`/projects/${props.pSlug}/`, "href")}> ${props.pTitle} </a> </h2> <!-- Meta Info --> <p class="text-sm text-gray-700 dark:text-gray-300">
By <span class="font-bold text-red-600/80 dark:text-red-400/80">${props.pOrganiser}</span> ${Array.isArray(props.pLocale) && props.pLocale.length > 0 && renderTemplate`<span> in <span class="font-bold text-orange-600/80 dark:text-orange-400/80"> ${props.pLocale.join(", ")} </span></span>`} </p> </div> </article>`;
}, "/workspace/src/components/ProjectCard.astro", void 0);

export { $$ProjectCard as $ };
