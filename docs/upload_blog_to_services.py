#!/usr/bin/env python3
"""
Upload Blog Posts to Services Collection
Upload all blog posts from posts folder to services collection in Directus.
"""

import json
import requests
import time
import os
from pathlib import Path
from typing import Dict, Any, List

# Import our MDX converter functions
from mdx_to_directus_converter import extract_frontmatter, extract_content_sections

def convert_blog_to_service_format(mdx_file: Path) -> Dict[str, Any]:
    """
    Convert a blog MDX file to services format.
    
    Args:
        mdx_file: Path to MDX file
        
    Returns:
        Dictionary in services format
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
        
        # Convert to services format
        record = {
            'status': 'published',
            'title': frontmatter.get('title', sections['title']),
            'slug': frontmatter.get('slug', mdx_file.stem),
            'content': mdx_content,
            'summary': sections['summary'],
            'featured': frontmatter.get('featured', False),
            'price': frontmatter.get('price', ''),
            'cost': frontmatter.get('cost', []),
            'whatsapp_url': frontmatter.get('whatsappUrl', ''),
            'verify': frontmatter.get('verify', ''),
            'review': frontmatter.get('review', ''),
            'cover_image': frontmatter.get('coverImage', frontmatter.get('imageUrl', '')),
            'images': sections['images']
        }
        
        # Clean up empty values
        cleaned_record = {}
        for key, value in record.items():
            if value is not None and value != '' and value != [] and value != {}:
                cleaned_record[key] = value
        
        return cleaned_record
        
    except Exception as e:
        print(f"Error processing file {mdx_file}: {e}")
        return None

def upload_blog_to_services(base_url: str, email: str, password: str):
    """
    Upload blog posts to services collection.
    """
    print("🚀 Upload Blog Posts to Services Collection")
    print("=" * 50)
    
    # Authenticate
    try:
        auth_url = f"{base_url.rstrip('/')}/auth/login"
        auth_data = {"email": email, "password": password}
        
        response = requests.post(auth_url, json=auth_data)
        response.raise_for_status()
        
        auth_response = response.json()
        access_token = auth_response['data']['access_token']
        
        print("✅ Authenticated successfully")
        
    except Exception as e:
        print(f"❌ Authentication failed: {e}")
        return False
    
    # Prepare headers
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    
    # Process Blog Posts
    print("\n📁 Processing Blog Posts...")
    posts_path = Path('posts')
    if posts_path.exists():
        post_files = list(posts_path.glob('*.mdx'))
        print(f"Found {len(post_files)} blog post files")
        
        posts_uploaded = 0
        for i, mdx_file in enumerate(post_files, 1):
            try:
                print(f"📤 Converting blog post {i}/{len(post_files)}: {mdx_file.name}")
                
                # Convert MDX to services format
                service_data = convert_blog_to_service_format(mdx_file)
                if not service_data:
                    continue
                
                # Upload to services collection
                url = f"{base_url.rstrip('/')}/items/services"
                response = requests.post(url, json=service_data, headers=headers)
                
                if response.status_code == 200:
                    posts_uploaded += 1
                    print(f"✅ Blog post uploaded as service: {service_data.get('title', 'Untitled')[:40]}...")
                else:
                    print(f"❌ Failed to upload blog post: {response.text}")
                
                # Add delay
                if i < len(post_files):
                    print("⏳ Waiting 2 seconds...")
                    time.sleep(2)
                    
            except Exception as e:
                print(f"❌ Error uploading blog post {mdx_file.name}: {e}")
        
        print(f"📊 Blog posts uploaded to services: {posts_uploaded}/{len(post_files)}")
    else:
        print("❌ Posts folder not found")
    
    return True

def main():
    """Main function."""
    # Configuration
    base_url = "http://localhost:8055"
    email = "admin@example.com"
    password = "d1r3ctu5"
    
    print("🚀 Blog to Services Uploader")
    print("=" * 50)
    
    # Upload blog posts to services
    success = upload_blog_to_services(base_url, email, password)
    
    if success:
        print("\n🎉 Blog posts uploaded to services successfully!")
        print("📋 Next steps:")
        print("   1. Check your Directus admin panel")
        print("   2. Verify services collection has all blog posts")
        print("   3. Test your API endpoints")
        return 0
    else:
        print("\n❌ Upload failed")
        return 1

if __name__ == '__main__':
    exit(main())
