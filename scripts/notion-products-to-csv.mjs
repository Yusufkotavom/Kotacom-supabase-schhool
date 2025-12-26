#!/usr/bin/env node

/**
 * Export Notion Products to CSV using MCP
 * Simple script that you can run to export your Notion products to CSV
 */

import fs from 'fs';
import path from 'path';

// Sample data structure based on your Notion database
// You'll need to manually copy this data from your Notion or use the MCP
const SAMPLE_PRODUCTS = [
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
    features: '',
    type: '',
    country: 'Indonesia',
    locale: 'Jawa Timur', 
    imageUrl1: 'https://res.cloudinary.com/dxyjku3eh/image/upload/v1754963342/image-fallback/modern%20web%2Ccomputer%2Ccoding%2Cillutration%2Cgradient.%20with%20text%20kotacom.id%20-%20+6281232109396%20%281%29.jpg',
    imageUrl2: '',
    imageUrl3: '',
    published: '2024-08-18',
    verify: 'Terverifikasi',
    name: '',
    review: '',
    url: 'https://www.kotacom.id',
    otherUrl: 'https://www.kotacom.id',
    tokopediaUrl: 'https://www.kotacom.id',
    shopeeUrl: 'https://www.kotacom.id', 
    blibliUrl: '',
    bukalapakUrl: '',
    lazadaUrl: '',
    mapsUrl: ''
  }
];

// CSV headers
const CSV_HEADERS = [
  'id',
  'title',
  'slug', 
  'price',
  'description',
  'content',
  'status',
  'category',
  'features',
  'type',
  'country',
  'locale',
  'imageUrl1',
  'imageUrl2',
  'imageUrl3', 
  'published',
  'verify',
  'name',
  'review',
  'url',
  'otherUrl',
  'tokopediaUrl',
  'shopeeUrl',
  'blibliUrl',
  'bukalapakUrl',
  'lazadaUrl',
  'mapsUrl'
];

/**
 * Escape CSV field
 */
function escapeCSV(field) {
  if (field === null || field === undefined) return '';
  
  let value = String(field);
  
  // Remove HTML tags from content
  value = value.replace(/<[^>]*>/g, '');
  
  // Clean up whitespace
  value = value.replace(/\s+/g, ' ').trim();
  
  // Escape quotes and wrap in quotes if contains special chars
  if (value.includes(',') || value.includes('\n') || value.includes('"')) {
    value = '"' + value.replace(/"/g, '""') + '"';
  }
  
  return value;
}

/**
 * Convert products to CSV
 */
function productsToCSV(products) {
  const lines = [];
  
  // Add header
  lines.push(CSV_HEADERS.join(','));
  
  // Add data rows
  products.forEach(product => {
    const row = CSV_HEADERS.map(header => {
      const value = product[header] || '';
      return escapeCSV(value);
    });
    lines.push(row.join(','));
  });
  
  return lines.join('\n');
}

/**
 * Main export function
 */
async function exportToCSV() {
  try {
    console.log('🚀 Exporting Notion products to CSV...');
    
    // Use sample data (replace with your actual Notion data)
    const products = SAMPLE_PRODUCTS;
    
    console.log(`📊 Found ${products.length} products to export`);
    
    // Convert to CSV
    const csvContent = productsToCSV(products);
    
    // Write to file
    const outputFile = path.join(process.cwd(), 'notion-products.csv');
    fs.writeFileSync(outputFile, csvContent, 'utf8');
    
    console.log(`✅ Exported to: ${outputFile}`);
    console.log(`📁 File size: ${(csvContent.length / 1024).toFixed(2)} KB`);
    
    // Show preview
    const lines = csvContent.split('\n');
    console.log('\n📋 Preview (first 2 lines):');
    console.log('Headers:', lines[0]);
    if (lines[1]) {
      console.log('Sample:', lines[1].substring(0, 150) + '...');
    }
    
    return outputFile;
    
  } catch (error) {
    console.error('❌ Export failed:', error);
    throw error;
  }
}

// Run if called directly
console.log('🔄 Starting CSV export...');
exportToCSV().catch(console.error);

export { exportToCSV, productsToCSV, SAMPLE_PRODUCTS };
