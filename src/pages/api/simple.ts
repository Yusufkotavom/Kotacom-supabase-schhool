import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log('🔍 Simple POST API called');
    
    // Just return success without parsing anything
    return new Response(JSON.stringify({
      success: true,
      message: 'Simple POST API is working',
      timestamp: new Date().toISOString(),
      method: request.method,
      headers: Object.fromEntries(request.headers.entries())
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.log('❌ Simple POST API error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Simple POST API failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};