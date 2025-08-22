import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log('🔍 Simple Checkout API called');
    
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
    
    const { name, email, whatsapp, products } = body;
    
    // Validate required fields
    if (!name || !email || !whatsapp || !products || products.length === 0) {
      console.log('❌ Validation failed:', { name, email, whatsapp, productsLength: products?.length });
      return new Response(JSON.stringify({
        success: false,
        message: 'Missing required fields',
        received: { name, email, whatsapp, productsLength: products?.length }
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    console.log('✅ Validation passed, simulating order creation...');
    
    // Simulate order creation (without Supabase for now)
    const mockOrderId = `order-${Date.now()}`;
    
    console.log('✅ Mock order created successfully:', mockOrderId);
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Order created successfully (mock)',
      orderId: mockOrderId,
      receivedData: body
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
  } catch (error) {
    console.error('❌ Simple Checkout error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Failed to create order',
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};