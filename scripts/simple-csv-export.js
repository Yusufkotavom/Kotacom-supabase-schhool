/**
 * Simple Notion Products CSV Export
 * Easy to use script - just run: node scripts/simple-csv-export.js
 */

const fs = require('fs');
const path = require('path');

// Your Notion products data - replace this with real data from your Notion
const PRODUCTS = [
  {
    id: '24d57877-5392-81f6-844f-f213c665006a',
    title: 'PC Rakitan Core i7 4gb 500gb Lengkap Keyboard Mouse',
    slug: 'pc-rakitan-core-i7-4gb-500gb-lengkap-keyboard-mouse',
    price: '499000',
    description: 'PC Office untuk keperluan administrasi dengan Intel Core i7',
    content: `Bingung cari rakit PC yang sesuai kebutuhan? Tidak tahu part-part yang cocok?
Untuk gaming? Design? Atau hanya untuk office? 
Anda berada di lapak yang tepat!
Kami melayani pc rakitan berdasarkan kategorisasi harga dan kebutuhan.

Inside Package :
- PC Core i7
- Monitor LED 19" HD  
- Mouse and Keyboard
- All in One Installation (Siap Pakai)

Spesifikasi PC :
- Processor Intel Core i7 860 
- RAM Kingston 4GB DDR3 PC12800
- Harddisk 500GB Seagate Internal HD 3.5"
- Mainboard Intel Socket LGA1156 Suntech H55
- PSU Alcatroz 225X Black - 450W
- Case Powerlogic Futura 1000 / 2000 Series

Bonus :
- Wireless Adapter 
- Mouse Keyboard Wireless
- Windows 10 Enterprise - Activated Lifetime
- Office 2016 Professional - Activated Lifetime
- Garansi Kantor sesuai Garansi Sparepart

Catatan :
- Selalu gunakan Asuransi
- Area Surabaya silakan menggunakan Gosend / Grab
- Pengiriman Luar Kota, ongkir sudah termasuk packing kayu

KOTACOM adalah salah satu spesialis jasa Rakit pc murah namun dengan spek yang mumpuni.`,
    status: 'Published',
    category: 'kotacom',
    country: 'Indonesia',
    locale: 'Jawa Timur',
    imageUrl1: 'https://res.cloudinary.com/dxyjku3eh/image/upload/v1754963342/image-fallback/modern%20web%2Ccomputer%2Ccoding%2Cillutration%2Cgradient.%20with%20text%20kotacom.id%20-%20+6281232109396%20%281%29.jpg',
    published: '2024-08-18',
    verify: 'Terverifikasi',
    url: 'https://www.kotacom.id',
    tokopediaUrl: 'https://www.kotacom.id',
    shopeeUrl: 'https://www.kotacom.id',
  },
  
  // ADD MORE PRODUCTS HERE
  // Copy this structure and add your other products from Notion
  
];

// CSV headers
const HEADERS = [
  'id', 'title', 'slug', 'price', 'description', 'content', 'status', 
  'category', 'country', 'locale', 'imageUrl1', 'published', 'verify',
  'url', 'tokopediaUrl', 'shopeeUrl', 'blibliUrl', 'bukalapakUrl', 'lazadaUrl'
];

function escapeCSV(value) {
  if (!value) return '';
  
  let str = String(value);
  
  // Remove HTML tags and clean up content
  str = str.replace(/<[^>]*>/g, ''); // Remove HTML
  str = str.replace(/\s+/g, ' ').trim(); // Clean whitespace
  
  // Escape CSV special characters
  if (str.includes(',') || str.includes('\n') || str.includes('"')) {
    str = '"' + str.replace(/"/g, '""') + '"';
  }
  
  return str;
}

function exportToCSV() {
  console.log('🚀 Starting CSV export...');
  
  // Create CSV content
  const csvLines = [];
  
  // Add headers
  csvLines.push(HEADERS.join(','));
  
  // Add product data
  PRODUCTS.forEach(product => {
    const row = HEADERS.map(header => escapeCSV(product[header] || ''));
    csvLines.push(row.join(','));
  });
  
  const csvContent = csvLines.join('\n');
  
  // Write to file
  const outputFile = 'notion-products.csv';
  fs.writeFileSync(outputFile, csvContent, 'utf8');
  
  console.log(`✅ Exported ${PRODUCTS.length} products to: ${outputFile}`);
  console.log(`📁 File size: ${(csvContent.length / 1024).toFixed(2)} KB`);
  
  // Show preview
  const lines = csvContent.split('\n');
  console.log('\n📋 Preview:');
  console.log('Headers:', lines[0]);
  if (lines[1]) {
    console.log('Sample:', lines[1].substring(0, 100) + '...');
  }
  
  console.log('\n🎯 Next steps:');
  console.log('1. Open the CSV file to verify the data');
  console.log('2. Add more products to the PRODUCTS array in this script');
  console.log('3. Run the script again to generate updated CSV');
  console.log('4. Import the CSV to Supabase');
}

// Run the export
exportToCSV();
