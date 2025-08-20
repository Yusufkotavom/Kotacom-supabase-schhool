# MDX Products Structure

This directory contains MDX product files that follow the same structure as Notion products. Each product file represents a single product with comprehensive information.

## File Structure

### Frontmatter (Required Fields)
```yaml
---
title: "Product Name"                    # Required: Product title
country: ["Indonesia"]                   # Required: Country of origin (array)
locale: ["City", "Region"]              # Required: City/region (array)
category: ["Category1", "Category2"]    # Required: Product categories (array)
slug: "product-name-slug"               # Required: URL slug (unique)
imageUrl: "https://example.com/image.jpg" # Optional: Product image URL
published: 2024-01-15                   # Required: Publication date
price: "Rp 100.000"                     # Optional: Product price
description: "Short description"        # Optional: Brief product description
content: |                              # Optional: Detailed content (markdown)
  ## Detailed Product Information
  
  ### Specifications
  - **Material**: Product material
  - **Size**: Product dimensions
  - **Weight**: Product weight
  
  ### Features
  - Feature 1
  - Feature 2
  
  ### Care Instructions
  1. Step 1
  2. Step 2
---
```

### Content Body (Optional)
After the frontmatter, you can add additional markdown content that will be rendered as the main product content.

## Field Descriptions

### Required Fields
- **title**: Product name (string)
- **country**: Array of countries where the product originates
- **locale**: Array of cities/regions where the product is from
- **category**: Array of product categories
- **slug**: Unique URL identifier (lowercase, use hyphens)
- **published**: Publication date (YYYY-MM-DD format)

### Optional Fields
- **imageUrl**: Product image URL
- **price**: Product price (string format)
- **description**: Brief product description
- **content**: Detailed product information in markdown format

## Content Guidelines

### Content Field Best Practices
The `content` field should include:

1. **Product Specifications**
   - Materials, dimensions, weight
   - Technical specifications
   - Available variants

2. **Features & Benefits**
   - Key product features
   - Unique selling points
   - Quality indicators

3. **Usage Instructions**
   - How to use the product
   - Care and maintenance
   - Safety information

4. **Warranty & Support**
   - Warranty terms
   - Customer support information
   - Return policy

5. **Shipping Information**
   - Delivery options
   - Shipping costs
   - Estimated delivery time

6. **Customer Reviews**
   - Testimonials
   - Ratings
   - User feedback

7. **Related Products**
   - Similar products
   - Complementary items
   - Product collections

## Example Files

### 1. Batik Product (`sample-batik-premium-jogja.mdx`)
- Traditional Indonesian batik product
- Includes detailed specifications
- Care instructions and warranty information
- Customer testimonials

### 2. Coffee Product (`kopi-arabika-toraja-premium.mdx`)
- Premium coffee product
- Brewing instructions
- Flavor profiles
- Origin information

## File Naming Convention

- Use lowercase letters
- Separate words with hyphens
- Use descriptive names
- Include product type or category
- Example: `batik-tulis-premium-jogja.mdx`

## Image Guidelines

- Use high-quality images (minimum 800x600px)
- Optimize for web (JPEG/PNG format)
- Include alt text in the content
- Use descriptive filenames
- Host images on reliable CDN

## SEO Best Practices

1. **Descriptive Titles**: Use clear, descriptive product names
2. **Rich Content**: Include detailed product information
3. **Keywords**: Naturally incorporate relevant keywords
4. **Structured Data**: Use proper markdown headings
5. **Internal Links**: Link to related products or categories

## Validation

The MDX files are validated against the schema defined in `src/content.config.ts`. Ensure all required fields are present and follow the correct data types.

## Integration with Notion

These MDX products work alongside Notion products and follow the same display structure. The `pContent` field in Notion corresponds to the `content` field in MDX files.

## Support

For questions about the MDX product structure, refer to:
- `docs/PRODUCT_CONTENT_FIELD_IMPLEMENTATION.md`
- `src/content.config.ts` (schema definition)
- `src/layouts/ProductPage.astro` (display logic)
