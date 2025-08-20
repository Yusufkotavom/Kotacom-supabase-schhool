# WhatsApp Tracking Implementation Guide

## Overview

This project now includes comprehensive WhatsApp click tracking to monitor user engagement and conversion rates. The tracking system is optimized for performance and provides detailed analytics.

## Features

### ✅ What's Implemented

1. **Performance Optimized** - Minimal impact on website speed
2. **Production Only** - Tracking only loads in production environment
3. **Multiple Placements** - Track different WhatsApp button locations
4. **GA4 Integration** - Automatic Google Analytics 4 event tracking
5. **Local Storage** - Development tracking with localStorage
6. **Error Handling** - Graceful fallbacks and error logging

### 📊 Tracking Data Collected

- **Placement** - Where the WhatsApp button was clicked
- **Page URL** - Which page the click occurred on
- **Page Title** - Title of the page
- **Timestamp** - Exact time of the click
- **Session Data** - User session information

## Implementation Details

### 1. Global Tracking Script

**Location**: `src/layouts/MainLayout.astro`

```astro
<!-- WhatsApp Tracking Script (Production Only) -->
{isProduction && (
  <script is:inline>
    // Optimized WhatsApp tracking with minimal performance impact
    function trackWhatsAppClick(placement) {
      // Use requestIdleCallback for better performance
      if (window.requestIdleCallback) {
        requestIdleCallback(() => {
          trackWhatsAppEvent(placement);
        });
      } else {
        // Fallback for older browsers
        setTimeout(() => {
          trackWhatsAppEvent(placement);
        }, 0);
      }
    }
    
    // ... rest of tracking code
  </script>
)}
```

### 2. Updated Components

#### ContactButtons.astro
- **Location**: `src/components/ContactButtons.astro`
- **Tracking**: `floating_button` placement
- **Usage**: Automatically included in MainLayout

```astro
<a 
  href={whatsappUrl}
  onclick="trackWhatsAppClick('floating_button')"
  class="contact-button whatsapp-button"
>
```

#### Header.astro
- **Location**: `src/components/Header.astro`
- **Tracking**: `header_nav` placement
- **Usage**: Navigation WhatsApp button

```astro
<a
  href="https://wa.me/085799520350"
  onclick="trackWhatsAppClick('header_nav')"
  class="cursor-pointer text-white bg-green-600..."
>
```

#### WhatsAppButton.astro
- **Location**: `src/components/WhatsAppButton.astro`
- **Tracking**: Customizable placement
- **Usage**: Content CTAs

```astro
<WhatsAppButton 
  placement="hero_section"
  whatsappMessage="Custom message here"
/>
```

## Usage Examples

### 1. Basic WhatsApp Button

```astro
---
import WhatsAppButton from "../components/WhatsAppButton.astro";
---

<WhatsAppButton />
```

### 2. Custom Placement Tracking

```astro
<WhatsAppButton 
  placement="pricing_card"
  whatsappMessage="Halo! Saya tertarik dengan paket pricing."
/>
```

### 3. Custom Message

```astro
<WhatsAppButton 
  placement="hero_section"
  whatsappMessage="Halo! Saya melihat halaman {url}. Bisa tolong jelaskan lebih detail?"
/>
```

### 4. Disable Tracking

```astro
<WhatsAppButton 
  placement="footer"
  trackClicks={false}
/>
```

## Tracking Placements

### Standard Placements

| Placement | Description | Usage |
|-----------|-------------|-------|
| `floating_button` | ContactButtons.astro | Global floating buttons |
| `header_nav` | Header.astro | Navigation WhatsApp button |
| `content_cta` | Default for WhatsAppButton | General content CTAs |
| `hero_section` | Hero section CTAs | Main page CTAs |
| `pricing_card` | Pricing section CTAs | Package selection |
| `footer` | Footer CTAs | Bottom of page |

### Custom Placements

You can use any custom placement name:

```astro
<WhatsAppButton placement="custom_placement_name" />
```

## Analytics Integration

### Google Analytics 4

The tracking automatically sends events to GA4:

```javascript
// generate_lead event
gtag('event', 'generate_lead', {
  method: 'whatsapp',
  content_name: `whatsapp_click_${placement}`,
  value: 1,
  currency: 'IDR'
});

// whatsapp_click event
gtag('event', 'whatsapp_click', {
  placement: placement,
  page_url: window.location.href,
  page_title: document.title,
  timestamp: new Date().toISOString()
});
```

