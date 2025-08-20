import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const outputDir = './public/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    await sharp(inputPath)
      .webp({ quality: 80, ...options })
      .toFile(outputPath);
    console.log(`✅ Optimized: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error);
  }
}

async function optimizeImages() {
  const files = fs.readdirSync(publicDir);
  const imageFiles = files.filter(file => 
    /\.(png|jpg|jpeg|gif)$/i.test(file)
  );

  console.log('🖼️  Starting image optimization...');
  
  for (const file of imageFiles) {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(png|jpg|jpeg|gif)$/i, '.webp'));
    
    await optimizeImage(inputPath, outputPath);
  }
  
  console.log('🎉 Image optimization complete!');
}

optimizeImages().catch(console.error);