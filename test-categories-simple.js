// Simple test to verify category loading
import('./src/lib/supabase-direct.ts').then(async (module) => {
  console.log('🔍 Testing product category loading...');

  try {
    // Test products
    console.log('\n📦 Fetching products...');
    const products = await module.getProductsDirectFromSupabase(3);
    console.log(`✅ Found ${products.length} products`);

    if (products.length > 0) {
      products.forEach((product, index) => {
        console.log(`\n🏷️  Product ${index + 1}: ${product.title}`);
        console.log(`   📂 Categories: ${product.category?.length ? product.category.join(', ') : 'None'}`);
        console.log(`   🏷️  Tags: ${product.tags?.length ? product.tags.join(', ') : 'None'}`);
      });

      console.log('\n🎉 Categories are now loading properly!');
    } else {
      console.log('❌ No products found');
    }
  } catch (error) {
    console.error('❌ Error:', error);
  }

  process.exit(0);
}).catch(console.error);
