import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_CJHufnQ6.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<h1 id=\"hello-from-sample-post\">Hello from Sample Post</h1>\n<p>This is a simple markdown post used for build verification.</p>";

				const frontmatter = {"title":"Sample Post","slug":"sample-post","tags":["sample","intro"],"published":"2025-01-01T00:00:00.000Z","description":"This is a sample blog post to verify MD content shows on index and home."};
				const file = "/workspace/src/pages/posts/sample-post.md";
				const url = "/posts/sample-post";
				function rawContent() {
					return "   \n                    \n                   \n                         \n                     \n                                                                                       \n   \n\n# Hello from Sample Post\n\nThis is a simple markdown post used for build verification.\n\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"hello-from-sample-post","text":"Hello from Sample Post"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`<meta charset="utf-8">${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
