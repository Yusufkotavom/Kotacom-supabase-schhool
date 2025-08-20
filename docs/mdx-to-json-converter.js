const fs = require('fs');
const path = require('path');

// Function to extract frontmatter from MDX content
function extractFrontmatter(content) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);
    
    if (!match) {
        return {
            frontmatter: {},
            content: content.trim()
        };
    }
    
    const frontmatterText = match[1];
    const contentText = match[2];
    
    // Parse frontmatter (simple YAML-like parsing)
    const frontmatter = {};
    const lines = frontmatterText.split('\n');
    
    for (const line of lines) {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();
            
            // Remove quotes if present
            if ((value.startsWith('"') && value.endsWith('"')) || 
                (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            
            // Handle array values
            if (value.startsWith('[') && value.endsWith(']')) {
                try {
                    value = JSON.parse(value);
                } catch (e) {
                    // If JSON parsing fails, treat as string
                }
            }
            
            frontmatter[key] = value;
        }
    }
    
    return {
        frontmatter,
        content: contentText.trim()
    };
}

// Function to read all MDX files recursively
function readMdxFiles(dir, baseDir = '') {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const relativePath = path.join(baseDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            files.push(...readMdxFiles(fullPath, relativePath));
        } else if (item.endsWith('.mdx')) {
            try {
                const content = fs.readFileSync(fullPath, 'utf8');
                const { frontmatter, content: mdxContent } = extractFrontmatter(content);
                
                files.push({
                    filePath: relativePath,
                    fileName: item,
                    category: baseDir || 'root',
                    frontmatter,
                    content: mdxContent,
                    stats: {
                        size: stat.size,
                        created: stat.birthtime,
                        modified: stat.mtime
                    }
                });
            } catch (error) {
                console.error(`Error reading file ${fullPath}:`, error.message);
            }
        }
    }
    
    return files;
}

// Function to generate summary statistics
function generateSummary(mdxFiles) {
    const summary = {
        totalFiles: mdxFiles.length,
        categories: {},
        totalSize: 0,
        dateRange: {
            earliest: null,
            latest: null
        },
        tags: {},
        authors: {},
        publishedDates: {}
    };
    
    for (const file of mdxFiles) {
        // Category statistics
        const category = file.category;
        summary.categories[category] = (summary.categories[category] || 0) + 1;
        
        // Size statistics
        summary.totalSize += file.stats.size;
        
        // Date range
        const modifiedDate = file.stats.modified;
        if (!summary.dateRange.earliest || modifiedDate < summary.dateRange.earliest) {
            summary.dateRange.earliest = modifiedDate;
        }
        if (!summary.dateRange.latest || modifiedDate > summary.dateRange.latest) {
            summary.dateRange.latest = modifiedDate;
        }
        
        // Tags statistics
        if (file.frontmatter.tags) {
            const tags = Array.isArray(file.frontmatter.tags) ? file.frontmatter.tags : [file.frontmatter.tags];
            for (const tag of tags) {
                summary.tags[tag] = (summary.tags[tag] || 0) + 1;
            }
        }
        
        // Published dates
        if (file.frontmatter.published) {
            const year = new Date(file.frontmatter.published).getFullYear();
            summary.publishedDates[year] = (summary.publishedDates[year] || 0) + 1;
        }
    }
    
    return summary;
}

// Main function to convert MDX to JSON
function convertMdxToJson() {
    console.log('🚀 Starting MDX to JSON conversion...');
    
    // Read all MDX files from the current directory and subdirectories
    const mdxFiles = readMdxFiles('.');
    
    if (mdxFiles.length === 0) {
        console.log('❌ No MDX files found in the current directory');
        return;
    }
    
    console.log(`📁 Found ${mdxFiles.length} MDX files`);
    
    // Generate summary statistics
    const summary = generateSummary(mdxFiles);
    
    // Create the final JSON structure
    const jsonOutput = {
        metadata: {
            generatedAt: new Date().toISOString(),
            totalFiles: mdxFiles.length,
            totalSize: summary.totalSize,
            summary: summary
        },
        categories: {
            posts: mdxFiles.filter(f => f.category === 'posts'),
            services: mdxFiles.filter(f => f.category === 'services'),
            projects: mdxFiles.filter(f => f.category === 'projects'),
            products: mdxFiles.filter(f => f.category === 'products'),
            stays: mdxFiles.filter(f => f.category === 'stays')
        },
        allFiles: mdxFiles
    };
    
    // Write to JSON file
    const outputFile = 'mdx-content.json';
    fs.writeFileSync(outputFile, JSON.stringify(jsonOutput, null, 2), 'utf8');
    
    console.log(`✅ Successfully converted ${mdxFiles.length} MDX files to ${outputFile}`);
    console.log(`📊 Summary:`);
    console.log(`   - Total files: ${summary.totalFiles}`);
    console.log(`   - Total size: ${(summary.totalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   - Categories: ${Object.keys(summary.categories).length}`);
    console.log(`   - Date range: ${summary.dateRange.earliest?.toISOString().split('T')[0]} to ${summary.dateRange.latest?.toISOString().split('T')[0]}`);
    
    // Show category breakdown
    console.log(`📂 Category breakdown:`);
    for (const [category, count] of Object.entries(summary.categories)) {
        console.log(`   - ${category}: ${count} files`);
    }
    
    // Show top tags
    const topTags = Object.entries(summary.tags)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10);
    
    if (topTags.length > 0) {
        console.log(`🏷️  Top tags:`);
        topTags.forEach(([tag, count]) => {
            console.log(`   - ${tag}: ${count} files`);
        });
    }
    
    return jsonOutput;
}

// Run the conversion
if (require.main === module) {
    try {
        convertMdxToJson();
    } catch (error) {
        console.error('❌ Error during conversion:', error.message);
        process.exit(1);
    }
}

module.exports = { convertMdxToJson, extractFrontmatter, readMdxFiles };
