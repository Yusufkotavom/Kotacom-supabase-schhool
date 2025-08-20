// Test script untuk mengecek rendering markdown
import { renderPayloadBody } from './src/lib/payload-client.ts';

const testMarkdown = `## 4) Daftar (List)

### Unordered
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
    - Sub-subitem

### Ordered
1. Langkah pertama
2. Langkah kedua
   1. Sub-langkah
   2. Sub-langkah

### Mixed Lists
- Unordered item
  1. Ordered sub-item
  2. Another ordered sub-item
     - Unordered sub-sub-item
     - Another unordered sub-sub-item
- Back to unordered

### Tables
| Feature | Wire-O | Perfect Binding |
|---------|--------|-----------------|
| Buka 180° | ✅ Ya | ❌ Tidak |
| Buka 360° | ✅ Ya | ❌ Tidak |
| Punggung | ❌ Tidak | ✅ Ya |

### Code
\`\`\`javascript
function hello() {
  console.log("Hello World!");
}
\`\`\`

### Links and Images
[Link ke Google](https://google.com)

![Gambar](https://via.placeholder.com/300x200)

### Blockquotes
> Ini adalah blockquote yang bagus
> dengan multiple lines

### Task Lists
- [x] Task yang sudah selesai
- [ ] Task yang belum selesai
- [ ] Task lain yang perlu dikerjakan

### Emoji Support
:smile: :heart: :rocket: :star:

### Abbreviations
*[HTML]: HyperText Markup Language
*[CSS]: Cascading Style Sheets

The HTML and CSS are fundamental web technologies.`;

console.log('Testing markdown rendering...\n');
console.log('Original markdown:');
console.log(testMarkdown);
console.log('\n' + '='.repeat(50) + '\n');
console.log('Rendered HTML (akan dibungkus dengan prose classes):');
console.log(renderPayloadBody({ body: testMarkdown, format: 'md' }));
console.log('\n' + '='.repeat(50) + '\n');
console.log('Untuk menggunakan di Astro, gunakan:');
console.log('<MarkdownContent doc={{ body: testMarkdown, format: "md" }} />');
console.log('\nIni akan menghasilkan:');
console.log('<article class="prose prose-lg dark:prose-invert max-w-none">');
console.log('  <!-- HTML yang sudah di-render dan di-sanitasi -->');
console.log('</article>');
