#!/usr/bin/env python3
"""
Simple Directus Uploader
Upload only the fields that exist in the posts collection.
"""

import json
import requests
from typing import Dict, Any, List

def upload_to_directus(base_url: str, email: str, password: str, data_file: str = 'directus_content.json'):
    """
    Simple upload function that only includes existing fields.
    """
    print("🚀 Simple Directus Uploader")
    print("=" * 40)
    
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
    
    # Load data
    try:
        with open(data_file, 'r', encoding='utf-8') as f:
            content_data = json.load(f)
        print(f"📄 Loaded {len(content_data)} items from {data_file}")
    except Exception as e:
        print(f"❌ Failed to load data file: {e}")
        return False
    
    # Prepare headers
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    
    # Upload items one by one
    success_count = 0
    total_items = len(content_data)
    
    for i, item in enumerate(content_data, 1):
        try:
            # Only include fields that exist in posts collection
            upload_item = {
                "title": item.get('title', ''),
                "slug": item.get('slug', ''),
                "status": item.get('status', 'published'),
                "author": item.get('author', ''),
                "category": item.get('content_type', ''),
                "content": item.get('content', ''),
                "summary": item.get('summary', '')
            }
            
            # Remove empty values
            upload_item = {k: v for k, v in upload_item.items() if v is not None and v != ''}
            
            # Upload to posts collection
            url = f"{base_url.rstrip('/')}/items/posts"
            response = requests.post(url, json=upload_item, headers=headers)
            response.raise_for_status()
            
            success_count += 1
            print(f"✅ Uploaded {i}/{total_items}: {upload_item.get('title', 'Untitled')[:30]}...")
            
        except requests.exceptions.HTTPError as e:
            print(f"❌ Failed to upload item {i}: {e}")
            if e.response.status_code == 400:
                print(f"Response: {e.response.text}")
        except Exception as e:
            print(f"❌ Error uploading item {i}: {e}")
    
    print(f"\n📊 Upload completed: {success_count}/{total_items} items uploaded successfully")
    return success_count > 0

def main():
    """Main function."""
    # Get configuration
    base_url = input("Enter Directus base URL (e.g., http://localhost:8055): ").strip()
    email = input("Enter admin email: ").strip()
    password = input("Enter admin password: ").strip()
    
    if not all([base_url, email, password]):
        print("❌ All fields are required")
        return 1
    
    # Upload data
    success = upload_to_directus(base_url, email, password)
    
    if success:
        print("\n🎉 Upload completed successfully!")
        return 0
    else:
        print("\n❌ Upload failed")
        return 1

if __name__ == '__main__':
    exit(main())
