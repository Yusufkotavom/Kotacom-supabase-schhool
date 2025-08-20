#!/usr/bin/env python3
"""
MDX to Directus JSON Converter
Convert MDX files to structured JSON format for Directus import.
Each MDX file becomes one JSON record with extracted fields.
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

def extract_content_sections(content: str) -> Dict[str, Any]:
    """
    Extract different sections from MDX content.
    
    Args:
        content: MDX content without frontmatter
        
    Returns:
        Dictionary with extracted sections
    """
    sections = {
        'title': '',
        'subtitle': '',
        'summary': '',
        'body_content': content,
        'code_blocks': [],
        'images': [],
        'links': [],
        'tables': []
    }
    
    lines = content.split('\n')
    
    # Extract title (first H1)
    for line in lines:
        if line.startswith('# '):
            sections['title'] = line.replace('# ', '').strip()
            break
    
    # Extract subtitle (first H2)
    for line in lines:
        if line.startswith('## ') and not sections['subtitle']:
            sections['subtitle'] = line.replace('## ', '').strip()
            break
    
    # Extract summary (first paragraph after title)
    in_summary = False
    summary_lines = []
    for line in lines:
        if line.startswith('# '):
            in_summary = True
            continue
        elif line.startswith('## ') and in_summary:
            break
        elif in_summary and line.strip() and not line.startswith('#'):
            summary_lines.append(line.strip())
            if len(summary_lines) >= 3:  # Take first 3 paragraphs as summary
                break
    
    sections['summary'] = ' '.join(summary_lines)
    
    # Extract code blocks
    code_pattern = r'```(\w+)?\n(.*?)```'
    code_matches = re.findall(code_pattern, content, re.DOTALL)
    sections['code_blocks'] = [
        {
            'language': match[0] if match[0] else 'text',
            'code': match[1].strip()
        }
        for match in code_matches
    ]
    
    # Extract images
    img_pattern = r'!\[([^\]]*)\]\(([^)]+)\)'
    img_matches = re.findall(img_pattern, content)
    sections['images'] = [
        {
            'alt': match[0],
            'url': match[1]
        }
        for match in img_matches
    ]
    
    # Extract links
    link_pattern = r'\[([^\]]+)\]\(([^)]+)\)'
    link_matches = re.findall(link_pattern, content)
    sections['links'] = [
        {
            'text': match[0],
            'url': match[1]
        }
        for match in link_matches
    ]
    
    return sections

def convert_mdx_to_directus_format(mdx_file: Path) -> Dict[str, Any]:
    """
    Convert a single MDX file to Directus format.
    
    Args:
        mdx_file: Path to MDX file
        
    Returns:
        Dictionary in Directus format
    """
    try:
        # Read file content
        with open(mdx_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract frontmatter and content
        parsed = extract_frontmatter(content)
        frontmatter = parsed['frontmatter']
        mdx_content = parsed['content']
        
        # Extract content sections
        sections = extract_content_sections(mdx_content)
        
        # Get file stats
        stat = mdx_file.stat()
        
        # Create Directus record
        directus_record = {
            # Basic identification
            'id': None,  # Let Directus auto-generate
            'status': 'published',
            
            # File information
            'file_path': str(mdx_file),
            'file_name': mdx_file.name,
            'file_size': stat.st_size,
            'file_created': datetime.fromtimestamp(stat.st_ctime).isoformat(),
            'file_modified': datetime.fromtimestamp(stat.st_mtime).isoformat(),
            
            # Content type and category
            'content_type': mdx_file.parent.name if mdx_file.parent.name else 'root',
            'category': frontmatter.get('category', mdx_file.parent.name if mdx_file.parent.name else 'root'),
            
            # SEO and metadata
            'title': frontmatter.get('title', sections['title']),
            'subtitle': frontmatter.get('subtitle', sections['subtitle']),
            'description': frontmatter.get('description', sections['summary']),
            'slug': frontmatter.get('slug', mdx_file.stem),
            'meta_title': frontmatter.get('meta_title', frontmatter.get('title', sections['title'])),
            'meta_description': frontmatter.get('meta_description', frontmatter.get('description', sections['summary'])),
            
            # Content
            'content': mdx_content,
            'summary': sections['summary'],
            'body_content': sections['body_content'],
            
            # Media and assets
            'cover_image': frontmatter.get('coverImage', frontmatter.get('imageUrl', '')),
            'images': sections['images'],
            'code_blocks': sections['code_blocks'],
            'links': sections['links'],
            
            # Tags and categories
            'tags': frontmatter.get('tags', []),
            'categories': frontmatter.get('category', []),
            
            # Dates
            'published_date': frontmatter.get('published', ''),
            'last_updated': frontmatter.get('lastUpdated', ''),
            'created_at': datetime.fromtimestamp(stat.st_ctime).isoformat(),
            'updated_at': datetime.fromtimestamp(stat.st_mtime).isoformat(),
            
            # Author and organization
            'author': frontmatter.get('author', ''),
            'organiser': frontmatter.get('organiser', ''),
            'provider': frontmatter.get('provider', ''),
            
            # Location and locale
            'country': frontmatter.get('country', []),
            'locale': frontmatter.get('locale', []),
            'wilayah': frontmatter.get('wilayah', []),
            
            # Business specific fields
            'price': frontmatter.get('price', ''),
            'cost': frontmatter.get('cost', []),
            'whatsapp_url': frontmatter.get('whatsappUrl', ''),
            'verify': frontmatter.get('verify', ''),
            'review': frontmatter.get('review', ''),
            
            # Project specific fields
            'client': frontmatter.get('client', ''),
            'client_industry': frontmatter.get('clientIndustry', ''),
            'project_duration': frontmatter.get('projectDuration', ''),
            'team_size': frontmatter.get('teamSize', ''),
            'technologies': frontmatter.get('technologies', []),
            'challenges': frontmatter.get('challenges', ''),
            'solutions': frontmatter.get('solutions', ''),
            'results': frontmatter.get('results', ''),
            
            # Metrics
            'before_metrics': frontmatter.get('beforeMetrics', {}),
            'after_metrics': frontmatter.get('afterMetrics', {}),
            'roi_percentage': frontmatter.get('roiPercentage', ''),
            
            # Testimonials
            'client_testimonial': frontmatter.get('clientTestimonial', ''),
            'client_name': frontmatter.get('clientName', ''),
            'client_position': frontmatter.get('clientPosition', ''),
            
            # Images
            'before_image': frontmatter.get('beforeImage', ''),
            'after_image': frontmatter.get('afterImage', ''),
            'additional_images': frontmatter.get('additionalImages', []),
            
            # URL and external links
            'url': frontmatter.get('url', ''),
            'external_url': frontmatter.get('externalUrl', ''),
            
            # Additional metadata
            'language': frontmatter.get('language', 'id'),
            'featured': frontmatter.get('featured', False),
            'pinned': frontmatter.get('pinned', False),
            'draft': frontmatter.get('draft', False),
            
            # Custom fields (store any additional frontmatter)
            'custom_fields': {k: v for k, v in frontmatter.items() 
                            if k not in ['title', 'description', 'tags', 'category', 'published', 
                                       'lastUpdated', 'slug', 'coverImage', 'imageUrl', 'author', 
                                       'organiser', 'provider', 'country', 'locale', 'wilayah', 
                                       'price', 'cost', 'whatsappUrl', 'verify', 'review', 'client', 
                                       'clientIndustry', 'projectDuration', 'teamSize', 'technologies', 
                                       'challenges', 'solutions', 'results', 'beforeMetrics', 
                                       'afterMetrics', 'roiPercentage', 'clientTestimonial', 
                                       'clientName', 'clientPosition', 'beforeImage', 'afterImage', 
                                       'additionalImages', 'url', 'externalUrl', 'language', 
                                       'featured', 'pinned', 'draft']}
        }
        
        return directus_record
        
    except Exception as e:
        print(f"Error processing file {mdx_file}: {e}")
        return None

def convert_all_mdx_to_directus(output_file: str = 'directus_content.json') -> List[Dict[str, Any]]:
    """
    Convert all MDX files to Directus format.
    
    Args:
        output_file: Output JSON file name
        
    Returns:
        List of Directus records
    """
    print('🚀 Starting MDX to Directus conversion...')
    
    # Find all MDX files
    base_path = Path('.')
    mdx_files = list(base_path.rglob('*.mdx'))
    
    if not mdx_files:
        print('❌ No MDX files found in the current directory')
        return []
    
    print(f'📁 Found {len(mdx_files)} MDX files')
    
    # Convert each file
    directus_records = []
    successful_conversions = 0
    
    for mdx_file in mdx_files:
        print(f'🔄 Processing: {mdx_file.name}')
        record = convert_mdx_to_directus_format(mdx_file)
        if record:
            directus_records.append(record)
            successful_conversions += 1
    
    # Write to JSON file
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(directus_records, f, indent=2, ensure_ascii=False)
    
    print(f'✅ Successfully converted {successful_conversions} MDX files to {output_file}')
    print(f'📊 Summary:')
    print(f'   - Total files processed: {len(mdx_files)}')
    print(f'   - Successful conversions: {successful_conversions}')
    print(f'   - Failed conversions: {len(mdx_files) - successful_conversions}')
    
    # Show content type breakdown
    content_types = {}
    for record in directus_records:
        content_type = record.get('content_type', 'unknown')
        content_types[content_type] = content_types.get(content_type, 0) + 1
    
    print(f'📂 Content type breakdown:')
    for content_type, count in content_types.items():
        print(f'   - {content_type}: {count} files')
    
    return directus_records

def create_directus_collection_schema() -> Dict[str, Any]:
    """
    Create Directus collection schema for the content.
    
    Returns:
        Dictionary with Directus collection schema
    """
    schema = {
        "collection": "content",
        "meta": {
            "icon": "article",
            "note": "Content imported from MDX files",
            "display_template": "{{title}}",
            "sort": 1
        },
        "schema": {
            "name": "content",
            "comment": "Content imported from MDX files"
        },
        "fields": [
            {
                "field": "id",
                "type": "uuid",
                "meta": {
                    "hidden": True,
                    "readonly": True,
                    "interface": "input"
                },
                "schema": {
                    "is_primary_key": True,
                    "has_auto_increment": False
                }
            },
            {
                "field": "status",
                "type": "string",
                "meta": {
                    "interface": "select-dropdown",
                    "options": {
                        "choices": [
                            {"text": "Published", "value": "published"},
                            {"text": "Draft", "value": "draft"},
                            {"text": "Archived", "value": "archived"}
                        ]
                    }
                },
                "schema": {
                    "default_value": "published",
                    "is_nullable": False
                }
            },
            {
                "field": "title",
                "type": "string",
                "meta": {
                    "interface": "input",
                    "required": True
                },
                "schema": {
                    "is_nullable": False
                }
            },
            {
                "field": "subtitle",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "description",
                "type": "text",
                "meta": {
                    "interface": "input-multiline"
                }
            },
            {
                "field": "slug",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "content",
                "type": "text",
                "meta": {
                    "interface": "input-code",
                    "options": {
                        "language": "markdown"
                    }
                }
            },
            {
                "field": "content_type",
                "type": "string",
                "meta": {
                    "interface": "select-dropdown",
                    "options": {
                        "choices": [
                            {"text": "Posts", "value": "posts"},
                            {"text": "Services", "value": "services"},
                            {"text": "Projects", "value": "projects"},
                            {"text": "Products", "value": "products"},
                            {"text": "Stays", "value": "stays"}
                        ]
                    }
                }
            },
            {
                "field": "tags",
                "type": "json",
                "meta": {
                    "interface": "tags"
                }
            },
            {
                "field": "cover_image",
                "type": "string",
                "meta": {
                    "interface": "input"
                }
            },
            {
                "field": "published_date",
                "type": "date",
                "meta": {
                    "interface": "datetime"
                }
            },
            {
                "field": "created_at",
                "type": "timestamp",
                "meta": {
                    "interface": "datetime",
                    "readonly": True
                }
            },
            {
                "field": "updated_at",
                "type": "timestamp",
                "meta": {
                    "interface": "datetime",
                    "readonly": True
                }
            }
        ]
    }
    
    return schema

def main():
    """Main function to run the converter."""
    try:
        # Convert MDX files to Directus format
        records = convert_all_mdx_to_directus()
        
        if records:
            # Create schema file
            schema = create_directus_collection_schema()
            with open('directus_schema.json', 'w', encoding='utf-8') as f:
                json.dump(schema, f, indent=2, ensure_ascii=False)
            
            print('\n🎉 Conversion completed successfully!')
            print('📄 Files created:')
            print('   - directus_content.json (content data)')
            print('   - directus_schema.json (collection schema)')
            print('\n📋 Next steps:')
            print('   1. Import directus_schema.json to create the collection')
            print('   2. Import directus_content.json to populate the data')
        else:
            print('\n❌ No files were converted.')
            
    except Exception as e:
        print(f'❌ Error during conversion: {e}')
        return 1
    
    return 0

if __name__ == '__main__':
    exit(main())
