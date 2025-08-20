#!/usr/bin/env python3
"""
Directus Data Uploader
Upload content data to Directus instance via API.
"""

import json
import requests
import os
from typing import Dict, Any, Optional, List

class DirectusDataUploader:
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
            
            # Prepare items data
            items_payload = items
            
            response = requests.post(url, json=items_payload, headers=self.get_headers())
            response.raise_for_status()
            
            uploaded_count = len(response.json()['data'])
            print(f"✅ Successfully uploaded {uploaded_count} items to collection '{collection_name}'")
            return True
            
        except requests.exceptions.HTTPError as e:
            print(f"❌ Failed to upload items to collection '{collection_name}': {e}")
            if e.response.status_code == 400:
                print(f"Response: {e.response.text}")
            return False
        except Exception as e:
            print(f"❌ Error uploading items: {e}")
            return False
    
    def upload_data(self, data_file: str = 'directus_content.json') -> bool:
        """
        Upload content data to Directus.
        
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
            print(f"📊 Found {len(content_data)} items to upload")
            
            # Authenticate
            if not self.authenticate():
                return False
            
            # Upload items to 'content' collection
            success = self.upload_items('content', content_data)
            
            if success:
                print(f"🎉 Content data uploaded successfully to Directus!")
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
    print("🚀 Directus Data Uploader")
    print("=" * 40)
    
    # Get Directus configuration
    base_url = input("Enter Directus base URL (e.g., http://localhost:8055): ").strip()
    email = input("Enter admin email: ").strip()
    password = input("Enter admin password: ").strip()
    
    if not base_url or not email or not password:
        print("❌ All fields are required")
        return 1
    
    # Create uploader instance
    uploader = DirectusDataUploader(base_url, email, password)
    
    # Upload data
    success = uploader.upload_data()
    
    if success:
        print("\n🎉 Data upload completed successfully!")
        print("📋 Next steps:")
        print("   1. Check your Directus admin panel")
        print("   2. Verify the content is imported correctly")
        print("   3. Test your API endpoints")
        return 0
    else:
        print("\n❌ Data upload failed")
        return 1

if __name__ == '__main__':
    exit(main())
