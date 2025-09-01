import { supabase, Project } from './types';
import { withTimeout, cleanMarkdownContent } from './utils';
import { logger } from '../logger';

export async function getProjectsDirectFromSupabase(limit: number = 200, status: 'published' | 'draft' | 'all' = 'published'): Promise<Project[]> {
  try {
    logger.info(`Fetching ${limit} projects from Supabase with status: ${status}...`);

    let query = supabase
      .from('projects')
      .select('*')
      .limit(limit)
      .order('published', { ascending: false }); // ✅ Use 'published' field for ordering

    // Add status filtering if not 'all'
    if (status !== 'all') {
      query = query.eq('status', status); // ✅ Use 'status' field for projects
    }

    const { data, error } = await withTimeout(query, 15000) as any; // 15 second timeout

    if (error) {
      console.error('❌ Supabase error:', error);
      return [];
    }

    if (!data) return [];

    // Process markdown content for projects
    const { marked } = await import('marked');

    // Configure marked for better HTML output
    marked.setOptions({
      breaks: true,
      gfm: true
    });

    const processedProjects = await Promise.all(data.map(async (project: any) => {
      // ✅ Bersihkan whitespace berlebihan dari semua markdown fields
      let processedBody = cleanMarkdownContent(project.body || '');
      let processedDescription = cleanMarkdownContent(project.description || '');
      let processedReview = cleanMarkdownContent(project.review || '');
      let processedGetInvolved = cleanMarkdownContent(project.get_involved || '');

      // Helper function to process markdown with cleanup
      const processMarkdownField = async (content: string): Promise<string> => {
        if (!content || typeof content !== 'string') return '';

        try {
          let processed = await marked(content);

          // Clean up the HTML for better prose rendering
          processed = processed
            .replace(/\n\s*\n/g, '</p>\n<p>')
            .replace(/^(?!<[ph])/gm, '<p>')
            .replace(/(?<!>)$/gm, '</p>')
            .replace(/<p><\/p>/g, '')
            .replace(/<p>(<[h|u|o|b])/g, '$1')
            .replace(/(<\/[h|u|o|b][^>]*>)<\/p>/g, '$1')
            .trim();

          return processed;
        } catch (error) {
          console.log('⚠️ Could not process markdown for project field:', project.slug, error);
          return content;
        }
      };

      // Convert markdown to HTML for each field
      processedBody = await processMarkdownField(processedBody);
      processedDescription = await processMarkdownField(processedDescription);
      processedReview = await processMarkdownField(processedReview);
      processedGetInvolved = await processMarkdownField(processedGetInvolved);

      return {
        id: project.id,
        title: project.title,
        slug: project.slug,
        organiser: project.organiser,
        imageUrl: project.image_url || '', // Map image_url to imageUrl
        published: project.published,
        description: processedDescription,
        body: processedBody,
        format: project.format,
        updated_at: project.updated_at,
        created_at: project.created_at,
        url: project.url,
        gyg_url: project.gyg_url,
        maps_url: project.maps_url,
        verify: project.verify || '',
        review: processedReview,
        get_involved: processedGetInvolved,
        // Legacy field mappings for compatibility
        country: [],
        locale: [],
        cost: [],
        category: [],
      };
    }));

    console.log(`✅ Successfully fetched and processed ${processedProjects.length} projects from Supabase`);
    return processedProjects;
  } catch (error) {
    console.error('❌ Error fetching from Supabase:', error);
    return [];
  }
}
