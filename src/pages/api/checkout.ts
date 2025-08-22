import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, whatsapp, products } = await request.json();
    
    // Validate required fields
    if (!name || !email || !whatsapp || !products || products.length === 0) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Missing required fields'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
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
      console.error('Supabase error:', error);
      throw error;
    }
    
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
    console.error('Checkout error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Failed to create order'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};