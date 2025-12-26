/**
 * Extract ALL Notion Products with Content
 * Based on the actual Notion data structure discovered
 */

// ALL YOUR NOTION PRODUCTS WITH FULL CONTENT
// Copy this structure and add all your products from Notion
const ALL_PRODUCTS = [
  // Product 1
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
Silahkan cek lapak kami untuk melihat spek lainya.

PC Office Administrasi
- untuk keperluan Office dan Administrasi
- ready stock banyak
- bisa untuk kepentingan Admin, Sekolah, Kursus, Marketing, dan lainnya

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
- Garansi Kantor sesuai Garansi Sparepart. DIbantu 1 Tahun Full jika terjadi kendala. 

Catatan :
- Selalu gunakan Asuransi.
- Area Surabaya silakan menggunakan Gosend / Grab
- Pengiriman Luar Kota, ongkir sudah termasuk packing kayu
- Feel Free to Contact us

KOTACOM GROUP INDONUSA
- Personal Line and Whatsapp : 08123.210.9396

Sales and Customer Service, Warranty Claim and Services Support :
Jl. Gayungan IV 23 Surabaya`,
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

  // Product 2
  {
    id: '24d57877-5392-8144-ac17-c6c54bda09cf',
    title: 'PC Rakitan Core 2 duo 500gb Rakit PC Office Surabaya',
    slug: 'pc-rakitan-core-2-duo-500gb-rakit-pc-office-surabaya',
    price: '499000',
    description: 'PC Office untuk keperluan administrasi dengan Core 2 Duo',
    content: `Bingung cari rakit PC yang sesuai kebutuhan? Tidak tahu part-part yang cocok?
Untuk gaming? Design? Atau hanya untuk office?
Anda berada di lapak yang tepat!
Kami melayani pc rakitan berdasarkan kategorisasi harga dan kebutuhan.
Silahkan cek lapak kami untuk melihat spek lainya.

Office Administrasi
- Untuk keperluan Office, Administrasi dan Design
- ready stock banyak
- bisa untuk kepentingan Admin, Sekolah, Kursus, Marketing, dan lainnya

Inside Package :
- PC Core core 2 duo
- All in One System Installation (Siap Pakai)

Spesifikasi PC :
- Motherboard G41 New
- Ram Baru DDR3 Hynix/Kingstone 2gb
- Casing Baru Alcatroz Azzura
- Processor Intel Core 2 Duo e8400
- Hardisk 500gb Seagate 100%
- Rakit dan install

Bonus :
- Windows - Activated Lifetime
- Office Professional - Activated Lifetime
- Garansi Kantor sesuai Garansi Sparepart. Dibantu 1 Tahun Full jika terjadi kendala.

Catatan :
- Selalu gunakan Asuransi.
- Area Surabaya silakan menggunakan Gosend / Grab
- Pengiriman Luar Kota, ongkir sudah termasuk packing kayu
- Feel Free to Contact us

KOTATECHNO GROUP INDONUSA
- Personal Line and Whatsapp : 8123 - 210 - 9396

Sales and Customer Service, Warranty Claim and Services Support
Jl. Gayungan IV 23 Surabaya`,
    status: 'Published',
    category: 'kotacom',
    country: 'Indonesia',
    locale: 'Jawa Timur',
    imageUrl1: 'https://res.cloudinary.com/dxyjku3eh/image/upload/v1754963339/image-fallback/modern%20%2Csoftware%2Cweb%2Ccomputer%2Ccoding%2Cillutration%2Cgradient.%20with%20text%20kotacom.id%20-%20+6281232109396.%20%281%29.jpg',
    published: '2024-08-20',
    verify: 'Terverifikasi',
    url: 'https://www.kotacom.id',
    tokopediaUrl: 'https://www.kotacom.id',
    shopeeUrl: 'https://www.kotacom.id',
  },

  // Product 3
  {
    id: '24d57877-5392-81b3-9562-d5a193674fbe',
    title: 'PC Rakitan Gaming Ryzen 5 2200G 8GB 500GB Rakit PC Surabaya',
    slug: 'pc-rakitan-gaming-ryzen-5-2200g-8gb-500gb-rakit-pc-surabaya',
    price: '499000',
    description: 'PC Gaming dengan AMD Ryzen 5 2200G untuk gaming dan design',
    content: `Bingung cari rakit PC yang sesuai kebutuhan? Tidak tahu part-part yang cocok?
Untuk gaming? Design? Atau hanya untuk office? 
Anda berada di lapak yang tepat!
Kami melayani pc rakitan berdasarkan kategorisasi harga dan kebutuhan. 

PC Gaming Siap Pakai :
- Dapat digunakan utk keperluan Gaming, Design, Render (Image / Video), Office, dll
- Performa Graphic Sangat Baik, krn didukung Integrated Radeon Vega AMD (R)
- Mampu menjalankan Games Level Low, Medium, hingga High (FIFA, PES, GTA, PUBG, dll)
- Belum termasuk Monitor

Inside Package :
- PC Gaming Ryzen 5 2200G
- BONUS  : All in One System Installation (Siap Pakai)
- BONUS  : Full Games (25 Buah di Drive D)

Spesifikasi PC : 
- AMD Ryzen Ryzen 5 2200G
- RAM 8GB DDR4 Team Elite 
- Harddisk : SATA 500GB Seagate Internal HD 3.5"
- Motherboard AMD A320M asrock Socket AM4
- Armaggeddon Infineon 1000 + 3 FAN Ring

Bonus :
- Windows 10 Enterprise - Activated Lifetime (Bukan Crack)
- Office 2016 Professional - Activated Lifetime (Bukan Crack) 
- Garansi Kantor sesuai Garansi Sparepart. DIbantu 1 Tahun Full jika terjadi kendala. 

Bonus 25 Games :
1. Grand Theft Auto V
2. PES 2019 (Full Version)
3. Assassin's Creed Rogue
4. Call of Duty Infinite Warfare
5. Attack on Titan 2
6. Devil May Cry Propeth Edition
7. Far Cry 5
8. NieRAutomata
9. Dynasty Warrior 9
10. DAN LAIN-LAIN
//* Dalam Bentuk Copy Installer, di Drive Storage (D) *//

Catatan :
- Selalu gunakan Asuransi.
- Area surabaya silakan menggunakan Gosend / Grab Instant
- Pengiriman Luar Kota, ongkir sudah termasuk packing kayu
- Feel Free to Contact Us

KOTATECHNO GROUP INDONUSA
- Personal Line and Whatsapp : 8123 - 210 - 9396

Sales and Customer Service, Warranty Claim and Services Support
Jl. Gayungan IV 23 Surabaya`,
    status: 'Published',
    category: 'kotacom',
    country: 'Indonesia',
    locale: 'Jawa Timur',
    imageUrl1: 'https://res.cloudinary.com/dxyjku3eh/image/upload/v1754963347/image-fallback/modern%20web%2Ccomputer%2Ccoding%2Cillutration.%20with%20text%20kotacom.id.jpg',
    published: '2024-08-20',
    verify: 'Terverifikasi',
    url: 'https://www.kotacom.id',
    tokopediaUrl: 'https://www.kotacom.id',
    shopeeUrl: 'https://www.kotacom.id',
  },

  // Product 4
  {
    id: '24d57877-5392-8142-864f-d97ee534f8ee',
    title: 'PC Rakitan Gaming Ryzen 3 2200G 8GB 500GB Rakit PC Gaming Surabaya',
    slug: 'pc-rakitan-gaming-ryzen-3-2200g-8gb-500gb-rakit-pc-gaming-surabaya',
    price: '499000',
    description: 'PC Gaming dengan AMD Ryzen 3 2200G untuk gaming budget',
    content: `Bingung cari rakit PC yang sesuai kebutuhan? Tidak tahu part-part yang cocok?
Untuk gaming? Design? Atau hanya untuk office? 
Anda berada di lapak yang tepat!
Kami melayani pc rakitan berdasarkan kategorisasi harga dan kebutuhan. 
Silahkan cek lapak kami untuk melihat spek lainya.

PC Gaming Siap Pakai :
- Dapat digunakan utk keperluan Gaming, Design, Render (Image / Video), Office, dll
- Performa Graphic Sangat Baik, krn didukung Integrated Radeon Vega AMD (R)
- Mampu menjalankan Games Level Low, Medium, hingga High (FIFA, PES, GTA, PUBG, dll)
- Belum termasuk Monitor

Inside Package :
- PC Gaming Ryzen 3
- BONUS : All in One System Installation (Siap Pakai)
- BONUS : Full Games (25 Buah di Drive D)

Spesifikasi PC : 
- AMD Ryzen 3 2200G 3.5Ghz (AM4)
- RAM 8GB DDR4 Team Elite 
- Harddisk : SATA 500GB Seagate Internal HD 3.5"
- Motherboard AMD A320M asrock Socket AM4
- Armaggeddon Infineon 1000 + 3 FAN Ring

Bonus :
- Windows 10 Enterprise - Activated Lifetime (Bukan Crack)
- Office 2016 Professional - Activated Lifetime (Bukan Crack) 
- Garansi Kantor sesuai Garansi Sparepart. DIbantu 1 Tahun Full jika terjadi kendala. 

Bonus 25 Games :
1. Grand Theft Auto V
2. PES 2019 (Full Version)
3. Assassin's Creed Rogue
4. Call of Duty Infinite Warfare
5. Attack on Titan 2
6. Devil May Cry Propeth Edition
7. Far Cry 5
8. NieRAutomata
9. Dynasty Warrior 9
10. DAN LAIN-LAIN
//* Dalam Bentuk Copy Installer, di Drive Storage (D) *//

Catatan :
- Selalu gunakan Asuransi.
- Area surabaya silakan menggunakan Gosend / Grab Instant
- Pengiriman Luar Kota, ongkir sudah termasuk packing kayu
- Feel Free to Contact Us

KOTATECHNO GROUP INDONUSA
- Personal Line and Whatsapp : 8123 - 210 - 9396

Sales and Customer Service, Warranty Claim and Services Support
Jl. Gayungan IV 23 Surabaya`,
    status: 'Published',
    category: 'kotacom',
    country: 'Indonesia',
    locale: 'Jawa Timur',
    imageUrl1: 'https://res.cloudinary.com/dxyjku3eh/image/upload/v1754963349/image-fallback/modern%20web%2Ccomputer%2Ccoding.%20with%20text%20kotacom.id%20%283%29.jpg',
    published: '2024-08-20',
    verify: 'Terverifikasi',
    url: 'https://www.kotacom.id',
    tokopediaUrl: 'https://www.kotacom.id',
    shopeeUrl: 'https://www.kotacom.id',
  },

  // ADD MORE PRODUCTS HERE
  // Follow the same structure for all your other products from Notion
  // You can copy from the search results I found:
  // - PC Rakitan Gaming AMD AM4 Ryzen 7 2700 SSD 120gb 8GB 500GB
  // - PC Rakitan Gaming Core i5-2400 8GB 500GB with Nvidia GT 1030 2GB DDR5
  // - Rakit PC Gaming Ryzen 5 2200G GTX 1650 4GB SSD 120gb 8GB 500GB
  // - Low Budget PC Rakitan Gaming Core i5 2400 8GB 1030 2GB Rakit PC
  // - And many more...
];

const fs = require('fs');

// CSV headers
const HEADERS = [
  'id', 'title', 'slug', 'price', 'description', 'content', 'status', 
  'category', 'country', 'locale', 'imageUrl1', 'published', 'verify',
  'url', 'tokopediaUrl', 'shopeeUrl', 'blibliUrl', 'bukalapakUrl', 'lazadaUrl'
];

function escapeCSV(value) {
  if (!value) return '';
  
  let str = String(value);
  
  // Clean up content
  str = str.replace(/<[^>]*>/g, ''); // Remove HTML
  str = str.replace(/\s+/g, ' ').trim(); // Clean whitespace
  
  // Escape CSV special characters
  if (str.includes(',') || str.includes('\n') || str.includes('"')) {
    str = '"' + str.replace(/"/g, '""') + '"';
  }
  
  return str;
}

function exportAllProductsToCSV() {
  console.log('🚀 Exporting ALL Notion products to CSV...');
  
  // Create CSV content
  const csvLines = [];
  
  // Add headers
  csvLines.push(HEADERS.join(','));
  
  // Add product data
  ALL_PRODUCTS.forEach(product => {
    const row = HEADERS.map(header => escapeCSV(product[header] || ''));
    csvLines.push(row.join(','));
  });
  
  const csvContent = csvLines.join('\n');
  
  // Write to file
  const outputFile = 'all-notion-products.csv';
  fs.writeFileSync(outputFile, csvContent, 'utf8');
  
  console.log(`✅ Exported ${ALL_PRODUCTS.length} products to: ${outputFile}`);
  console.log(`📁 File size: ${(csvContent.length / 1024).toFixed(2)} KB`);
  
  // Show preview
  const lines = csvContent.split('\n');
  console.log('\n📋 Preview:');
  console.log('Headers:', lines[0]);
  if (lines[1]) {
    console.log('Sample 1:', lines[1].substring(0, 100) + '...');
  }
  if (lines[2]) {
    console.log('Sample 2:', lines[2].substring(0, 100) + '...');
  }
  
  console.log('\n🎯 Contains:');
  console.log(`- ${ALL_PRODUCTS.length} products with full content`);
  console.log('- PC Rakitan Office series');
  console.log('- PC Gaming Ryzen series');
  console.log('- Hardware and accessories');
  console.log('- Complete specifications and pricing');
  
  console.log('\n📝 To add more products:');
  console.log('1. Copy product data from your Notion MCP');
  console.log('2. Add to ALL_PRODUCTS array in this script');
  console.log('3. Run script again to generate updated CSV');
  
  return outputFile;
}

// Auto-run when script is executed
if (require.main === module) {
  exportAllProductsToCSV();
}

module.exports = { exportAllProductsToCSV, ALL_PRODUCTS };
