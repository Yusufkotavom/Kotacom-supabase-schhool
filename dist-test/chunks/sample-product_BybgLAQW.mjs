import { i as createVNode, C as Fragment, _ as __astro_tag_component__ } from './astro/server_CJHufnQ6.mjs';
import 'clsx';

const frontmatter = {
  "title": "Sample Product - Software Akuntansi",
  "country": ["Indonesia"],
  "locale": ["Jawa Timur"],
  "category": ["Software", "Akuntansi"],
  "slug": "sample-software-akuntansi",
  "imageUrl": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "published": "2024-12-15T00:00:00.000Z",
  "price": "Rp 2,500,000",
  "description": "Sample software akuntansi untuk testing - akan dihapus nanti"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "sample-software-akuntansi",
    "text": "Sample Software Akuntansi"
  }, {
    "depth": 2,
    "slug": "fitur",
    "text": "Fitur"
  }, {
    "depth": 2,
    "slug": "spesifikasi",
    "text": "Spesifikasi"
  }];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h1: "h1",
    h2: "h2",
    li: "li",
    meta: "meta",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.meta, {
      charset: "utf-8"
    }), createVNode(_components.h1, {
      id: "sample-software-akuntansi",
      children: "Sample Software Akuntansi"
    }), "\n", createVNode(_components.p, {
      children: "Ini adalah sample file untuk testing MDX collection. File ini akan dihapus setelah sistem berjalan dengan baik."
    }), "\n", createVNode(_components.h2, {
      id: "fitur",
      children: "Fitur"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Laporan keuangan otomatis"
      }), "\n", createVNode(_components.li, {
        children: "Integrasi dengan bank"
      }), "\n", createVNode(_components.li, {
        children: "Multi-user access"
      }), "\n", createVNode(_components.li, {
        children: "Cloud backup"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "spesifikasi",
      children: "Spesifikasi"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Platform: Web-based"
      }), "\n", createVNode(_components.li, {
        children: "Database: MySQL"
      }), "\n", createVNode(_components.li, {
        children: "Support: 24/7"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "File ini hanya untuk testing dan akan dihapus."
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "/products/sample-product";
const file = "/workspace/src/pages/products/sample-product.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspace/src/pages/products/sample-product.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
