import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log('🔍 Checkout API called');
    
    const body = await request.json();
    console.log('📦 Request body:', body);
    
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
    
    console.log('✅ Validation passed, inserting to Supabase...');
    
    // Insert order to Supabase
    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          name,
          email,
          whatsapp,
          products,
          status: 'pending'
        }
      ])
      .select();
    
    if (error) {
      console.error('❌ Supabase error:', error);
      return new Response(JSON.stringify({
        success: false,
        message: 'Database error',
        error: error.message,
        details: error
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    console.log('✅ Order created successfully:', data);
    
    // Send email notification (optional)
    // You can implement email sending here or use Supabase Edge Functions
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Order created successfully',
      orderId: data[0].id
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
  } catch (error) {
    console.error('❌ Checkout error:', error);
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