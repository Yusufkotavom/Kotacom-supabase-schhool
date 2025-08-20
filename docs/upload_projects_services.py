#!/usr/bin/env python3
"""
Upload Projects and Services
Convert and upload projects and services MDX files to separate Directus collections.
"""

import json
import requests
import time
import os
from pathlib import Path
from typing import Dict, Any, List

# Import our MDX converter functions
from mdx_to_directus_converter import extract_frontmatter, extract_content_sections

def convert_mdx_to_collection_format(mdx_file: Path, collection_type: str) -> Dict[str, Any]:
    """
    Convert a single MDX file to collection format.
    
    Args:
        mdx_file: Path to MDX file
        collection_type: 'projects' or 'services'
        
    Returns:
        Dictionary in collection format
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
        
        # Base record
        record = {
            'status': 'published',
            'title': frontmatter.get('title', sections['title']),
            'slug': frontmatter.get('slug', mdx_file.stem),
            'content': mdx_content,
            'summary': sections['summary'],
            'featured': frontmatter.get('featured', False)
        }
        
        # Add collection-specific fields
        if collection_type == 'projects':
            record.update({
                'client': frontmatter.get('client', ''),
                'client_industry': frontmatter.get('clientIndustry', ''),
                'project_duration': frontmatter.get('projectDuration', ''),
                'team_size': frontmatter.get('teamSize', ''),
                'technologies': frontmatter.get('technologies', []),
                'challenges': frontmatter.get('challenges', ''),
                'solutions': frontmatter.get('solutions', ''),
                'results': frontmatter.get('results', ''),
                'before_metrics': frontmatter.get('beforeMetrics', {}),
                'after_metrics': frontmatter.get('afterMetrics', {}),
                'roi_percentage': frontmatter.get('roiPercentage', ''),
                'client_testimonial': frontmatter.get('clientTestimonial', ''),
                'client_name': frontmatter.get('clientName', ''),
                'client_position': frontmatter.get('clientPosition', ''),
                'before_image': frontmatter.get('beforeImage', ''),
                'after_image': frontmatter.get('afterImage', ''),
                'additional_images': frontmatter.get('additionalImages', []),
                'url': frontmatter.get('url', ''),
                'external_url': frontmatter.get('externalUrl', '')
            })
        elif collection_type == 'services':
            record.update({
                'price': frontmatter.get('price', ''),
                'cost': frontmatter.get('cost', []),
                'whatsapp_url': frontmatter.get('whatsappUrl', ''),
                'verify': frontmatter.get('verify', ''),
                'review': frontmatter.get('review', ''),
                'cover_image': frontmatter.get('coverImage', frontmatter.get('imageUrl', '')),
                'images': sections['images']
            })
        
        # Clean up empty values
        cleaned_record = {}
        for key, value in record.items():
            if value is not None and value != '' and value != [] and value != {}:
                cleaned_record[key] = value
        
        return cleaned_record
        
    except Exception as e:
        print(f"Error processing file {mdx_file}: {e}")
        return None

def upload_to_directus(base_url: str, email: str, password: str):
    """
    Upload projects and services to Directus.
    """
    print("🚀 Upload Projects and Services to Directus")
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
    
    # Process Projects
    print("\n📁 Processing Projects...")
    projects_path = Path('projects')
    if projects_path.exists():
        project_files = list(projects_path.glob('*.mdx'))
        print(f"Found {len(project_files)} project files")
        
        projects_uploaded = 0
        for i, mdx_file in enumerate(project_files, 1):
            try:
                print(f"📤 Converting project {i}/{len(project_files)}: {mdx_file.name}")
                
                # Convert MDX to projects format
                project_data = convert_mdx_to_collection_format(mdx_file, 'projects')
                if not project_data:
                    continue
                
                # Upload to projects collection
                url = f"{base_url.rstrip('/')}/items/projects"
                response = requests.post(url, json=project_data, headers=headers)
                
                if response.status_code == 200:
                    projects_uploaded += 1
                    print(f"✅ Project uploaded: {project_data.get('title', 'Untitled')[:40]}...")
                else:
                    print(f"❌ Failed to upload project: {response.text}")
                
                # Add delay
                if i < len(project_files):
                    print("⏳ Waiting 2 seconds...")
                    time.sleep(2)
                    
            except Exception as e:
                print(f"❌ Error uploading project {mdx_file.name}: {e}")
        
        print(f"📊 Projects uploaded: {projects_uploaded}/{len(project_files)}")
    else:
        print("❌ Projects folder not found")
    
    # Process Services
    print("\n📁 Processing Services...")
    services_path = Path('services')
    if services_path.exists():
        service_files = list(services_path.glob('*.mdx'))
        print(f"Found {len(service_files)} service files")
        
        services_uploaded = 0
        for i, mdx_file in enumerate(service_files, 1):
            try:
                print(f"📤 Converting service {i}/{len(service_files)}: {mdx_file.name}")
                
                # Convert MDX to services format
                service_data = convert_mdx_to_collection_format(mdx_file, 'services')
                if not service_data:
                    continue
                
                # Upload to services collection
                url = f"{base_url.rstrip('/')}/items/services"
                response = requests.post(url, json=service_data, headers=headers)
                
                if response.status_code == 200:
                    services_uploaded += 1
                    print(f"✅ Service uploaded: {service_data.get('title', 'Untitled')[:40]}...")
                else:
                    print(f"❌ Failed to upload service: {response.text}")
                
                # Add delay
                if i < len(service_files):
                    print("⏳ Waiting 2 seconds...")
                    time.sleep(2)
                    
            except Exception as e:
                print(f"❌ Error uploading service {mdx_file.name}: {e}")
        
        print(f"📊 Services uploaded: {services_uploaded}/{len(service_files)}")
    else:
        print("❌ Services folder not found")
    
    return True

def main():
    """Main function."""
    # Configuration
    base_url = "http://localhost:8055"
    email = "admin@example.com"
    password = "d1r3ctu5"
    
    print("🚀 Projects and Services Uploader")
    print("=" * 50)
    
    # First create schema files
    print("🏗️ Creating schema files...")
    os.system('python create_projects_services_schema.py')
    
    # Upload data
    success = upload_to_directus(base_url, email, password)
    
    if success:
        print("\n🎉 Upload completed successfully!")
        print("📋 Next steps:")
        print("   1. Check your Directus admin panel")
        print("   2. Verify projects and services collections")
        print("   3. Test your API endpoints")
        return 0
    else:
        print("\n❌ Upload failed")
        return 1

if __name__ == '__main__':
    exit(main())