### View Analytics Data

1. **GA4 Dashboard**:
   - Go to Google Analytics
   - Events → All Events
   - Look for `generate_lead` and `whatsapp_click` events

2. **Development Testing**:
   - Open browser console
   - Click WhatsApp buttons
   - View console logs

3. **Local Storage Data**:
   ```javascript
   // View all tracked clicks
   console.log(JSON.parse(localStorage.getItem('whatsapp_clicks') || '[]'));
   ```

## Performance Optimization

### 1. Production Only Loading

```astro
const isProduction = import.meta.env.PROD;

{isProduction && (
  <script is:inline>
    // Tracking code only loads in production
  </script>
)}
```

### 2. RequestIdleCallback

```javascript
// Execute tracking when browser is idle
if (window.requestIdleCallback) {
  requestIdleCallback(() => {
    trackWhatsAppEvent(placement);
  });
} else {
  // Fallback for older browsers
  setTimeout(() => {
    trackWhatsAppEvent(placement);
  }, 0);
}
```

### 3. Local Storage Management

```javascript
// Keep only last 100 clicks to prevent storage bloat
if (existingClicks.length > 100) {
  existingClicks.splice(0, existingClicks.length - 100);
}
```

## Testing

### Test Page

Visit `/test-whatsapp-tracking` to test all tracking functionality:

1. **Header Navigation** - Test header WhatsApp button
2. **Floating Buttons** - Test ContactButtons.astro
3. **Content CTAs** - Test WhatsAppButton.astro
4. **Manual Tracking** - Test direct function calls
5. **View Data** - View all tracked clicks

### Manual Testing

```javascript
// Test tracking function directly
trackWhatsAppClick('test_placement');

// View tracking data
console.log(JSON.parse(localStorage.getItem('whatsapp_clicks') || '[]'));
```

## Migration Guide

### From Old WhatsApp Buttons

**Before**:
```html
<a href="https://wa.me/085799520350?text=Hello" target="_blank">
  WhatsApp
</a>
```

**After**:
```astro
<WhatsAppButton 
  placement="content_cta"
  whatsappMessage="Hello"
/>
```

### From ContactButtons (if needed)

**Before**:
```astro
<ContactButtons trackClicks={false} />
```

**After**:
```astro
<ContactButtons trackClicks={true} />
```

## Troubleshooting

### Common Issues

1. **Tracking not working in development**:
   - Tracking only loads in production
   - Check console for errors

2. **GA4 events not appearing**:
   - Verify GA4 is properly configured
   - Check `PUBLIC_GA_MEASUREMENT_ID` in environment

3. **Performance issues**:
   - Tracking uses `requestIdleCallback` for optimization
   - Minimal JavaScript footprint (~500 bytes)

### Debug Mode

Enable debug logging:

```javascript
// Add to tracking script for debugging
console.log('WhatsApp tracking debug:', {
  placement,
  gtag: typeof gtag !== 'undefined',
  timestamp: new Date().toISOString()
});
```

## Best Practices

### 1. Placement Naming

Use descriptive placement names:
- ✅ `pricing_card_bronze`
- ✅ `hero_section_main`
- ❌ `btn1`, `link2`

### 2. Message Customization

Make messages context-aware:
```astro
<WhatsAppButton 
  placement="pricing_card"
  whatsappMessage="Halo! Saya tertarik dengan paket pricing di {url}. Bisa tolong kirimkan informasi lengkapnya?"
/>
```

### 3. Performance Monitoring

Monitor Core Web Vitals after implementation:
- Lighthouse scores should remain >90
- No significant impact on LCP, FID, CLS

## Future Enhancements

### Planned Features

1. **Conversion Tracking** - Track actual WhatsApp conversations
2. **A/B Testing** - Test different CTA placements
3. **Advanced Analytics** - Conversion funnel analysis
4. **Heatmap Integration** - Visual click tracking

### Custom Events

Add custom tracking events:

```javascript
// Track specific business events
gtag('event', 'whatsapp_lead_qualified', {
  placement: placement,
  lead_value: 1000,
  currency: 'IDR'
});
```

## Support

For questions or issues with WhatsApp tracking:

1. Check this documentation
2. Test with `/test-whatsapp-tracking` page
3. Review browser console for errors
4. Verify GA4 configuration

---

**Last Updated**: January 2025
**Version**: 1.0.0
