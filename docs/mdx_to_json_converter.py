#!/usr/bin/env python3
"""
MDX to JSON Converter
Convert all MDX files in the workspace to a single JSON file with metadata extraction.
"""

import os
import json
import re
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Any, Optional

def extract_frontmatter(content: str) -> Dict[str, Any]:
    """
    Extract frontmatter from MDX content.
    
    Args:
        content: Raw MDX content
        
    Returns:
        Dictionary with frontmatter and content separated
    """
    # Regex to match frontmatter between --- markers
    frontmatter_pattern = r'^---\n(.*?)\n---\n(.*)$'
    match = re.match(frontmatter_pattern, content, re.DOTALL)
    
    if not match:
        return {
            'frontmatter': {},
            'content': content.strip()
        }
    
    frontmatter_text = match.group(1)
    content_text = match.group(2)
    
    # Parse frontmatter
    frontmatter = {}
    for line in frontmatter_text.split('\n'):
        line = line.strip()
        if ':' in line:
            colon_index = line.find(':')
            key = line[:colon_index].strip()
            value = line[colon_index + 1:].strip()
            
            # Remove quotes if present
            if (value.startswith('"') and value.endswith('"')) or \
               (value.startswith("'") and value.endswith("'")):
                value = value[1:-1]
            
            # Handle array values
            if value.startswith('[') and value.endswith(']'):
                try:
                    # Simple array parsing - split by comma and clean
                    array_content = value[1:-1]
                    if array_content:
                        # Handle quoted strings in arrays
                        items = []
                        current_item = ""
                        in_quotes = False
                        quote_char = None
                        
                        for char in array_content:
                            if char in ['"', "'"] and not in_quotes:
                                in_quotes = True
                                quote_char = char
                            elif char == quote_char and in_quotes:
                                in_quotes = False
                                quote_char = None
                            elif char == ',' and not in_quotes:
                                items.append(current_item.strip())
                                current_item = ""
                            else:
                                current_item += char
                        
                        if current_item.strip():
                            items.append(current_item.strip())
                        
                        # Clean items
                        cleaned_items = []
                        for item in items:
                            item = item.strip()
                            if (item.startswith('"') and item.endswith('"')) or \
                               (item.startswith("'") and item.endswith("'")):
                                item = item[1:-1]
                            cleaned_items.append(item)
                        
                        value = cleaned_items
                    else:
                        value = []
                except:
                    # If parsing fails, keep as string
                    pass
            
            frontmatter[key] = value
    
    return {
        'frontmatter': frontmatter,
        'content': content_text.strip()
    }

