# Ecommerce System for Kotacom

This document describes the modular ecommerce system that has been added to your Kotacom website, including cart management, checkout process, and automated email notifications via SendGrid.

## 🚀 Features

### Core Ecommerce Functionality
- **Shopping Cart**: Persistent cart storage using Zustand with local storage
- **Product Pages**: Enhanced with "Add to Cart" buttons
- **Checkout Process**: Complete checkout flow with customer information collection
- **Bank Transfer Payment**: Bank transfer-only payment method
- **Order Management**: Order confirmation and tracking
- **Email Automation**: Automated order confirmations via SendGrid

### Technical Features
- **State Management**: Zustand for cart state management
- **Responsive Design**: Mobile-first responsive design
- **TypeScript Support**: Full TypeScript implementation
- **Modular Architecture**: Easy to extend and customize

## 📁 File Structure

```
src/
├── components/
│   ├── AddToCartButton.astro      # Add to cart button component
│   ├── CartIcon.astro            # Cart icon in header
│   └── ... (existing components)
├── lib/
│   ├── cartStore.ts              # Cart state management
│   └── ... (existing files)
├── pages/
│   ├── cart.astro                # Shopping cart page
│   ├── checkout.astro            # Checkout page
│   ├── checkout/
│   │   └── success.astro         # Order confirmation page
│   ├── api/
│   │   └── orders.ts             # Order API endpoint
│   └── ... (existing pages)
└── layouts/
    └── ProductPage.astro         # Enhanced product page layout
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

The following packages have been added to your `package.json`:

```bash
npm install @sendgrid/mail uuid zustand
```

### 2. Environment Configuration

Create a `.env` file in your project root with the following variables:

```env
# SendGrid Configuration
SENDGRID_API_KEY=your_sendgrid_api_key_here
SENDGRID_FROM_EMAIL=noreply@yourdomain.com

# Admin Configuration
ADMIN_EMAIL=admin@yourdomain.com

# Company Information
COMPANY_NAME=Kotacom
COMPANY_PHONE=+6281234567890
COMPANY_WHATSAPP=+6281234567890
COMPANY_EMAIL=support@yourdomain.com

# Bank Transfer Information
BANK_NAME=BCA
BANK_ACCOUNT_NUMBER=1234567890
BANK_ACCOUNT_HOLDER=Your Company Name
```

### 3. SendGrid Setup

1. Create a SendGrid account at [sendgrid.com](https://sendgrid.com)
2. Generate an API key
3. Verify your sender email address
4. Add the API key to your `.env` file

### 4. Build and Test

```bash
npm run dev
```

## 🎯 How It Works

### Cart System
1. **Add to Cart**: Users can add products to cart from product pages
2. **Cart Persistence**: Cart data is stored in local storage
3. **Cart Management**: Users can view, modify quantities, and remove items
4. **Cart Icon**: Shows item count in the header

### Checkout Process
1. **Customer Information**: Collects name, email, phone, and address
2. **Bank Transfer Details**: Collects bank information for payment
3. **Order Summary**: Shows items and total
4. **Order Submission**: Creates order and sends confirmation emails

### Email Automation
1. **Customer Confirmation**: Detailed order confirmation with payment instructions
2. **Admin Notification**: Notifies admin of new orders
3. **Payment Instructions**: Clear steps for bank transfer completion

## 🔧 Customization

### Adding New Payment Methods
To add new payment methods, modify the checkout form in `src/pages/checkout.astro` and update the API endpoint in `src/pages/api/orders.ts`.

### Modifying Email Templates
Email templates are defined in `src/pages/api/orders.ts`. You can customize the HTML content and styling.

### Cart Behavior
Cart behavior can be modified in `src/lib/cartStore.ts`. The store uses Zustand for state management.

### Styling
All components use Tailwind CSS classes. You can customize the appearance by modifying the class names.

## 📱 User Experience Flow

1. **Browse Products**: Users browse products on your existing product pages
2. **Add to Cart**: Click "Add to Cart" button on any product
3. **View Cart**: Click cart icon to view cart contents
4. **Checkout**: Proceed to checkout from cart page
5. **Fill Information**: Complete customer and payment information
6. **Place Order**: Submit order and receive confirmation
7. **Bank Transfer**: Complete payment via bank transfer
8. **Order Confirmation**: Receive email with payment instructions

## 🚨 Important Notes

### Bank Transfer Process
- Orders are marked as pending until payment confirmation
- Customers must complete transfer within 24 hours
- Include Order ID in transfer description
- Send transfer receipt for order confirmation

### Email Requirements
- SendGrid API key must be valid
- Sender email must be verified in SendGrid
- Check spam folders for confirmation emails

### Security Considerations
- Form validation on both client and server side
- Environment variables for sensitive data
- API rate limiting recommended for production

## 🔍 Troubleshooting

### Common Issues

1. **Cart not updating**: Check browser console for JavaScript errors
2. **Emails not sending**: Verify SendGrid API key and sender email
3. **Checkout errors**: Check form validation and required fields
4. **Cart persistence**: Ensure localStorage is enabled in browser

### Debug Mode
Enable debug logging by checking browser console and server logs.

## 🚀 Production Deployment

1. **Environment Variables**: Set production environment variables
2. **SendGrid**: Verify production sender email
3. **SSL**: Ensure HTTPS for secure checkout
4. **Testing**: Test complete checkout flow
5. **Monitoring**: Monitor order submissions and email delivery

## 📞 Support

For technical support or customization requests, please contact your development team.

---

**Note**: This ecommerce system is designed to work alongside your existing affiliate marketing setup. It provides a direct purchase option while maintaining your affiliate partnerships.