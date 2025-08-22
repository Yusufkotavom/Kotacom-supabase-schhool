#!/usr/bin/env node

// Generate Redirect Files for Different Hosting Platforms
// Run with: node scripts/generate-redirects.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import redirect configuration (using dynamic import for ES modules)
async function generateRedirects() {
  try {
    // Dynamic import for ES modules
    const { 
      generateNetlifyRedirects, 
      generateApacheRedirects, 
      generateNginxRedirects,
      getRedirectStats 
    } = await import('../src/data/redirects-config.js');
    
    const outputDir = path.join(process.cwd(), 'dist');
    const publicDir = path.join(process.cwd(), 'public');
    
    // Ensure directories exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    console.log('🔄 Generating redirect files...');
    
    // Generate Netlify _redirects file
    const netlifyRedirects = generateNetlifyRedirects();
    fs.writeFileSync(path.join(publicDir, '_redirects'), netlifyRedirects);
    fs.writeFileSync(path.join(outputDir, '_redirects'), netlifyRedirects);
    console.log('✅ Generated Netlify _redirects file');
    
    // Generate Apache .htaccess file
    const apacheRedirects = generateApacheRedirects();
    fs.writeFileSync(path.join(publicDir, '.htaccess'), apacheRedirects);
    fs.writeFileSync(path.join(outputDir, '.htaccess'), apacheRedirects);
    console.log('✅ Generated Apache .htaccess file');
    
    // Generate Nginx redirects
    const nginxRedirects = generateNginxRedirects();
    fs.writeFileSync(path.join(publicDir, 'nginx-redirects.conf'), nginxRedirects);
    fs.writeFileSync(path.join(outputDir, 'nginx-redirects.conf'), nginxRedirects);
    console.log('✅ Generated Nginx redirects.conf file');
    
    // Generate Vercel vercel.json redirects
    const vercelRedirects = netlifyRedirects.split('\n')
      .filter(line => line.trim() && !line.startsWith('#'))
      .map(line => {
        const parts = line.split(' ');
        const [from, to, status] = parts;
        return {
          source: from,
          destination: to,
          permanent: status === '301' || status === '308'
        };
      });
    
    const vercelConfig = {
      redirects: vercelRedirects
    };
    
    // Read existing vercel.json if it exists
    const vercelConfigPath = path.join(process.cwd(), 'vercel.json');
    let existingVercelConfig = {};
    
    if (fs.existsSync(vercelConfigPath)) {
      try {
        existingVercelConfig = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf8'));
      } catch (error) {
        console.warn('⚠️ Could not parse existing vercel.json, creating new one');
      }
    }
    
    // Merge redirects with existing config
    const mergedVercelConfig = {
      ...existingVercelConfig,
      redirects: vercelConfig.redirects
    };
    
    fs.writeFileSync(vercelConfigPath, JSON.stringify(mergedVercelConfig, null, 2));
    console.log('✅ Generated/Updated vercel.json with redirects');
    
    // Generate stats report
    const stats = getRedirectStats();
    const report = `# Redirect Generation Report
Generated at: ${new Date().toISOString()}

## Statistics
- Total rules: ${stats.total}
- Enabled rules: ${stats.enabled}
- Disabled rules: ${stats.disabled}

## By Category
${stats.byCategory.map(cat => `- ${cat.category}: ${cat.enabled}/${cat.count} enabled`).join('\n')}

## By Type
${stats.byType.map(type => `- ${type.type}: ${type.count} rules`).join('\n')}

## Generated Files
- Netlify: public/_redirects, dist/_redirects
- Apache: public/.htaccess, dist/.htaccess  
- Nginx: public/nginx-redirects.conf, dist/nginx-redirects.conf
- Vercel: vercel.json (updated)
`;
    
    fs.writeFileSync(path.join(outputDir, 'redirect-report.md'), report);
    console.log('✅ Generated redirect report');
    
    console.log(`\n📊 Redirect Statistics:`);
    console.log(`   Total: ${stats.total} rules`);
    console.log(`   Enabled: ${stats.enabled} rules`);
    console.log(`   Categories: ${stats.byCategory.length}`);
    console.log(`   Types: ${stats.byType.length}`);
    
    console.log('\n🎯 Generated files:');
    console.log('   📁 public/_redirects (Netlify)');
    console.log('   📁 public/.htaccess (Apache)');
    console.log('   📁 public/nginx-redirects.conf (Nginx)');
    console.log('   📁 vercel.json (Vercel)');
    console.log('   📁 dist/redirect-report.md (Stats)');
    
  } catch (error) {
    console.error('❌ Error generating redirects:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateRedirects().then(() => {
    console.log('\n✅ All redirect files generated successfully!');
  }).catch((error) => {
    console.error('❌ Failed to generate redirects:', error);
    process.exit(1);
  });
}

export { generateRedirects };