def read_mdx_files(base_dir: str = '.') -> List[Dict[str, Any]]:
    """
    Recursively read all MDX files from the directory.
    
    Args:
        base_dir: Base directory to search for MDX files
        
    Returns:
        List of dictionaries containing file information
    """
    files = []
    base_path = Path(base_dir)
    
    for mdx_file in base_path.rglob('*.mdx'):
        try:
            # Read file content
            with open(mdx_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract frontmatter
            parsed = extract_frontmatter(content)
            
            # Get relative path and category
            relative_path = mdx_file.relative_to(base_path)
            category = relative_path.parent.name if relative_path.parent.name else 'root'
            
            # Get file stats
            stat = mdx_file.stat()
            
            file_info = {
                'filePath': str(relative_path),
                'fileName': mdx_file.name,
                'category': category,
                'frontmatter': parsed['frontmatter'],
                'content': parsed['content'],
                'stats': {
                    'size': stat.st_size,
                    'created': datetime.fromtimestamp(stat.st_ctime).isoformat(),
                    'modified': datetime.fromtimestamp(stat.st_mtime).isoformat()
                }
            }
            
            files.append(file_info)
            
        except Exception as e:
            print(f"Error reading file {mdx_file}: {e}")
    
    return files

def generate_summary(mdx_files: List[Dict[str, Any]]) -> Dict[str, Any]:
    """
    Generate summary statistics from MDX files.
    
    Args:
        mdx_files: List of MDX file dictionaries
        
    Returns:
        Dictionary with summary statistics
    """
    summary = {
        'totalFiles': len(mdx_files),
        'categories': {},
        'totalSize': 0,
        'dateRange': {
            'earliest': None,
            'latest': None
        },
        'tags': {},
        'publishedDates': {}
    }
    
    for file_info in mdx_files:
        # Category statistics
        category = file_info['category']
        summary['categories'][category] = summary['categories'].get(category, 0) + 1
        
        # Size statistics
        summary['totalSize'] += file_info['stats']['size']
        
        # Date range
        modified_date = datetime.fromisoformat(file_info['stats']['modified'])
        if not summary['dateRange']['earliest'] or modified_date < summary['dateRange']['earliest']:
            summary['dateRange']['earliest'] = modified_date
        if not summary['dateRange']['latest'] or modified_date > summary['dateRange']['latest']:
            summary['dateRange']['latest'] = modified_date
        
        # Tags statistics
        tags = file_info['frontmatter'].get('tags', [])
        if tags:
            if isinstance(tags, str):
                tags = [tags]
            for tag in tags:
                summary['tags'][tag] = summary['tags'].get(tag, 0) + 1
        
        # Published dates
        published = file_info['frontmatter'].get('published')
        if published:
            try:
                year = datetime.fromisoformat(published.replace('Z', '+00:00')).year
                summary['publishedDates'][year] = summary['publishedDates'].get(year, 0) + 1
            except:
                pass
    
    # Convert datetime objects to strings for JSON serialization
    if summary['dateRange']['earliest']:
        summary['dateRange']['earliest'] = summary['dateRange']['earliest'].isoformat()
    if summary['dateRange']['latest']:
        summary['dateRange']['latest'] = summary['dateRange']['latest'].isoformat()
    
    return summary

def convert_mdx_to_json(output_file: str = 'mdx_content.json') -> Dict[str, Any]:
    """
    Main function to convert MDX files to JSON.
    
    Args:
        output_file: Output JSON file name
        
    Returns:
        Dictionary containing the JSON structure
    """
    print('🚀 Starting MDX to JSON conversion...')
    
    # Read all MDX files
    mdx_files = read_mdx_files('.')
    
    if not mdx_files:
        print('❌ No MDX files found in the current directory')
        return {}
    
    print(f'📁 Found {len(mdx_files)} MDX files')
    
    # Generate summary statistics
    summary = generate_summary(mdx_files)
    
    # Create the final JSON structure
    json_output = {
        'metadata': {
            'generatedAt': datetime.now().isoformat(),
            'totalFiles': len(mdx_files),
            'totalSize': summary['totalSize'],
            'summary': summary
        },
        'categories': {
            'posts': [f for f in mdx_files if f['category'] == 'posts'],
            'services': [f for f in mdx_files if f['category'] == 'services'],
            'projects': [f for f in mdx_files if f['category'] == 'projects'],
            'products': [f for f in mdx_files if f['category'] == 'products'],
            'stays': [f for f in mdx_files if f['category'] == 'stays']
        },
        'allFiles': mdx_files
    }
    
    # Write to JSON file
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(json_output, f, indent=2, ensure_ascii=False)
    
    print(f'✅ Successfully converted {len(mdx_files)} MDX files to {output_file}')
    print(f'📊 Summary:')
    print(f'   - Total files: {summary["totalFiles"]}')
    print(f'   - Total size: {summary["totalSize"] / 1024 / 1024:.2f} MB')
    print(f'   - Categories: {len(summary["categories"])}')
    
    if summary['dateRange']['earliest'] and summary['dateRange']['latest']:
        earliest = summary['dateRange']['earliest'][:10]
        latest = summary['dateRange']['latest'][:10]
        print(f'   - Date range: {earliest} to {latest}')
    
    # Show category breakdown
    print(f'📂 Category breakdown:')
    for category, count in summary['categories'].items():
        print(f'   - {category}: {count} files')
    
    # Show top tags
    top_tags = sorted(summary['tags'].items(), key=lambda x: x[1], reverse=True)[:10]
    if top_tags:
        print(f'🏷️  Top tags:')
        for tag, count in top_tags:
            print(f'   - {tag}: {count} files')
    
    return json_output

def main():
    """Main function to run the converter."""
    try:
        result = convert_mdx_to_json()
        if result:
            print('\n🎉 Conversion completed successfully!')
            print('📄 Check mdx_content.json for the output file.')
        else:
            print('\n❌ No files were converted.')
    except Exception as e:
        print(f'❌ Error during conversion: {e}')
        return 1
    
    return 0

if __name__ == '__main__':
    exit(main())
