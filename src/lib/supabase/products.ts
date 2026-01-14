import { supabase, Product, MetadataMap } from './types';
import { withTimeout, cleanMarkdownContent, cleanAndRepairHtml } from './utils';
import { logger } from '../logger';

// Helper function to get categories for products
async function getCategoriesForProducts(productIds: number[]): Promise<Map<number, string[]>> {
  const categoriesMap = new Map<number, string[]>();

  if (productIds.length === 0) return categoriesMap;

  try {
    const { data: categoriesData, error } = await withTimeout(
      supabase
        .from('products_category')
        .select('_parent_id, value')
        .in('_parent_id', productIds)
        .order('_order', { ascending: true }),
      8000 // 8 second timeout for product categories query
    ) as any;

    if (!error && categoriesData) {
      console.log(`📂 Found ${categoriesData.length} category records in database`);
      categoriesData.forEach((category: any) => {
        const productId = category._parent_id;
        if (!categoriesMap.has(productId)) {
          categoriesMap.set(productId, []);
        }
        categoriesMap.get(productId)!.push(category.value);
      });
    } else if (error) {
      console.log('⚠️ Error fetching product categories:', error);
    }
  } catch (error) {
    console.log('⚠️ Could not fetch product categories:', error);
  }

  return categoriesMap;
}

// Helper function to get tags for products
async function getTagsForProducts(productIds: number[]): Promise<Map<number, string[]>> {
  const tagsMap = new Map<number, string[]>();

  if (productIds.length === 0) return tagsMap;

  try {
    const { data: tagsData, error } = await withTimeout(
      supabase
        .from('products_type') // Note: using products_type as tags
        .select('_parent_id, value')
        .in('_parent_id', productIds)
        .order('_order', { ascending: true }),
      8000 // 8 second timeout for product tags query
    ) as any;

    if (!error && tagsData) {
      console.log(`🏷️ Found ${tagsData.length} tag records in database`);
      tagsData.forEach((tag: any) => {
        const productId = tag._parent_id;
        if (!tagsMap.has(productId)) {
          tagsMap.set(productId, []);
        }
        tagsMap.get(productId)!.push(tag.value);
      });
    } else if (error) {
      console.log('⚠️ Error fetching product tags:', error);
    }
  } catch (error) {
    console.log('⚠️ Could not fetch product tags:', error);
  }

  return tagsMap;
}

export async function getProductsDirectFromSupabase(
  limit: number = 1000, // Reduced from 1000 for build performance
  status: 'published' | 'draft' | 'all' = 'published' // Default hanya published
): Promise<Product[]> {
  try {
    logger.info(`Fetching ${limit} products from Supabase with status: ${status}...`);

    // Build query with status filter
    let query = supabase
      .from('products')
      .select('*')
      .order('published', { ascending: false }); // ✅ Use 'published' field for ordering

    // Filter by status - hanya ambil published products untuk production
    if (status !== 'all') {
      query = query.eq('status', status); // ✅ Use 'status' field for products
    }

    const { data, error } = await withTimeout(query.limit(limit), 15000) as any; // 15 second timeout

    if (error) {
      console.error('❌ Supabase error:', error);
      return [];
    }

    console.log(`✅ Successfully fetched ${data?.length || 0} products from Supabase`);

    if (!data) return [];

    // Get categories and tags for products
    const productIds = data.map((product: any) => product.id);
    console.log(`📂 Fetching categories for ${productIds.length} products...`);

    const [categoriesMap, tagsMap] = await withTimeout(
      Promise.all([
        getCategoriesForProducts(productIds),
        getTagsForProducts(productIds)
      ]),
      10000 // 10 second timeout for metadata fetching
    ) as [Map<number, string[]>, Map<number, string[]>];

    console.log(`📂 Found categories for ${categoriesMap.size} products`);
    console.log(`🏷️ Found tags for ${tagsMap.size} products`);

    // Process products with categories, tags, and markdown content
    const { marked, Renderer } = await import('marked');

    // Marked options will be configured per renderer instance

    const processedProducts = await Promise.all(data.map(async (product: any, index: number) => {
      let processedBody = product.body || '';
      let processedDescription = product.description || '';

      // ✅ Bersihkan whitespace berlebihan dari markdown content
      if (processedBody && typeof processedBody === 'string') {
        processedBody = cleanMarkdownContent(processedBody);
      }
      if (processedDescription && typeof processedDescription === 'string') {
        processedDescription = cleanMarkdownContent(processedDescription);
      }

      // Helper function to process markdown with better cleanup
      const processMarkdownField = async (content: string): Promise<string> => {
        if (!content || typeof content !== 'string') return '';

        try {
          // Configure marked for better HTML output with custom renderer
          const renderer = new Renderer();

          // Override list item rendering to avoid nested <p> tags
          renderer.listitem = (text: string, task: boolean, checked: boolean) => {
            // Ensure text is a string
            const textStr = typeof text === 'string' ? text : String(text || '');
            if (task) {
              return `<li class="task-list-item"><input type="checkbox" disabled${checked ? ' checked' : ''}> ${textStr}</li>`;
            }
            return `<li>${textStr}</li>`;
          };

          // Override paragraph rendering to avoid wrapping lists
          renderer.paragraph = (text: string) => {
            // Ensure text is a string
            const textStr = typeof text === 'string' ? text : String(text || '');
            // Don't wrap paragraphs around lists
            if (textStr.includes('<ul>') || textStr.includes('<ol>') || textStr.includes('<li>')) {
              return textStr;
            }
            return `<p>${textStr}</p>`;
          };

          // Use custom renderer
          const processed = await marked(content, { renderer });

          // Apply additional HTML cleanup
          return cleanAndRepairHtml(processed);
        } catch (error) {
          console.log('⚠️ Could not process markdown for product field:', product.slug, error);
          return content;
        }
      };

      // Convert markdown to HTML for each field
      processedBody = await processMarkdownField(processedBody);
      processedDescription = await processMarkdownField(processedDescription);

      return {
        ...product,
        body: processedBody,
        description: processedDescription,
        category: categoriesMap.get(product.id) || (Array.isArray(product.category) ? product.category : []),
        tags: tagsMap.get(product.id) || (Array.isArray(product.tags) ? product.tags : []),
      };
    }));

    return processedProducts;
  } catch (error) {
    console.error('❌ Error fetching from Supabase:', error);
    return [];
  }
}
