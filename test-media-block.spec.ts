import { test, expect } from '@playwright/test';

test.describe('MediaBlock Rendering Debug', () => {
  test('should render MediaBlock with Vercel Blob URL instead of fallback', async ({ page }) => {
    // Navigate to a page that has MediaBlock
    await page.goto('http://localhost:4321/your-test-post-slug');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Take screenshot for debugging
    await page.screenshot({ path: 'media-block-debug.png', fullPage: true });
    
    // Check if MediaBlock is rendered
    const mediaBlock = page.locator('.media-container');
    await expect(mediaBlock).toBeVisible();
    
    // Get the image element
    const image = mediaBlock.locator('img');
    await expect(image).toBeVisible();
    
    // Get image src attribute
    const imageSrc = await image.getAttribute('src');
    console.log('🔍 Image src:', imageSrc);
    
    // Check if URL is Vercel Blob (not fallback)
    expect(imageSrc).not.toContain('via.placeholder.com');
    expect(imageSrc).toContain('public.blob.vercel-storage.com');
    
    // Check console logs for debugging info
    const consoleLogs: string[] = [];
    page.on('console', msg => {
      if (msg.text().includes('MediaBlock') || msg.text().includes('Vercel Blob')) {
        consoleLogs.push(msg.text());
        console.log('📝 Console:', msg.text());
      }
    });
    
    // Wait a bit for console logs
    await page.waitForTimeout(2000);
    
    // Log all relevant console messages
    console.log('📋 All MediaBlock related console logs:', consoleLogs);
  });
  
  test('should show proper debug information in console', async ({ page }) => {
    await page.goto('http://localhost:4321/your-test-post-slug');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check console for debug messages
    const debugMessages: string[] = [];
    page.on('console', msg => {
      if (msg.text().includes('🔍') || msg.text().includes('🖼️') || msg.text().includes('🎨')) {
        debugMessages.push(msg.text());
        console.log('🐛 Debug:', msg.text());
      }
    });
    
    // Wait for console messages
    await page.waitForTimeout(3000);
    
    // Verify we have debug messages
    expect(debugMessages.length).toBeGreaterThan(0);
    
    // Check for specific debug messages
    const hasMediaBlockDebug = debugMessages.some(msg => msg.includes('MediaBlock Debug'));
    const hasVercelBlobDebug = debugMessages.some(msg => msg.includes('Debug Vercel Blob'));
    const hasGeneratedUrl = debugMessages.some(msg => msg.includes('Generated Vercel Blob URL'));
    
    expect(hasMediaBlockDebug).toBe(true);
    expect(hasVercelBlobDebug).toBe(true);
    expect(hasGeneratedUrl).toBe(true);
    
    console.log('✅ Debug messages found:', debugMessages);
  });
  
  test('should handle environment variables correctly', async ({ page }) => {
    await page.goto('http://localhost:4321/your-test-post-slug');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check environment variable debug info
    const envDebugMessages: string[] = [];
    page.on('console', msg => {
      if (msg.text().includes('envVars') || msg.text().includes('VERCEL_BLOB_STORE_ID')) {
        envDebugMessages.push(msg.text());
        console.log('🔧 Env Debug:', msg.text());
      }
    });
    
    // Wait for console messages
    await page.waitForTimeout(2000);
    
    // Check if environment variables are being read
    expect(envDebugMessages.length).toBeGreaterThan(0);
    
    // Verify store ID is not fallback
    const hasValidStoreId = envDebugMessages.some(msg => 
      msg.includes('abc123def456') || 
      msg.includes('your-store-id') === false
    );
    
    console.log('🔧 Environment debug messages:', envDebugMessages);
    console.log('✅ Valid store ID found:', hasValidStoreId);
  });
  
  test('should render image with proper Vercel Blob URL structure', async ({ page }) => {
    await page.goto('http://localhost:4321/your-test-post-slug');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Get all images on the page
    const images = page.locator('img');
    const imageCount = await images.count();
    
    console.log(`🔍 Found ${imageCount} images on page`);
    
    // Check each image
    for (let i = 0; i < imageCount; i++) {
      const image = images.nth(i);
      const src = await image.getAttribute('src');
      const alt = await image.getAttribute('alt');
      
      console.log(`🖼️ Image ${i + 1}:`, { src, alt });
      
      // If it's a MediaBlock image, check URL structure
      if (alt && alt.includes('Media')) {
        expect(src).toMatch(/^https:\/\/[a-zA-Z0-9]+\.public\.blob\.vercel-storage\.com\/.+$/);
        console.log(`✅ Image ${i + 1} has valid Vercel Blob URL:`, src);
      }
    }
  });
});
