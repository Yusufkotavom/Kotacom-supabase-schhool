// Test script untuk mengecek koneksi ke Payload CMS
const API_URL = 'http://192.168.1.2:3000';

async function testPayload() {
  console.log('Testing Payload CMS connection...');
  console.log('URL:', API_URL);
  
  try {
    // Test the posts endpoint specifically
    console.log('\nTesting /api/posts endpoint...');
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(`${API_URL}/api/posts`, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    
    clearTimeout(timeoutId);
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Posts API accessible!');
      console.log('Posts found:', data.docs?.length || 0);
      
      if (data.docs && data.docs.length > 0) {
        console.log('Sample post:', {
          id: data.docs[0].id,
          title: data.docs[0].title,
          slug: data.docs[0].slug
        });
      }
    } else {
      const errorText = await response.text();
      console.log('❌ Error response:', errorText);
    }
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Payload CMS is accessible!');
      console.log('Posts found:', data.docs?.length || 0);
      
      if (data.docs && data.docs.length > 0) {
        console.log('Sample post:', {
          id: data.docs[0].id,
          title: data.docs[0].title,
          slug: data.docs[0].slug
        });
      }
    } else {
      console.log('❌ Payload responded with error:', response.status);
    }
  } catch (error) {
    console.log('❌ Cannot connect to Payload:', error.message);
  }
}

testPayload();
