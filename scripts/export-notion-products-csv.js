#!/usr/bin/env node

/**
 * Export Notion Products to CSV with Content
 * Simple script to export all products from Notion database to CSV format
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Mock Notion client structure - replace with actual Notion API
const NOTION_API_URL = 'https://api.notion.com/v1';
const NOTION_TOKEN = process.env.NOTION_TOKEN || 'your-notion-token';
const NOTION_DATABASE_ID = '24a57877539280828164c86d620761fa'; // Your PRODUCT database ID

// CSV headers matching your Notion schema
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
 * Convert array or object to comma-separated string
 */
function arrayToString(value) {
  if (!value) return '';
  if (Array.isArray(value)) {
    return value.join(';');
  }
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return String(value);
}

/**
 * Escape CSV field value
 */
function escapeCsvField(value) {
  if (value === null || value === undefined) return '';
  
  const stringValue = String(value);
  
  // If contains comma, newline, or quotes, wrap in quotes and escape internal quotes
  if (stringValue.includes(',') || stringValue.includes('\n') || stringValue.includes('"')) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  
  return stringValue;
}

/**
 * Fetch all products from Notion database
 */
async function fetchNotionProducts() {
  console.log('🔄 Fetching products from Notion...');
  
  // This is a placeholder - you'll need to implement actual Notion API calls
  // For now, I'll create a structure you can populate with your Notion data
  
  const products = [
    // Sample structure based on your Notion data
    {
      id: '24d57877-5392-81f6-844f-f213c665006a',
      title: 'PC Rakitan Core i7 4gb 500gb Lengkap Keyboard Mouse',
      slug: 'pc-rakitan-core-i7-4gb-500gb-lengkap-keyboard-mouse',
      price: '499000',
      description: 'PC Office untuk keperluan administrasi dengan Intel Core i7',
      content: `Bingung cari rakit PC yang sesuai kebutuhan? Tidak tahu part-part yang cocok?
Untuk gaming? Design? Atau hanya untuk office? 
Anda berada di lapak yang tepat!

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
- Case Powerlogic Futura 1000 / 2000 Series`,
      status: 'Published',
      category: ['kotacom'],
      features: [],
      type: [],
      country: ['Indonesia'],
      locale: ['Jawa Timur'],
      imageUrl1: 'https://res.cloudinary.com/dxyjku3eh/image/upload/v1754963342/image-fallback/modern%20web%2Ccomputer%2Ccoding%2Cillutration%2Cgradient.%20with%20text%20kotacom.id%20-%20085799520350%20%281%29.jpg',
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
  
  console.log(`✅ Found ${products.length} products`);
  return products;
}

/**
 * Convert products to CSV format
 */
function convertToCSV(products) {
  console.log('🔄 Converting to CSV format...');
  
  // Create header row
  const csvLines = [CSV_HEADERS.join(',')];
  
  // Add data rows
  products.forEach(product => {
    const row = CSV_HEADERS.map(header => {
      let value = product[header] || '';
      
      // Handle special fields
      switch (header) {
        case 'category':
        case 'features':
        case 'type':
        case 'country':
        case 'locale':
          value = arrayToString(value);
          break;
        case 'published':
          // Convert date to ISO string if it's a Date object
          if (value instanceof Date) {
            value = value.toISOString().split('T')[0];
          }
          break;
        case 'content':
          // Clean up content - remove extra HTML/formatting
          value = String(value)
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/\n\s*\n/g, '\n') // Remove multiple newlines
            .trim();
          break;
      }
      
      return escapeCsvField(value);
    });
    
    csvLines.push(row.join(','));
  });
  
  return csvLines.join('\n');
}

/**
 * Main export function
 */
async function exportNotionProductsToCSV() {
  try {
    console.log('🚀 Starting Notion Products CSV Export...');
    
    // Fetch products
    const products = await fetchNotionProducts();
    
    if (products.length === 0) {
      console.log('⚠️ No products found to export');
      return;
    }
    
    // Convert to CSV
    const csvContent = convertToCSV(products);
    
    // Write to file
    const outputPath = path.join(process.cwd(), 'notion-products-export.csv');
    fs.writeFileSync(outputPath, csvContent, 'utf8');
    
    console.log(`✅ Successfully exported ${products.length} products to: ${outputPath}`);
    console.log(`📊 File size: ${(csvContent.length / 1024).toFixed(2)} KB`);
    
    // Show sample of first few lines
    const lines = csvContent.split('\n');
    console.log('\n📋 Sample output (first 3 lines):');
    lines.slice(0, 3).forEach((line, index) => {
      console.log(`${index + 1}: ${line.substring(0, 100)}${line.length > 100 ? '...' : ''}`);
    });
    
  } catch (error) {
    console.error('❌ Export failed:', error);
    process.exit(1);
  }
}

/**
 * Manual data input helper - replace fetchNotionProducts with your actual data
 */
function createManualProductEntry() {
  return {
    id: '',
    title: '',
    slug: '',
    price: '',
    description: '',
    content: '', // Your full product content here
    status: 'Published',
    category: [], // e.g., ['kotacom', 'hardware']
    features: [], // e.g., ['Handmade', 'Premium Quality']
    type: [], // e.g., ['PC Desktop', 'Gaming']
    country: ['Indonesia'],
    locale: ['Jawa Timur'],
    imageUrl1: '',
    imageUrl2: '',
    imageUrl3: '',
    published: new Date().toISOString().split('T')[0],
    verify: 'Terverifikasi',
    name: '',
    review: '',
    url: '',
    otherUrl: '',
    tokopediaUrl: '',
    shopeeUrl: '',
    blibliUrl: '',
    bukalapakUrl: '',
    lazadaUrl: '',
    mapsUrl: ''
  };
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  exportNotionProductsToCSV();
}

export { exportNotionProductsToCSV, createManualProductEntry };
