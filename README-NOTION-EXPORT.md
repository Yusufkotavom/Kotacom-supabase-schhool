# Notion to Supabase Product Export - Simple CSV Method

## ✅ What's Ready

I've created a simple CSV export system for your Notion products. Here's what you have:

### Files Created:
- `scripts/notion-products-to-csv.mjs` - Main CSV export script
- `scripts/extract-notion-data.md` - Instructions for data extraction
- `notion-products.csv` - Sample CSV output (1 product example)

## 🚀 Next Steps

### Step 1: Export Your Notion Data

1. **Use your Notion MCP** to get all product data:
   ```
   Search in your Notion: "*" 
   Database: PRODUCT (active)
   ```

2. **For each product**, fetch the full details using `mcp_Notion_fetch`

3. **Update the script** with your real data:
   - Open `scripts/notion-products-to-csv.mjs`
   - Replace the `SAMPLE_PRODUCTS` array with your actual products
   - Follow the structure shown in the sample

### Step 2: Generate CSV

```bash
cd kotacom-supabase
node scripts/notion-products-to-csv.mjs
```

This creates `notion-products.csv` with all your products including full content.

### Step 3: Import to Supabase

The CSV will have these columns:
```
id, title, slug, price, description, content, status, category, 
country, locale, imageUrl1, published, tokopediaUrl, shopeeUrl, 
blibliUrl, bukalapakUrl, lazadaUrl, verify
```

You can import this directly into Supabase or use it to create your products table.

## 📋 Sample Product Structure

Based on your Notion database, each product should have:

```javascript
{
  id: 'notion-page-id',
  title: 'Product Name',
  slug: 'product-url-slug',
  price: '499000',
  description: 'Short description',
  content: 'Full product description with HTML/markdown',
  status: 'Published',
  category: 'kotacom',
  country: 'Indonesia', 
  locale: 'Jawa Timur',
  imageUrl1: 'https://...',
  published: '2024-08-18',
  tokopediaUrl: 'https://...',
  shopeeUrl: 'https://...',
  // ... other marketplace URLs
}
```

## 🔧 Current Status

✅ **CSV Export Script**: Ready to use  
✅ **Sample Output**: Generated successfully  
⏳ **Data Collection**: You need to extract from Notion  
⏳ **Supabase Import**: Next step after data collection  
⏳ **Astro Integration**: Final step  

## 📊 What the CSV Contains

The generated CSV includes:
- **All product metadata** (title, price, category, etc.)
- **Full content** from your Notion pages (with HTML cleaned up)
- **E-commerce links** (Tokopedia, Shopee, etc.)
- **Properly escaped** CSV format for easy import

## 🎯 Key Benefits

- **Simple process** - Just copy your Notion data into the script
- **Includes content** - Full product descriptions preserved
- **Ready for import** - CSV format compatible with Supabase
- **Maintains structure** - All your product fields mapped correctly

## 🤝 Need Help?

1. **Extracting Notion data** - Use the MCP tools you already have working
2. **CSV formatting** - The script handles all escaping and formatting
3. **Supabase import** - We can help with table creation next

The foundation is ready! Just need to populate it with your actual Notion product data.
