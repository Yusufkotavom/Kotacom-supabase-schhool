import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log('🔍 Debug API called');
    console.log('📝 Request method:', request.method);
    console.log('📝 Request headers:', Object.fromEntries(request.headers.entries()));
    
    // Try to get content length
    const contentLength = request.headers.get('content-length');
    console.log('📝 Content-Length:', contentLength);
    
    // Try to get raw text
    let rawText = '';
    try {
      rawText = await request.text();
      console.log('📝 Raw text length:', rawText.length);
      console.log('📝 Raw text (first 100 chars):', rawText.substring(0, 100));
      console.log('📝 Raw text (last 100 chars):', rawText.substring(Math.max(0, rawText.length - 100)));
    } catch (textError) {
      console.log('❌ Error reading text:', textError);
    }
    
    // Try to get as array buffer
    let arrayBuffer;
    try {
      arrayBuffer = await request.arrayBuffer();
      console.log('📝 ArrayBuffer length:', arrayBuffer.byteLength);
    } catch (bufferError) {
      console.log('❌ Error reading array buffer:', bufferError);
    }
    
    // Try to get as stream
    try {
      const reader = request.body?.getReader();
      if (reader) {
        console.log('📝 Stream reader available');
        const { done, value } = await reader.read();
        console.log('📝 Stream read result:', { done, valueLength: value?.length });
      } else {
        console.log('📝 No stream reader available');
      }
    } catch (streamError) {
      console.log('❌ Error reading stream:', streamError);
    }
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Debug info collected',
      timestamp: new Date().toISOString(),
      method: request.method,
      headers: Object.fromEntries(request.headers.entries()),
      contentLength: contentLength,
      rawTextLength: rawText.length,
      rawTextPreview: rawText.substring(0, 100),
      arrayBufferLength: arrayBuffer?.byteLength || 0
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.log('❌ Debug API error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Debug API failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};