# Extract Notion Products Data to CSV

## Method 1: Manual Data Collection (Recommended)

Since you have working Notion MCP, here's how to extract your product data:

### Step 1: Get Product List
Use the MCP search to get all products:
```
Search query: "*"
Data source: collection://24a57877-5392-81b6-96c7-000bb78bd042
```

### Step 2: For Each Product
1. Copy the product ID from search results
2. Use `mcp_Notion_fetch` to get full product details
3. Extract these fields:

**Required Fields:**
- `id` - Product ID
- `title` - Product title (pTitle)
- `slug` - URL slug (pSlug) 
- `price` - Price (pPrice)
- `description` - Short description
- `content` - Full content from pContent
- `status` - Published status
- `category` - Categories (pCategory)
- `country` - Country (pCountry)
- `locale` - Location (pLocale)
- `imageUrl1` - Main image (pImageURL1)
- `published` - Published date (pPublished)

**E-commerce Links:**
- `tokopediaUrl` - (pTokopediaURL)
- `shopeeUrl` - (pShopeeURL)
- `blibliUrl` - (pBlibliURL)
- `bukalapakUrl` - (pBukalapakURL)
- `lazadaUrl` - (pLazadaURL)

### Step 3: Format the Data

Create a structure like this for each product:

```javascript
{
  id: '24d57877-5392-81f6-844f-f213c665006a',
  title: 'PC Rakitan Core i7 4gb 500gb Lengkap Keyboard Mouse',
  slug: 'pc-rakitan-core-i7-4gb-500gb-lengkap-keyboard-mouse', 
  price: '499000',
  description: 'PC Office untuk keperluan administrasi',
  content: `Full product description here...`, // Copy from pContent
  status: 'Published',
  category: 'kotacom', // Join array with semicolons if multiple
  country: 'Indonesia',
  locale: 'Jawa Timur',
  imageUrl1: 'https://...',
  published: '2024-08-18',
  tokopediaUrl: 'https://www.kotacom.id',
  shopeeUrl: 'https://www.kotacom.id',
  // ... other fields
}
```

### Step 4: Add to Script

1. Open `kotacom-supabase/scripts/notion-products-to-csv.mjs`
2. Replace the `SAMPLE_PRODUCTS` array with your actual product data
3. Run the script:

```bash
node kotacom-supabase/scripts/notion-products-to-csv.mjs
```

## Method 2: Quick CSV Template

If you prefer to manually fill a CSV template:

1. Create a CSV file with these headers:
```
id,title,slug,price,description,content,status,category,country,locale,imageUrl1,published,tokopediaUrl,shopeeUrl,blibliUrl,bukalapakUrl,lazadaUrl
```

2. Fill each row with your product data
3. For the `content` field, make sure to:
   - Remove line breaks (replace with spaces)
   - Escape quotes by doubling them ("")
   - Wrap the entire field in quotes if it contains commas

## Method 3: Use the CSV Generator

I've created a script that generates a CSV. To use it:

1. **Extract your Notion data** using MCP
2. **Update the SAMPLE_PRODUCTS** in the script with your real data
3. **Run the script**:
```bash
cd kotacom-supabase
node scripts/notion-products-to-csv.mjs
```

This will create `notion-products.csv` in your project root.

## Next Steps

Once you have the CSV:

1. **Import to Supabase** - Create/update the products table
2. **Update Astro integration** - Modify the product pages to use Supabase data
3. **Test the integration** - Verify all products display correctly

## Sample Product Structure

Based on your Notion database, here's the complete field mapping:

| Notion Field | CSV Field | Description |
|-------------|-----------|-------------|
| pTitle | title | Product title |
| pSlug | slug | URL slug |
| pPrice | price | Price in rupiah |
| pContent | content | Full product description |
| pCategory | category | Product categories |
| pCountry | country | Country (Indonesia) |
| pLocale | locale | Specific location |
| pImageURL1 | imageUrl1 | Main product image |
| pImageURL2 | imageUrl2 | Secondary image |
| pImageURL3 | imageUrl3 | Third image |
| pPublished | published | Publication date |
| pTokopediaURL | tokopediaUrl | Tokopedia link |
| pShopeeURL | shopeeUrl | Shopee link |
| pBlibliURL | blibliUrl | Blibli link |
| pBukalapakURL | bukalapakUrl | Bukalapak link |
| pLazadaURL | lazadaUrl | Lazada link |
| pVerify | verify | Verification status |
| Status | status | Publication status |

Let me know when you're ready to proceed with the data extraction!
