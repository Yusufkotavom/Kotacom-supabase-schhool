import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_Dq2hjnnk.mjs';
import { $ as $$SchoolLottieSeparator } from '../chunks/SchoolLottieSeparator_asC9N0FI.mjs';
import { $ as $$ProjectCard } from '../chunks/ProjectCard_F7YUbisB.mjs';
import { $ as $$ServiceCard } from '../chunks/ServiceCard_Cbj1_ZVW.mjs';
import { $ as $$ProductCard } from '../chunks/ProductCard_C_hFhREh.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_C9zGFYzy.mjs';
export { renderers } from '../renderers.mjs';

const $$SchoolThemeDemo = createComponent(($$result, $$props, $$slots) => {
  const sampleProject = {
    data: {
      properties: {
        pSlug: "sample-project",
        pImageURL: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
        pVerify: "Verified",
        pCountry: ["Indonesia"],
        pLocale: ["Jakarta"],
        pTitle: "Sample School Project",
        pOrganiser: "School Name"
      }
    }
  };
  const sampleService = {
    data: {
      properties: {
        svSlug: "sample-service",
        svImageURL1: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
        svTitle: "Sample School Service",
        svProvider: "School Provider",
        svWilayah: ["Jakarta"],
        svPrice: "Rp 500.000"
      }
    }
  };
  const sampleProduct = {
    data: {
      properties: {
        pSlug: "sample-product",
        pTitle: "Sample School Product",
        pImageURL1: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        pPrice: "Rp 250.000",
        pCountry: ["Indonesia"],
        pLocale: ["Jakarta"],
        pCategory: ["Education"],
        pVerify: "Verified"
      }
    }
  };
  const samplePost = {
    title: "Sample School Blog Post",
    slug: "sample-post",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    tags: ["Education", "Technology"],
    description: "This is a sample blog post about school technology.",
    published: /* @__PURE__ */ new Date(),
    source: "demo"
  };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "School Theme Demo - Colorful & Creative Design", "description": "Explore our new school theme with blue, red, yellow color scheme and Lottie animations" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 dark:from-blue-900/20 dark:via-gray-900 dark:to-yellow-900/20"> <!-- Hero Section --> <section class="text-center py-16 px-4"> <div class="max-w-4xl mx-auto"> <h1 class="text-5xl md:text-6xl font-bold mb-6"> <span class="bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
School Theme Demo
</span> </h1> <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
Experience our colorful and creative school theme with blue, red, and yellow color scheme
</p> <!-- Lottie Separator --> ${renderComponent($$result2, "SchoolLottieSeparator", $$SchoolLottieSeparator, { "animation": "school", "height": "h-20" })} </div> </section> <!-- Color Palette Section --> <section class="py-16 px-4"> <div class="max-w-6xl mx-auto"> <h2 class="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"> <span class="bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
Color Palette
</span> </h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"> <!-- Blue --> <div class="text-center"> <div class="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg flex items-center justify-center"> <span class="text-white text-2xl font-bold">BLUE</span> </div> <h3 class="text-xl font-bold text-blue-600 mb-2">Primary Blue</h3> <p class="text-gray-600 dark:text-gray-300">Main brand color for buttons and links</p> </div> <!-- Red --> <div class="text-center"> <div class="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-lg flex items-center justify-center"> <span class="text-white text-2xl font-bold">RED</span> </div> <h3 class="text-xl font-bold text-red-600 mb-2">Accent Red</h3> <p class="text-gray-600 dark:text-gray-300">Highlighting important information</p> </div> <!-- Yellow --> <div class="text-center"> <div class="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg flex items-center justify-center"> <span class="text-white text-2xl font-bold">YELLOW</span> </div> <h3 class="text-xl font-bold text-orange-600 mb-2">Warm Yellow</h3> <p class="text-gray-600 dark:text-gray-300">Card backgrounds and accents</p> </div> </div> <!-- Lottie Separator --> ${renderComponent($$result2, "SchoolLottieSeparator", $$SchoolLottieSeparator, { "animation": "star", "height": "h-16" })} </div> </section> <!-- Component Showcase --> <section class="py-16 px-4"> <div class="max-w-6xl mx-auto"> <h2 class="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"> <span class="bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
Component Showcase
</span> </h2> <!-- Project Card --> <div class="mb-16"> <h3 class="text-2xl font-bold mb-6 text-blue-600 text-center">Project Card</h3> <div class="max-w-md mx-auto"> ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": sampleProject })} </div> </div> <!-- Lottie Separator --> ${renderComponent($$result2, "SchoolLottieSeparator", $$SchoolLottieSeparator, { "animation": "books", "height": "h-16" })} <!-- Service Card --> <div class="mb-16"> <h3 class="text-2xl font-bold mb-6 text-red-600 text-center">Service Card</h3> <div class="max-w-md mx-auto"> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "service": sampleService })} </div> </div> <!-- Lottie Separator --> ${renderComponent($$result2, "SchoolLottieSeparator", $$SchoolLottieSeparator, { "animation": "pencil", "height": "h-16" })} <!-- Product Card --> <div class="mb-16"> <h3 class="text-2xl font-bold mb-6 text-yellow-600 text-center">Product Card</h3> <div class="max-w-md mx-auto"> ${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": sampleProduct })} </div> </div> <!-- Lottie Separator --> ${renderComponent($$result2, "SchoolLottieSeparator", $$SchoolLottieSeparator, { "animation": "heart", "height": "h-16" })} <!-- Post Card --> <div class="mb-16"> <h3 class="text-2xl font-bold mb-6 text-orange-600 text-center">Post Card</h3> <div class="max-w-md mx-auto"> ${renderComponent($$result2, "PostCard", $$PostCard, { "post": samplePost })} </div> </div> </div> </section> <!-- Button Showcase --> <section class="py-16 px-4"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl font-bold mb-12 text-gray-800 dark:text-white"> <span class="bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
Button Styles
</span> </h2> <div class="flex flex-wrap justify-center gap-6 mb-12"> <button class="school-btn-primary px-8 py-3 rounded-lg text-lg font-bold hover:scale-105 transition-all duration-200">
Primary Button
</button> <button class="school-btn-secondary px-8 py-3 rounded-lg text-lg font-bold hover:scale-105 transition-all duration-200">
Secondary Button
</button> <button class="school-btn-accent px-8 py-3 rounded-lg text-lg font-bold hover:scale-105 transition-all duration-200">
Accent Button
</button> </div> <!-- Lottie Separator --> ${renderComponent($$result2, "SchoolLottieSeparator", $$SchoolLottieSeparator, { "animation": "school", "height": "h-20" })} </div> </section> <!-- Footer --> <footer class="bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 text-white py-12 px-4"> <div class="max-w-4xl mx-auto text-center"> <h3 class="text-2xl font-bold mb-4">Ready to Make Your Website More Colorful?</h3> <p class="text-lg mb-6 opacity-90">
Transform your website with our school theme - colorful, creative, and perfect for educational content!
</p> <a href="/" class="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:scale-105 transition-all duration-200 shadow-lg">
Back to Home
</a> </div> </footer> </div> ` })}`;
}, "/workspace/src/pages/school-theme-demo.astro", void 0);

const $$file = "/workspace/src/pages/school-theme-demo.astro";
const $$url = "/school-theme-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SchoolThemeDemo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
