# Troubleshooting Guide

## Error Filesystem Permission (Windows)

### Gejala:
```
[UnknownFilesystemError] 
EPERM: operation not permitted, rename 'content-modules.mjs.tmp' -> 'content-modules.mjs'
```

### Solusi:

1. **Kill semua proses Node.js:**
   ```bash
   taskkill /f /im node.exe
   ```

2. **Hapus folder .astro:**
   ```bash
   Remove-Item -Recurse -Force .astro
   ```

3. **Restart development server:**
   ```bash
   npm run dev
   ```

4. **Jika masih error, coba:**
   - Restart VS Code/Editor
   - Restart terminal
   - Restart komputer

## Error Directus Connection

### Gejala:
```
Error fetching posts from Directus: {
  message: `You don't have permission to access fields...`
}
```

### Solusi:

1. **Periksa file .env:**
   ```env
   DIRECTUS_URL=http://localhost:8055
   DIRECTUS_TOKEN=your-token-here
   ```

2. **Buka debug page:** `http://localhost:4321/debug-directus`

3. **Clear cache** dari debug page

4. **Periksa Directus permissions** untuk field yang diperlukan

## Error 404 untuk Slug

### Gejala:
```
[404] /terbaik-jual-game-pc-surabaya
```

### Solusi:

1. **Buka debug page:** `http://localhost:4321/debug-directus`
2. **Periksa daftar slug** yang tersedia
3. **Pastikan post published** di Directus
4. **Clear cache** jika ada perubahan data

## Error Notion Database

### Gejala:
```
path failed validation: path.database_id should be a valid uuid
```

### Solusi:

1. **Periksa Notion database ID** di `src/content.config.ts`
2. **Pastikan database ID valid** (format UUID)
3. **Periksa Notion integration token**

## MDX Rendering Issues

### Gejala:
- Konten MDX ditampilkan sebagai raw text
- Error rendering MDX
- Konten tidak terformat dengan baik

### Solusi:

1. **Fallback Parser Otomatis:**
   - Sistem memiliki fallback parser untuk MDX yang bermasalah
   - Jika ada error, akan menampilkan pesan warning dan konten yang sudah di-parse
   - Parser mendukung: headers, bold/italic, links, images, lists, code blocks

2. **Periksa Format MDX:**
   ```markdown
   # Header 1
   ## Header 2
   
   **Bold text** dan *italic text*
   
   [Link text](url)
   
   - List item 1
   - List item 2
   
   ```code block```
   `inline code`
   ```

3. **Debug MDX Content:**
   - Buka halaman MDX yang bermasalah
   - Lihat pesan warning di bagian atas
   - Periksa error details untuk informasi lebih lanjut

4. **Manual Fix:**
   - Jika fallback parser tidak cukup, edit file MDX
   - Pastikan format sesuai dengan standar Markdown
   - Test dengan Astro's built-in MDX renderer

### Fallback Parser Features:

✅ **Headers:** `# ## ### #### ##### ######`
✅ **Bold/Italic:** `**bold** *italic* __bold__ _italic_`
✅ **Links:** `[text](url)`
✅ **Images:** `![alt](src)`
✅ **Code:** ```code blocks``` dan `inline code`
✅ **Lists:** `- * +` dan `1. 2. 3.`
✅ **Blockquotes:** `> quote`
✅ **Horizontal Rules:** `--- *** ___`
✅ **Paragraphs:** Auto-wrapping text

## Performance Issues

### Gejala:
- Build lambat
- Memory usage tinggi
- Hot reload tidak berfungsi

### Solusi:

1. **Clear cache:**
   ```bash
   Remove-Item -Recurse -Force .astro
   Remove-Item -Recurse -Force node_modules/.cache
   ```

2. **Restart dengan flag:**
   ```bash
   npm run dev -- --host
   ```

3. **Periksa file size** yang besar

## Common Commands

### Development:
```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

### Troubleshooting:
```bash
# Clear Astro cache
Remove-Item -Recurse -Force .astro

# Clear node modules cache
Remove-Item -Recurse -Force node_modules/.cache

# Reinstall dependencies
npm install

# Update dependencies
npm update
```

### Debug:
```bash
# Debug page
http://localhost:4321/debug-directus

# Clear cache API
curl -X POST http://localhost:4321/api/clear-cache
```

## Environment Variables

### Required:
```env
# Directus
DIRECTUS_URL=http://localhost:8055
DIRECTUS_TOKEN=your-token

# Site
SITE_URL=https://kotacom.id
```

### Optional:
```env
# Development
NODE_ENV=development
DEBUG=true
```

## File Structure

```
src/
├── lib/
│   ├── directus.ts          # Directus client
│   ├── directus-service.ts  # Directus service
│   └── mdx-fallback.ts      # MDX fallback parser
├── pages/
│   ├── [...slug].astro      # Dynamic routes (Directus)
│   ├── blog/
│   │   └── [...slug].astro  # Blog routes (Notion/MDX)
│   ├── posts.astro          # Posts page
│   ├── debug-directus.astro # Debug page
│   └── api/
│       └── clear-cache.ts   # Cache API
├── components/
│   └── Homepage/
│       └── LatestPosts.astro # Homepage posts
└── styles/
    └── content.css          # Content styling
```

## Content Types

### Directus Posts:
- **URL:** `www.kotacom.id/slug/`
- **Source:** Directus CMS
- **Format:** HTML content
- **Features:** Pagination, caching, error handling

### Notion Posts:
- **URL:** `www.kotacom.id/blog/slug/`
- **Source:** Notion database
- **Format:** Structured data
- **Features:** Rich text, properties

### MDX Posts:
- **URL:** `www.kotacom.id/blog/slug/`
- **Source:** Local MDX files
- **Format:** Markdown + JSX
- **Features:** Fallback parser, error recovery

## Support

Jika masalah masih berlanjut:

1. **Periksa console logs** untuk error detail
2. **Buka debug page** untuk status sistem
3. **Clear cache** dan restart server
4. **Periksa file permissions** di Windows
5. **Update dependencies** ke versi terbaru
6. **Test MDX fallback parser** untuk konten bermasalah
