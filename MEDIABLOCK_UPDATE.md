# 🖼️ MediaBlock Payload CMS Integration Update

## 📋 Overview

Update ini memperbaiki rendering MediaBlock dari Payload CMS di project Astro, terutama untuk menangani Vercel Blob storage dengan benar.

## ⚡ Perubahan Utama

### 1. **NEW: Payload API Endpoint dengan Media Population**
- **Sebelum**: Fetch dari Supabase yang tidak populate media relationships
- **Sekarang**: Custom API endpoint `/api/posts-populated` di Payload yang automatically populate semua media dalam content blocks

### 2. **Enhanced Astro Integration**
- **Sebelum**: Mengandalkan manual population di client-side
- **Sekarang**: Fetch data yang sudah fully populated dari Payload API dengan fallback ke Supabase

### 3. **Fix Media URL Extraction**
- **Sebelum**: Menggunakan hardcoded store ID dan generate URL manual
- **Sekarang**: Menggunakan URL yang sudah disediakan oleh Payload CMS via populated media objects

### 4. **Improved Error Handling & Fallback**
- Try Payload API first untuk optimal performance
- Fallback to Supabase direct jika Payload API tidak available
- Enhanced debug logging untuk troubleshooting

### 5. **Support Multiple Image Sizes**
- Prioritas sizes: `medium` → `small` → `large` → `xlarge` → `original url`
- Fallback ke URL utama jika sizes tidak tersedia

### 6. **Enhanced Caption Handling**
- Support untuk Lexical rich text di caption
- Fallback ke plain text jika needed

## 🔧 Technical Changes

### NEW File: `payload/src/endpoints/posts-populated/index.ts`
Custom API endpoint yang automatically populate media dalam content blocks:

```typescript
export const postsPopulated: Endpoint = {
  path: '/posts-populated',
  method: 'get',
  handler: async (req) => {
    // Fetch posts dengan depth 2 untuk basic population
    // Recursive populate media dalam content blocks
    // Return fully populated posts
  }
}
```

### NEW File: `kotacom-supabase/src/lib/payload-api.ts`
Helper functions untuk interface dengan Payload API:

```typescript
// Fetch posts dengan media yang sudah populated
export async function getPostsFromPayload(options: {...}): Promise<PayloadPost[]>

// Convert PayloadPost ke format yang compatible dengan Astro
export function convertPayloadPost(post: PayloadPost): any
```

### Updated: `payload/src/payload.config.ts`
Register custom endpoint:

```typescript
import { postsPopulated } from './endpoints/posts-populated'

export default buildConfig({
  // ...
  endpoints: [postsPopulated],
  // ...
})
```

### Updated: `kotacom-supabase/src/pages/[...slug].astro`
Integration dengan Payload API + fallback:

```typescript
// Try Payload API first
const payloadPosts = await getPostsFromPayload({ limit: 1000, status: 'published' });
// Fallback to Supabase if needed
```

### File: `src/lib/lexical-renderer.ts`

#### ✅ New Function: `getMediaUrl()`
```typescript
function getMediaUrl(media: any): string | null {
  // Extract URL dari Payload Media object
  // Support untuk media.url dan media.sizes[size].url
}
```

#### ✅ Updated: `renderCustomBlock()` - MediaBlock case
```typescript
case 'mediaBlock':
  const media = block.fields?.media;
  const mediaUrl = getMediaUrl(media);
  // Render dengan URL yang benar + enhanced error handling
```

#### ✅ Enhanced: `extractTextFromBlock()`
```typescript
// Support untuk Lexical rich text dalam caption
// Handle block.root.children structure
```

## 📊 Expected Media Object Structure

Dari Payload CMS, MediaBlock akan memiliki struktur:

```javascript
{
  blockType: 'mediaBlock',
  blockName: 'Sample Image',
  fields: {
    media: {
      id: 1,
      alt: "Alt text",
      filename: "image.jpg",
      url: "https://xyz.public.blob.vercel-storage.com/image.jpg",
      caption: {
        root: {
          children: [/* Lexical structure */]
        }
      },
      sizes: {
        thumbnail: { url: "...", width: 300, height: 225 },
        medium: { url: "...", width: 900, height: 675 },
        large: { url: "...", width: 1400, height: 1050 }
      }
    }
  }
}
```

## 🔍 Debug Features

### Console Logging
Update ini menambah extensive console logging:

```javascript
// Debug messages yang akan muncul:
🔍 MediaBlock Debug: { blockType, blockName, mediaObject, mediaType }
✅ MediaBlock: Successfully extracted media URL: https://...
⚠️ MediaBlock: No media object found in block.fields.media
❌ Image failed to load: https://...
```

### Error Handling
- Graceful fallback jika media object tidak valid
- Placeholder image jika URL tidak bisa di-load
- Warning messages untuk debugging

## 🧪 Testing

### 1. Test Payload API Endpoint

**Direct API Test:**
```bash
# Test the new API endpoint directly
curl http://localhost:3000/api/posts-populated?limit=5&status=published

# Check for populated media in response
curl http://localhost:3000/api/posts-populated | jq '.docs[0].content'
```

**Expected Response:**
```javascript
{
  "docs": [
    {
      "id": 1,
      "title": "Sample Post",
      "content": {
        "root": {
          "children": [
            {
              "type": "block",
              "fields": {
                "blockType": "mediaBlock",
                "media": {
                  // ✅ Full media object instead of just ID
                  "id": 5,
                  "filename": "image.jpg",
                  "url": "https://xyz.blob.vercel-storage.com/image.jpg",
                  "alt": "Sample image",
                  "sizes": { ... }
                }
              }
            }
          ]
        }
      }
    }
  ],
  "meta": {
    "mediaPopulated": true
  }
}
```

