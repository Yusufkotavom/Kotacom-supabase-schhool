import { supabase, Service, MetadataMap } from './types';
import { withTimeout, cleanMarkdownContent } from './utils';
import { logger } from '../logger';

// Helper function to get tags for services
async function getTagsForServices(serviceIds: number[]): Promise<Map<number, string[]>> {
  const tagsMap = new Map<number, string[]>();

  if (serviceIds.length === 0) return tagsMap;

  try {
    const { data: tagsData, error } = await withTimeout(
      supabase
        .from('services_tags')
        .select('_parent_id, value')
        .in('_parent_id', serviceIds)
        .order('_order', { ascending: true }),
      8000 // 8 second timeout for service tags query
    ) as any;

    if (!error && tagsData) {
      tagsData.forEach((tag: any) => {
        const serviceId = tag._parent_id;
        if (!tagsMap.has(serviceId)) {
          tagsMap.set(serviceId, []);
        }
        tagsMap.get(serviceId)!.push(tag.value);
      });
    }
  } catch (error) {
    console.log('⚠️ Could not fetch service tags:', error);
  }

  return tagsMap;
}

// Helper function to get categories for services
async function getCategoriesForServices(serviceIds: number[]): Promise<Map<number, string[]>> {
  const categoriesMap = new Map<number, string[]>();

  if (serviceIds.length === 0) return categoriesMap;

  try {
    const { data: categoriesData, error } = await withTimeout(
      supabase
        .from('services_categories')
        .select('_parent_id, value')
        .in('_parent_id', serviceIds)
        .order('_order', { ascending: true }),
      8000 // 8 second timeout for service categories query
    ) as any;

    if (!error && categoriesData) {
      categoriesData.forEach((category: any) => {
        const serviceId = category._parent_id;
        if (!categoriesMap.has(serviceId)) {
          categoriesMap.set(serviceId, []);
        }
        categoriesMap.get(serviceId)!.push(category.value);
      });
    }
  } catch (error) {
    console.log('⚠️ Could not fetch service categories:', error);
  }

  return categoriesMap;
}

export async function getServicesDirectFromSupabase(limit: number = 200, status: 'published' | 'draft' | 'all' = 'published'): Promise<Service[]> {
  try {
    logger.info(`Fetching ${limit} services from Supabase with status: ${status}...`);

    let query = supabase
      .from('services')
      .select('*')
      .limit(limit)
      .order('published', { ascending: false }); // ✅ Use 'published' field for ordering

    // Add status filtering if not 'all'
    if (status !== 'all') {
      query = query.eq('status', status); // ✅ Use 'status' field for services
    }

    const { data, error } = await withTimeout(query, 15000) as any; // 15 second timeout

    if (error) {
      console.error('❌ Supabase error:', error);
      return [];
    }

    if (!data) return [];

    // Get tags and categories for services with timeout
    const serviceIds = data.map((service: any) => service.id);
    const [tagsMap, categoriesMap] = await withTimeout(
      Promise.all([
        getTagsForServices(serviceIds),
        getCategoriesForServices(serviceIds)
      ]),
      10000 // 10 second timeout for metadata fetching
    ) as [Map<number, string[]>, Map<number, string[]>];

    // Process markdown content for services
    const { marked } = await import('marked');

    // Configure marked for better HTML output
    marked.setOptions({
      breaks: true,
      gfm: true
    });

    const processedServices = await Promise.all(data.map(async (service: any) => {
      let processedBody = service.body || '';

      // ✅ Bersihkan whitespace berlebihan dari markdown content
      if (processedBody && typeof processedBody === 'string') {
        processedBody = cleanMarkdownContent(processedBody);
      }

      // Convert markdown to HTML if content exists
      if (processedBody && typeof processedBody === 'string') {
        try {
          processedBody = await marked(processedBody);

          // Clean up the HTML for better prose rendering
          processedBody = processedBody
            .replace(/\n\s*\n/g, '</p>\n<p>')
            .replace(/^(?!<[ph])/gm, '<p>')
            .replace(/(?<!>)$/gm, '</p>')
            .replace(/<p><\/p>/g, '')
            .replace(/<p>(<[h|u|o|b])/g, '$1')
            .replace(/(<\/[h|u|o|b][^>]*>)<\/p>/g, '$1')
            .trim();
        } catch (error) {
          console.log('⚠️ Could not process markdown for service:', service.slug, error);
        }
      }

      return {
        ...service,
        body: processedBody,
        tags: tagsMap.get(service.id) || [],
        category: categoriesMap.get(service.id) || Array.isArray(service.category) ? service.category : [],
        // Ensure proper field mappings
        imageUrl1: service.imageUrl1 || service.cover_image || '',
        wilayah: Array.isArray(service.wilayah) ? service.wilayah : [],
        type: Array.isArray(service.type) ? service.type : [],
      };
    }));

    console.log(`✅ Successfully fetched and processed ${processedServices.length} services from Supabase`);
    console.log(`🏷️ Enhanced ${processedServices.filter((s: any) => s.tags?.length > 0).length} services with tags`);
    console.log(`📂 Enhanced ${processedServices.filter((s: any) => s.category?.length > 0).length} services with categories`);

    return processedServices;
  } catch (error) {
    console.error('❌ Error fetching from Supabase:', error);
    return [];
  }
}
