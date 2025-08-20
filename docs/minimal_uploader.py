#!/usr/bin/env python3
"""
Minimal Directus Uploader
Upload only essential fields that work without UUID conflicts.
"""

import json
import requests
import time

def minimal_upload():
    """Upload with minimal fields to avoid UUID errors."""
    
    # Configuration
    base_url = "http://localhost:8055"
    email = "admin@example.com"
    password = "d1r3ctu5"
    
    print("🚀 Minimal Directus Uploader")
    print("=" * 40)
    
    # Authenticate
    try:
        auth_url = f"{base_url}/auth/login"
        auth_data = {"email": email, "password": password}
        
        response = requests.post(auth_url, json=auth_data)
        response.raise_for_status()
        
        auth_response = response.json()
        access_token = auth_response['data']['access_token']
        
        print("✅ Authenticated successfully")
        
    except Exception as e:
        print(f"❌ Authentication failed: {e}")
        return
    
    # Load data
    try:
        with open('directus_content.json', 'r', encoding='utf-8') as f:
            content_data = json.load(f)
        
        print(f"📄 Loaded {len(content_data)} items")
        
    except Exception as e:
        print(f"❌ Failed to load data: {e}")
        return
    
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
            # Only include fields that definitely work (no UUID fields)
            upload_item = {
                "title": item.get('title', ''),
                "slug": item.get('slug', ''),
                "status": "published",
                "type": "blog"
            }
            
            # Add content and summary if they exist
            if item.get('content') and item['content'].strip():
                upload_item["content"] = item['content']
            
            if item.get('summary') and item['summary'].strip():
                upload_item["summary"] = item['summary']
            
            # Add wp_cat (string field)
            if item.get('content_type') and item['content_type'].strip():
                upload_item["wp_cat"] = item['content_type']
            
            print(f"📤 Uploading {i}/{total_items}: {upload_item.get('title', 'Untitled')[:40]}...")
            
            # Upload to posts collection
            url = f"{base_url}/items/posts"
            response = requests.post(url, json=upload_item, headers=headers)
            
            if response.status_code == 200:
                success_count += 1
                print(f"✅ Uploaded successfully")
            else:
                print(f"❌ Failed: {response.text}")
            
            # Add delay between uploads
            if i < total_items:
                print("⏳ Waiting 2 seconds...")
                time.sleep(2)
            
        except Exception as e:
            print(f"❌ Error uploading item {i}: {e}")
    
    print(f"\n📊 Upload completed: {success_count}/{total_items} items uploaded successfully")

if __name__ == '__main__':
    minimal_upload()
