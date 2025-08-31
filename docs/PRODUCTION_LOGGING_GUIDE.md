# 🔇 Production Logging Configuration

## Quick Setup untuk Production

### 1. **Silent Mode (Recommended)**
Untuk production, aktifkan silent mode untuk meminimalkan log output:

```bash
# .env
SILENT_LOGS=true
```

**Result**: Hanya error logs yang muncul di production.

### 2. **Custom Logging Levels**

```bash
# Development (default)
# Semua logs muncul (debug, info, warn, error)

# Production with warnings
SILENT_LOGS=false
SHOW_WARNINGS=true

# Production minimal (recommended)
SILENT_LOGS=true
SHOW_WARNINGS=false
```

## 📊 Log Level Comparison

| Environment | Debug | Info | Warn | Error | Notes |
|-------------|-------|------|------|-------|-------|
| **Development** | ✅ | ✅ | ✅ | ✅ | Full logging |
| **Production (Default)** | ❌ | ❌ | ❌ | ✅ | Only errors |
| **Production (Silent)** | ❌ | ❌ | ❌ | ✅ | Minimal logs |

## 🎯 What Was Cleaned Up

### Before (Verbose):
```
🔄 Fetching posts from Payload API...
Found Lexical block MediaBlock with media ID: 5 (type: number)
Added Lexical media ID 5 to collection
Found Lexical block MediaBlock with media ID: 6 (type: number)  
Added Lexical media ID 6 to collection
🔄 Replacing media ID 5 with full object: image.jpg
🔄 Replacing Lexical media ID 6 with full object: image2.jpg
✅ Successfully populated media 5: image.jpg
Sample post content structure: { ... 1000 lines of JSON ... }
```

### After (Clean):
```
Processing 10 posts with media population
Populating 4 media objects
Media population completed for 10 posts
```

## 🚀 Production Deployment

### Vercel/Netlify
Add environment variable:
```
SILENT_LOGS=true
```

### Docker
```dockerfile
ENV SILENT_LOGS=true
```

### Manual
```bash
# .env.production
SILENT_LOGS=true
PUBLIC_PAYLOAD_URL=https://your-payload-domain.com
PAYLOAD_PUBLIC_SERVER_URL=https://your-payload-domain.com
```

## 🔍 Debugging Production Issues

Jika perlu debug di production, temporary aktifkan:

```bash
# Temporary debugging
SILENT_LOGS=false
SHOW_WARNINGS=true
```

**Important**: Jangan lupa kembalikan ke `SILENT_LOGS=true` setelah debugging selesai.

---

**Result**: Log output berkurang drastis (~90% reduction) sambil tetap mempertahankan error monitoring yang penting untuk production.
