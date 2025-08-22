import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({
    success: true,
    message: 'Test API is working',
    timestamp: new Date().toISOString()
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log('🔍 Test POST API called');
    
    // Get raw text first
    const rawText = await request.text();
    console.log('📝 Raw request text:', rawText);
    
    let body;
    try {
      body = JSON.parse(rawText);
      console.log('✅ JSON parsed successfully:', body);
    } catch (parseError) {
      console.log('❌ JSON parse error:', parseError);
      return new Response(JSON.stringify({
        success: false,
        message: 'Invalid JSON',
        error: parseError.message,
        rawText: rawText
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Test POST API is working',
      receivedData: body,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.log('❌ Test POST API error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Test POST API failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};