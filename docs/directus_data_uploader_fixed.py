#!/usr/bin/env python3
"""
Directus Data Uploader - Fixed Version
Upload content data to existing Directus collection with proper field mapping.
"""

import json
import requests
import os
from typing import Dict, Any, Optional, List

class DirectusDataUploaderFixed:
    def __init__(self, base_url: str, email: str, password: str):
        """
        Initialize Directus data uploader.
        
        Args:
            base_url: Directus base URL (e.g., http://localhost:8055)
            email: Admin email
            password: Admin password
        """
        self.base_url = base_url.rstrip('/')
        self.email = email
        self.password = password
        self.access_token = None
        self.refresh_token = None
        
    def authenticate(self) -> bool:
        """
        Authenticate with Directus.
        
        Returns:
            True if authentication successful
        """
        try:
            auth_url = f"{self.base_url}/auth/login"
            auth_data = {
                "email": self.email,
                "password": self.password
            }
            
            response = requests.post(auth_url, json=auth_data)
            response.raise_for_status()
            
            auth_response = response.json()
            self.access_token = auth_response['data']['access_token']
            self.refresh_token = auth_response['data']['refresh_token']
            
            print(f"✅ Authenticated successfully with Directus at {self.base_url}")
            return True
            
        except Exception as e:
            print(f"❌ Authentication failed: {e}")
            return False
    
    def get_headers(self) -> Dict[str, str]:
        """Get headers with authentication token."""
        return {
            'Authorization': f'Bearer {self.access_token}',
            'Content-Type': 'application/json'
        }
    
    def transform_data_for_posts(self, original_data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """
        Transform the original data to match the posts collection structure.
        
        Args:
            original_data: Original data from MDX conversion
            
        Returns:
            Transformed data for posts collection
        """
        transformed_data = []
        
        for item in original_data:
            # Only include fields that exist in the posts collection
            transformed_item = {
                # Required fields
                "title": item.get('title', ''),
                "slug": item.get('slug', ''),
                "status": item.get('status', 'published'),
                
                # Optional fields that exist in posts collection
                "author": item.get('author', ''),
                "category": item.get('content_type', ''),
                "content": item.get('content', ''),
                "summary": item.get('summary', ''),
                
                # Project-specific fields (if available)
                "client": item.get('client', ''),
                "cost": item.get('cost', []),
                
                # Remove id field - let Directus auto-generate
                # Remove other fields that don't exist in posts collection
            }
            
            # Clean up empty values
            cleaned_item = {}
            for key, value in transformed_item.items():
                if value is not None and value != '':
                    cleaned_item[key] = value
            
            transformed_data.append(cleaned_item)
        
        return transformed_data
    
    def upload_items(self, collection_name: str, items: List[Dict[str, Any]]) -> bool:
        """
        Upload items to a collection.
        
        Args:
            collection_name: Name of the collection
            items: List of items to upload
            
        Returns:
            True if all items uploaded successfully
        """
        try:
            url = f"{self.base_url}/items/{collection_name}"
            
            # Upload items one by one to handle errors better
            success_count = 0
            total_items = len(items)
            
            for i, item in enumerate(items, 1):
                try:
                    print(f"📤 Uploading item {i}/{total_items}: {item.get('title', 'Untitled')[:50]}...")
                    
                    response = requests.post(url, json=item, headers=self.get_headers())
                    response.raise_for_status()
                    
                    success_count += 1
                    print(f"✅ Item {i} uploaded successfully")
                    
                except requests.exceptions.HTTPError as e:
                    print(f"❌ Failed to upload item {i}: {e}")
                    if e.response.status_code == 400:
                        print(f"Response: {e.response.text}")
                except Exception as e:
                    print(f"❌ Error uploading item {i}: {e}")
            
            print(f"📊 Upload summary: {success_count}/{total_items} items uploaded successfully")
            return success_count > 0
            
        except Exception as e:
            print(f"❌ Error in upload process: {e}")
            return False
    
    def upload_data(self, data_file: str = 'directus_content.json') -> bool:
        """
        Upload content data to Directus posts collection.
        
        Args:
            data_file: Path to content JSON file
            
        Returns:
            True if data uploaded successfully
        """
        try:
            # Load data file
            with open(data_file, 'r', encoding='utf-8') as f:
                content_data = json.load(f)
            
            print(f"📄 Loading content data from {data_file}")
            print(f"📊 Found {len(content_data)} items to process")
            
            # Authenticate
            if not self.authenticate():
                return False
            
            # Transform data for posts collection
            print("🔄 Transforming data for posts collection...")
            transformed_data = self.transform_data_for_posts(content_data)
            print(f"✅ Transformed {len(transformed_data)} items")
            
            # Upload items to 'posts' collection
            success = self.upload_items('posts', transformed_data)
            
            if success:
                print(f"🎉 Content data uploaded successfully to Directus posts collection!")
                return True
            else:
                print(f"❌ Failed to upload content data")
                return False
            
        except FileNotFoundError:
            print(f"❌ Data file '{data_file}' not found")
            return False
        except json.JSONDecodeError as e:
            print(f"❌ Invalid JSON in data file: {e}")
            return False
        except Exception as e:
            print(f"❌ Error uploading data: {e}")
            return False

def main():
    """Main function to run the data uploader."""
    print("🚀 Directus Data Uploader - Fixed Version")
    print("Upload to existing posts collection")
    print("=" * 50)
    
    # Get Directus configuration
    base_url = input("Enter Directus base URL (e.g., http://localhost:8055): ").strip()
    email = input("Enter admin email: ").strip()
    password = input("Enter admin password: ").strip()
    
    if not base_url or not email or not password:
        print("❌ All fields are required")
        return 1
    
    # Create uploader instance
    uploader = DirectusDataUploaderFixed(base_url, email, password)
    
    # Upload data
    success = uploader.upload_data()
    
    if success:
        print("\n🎉 Data upload completed successfully!")
        print("📋 Next steps:")
        print("   1. Check your Directus admin panel")
        print("   2. Verify the posts collection data")
        print("   3. Test your API endpoints")
        return 0
    else:
        print("\n❌ Data upload failed")
        return 1

if __name__ == '__main__':
    exit(main())
