import type { APIRoute } from 'astro';
import sgMail from '@sendgrid/mail';

// Configure SendGrid
sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY || '');

export const POST: APIRoute = async ({ request }) => {
  try {
    const orderData = await request.json();
    
    // Validate order data
    if (!orderData.customer || !orderData.items || orderData.items.length === 0) {
      return new Response(JSON.stringify({ error: 'Invalid order data' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Generate order ID if not provided
    const orderId = orderData.orderId || generateOrderId();
    
    // Send confirmation email to customer
    await sendCustomerConfirmationEmail(orderData, orderId);
    
    // Send notification email to admin
    await sendAdminNotificationEmail(orderData, orderId);
    
    // Here you would typically save the order to your database
    // For now, we'll just return success
    
    return new Response(JSON.stringify({ 
      success: true, 
      orderId: orderId,
      message: 'Order placed successfully' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Error processing order:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

function generateOrderId(): string {
  const timestamp = Date.now().toString();
  const random = Math.random().toString(36).substr(2, 5);
  return `ORD-${timestamp}-${random}`.toUpperCase();
}

async function sendCustomerConfirmationEmail(orderData: any, orderId: string) {
  const { customer, items, total, payment } = orderData;
  
  const itemsList = items.map((item: any) => 
    `• ${item.title} × ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
  ).join('\n');
  
  const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-bottom: 3px solid #007bff;">
        <h1 style="color: #007bff; margin: 0;">Order Confirmation</h1>
        <p style="color: #6c757d; margin: 10px 0 0 0;">Thank you for your order!</p>
      </div>
      
      <div style="padding: 20px;">
        <h2 style="color: #333;">Order Details</h2>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
        
        <h3 style="color: #333; margin-top: 20px;">Customer Information</h3>
        <p><strong>Name:</strong> ${customer.firstName} ${customer.lastName}</p>
        <p><strong>Email:</strong> ${customer.email}</p>
        <p><strong>Phone:</strong> ${customer.phone}</p>
        <p><strong>Address:</strong> ${customer.address}, ${customer.city}, ${customer.state} ${customer.zipCode}, ${customer.country}</p>
        
        <h3 style="color: #333; margin-top: 20px;">Order Items</h3>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
          ${itemsList}
        </div>
        
        <div style="margin-top: 20px; text-align: right;">
          <p style="font-size: 18px; font-weight: bold; color: #333;">
            Total: $${total.toFixed(2)}
          </p>
        </div>
        
        <h3 style="color: #333; margin-top: 20px;">Payment Instructions - Bank Transfer</h3>
        <div style="background-color: #e3f2fd; padding: 15px; border-radius: 5px; border-left: 4px solid #2196f3;">
          <p><strong>Important:</strong> Please complete your bank transfer within 24 hours to confirm your order.</p>
          <p><strong>Bank:</strong> ${payment.bankName}</p>
          <p><strong>Account Number:</strong> ${payment.accountNumber}</p>
          <p><strong>Account Holder:</strong> ${payment.accountHolder}</p>
          <p><strong>Transfer Amount:</strong> $${total.toFixed(2)}</p>
          <p><strong>Reference:</strong> ${orderId}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-radius: 5px; border-left: 4px solid #ffc107;">
          <h4 style="color: #856404; margin-top: 0;">Next Steps:</h4>
          <ol style="color: #856404; margin: 0; padding-left: 20px;">
            <li>Complete the bank transfer within 24 hours</li>
            <li>Include your Order ID (${orderId}) in the transfer description</li>
            <li>Send us the transfer receipt via email or WhatsApp</li>
            <li>We'll process your order once payment is confirmed</li>
          </ol>
        </div>
        
        <div style="margin-top: 20px; text-align: center;">
          <p style="color: #6c757d;">If you have any questions, please contact us:</p>
          <p style="color: #007bff;">
            📧 support@kotacom.com | 📱 +62 812-3456-7890
          </p>
        </div>
      </div>
      
      <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #dee2e6;">
        <p style="color: #6c757d; margin: 0; font-size: 12px;">
          © ${new Date().getFullYear()} Kotacom. All rights reserved.
        </p>
      </div>
    </div>
  `;
  
  const msg = {
    to: customer.email,
    from: import.meta.env.SENDGRID_FROM_EMAIL || 'noreply@kotacom.com',
    subject: `Order Confirmation - ${orderId}`,
    html: emailContent,
  };
  
  try {
    await sgMail.send(msg);
    console.log(`Confirmation email sent to ${customer.email}`);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}

async function sendAdminNotificationEmail(orderData: any, orderId: string) {
  const { customer, items, total, payment } = orderData;
  
  const itemsList = items.map((item: any) => 
    `• ${item.title} × ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
  ).join('\n');
  
  const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #dc3545; padding: 20px; text-align: center; color: white;">
        <h1 style="margin: 0;">New Order Received</h1>
        <p style="margin: 10px 0 0 0;">Order ID: ${orderId}</p>
      </div>
      
      <div style="padding: 20px;">
        <h2 style="color: #333;">Order Summary</h2>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
        <p><strong>Total Amount:</strong> $${total.toFixed(2)}</p>
        
        <h3 style="color: #333; margin-top: 20px;">Customer Information</h3>
        <p><strong>Name:</strong> ${customer.firstName} ${customer.lastName}</p>
        <p><strong>Email:</strong> ${customer.email}</p>
        <p><strong>Phone:</strong> ${customer.phone}</p>
        <p><strong>Address:</strong> ${customer.address}, ${customer.city}, ${customer.state} ${customer.zipCode}, ${customer.country}</p>
        
        <h3 style="color: #333; margin-top: 20px;">Order Items</h3>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
          ${itemsList}
        </div>
        
        <h3 style="color: #333; margin-top: 20px;">Payment Information</h3>
        <p><strong>Method:</strong> Bank Transfer</p>
        <p><strong>Bank:</strong> ${payment.bankName}</p>
        <p><strong>Account Number:</strong> ${payment.accountNumber}</p>
        <p><strong>Account Holder:</strong> ${payment.accountHolder}</p>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #d4edda; border-radius: 5px; border-left: 4px solid #28a745;">
          <p style="color: #155724; margin: 0;">
            <strong>Action Required:</strong> Wait for customer to complete bank transfer and send receipt.
          </p>
        </div>
      </div>
    </div>
  `;
  
  const adminEmail = import.meta.env.ADMIN_EMAIL || 'admin@kotacom.com';
  
  const msg = {
    to: adminEmail,
    from: import.meta.env.SENDGRID_FROM_EMAIL || 'noreply@kotacom.com',
    subject: `New Order: ${orderId} - $${total.toFixed(2)}`,
    html: emailContent,
  };
  
  try {
    await sgMail.send(msg);
    console.log(`Admin notification email sent to ${adminEmail}`);
  } catch (error) {
    console.error('Error sending admin notification email:', error);
  }
}