### 2. Test Astro Integration

**Check Console Logs:**
```javascript
// Saat build atau dev, lihat untuk:
🔄 Attempting to fetch posts from Payload API...
✅ Successfully fetched 10 posts from Payload API
🔄 Populating media ID 5...
✅ Successfully populated media 5: image.jpg
```

### 3. Manual Testing Steps

1. **Check Console Logs**
   ```javascript
   // Di browser console, lihat untuk:
   🔍 MediaBlock Debug: ...
   ✅ MediaBlock: Successfully extracted media URL: ...
   ```

2. **Verify Media Structure**
   ```javascript
   // Pastikan media object memiliki:
   console.log(post.content.root.children[0].fields.media);
   // Should show: { id, url, alt, filename, sizes: {...} }
   ```

3. **Test URL Accessibility**
   ```javascript
   // Test apakah URL bisa diakses:
   fetch(mediaUrl).then(r => console.log('✅ URL accessible:', r.ok))
   ```

## 🔧 Environment Requirements

### Payload CMS Configuration
Pastikan di `payload.config.ts`:

```typescript
plugins: [
  vercelBlobStorage({
    enabled: true,
    collections: {
      media: true,
    },
    token: process.env.BLOB_READ_WRITE_TOKEN,
    clientUploads: true,
  }),
]
```

### Environment Variables

#### Payload CMS Project (.env)
```bash
# Database connection string
DATABASE_URI=postgresql://user:password@host:port/database

# Payload Secret
PAYLOAD_SECRET=your-payload-secret

# Server URL (important for API access)
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Vercel Blob Storage
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...

# Supabase (if still using for fallback)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

#### Astro Project (.env)
```bash
# ⭐ CRITICAL: Payload CMS Configuration
# URL ke Payload CMS server untuk API calls dan media URLs
PUBLIC_PAYLOAD_URL=http://localhost:3000
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000

# Supabase (fallback when Payload API not available)
PUBLIC_SUPABASE_URL=https://your-project.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Production
# PUBLIC_PAYLOAD_URL=https://your-payload-domain.com
# PAYLOAD_PUBLIC_SERVER_URL=https://your-payload-domain.com
```

**⚠️ IMPORTANT**: File `.env` harus ada di root folder Astro project dengan environment variables di atas. Tanpa ini, media URLs akan gagal karena tidak bisa resolve ke Payload server.

## 🚨 Common Issues & Solutions

### Issue 1: "MediaBlock: Received media ID instead of full media object"
**Cause**: Media relationship tidak di-populate  
**Solution**: 
```javascript
// Di query Payload, pastikan populate media:
await payload.find({
  collection: 'posts',
  populate: ['content.media'] // ← Important!
})
```

### Issue 2: "Unable to extract URL from media object"
**Cause**: Vercel Blob storage belum dikonfigurasi dengan benar  
**Solution**: 
- Check `BLOB_READ_WRITE_TOKEN` environment variable
- Verify Vercel Blob plugin configuration
- Test upload media via Payload admin

### Issue 3: "Image failed to load" / "GET http://localhost:4321/api/media/file/... 404"
**Cause**: Media URLs are relative paths yang mencoba diakses dari Astro server (localhost:4321) instead of Payload server (localhost:3000)  
**Solution**: 
- ✅ **FIXED**: Update `getMediaUrl()` function untuk convert relative URLs ke absolute URLs
- Ensure environment variables `PUBLIC_PAYLOAD_URL` dan `PAYLOAD_PUBLIC_SERVER_URL` set correctly
- Check `.env` file di Astro project root folder

**Example Fix:**
```javascript
// ❌ Before: /api/media/file/image.jpg (relative, fails on Astro)
// ✅ After: http://localhost:3000/api/media/file/image.jpg (absolute, works!)
```

### Issue 4: "Vercel Blob URL not accessible"
**Cause**: URL Vercel Blob tidak valid/expired  
**Solution**: 
- Check Vercel Blob token permissions
- Verify Vercel project deployment
- Test URL accessibility

## 🚀 Quick Start Setup

### 1. Setup Environment Variables (CRITICAL)

**Astro Project** - Copy `env.example` ke `.env`:
```bash
cp env.example .env
```

**Edit `.env` file:**
```bash
# Development setup
PUBLIC_PAYLOAD_URL=http://localhost:3000
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
```

### 2. Start Both Servers

**Terminal 1** - Payload CMS:
```bash
cd payload
pnpm dev  # Starts on localhost:3000
```

**Terminal 2** - Astro:
```bash
cd kotacom-supabase  
pnpm dev  # Starts on localhost:4321
```

### 3. Test MediaBlock

1. Create post dengan MediaBlock di Payload admin (localhost:3000/admin)
2. View post di Astro frontend (localhost:4321)
3. Check browser console untuk logs:
   ```javascript
   🔗 Converting relative URL "/api/media/file/..." to absolute: "http://localhost:3000/api/media/file/..."
   ✅ MediaBlock: Successfully extracted media URL: http://localhost:3000/...
   ```

## 🎯 Next Steps

1. **Test dengan real data** dari Payload CMS
2. **Verify** Vercel Blob URLs accessible di production
3. **Monitor** console logs untuk error patterns
4. **Optimize** image loading (lazy loading, responsive images)

## 📚 Resources

- [Payload CMS Media Documentation](https://payloadcms.com/docs/upload/overview)
- [Vercel Blob Storage](https://vercel.com/docs/storage/blob)
- [Payload Vercel Blob Plugin](https://github.com/payloadcms/payload/tree/main/packages/storage-vercel-blob)

---

**Updated**: `lexical-renderer.ts`  
**Added**: `test-mediablock-payload.html`  
**Status**: ✅ Ready for testing
